'use client'

import { Suspense, lazy, ComponentType } from 'react'
import { motion } from 'framer-motion'

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  rootMargin?: string
}

export default function LazyWrapper({ 
  children, 
  fallback = <div className="w-full h-64 bg-slate-800/50 rounded-xl animate-pulse" />,
  threshold = 0.1,
  rootMargin = '50px'
}: LazyWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: rootMargin }}
      >
        {children}
      </motion.div>
    </Suspense>
  )
}

// Higher-order component for lazy loading
export function withLazyLoading<P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return function LazyLoadedComponent(props: P) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }
}
