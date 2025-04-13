'use client'

import { useState, useEffect, type ReactNode } from 'react'

interface ClientProviderProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ClientProvider({ 
  children, 
  fallback = null 
}: ClientProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
} 