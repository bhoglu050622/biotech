'use client'

import { useEffect, useRef, useState } from 'react'

interface PerformanceStats {
  fps: number
  frameTime: number
  isLowPower: boolean
}

export default function PerformanceMonitor() {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 60,
    frameTime: 16.67,
    isLowPower: false
  })
  const [isVisible, setIsVisible] = useState(false)
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const animationRef = useRef<number>()

  useEffect(() => {
    const measurePerformance = () => {
      const now = performance.now()
      const deltaTime = now - lastTimeRef.current
      
      frameCountRef.current++
      
      if (deltaTime >= 1000) { // Update every second
        const fps = Math.round((frameCountRef.current * 1000) / deltaTime)
        const frameTime = deltaTime / frameCountRef.current
        
        setStats({
          fps,
          frameTime,
          isLowPower: fps < 30 || frameTime > 33.33
        })
        
        frameCountRef.current = 0
        lastTimeRef.current = now
      }
      
      animationRef.current = requestAnimationFrame(measurePerformance)
    }
    
    animationRef.current = requestAnimationFrame(measurePerformance)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 glass-panel rounded-lg p-3 text-xs font-mono">
      <div className="text-white/80 mb-1">Performance Monitor</div>
      <div className={`${stats.fps >= 50 ? 'text-electric-cyan' : stats.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
        FPS: {stats.fps}
      </div>
      <div className={`${stats.frameTime <= 20 ? 'text-electric-cyan' : stats.frameTime <= 33 ? 'text-yellow-400' : 'text-red-400'}`}>
        Frame: {stats.frameTime.toFixed(1)}ms
      </div>
      {stats.isLowPower && (
        <div className="text-red-400 mt-1">⚠️ Low Power Mode</div>
      )}
      <div className="text-white/40 mt-2 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}
