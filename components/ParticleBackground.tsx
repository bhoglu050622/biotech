'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const [isVisible, setIsVisible] = useState(false)
  const lastFrameTime = useRef(0)
  const frameInterval = 1000 / 30 // 30 FPS max

  // Intersection Observer to pause animation when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const particles: Particle[] = []
    // Reduced particle count for better performance
    const particleCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 25000))
    
    const colors = ['#00E6FF', '#AA64FF', '#6BE1C9']
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    particlesRef.current = particles
  }, [])

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    particlesRef.current.forEach(particle => {
      particle.x += particle.vx
      particle.y += particle.vy

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0
    })
  }, [])

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Use batch rendering for better performance
    particlesRef.current.forEach(particle => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })

    // Reduced connection drawing for better performance
    const maxConnections = 5
    let connectionCount = 0
    
    particlesRef.current.forEach((particle, i) => {
      if (connectionCount >= maxConnections) return
      
      particlesRef.current.slice(i + 1).forEach(otherParticle => {
        if (connectionCount >= maxConnections) return
        
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 80) { // Reduced connection distance
          ctx.save()
          ctx.globalAlpha = (80 - distance) / 80 * 0.05 // Lower opacity
          ctx.strokeStyle = '#00E6FF'
          ctx.lineWidth = 0.3
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
          ctx.restore()
          connectionCount++
        }
      })
    })
  }, [])

  const animate = useCallback((currentTime: number) => {
    if (!isVisible) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    if (currentTime - lastFrameTime.current >= frameInterval) {
      updateParticles()
      drawParticles()
      lastFrameTime.current = currentTime
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [isVisible, updateParticles, drawParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
    }

    resizeCanvas()
    createParticles()
    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, createParticles])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-0"
      suppressHydrationWarning
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Simplified gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo/30 via-transparent to-deep-indigo/20" />
    </motion.div>
  )
}
