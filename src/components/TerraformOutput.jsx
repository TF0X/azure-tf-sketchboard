import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import hljs from 'highlight.js/lib/core'
import hcl from 'highlight.js/lib/languages/properties'
import JSZip from 'jszip'

hljs.registerLanguage('hcl', hcl)

const ZIP_FILENAME = 'azure-terraform.zip'

export function TerraformOutput({ files, error, onClose }) {
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const [activePath, setActivePath] = useState(() => files?.[0]?.path ?? '')

  useEffect(() => {
    if (files && files.length > 0 && !files.some((f) => f.path === activePath)) {
      setActivePath(files[0].path)
    }
  }, [files, activePath])

  const activeFile = useMemo(
    () => files?.find((file) => file.path === activePath) ?? null,
    [files, activePath]
  )

  useEffect(() => {
    if (codeRef.current && activeFile?.content) {
      codeRef.current.removeAttribute('data-highlighted')
      hljs.highlightElement(codeRef.current)
    }
  }, [activeFile])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleCopy = useCallback(async () => {
    if (!activeFile) return
    try {
      await navigator.clipboard.writeText(activeFile.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      window.alert(`Could not copy to clipboard: ${err.message}`)
    }
  }, [activeFile])

  const handleDownloadZip = useCallback(async () => {
    if (!files || files.length === 0) return
    const zip = new JSZip()
    for (const file of files) {
      zip.file(file.path, file.content)
    }
    const blob = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = ZIP_FILENAME
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [files])

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) onClose()
    },
    [onClose]
  )

  const fileTree = useMemo(() => buildFileTree(files ?? []), [files])
  const showFiles = !error && files && files.length > 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
      onClick={handleBackdropClick}
    >
      <div className="flex flex-col w-full max-w-6xl max-h-[88vh] bg-panelDark border border-border rounded-lg shadow-2xl overflow-hidden">
        <header className="flex items-center justify-between px-5 py-3 border-b border-border bg-panel">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <h2 className="text-sm font-semibold text-textMain">
              Generated Terraform — module structure
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {showFiles ? (
              <>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-transparent border border-border text-textDim hover:text-textMain hover:bg-panelDark transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy file'}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold bg-accent text-white hover:bg-accentHover transition-colors"
                >
                  Download .zip
                </button>
              </>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="ml-1 px-2 py-1 rounded-md text-textDim hover:text-textMain hover:bg-panelDark transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </header>

        {error ? (
          <div className="flex items-start gap-3 m-5 p-4 rounded-md bg-red-900/30 border border-red-800 text-red-200 text-sm">
            <span className="text-lg">⚠️</span>
            <span>{error}</span>
          </div>
        ) : (
          <div className="flex flex-1 min-h-0">
            <aside className="w-64 shrink-0 bg-panel border-r border-border overflow-y-auto py-2">
              <FileTreeView tree={fileTree} activePath={activePath} onSelect={setActivePath} />
            </aside>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="px-5 py-2 border-b border-border bg-panelDark text-xs font-mono text-textDim">
                {activeFile?.path ?? ''}
              </div>
              <div className="flex-1 overflow-auto bg-[#0d1117]">
                <pre className="m-0 text-sm font-mono leading-relaxed">
                  <code ref={codeRef} className="hcl block px-5 py-4">
                    {activeFile?.content ?? ''}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function buildFileTree(files) {
  const root = { name: '', children: new Map(), files: [] }
  for (const file of files) {
    const segments = file.path.split('/')
    let cursor = root
    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i]
      if (!cursor.children.has(segment)) {
        cursor.children.set(segment, { name: segment, children: new Map(), files: [] })
      }
      cursor = cursor.children.get(segment)
    }
    cursor.files.push({ name: segments[segments.length - 1], path: file.path })
  }
  return root
}

function FileTreeView({ tree, activePath, onSelect }) {
  return (
    <div className="text-sm">
      <FolderContents node={tree} depth={0} activePath={activePath} onSelect={onSelect} />
    </div>
  )
}

function FolderContents({ node, depth, activePath, onSelect }) {
  const folders = [...node.children.values()].sort((a, b) => a.name.localeCompare(b.name))
  const files = [...node.files].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div>
      {folders.map((folder) => (
        <div key={`folder-${folder.name}`}>
          <div
            className="flex items-center gap-1.5 px-2 py-1 text-textDim font-medium"
            style={{ paddingLeft: `${8 + depth * 12}px` }}
          >
            <span className="text-xs">📁</span>
            <span>{folder.name}</span>
          </div>
          <FolderContents node={folder} depth={depth + 1} activePath={activePath} onSelect={onSelect} />
        </div>
      ))}
      {files.map((file) => {
        const isActive = file.path === activePath
        return (
          <button
            key={file.path}
            type="button"
            onClick={() => onSelect(file.path)}
            className={`w-full flex items-center gap-1.5 px-2 py-1 text-left transition-colors ${
              isActive ? 'bg-accent/20 text-textMain' : 'text-textDim hover:text-textMain hover:bg-panelDark'
            }`}
            style={{ paddingLeft: `${8 + depth * 12}px` }}
          >
            <span className="text-xs">📄</span>
            <span className="font-mono text-xs">{file.name}</span>
          </button>
        )
      })}
    </div>
  )
}
