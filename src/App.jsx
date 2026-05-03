import { useCallback, useState } from 'react'
import { ReactFlowProvider } from '@xyflow/react'
import { Palette } from './components/Palette.jsx'
import { Canvas } from './components/Canvas.jsx'
import { PropertiesPanel } from './components/PropertiesPanel.jsx'
import { TerraformOutput } from './components/TerraformOutput.jsx'
import { useStore } from './store.js'
import { TEMPLATES } from './data/templates.js'
import { getSchema } from './schema/schemaUtils.js'

const requiresName = (resourceType) => {
  const schema = getSchema(resourceType)
  if (!schema) return true
  return Boolean(schema.block.attributes?.name?.required)
}

const validateNodes = (nodes) => {
  if (nodes.length === 0) {
    return 'Add at least one resource to the canvas before generating Terraform.'
  }
  const namesByType = new Map()
  for (const node of nodes) {
    const name = String(node.data.properties.name ?? '').trim()
    if (!name && requiresName(node.data.resourceType)) {
      return `Resource "${node.data.resourceType}" is missing a name.`
    }
    if (!name) continue
    const key = `${node.data.resourceType}::${name}`
    if (namesByType.has(key)) {
      return `Duplicate name "${name}" for ${node.data.resourceType}. Each resource of the same type needs a unique name.`
    }
    namesByType.set(key, true)
  }
  return null
}

export default function App() {
  const [showOutput, setShowOutput] = useState(false)
  const [generatedFiles, setGeneratedFiles] = useState([])
  const [generationError, setGenerationError] = useState('')
  const [showTemplates, setShowTemplates] = useState(false)
  const [diagramMode, setDiagramMode] = useState(false)
  const nodes = useStore((state) => state.nodes)
  const generate = useStore((state) => state.generateTerraformFiles)
  const clearCanvas = useStore((state) => state.clearCanvas)
  const applyTemplate = useStore((state) => state.applyTemplate)

  const handleGenerate = useCallback(() => {
    const error = validateNodes(nodes)
    if (error) {
      setGenerationError(error)
      setGeneratedFiles([])
      setShowOutput(true)
      return
    }
    setGenerationError('')
    try {
      setGeneratedFiles(generate())
    } catch (err) {
      setGenerationError(err instanceof Error ? err.message : 'Failed to generate Terraform.')
      setGeneratedFiles([])
    }
    setShowOutput(true)
  }, [nodes, generate])

  const handleClear = useCallback(() => {
    if (nodes.length === 0) return
    const confirmed = window.confirm('Clear all nodes and edges from the canvas?')
    if (confirmed) clearCanvas()
  }, [nodes.length, clearCanvas])

  const handleCloseOutput = useCallback(() => setShowOutput(false), [])

  const handleApplyTemplate = useCallback(
    (template) => {
      const proceed =
        nodes.length === 0 ||
        window.confirm(`Replace the current canvas with the "${template.label}" template?`)
      if (!proceed) return
      applyTemplate(template)
      setShowTemplates(false)
    },
    [nodes.length, applyTemplate]
  )

  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-screen w-screen bg-canvas text-textMain">
        <header className="flex items-center justify-between h-14 px-5 bg-panelDark border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h1 className="text-lg font-semibold tracking-tight">Azure TF Sketchboard</h1>
          </div>
          <div className="flex items-center gap-2 relative">
            <button
              type="button"
              onClick={() => setDiagramMode((v) => !v)}
              title="Toggle Diagram Mode (hides side panels for clean screenshots)"
              className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                diagramMode
                  ? 'bg-accent/20 border-accent/50 text-accent'
                  : 'bg-transparent border-border text-textDim hover:text-textMain hover:bg-panel'
              }`}
            >
              {diagramMode ? '◧ Diagram Mode' : '◧ Diagram Mode'}
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTemplates((v) => !v)}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-transparent border border-border text-textDim hover:text-textMain hover:bg-panel transition-colors"
              >
                Templates ▾
              </button>
              {showTemplates ? (
                <div className="absolute right-0 top-full mt-1 w-80 z-30 rounded-md bg-panelDark border border-border shadow-2xl overflow-hidden">
                  <div className="px-3 py-2 text-[10px] uppercase font-semibold tracking-wider text-textDim border-b border-border">
                    Apply preset architecture
                  </div>
                  {TEMPLATES.map((tpl) => (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => handleApplyTemplate(tpl)}
                      className="w-full text-left px-3 py-2.5 hover:bg-panel transition-colors border-b border-border last:border-b-0"
                    >
                      <div className="text-sm font-medium text-textMain">{tpl.label}</div>
                      <div className="text-xs text-textDim mt-1 leading-snug">{tpl.description}</div>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <button
              type="button"
              onClick={handleClear}
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-transparent border border-border text-textDim hover:text-textMain hover:bg-panel transition-colors"
            >
              Clear Canvas
            </button>
            <button
              type="button"
              onClick={handleGenerate}
              className="px-4 py-1.5 rounded-md text-sm font-semibold bg-accent text-white hover:bg-accentHover transition-colors"
            >
              Generate Terraform
            </button>
          </div>
        </header>

        <main className="flex flex-1 min-h-0">
          {diagramMode ? null : <Palette />}
          <Canvas />
          {diagramMode ? null : <PropertiesPanel />}
        </main>

        {showOutput ? (
          <TerraformOutput files={generatedFiles} error={generationError} onClose={handleCloseOutput} />
        ) : null}
      </div>
    </ReactFlowProvider>
  )
}
