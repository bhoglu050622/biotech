'use client'

import { useEffect, useState } from 'react'

export default function PerformanceMonitor() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run in production and on client
    if (process.env.NODE_ENV !== 'production' || !isClient) return

    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }
    }

    // Import and initialize web-vitals
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals)
      onINP(reportWebVitals) // INP replaced FID in newer versions
      onFCP(reportWebVitals)
      onLCP(reportWebVitals)
      onTTFB(reportWebVitals)
    })

    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'longtask') {
            console.warn('Long task detected:', entry.duration)
          }
        }
      })
      
      try {
        observer.observe({ entryTypes: ['longtask'] })
      } catch (e) {
        // Long task API not supported
      }
    }

    // Memory usage monitoring
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
          console.warn('High memory usage detected:', memory.usedJSHeapSize)
        }
      }
    }

    const memoryInterval = setInterval(checkMemory, 30000) // Check every 30 seconds

    return () => {
      clearInterval(memoryInterval)
    }
  }, [isClient])

  // Don't render anything on server
  if (!isClient) {
    return null
  }

  return null
}
