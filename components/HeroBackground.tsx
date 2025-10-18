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
  connections: number[]
  lastConnectionTime: number
}

interface ConnectionArc {
  id: string
  startX: number
  startY: number
  endX: number
  endY: number
  progress: number
  duration: number
  opacity: number
  color: string
}

interface WaveformMode {
  id: string
  frequency: number
  amplitude: number
  color: string
  name: string
}

const waveformModes: WaveformMode[] = [
  { id: 'calm', frequency: 1.2, amplitude: 0.8, color: '#6BE1C9', name: 'Calm' },
  { id: 'focus', frequency: 3.2, amplitude: 1.2, color: '#00E6FF', name: 'Focus' },
  { id: 'stress', frequency: 5.8, amplitude: 1.5, color: '#AA64FF', name: 'Stress' }
]

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const waveformRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const connectionsRef = useRef<ConnectionArc[]>([])
  const timeRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [currentMode, setCurrentMode] = useState<WaveformMode>(waveformModes[0])
  const [isPaused, setIsPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Initialize particles
  const initializeParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const particleCount = window.innerWidth > 1024 ? 120 : 
                         window.innerWidth > 768 ? 45 : 20
    
    const particles: Particle[] = []
    const colors = ['#00E6FF', '#6BE1C9', '#AA64FF']
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.08 + 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
        connections: [],
        lastConnectionTime: 0
      })
    }
    
    particlesRef.current = particles
  }, [])

  // Generate Perlin-like noise for smooth particle movement
  const noise = (x: number, y: number, time: number) => {
    return Math.sin(x * 0.01 + time * 0.001) * Math.cos(y * 0.01 + time * 0.001)
  }

  // Update particles
  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return

    particlesRef.current.forEach((particle, index) => {
      // Add Perlin noise for smooth movement
      const noiseX = noise(particle.x, particle.y, timeRef.current) * 0.3
      const noiseY = noise(particle.y, particle.x, timeRef.current) * 0.3
      
      particle.x += (particle.vx + noiseX) * deltaTime
      particle.y += (particle.vy + noiseY) * deltaTime

      // Mouse attraction
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 150) {
        const attraction = (150 - distance) / 150 * 0.02
        particle.x += dx * attraction
        particle.y += dy * attraction
        particle.opacity = Math.min(0.15, particle.opacity + attraction * 2)
      } else {
        particle.opacity = Math.max(0.04, particle.opacity - 0.001)
      }

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      // Update connections
      particle.connections = []
      particlesRef.current.forEach((other, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) {
            particle.connections.push(otherIndex)
          }
        }
      })
    })
  }, [reducedMotion])

  // Create connection arcs
  const createConnectionArc = useCallback(() => {
    if (reducedMotion || Math.random() > 0.3) return

    const canvas = canvasRef.current
    if (!canvas) return

    const arc: ConnectionArc = {
      id: Math.random().toString(36).substr(2, 9),
      startX: Math.random() * canvas.width,
      startY: Math.random() * canvas.height,
      endX: Math.random() * canvas.width,
      endY: Math.random() * canvas.height,
      progress: 0,
      duration: 900 + Math.random() * 700,
      opacity: 0.6,
      color: '#00E6FF'
    }
    
    connectionsRef.current.push(arc)
  }, [reducedMotion])

  // Update connection arcs
  const updateConnectionArcs = useCallback((deltaTime: number) => {
    if (reducedMotion) return

    connectionsRef.current = connectionsRef.current.filter(arc => {
      arc.progress += deltaTime / arc.duration
      
      if (arc.progress > 1) {
        return false
      }
      
      return true
    })
  }, [reducedMotion])

  // Draw particles and connections
  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    particlesRef.current.forEach((particle, index) => {
      particle.connections.forEach(connectionIndex => {
        const other = particlesRef.current[connectionIndex]
        if (other) {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) {
            ctx.save()
            ctx.globalAlpha = (80 - distance) / 80 * 0.1
            ctx.strokeStyle = '#00E6FF'
            ctx.lineWidth = 0.8
            ctx.shadowBlur = 2
            ctx.shadowColor = '#00E6FF'
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      })
    })

    // Draw connection arcs
    connectionsRef.current.forEach(arc => {
      const progress = arc.progress
      const currentX = arc.startX + (arc.endX - arc.startX) * progress
      const currentY = arc.startY + (arc.endY - arc.startY) * progress
      
      ctx.save()
      ctx.globalAlpha = arc.opacity * (1 - progress)
      ctx.strokeStyle = arc.color
      ctx.lineWidth = 1.2
      ctx.shadowBlur = 4
      ctx.shadowColor = arc.color
      ctx.beginPath()
      ctx.moveTo(arc.startX, arc.startY)
      ctx.quadraticCurveTo(
        (arc.startX + arc.endX) / 2,
        (arc.startY + arc.endY) / 2 - 20,
        currentX,
        currentY
      )
      ctx.stroke()
      ctx.restore()
    })

    // Draw particles
    particlesRef.current.forEach(particle => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 3
      ctx.shadowColor = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })
  }, [])

  // Update waveform
  const updateWaveform = useCallback(() => {
    const svg = waveformRef.current
    if (!svg || reducedMotion) return

    const path = svg.querySelector('path')
    if (!path) return

    const width = svg.clientWidth
    const height = svg.clientHeight
    const samples = 200
    const time = timeRef.current * 0.001
    
    let pathData = `M 0 ${height / 2}`
    
    for (let i = 0; i <= samples; i++) {
      const x = (i / samples) * width
      const t = time + (i / samples) * 0.1
      
      let y = height / 2
      y += Math.sin(t * currentMode.frequency) * currentMode.amplitude * 30
      y += Math.sin(t * currentMode.frequency * 1.5) * currentMode.amplitude * 15
      y += Math.sin(t * currentMode.frequency * 0.5) * currentMode.amplitude * 10
      
      pathData += ` L ${x} ${y}`
    }
    
    path.setAttribute('d', pathData)
    path.setAttribute('stroke', currentMode.color)
  }, [currentMode, reducedMotion])

  // Animation loop
  const animate = useCallback((timestamp: number) => {
    if (isPaused) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    const deltaTime = 16 // Assume 60fps
    timeRef.current = timestamp

    updateParticles(deltaTime)
    updateConnectionArcs(deltaTime)
    drawParticles()
    updateWaveform()

    // Create new connection arcs occasionally
    if (Math.random() < 0.02) {
      createConnectionArc()
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [isPaused, updateParticles, updateConnectionArcs, drawParticles, updateWaveform, createConnectionArc])

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (reducedMotion) return
    
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
  }, [reducedMotion])

  // Handle device orientation (mobile)
  const handleOrientationChange = useCallback((e: DeviceOrientationEvent) => {
    if (reducedMotion || !e.gamma || !e.beta) return
    
    // Very subtle parallax effect
    const tiltX = e.gamma * 0.1
    const tiltY = e.beta * 0.1
    
    if (containerRef.current) {
      containerRef.current.style.transform = `translate(${tiltX}px, ${tiltY}px)`
    }
  }, [reducedMotion])

  // Initialize and cleanup
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initializeParticles()
    }

    resizeCanvas()
    initializeParticles()
    animate(0)

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('deviceorientation', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('deviceorientation', handleOrientationChange)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, initializeParticles, handleMouseMove, handleOrientationChange])

  // Pause/resume functionality
  const togglePause = useCallback(() => {
    setIsPaused(!isPaused)
    localStorage.setItem('hero-animation-paused', (!isPaused).toString())
  }, [isPaused])

  // Load pause state from localStorage
  useEffect(() => {
    const savedPauseState = localStorage.getItem('hero-animation-paused')
    if (savedPauseState) {
      setIsPaused(savedPauseState === 'true')
    }
  }, [])

  // Mode switching
  const switchMode = useCallback((mode: WaveformMode) => {
    setCurrentMode(mode)
  }, [])

  // Expose API for external controls
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).heroAnimation = {
        setMode: switchMode,
        pause: () => setIsPaused(true),
        resume: () => setIsPaused(false),
        toggle: togglePause
      }
    }
  }, [switchMode, togglePause])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Gradient Sky */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.1) 0%, rgba(170, 100, 255, 0.05) 50%, transparent 100%)',
            'radial-gradient(circle at 80% 70%, rgba(170, 100, 255, 0.1) 0%, rgba(0, 230, 255, 0.05) 50%, transparent 100%)',
            'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.1) 0%, rgba(170, 100, 255, 0.05) 50%, transparent 100%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />

      {/* Layer 2: Volumetric Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.06, 0.12, 0.06]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.2, 0.8, 0.2, 1]
        }}
        className="absolute inset-0 bg-gradient-radial from-secondary-green/20 via-electric-cyan/10 to-transparent blur-3xl"
      />

      {/* Layer 3: Particle Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Layer 4: Waveform Ribbon */}
      <motion.svg
        ref={waveformRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.7 }}
      >
        <defs>
          <linearGradient id="waveformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={currentMode.color} stopOpacity="0.8" />
            <stop offset="50%" stopColor={currentMode.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={currentMode.color} stopOpacity="0.8" />
          </linearGradient>
          <filter id="waveformGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 0 150 L 1000 150"
          stroke="url(#waveformGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#waveformGlow)"
        />
      </motion.svg>

      {/* Layer 5: Device Halo */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-light-blue/20 to-secondary-green/20 rounded-full blur-3xl"
      />

      {/* Layer 6: Interaction Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle parallax effect for mouse movement */}
        <motion.div
          animate={{
            x: mouseRef.current.x * 0.02,
            y: mouseRef.current.y * 0.02
          }}
          transition={{
            duration: 0.2,
            ease: [0.2, 0.8, 0.2, 1]
          }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-electric-cyan/5 to-transparent"
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-8 flex space-x-4">
        {/* Mode Selector */}
        <div className="glass-panel rounded-lg p-2 flex space-x-1">
          {waveformModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => switchMode(mode)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 ${
                currentMode.id === mode.id
                  ? 'bg-accent-light-blue text-deep-indigo'
                  : 'text-white/70 hover:text-primary-white hover:bg-glass-white-strong'
              }`}
            >
              {mode.name}
            </button>
          ))}
        </div>

        {/* Pause Toggle */}
        <button
          onClick={togglePause}
          className="glass-panel rounded-lg p-2 text-white/70 hover:text-primary-white hover:bg-glass-white-strong transition-all duration-200"
          aria-label={isPaused ? 'Resume animation' : 'Pause animation'}
        >
          {isPaused ? '▶️' : '⏸️'}
        </button>
      </div>

      {/* Reduced Motion Fallback */}
      {reducedMotion && (
        <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-electric-cyan/5 to-secondary-green/5" />
      )}
    </div>
  )
}
