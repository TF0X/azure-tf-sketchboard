import { useCallback, useState } from 'react'
import { ReactFlowProvider } from '@xyflow/react'
import { Palette } from './components/Palette.jsx'
import { Canvas } from './components/Canvas.jsx'
import { PropertiesPanel } from './components/PropertiesPanel.jsx'
import { TerraformOutput } from './components/TerraformOutput.jsx'
import { useStore } from './store.js'

const validateNodes = (nodes) => {
  if (nodes.length === 0) {
    return 'Add at least one resource to the canvas before generating Terraform.'
  }
  const namesByType = new Map()
  for (const node of nodes) {
    const name = String(node.data.properties.name ?? '').trim()
    if (!name) {
      return `Resource "${node.data.resourceType}" is missing a name.`
    }
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
  const nodes = useStore((state) => state.nodes)
  const generate = useStore((state) => state.generateTerraformFiles)
  const clearCanvas = useStore((state) => state.clearCanvas)

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

  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-screen w-screen bg-canvas text-textMain">
        <header className="flex items-center justify-between h-14 px-5 bg-panelDark border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h1 className="text-lg font-semibold tracking-tight">Azure TF Sketchboard</h1>
          </div>
          <div className="flex items-center gap-2">
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
          <Palette />
          <Canvas />
          <PropertiesPanel />
        </main>

        {showOutput ? (
          <TerraformOutput files={generatedFiles} error={generationError} onClose={handleCloseOutput} />
        ) : null}
      </div>
    </ReactFlowProvider>
  )
}
