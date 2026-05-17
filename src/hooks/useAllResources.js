import { useEffect, useRef, useState } from 'react'
import { AZURE_RESOURCES } from '../data/resources.js'
import { RESOURCE_CHUNK_LOADERS } from '../data/resourceChunks.js'

const _handCraftedTypes = new Set(AZURE_RESOURCES.map((r) => r.type))

// Singleton promise so multiple hook instances share one fetch.
let _chunksPromise = null
let _cachedAutoResources = null

function loadAllChunks() {
  if (_chunksPromise) return _chunksPromise
  _chunksPromise = Promise.all(RESOURCE_CHUNK_LOADERS.map((fn) => fn())).then((modules) => {
    _cachedAutoResources = modules
      .flatMap((m) => m.default ?? [])
      .filter((r) => !_handCraftedTypes.has(r.type))
    return _cachedAutoResources
  })
  return _chunksPromise
}

export function useAllResources() {
  const [autoResources, setAutoResources] = useState(() => _cachedAutoResources ?? [])
  const [loading, setLoading] = useState(_cachedAutoResources === null)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    if (_cachedAutoResources !== null) {
      setAutoResources(_cachedAutoResources)
      setLoading(false)
      return
    }
    loadAllChunks().then((resources) => {
      if (mounted.current) {
        setAutoResources(resources)
        setLoading(false)
      }
    })
    return () => {
      mounted.current = false
    }
  }, [])

  return {
    resources: [...AZURE_RESOURCES, ...autoResources],
    loading,
  }
}
