'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, Brain, Activity, Zap } from 'lucide-react'

interface WaveformMode {
  id: string
  label: string
  description: string
  color: string
  frequency: number
  amplitude: number
  pattern: 'sine' | 'alpha' | 'beta' | 'theta'
}

const waveformModes: WaveformMode[] = [
  {
    id: 'calm',
    label: 'Calm',
    description: 'Deep relaxation state with theta waves (4-8 Hz)',
    color: '#6BE1C9',
    frequency: 6,
    amplitude: 0.8,
    pattern: 'theta'
  },
  {
    id: 'focus',
    label: 'Focus',
    description: 'Concentrated attention with beta waves (13-30 Hz)',
    color: '#00E6FF',
    frequency: 20,
    amplitude: 1.2,
    pattern: 'beta'
  },
  {
    id: 'stress',
    label: 'Stress',
    description: 'High arousal state with irregular patterns',
    color: '#AA64FF',
    frequency: 35,
    amplitude: 1.5,
    pattern: 'beta'
  }
]

export default function LiveDemo() {
  const [activeMode, setActiveMode] = useState<WaveformMode>(waveformModes[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [energyLevel, setEnergyLevel] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  // Generate waveform data based on mode
  const generateWaveform = (mode: WaveformMode, time: number) => {
    const points = []
    const width = 400
    const height = 200
    const samples = 200

    for (let i = 0; i < samples; i++) {
      const x = (i / samples) * width
      const t = time + (i / samples) * 0.1
      
      let y = height / 2
      
      switch (mode.pattern) {
        case 'sine':
          y += Math.sin(t * mode.frequency) * mode.amplitude * 30
          break
        case 'alpha':
          y += Math.sin(t * mode.frequency) * mode.amplitude * 25 + 
               Math.sin(t * mode.frequency * 2) * mode.amplitude * 10
          break
        case 'beta':
          y += Math.sin(t * mode.frequency) * mode.amplitude * 20 + 
               Math.sin(t * mode.frequency * 1.5) * mode.amplitude * 15 +
               Math.sin(t * mode.frequency * 0.5) * mode.amplitude * 10
          break
        case 'theta':
          y += Math.sin(t * mode.frequency) * mode.amplitude * 35 + 
               Math.sin(t * mode.frequency * 0.3) * mode.amplitude * 20
          break
      }
      
      // Add some noise for realism
      y += (Math.random() - 0.5) * 5
      
      points.push({ x, y })
    }
    
    return points
  }

  // Draw waveform on canvas
  const drawWaveform = (mode: WaveformMode, time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const points = generateWaveform(mode, time)
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const y = (canvas.height / 4) * i
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }
    
    // Draw waveform
    ctx.strokeStyle = mode.color
    ctx.lineWidth = 2
    ctx.beginPath()
    
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y)
      } else {
        ctx.lineTo(point.x, point.y)
      }
    })
    
    ctx.stroke()
    
    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, `${mode.color}40`)
    gradient.addColorStop(1, `${mode.color}00`)
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.moveTo(0, canvas.height / 2)
    points.forEach(point => ctx.lineTo(point.x, point.y))
    ctx.lineTo(canvas.width, canvas.height / 2)
    ctx.closePath()
    ctx.fill()
  }

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        timeRef.current += 0.1
        drawWaveform(activeMode, timeRef.current)
        
        // Update energy level based on mode
        const baseEnergy = activeMode.amplitude * 30
        const variation = Math.sin(timeRef.current * 0.5) * 10
        setEnergyLevel(Math.max(0, Math.min(100, baseEnergy + variation)))
        
        animationRef.current = requestAnimationFrame(animate)
      }
      animate()
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, activeMode])

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = 400
      canvas.height = 200
      drawWaveform(activeMode, 0)
    }
  }, [activeMode])

  const handleModeChange = (mode: WaveformMode) => {
    setActiveMode(mode)
    timeRef.current = 0
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    timeRef.current = 0
    setEnergyLevel(0)
    drawWaveform(activeMode, 0)
  }

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Live Demo</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Experience how neurofeedback translates brainwave patterns into actionable insights. 
            Try different mental states and see the real-time visualization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="glass-panel-strong rounded-2xl p-8 neural-glow">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Brainwave Simulator
              </h3>

              {/* Mode Selection */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Simulate Mental State:</h4>
                {waveformModes.map((mode) => (
                  <motion.button
                    key={mode.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleModeChange(mode)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                      activeMode.id === mode.id
                        ? 'border-electric-cyan bg-electric-cyan/10'
                        : 'border-glass-white-strong bg-glass-white hover:bg-glass-white-strong'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: mode.color }}
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white">{mode.label}</div>
                        <div className="text-sm text-white/60">{mode.description}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex space-x-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayPause}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                    isPlaying 
                      ? 'bg-violet-accent text-white' 
                      : 'bg-electric-cyan text-deep-indigo'
                  }`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="px-6 py-3 rounded-lg glass-panel text-white hover:bg-glass-white-strong transition-colors duration-200"
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Energy Meter */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Energy Level</span>
                  <span className="text-electric-cyan font-bold">{Math.round(energyLevel)}%</span>
                </div>
                <div className="w-full h-3 bg-glass-white rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-cyan to-violet-accent rounded-full"
                    style={{ width: `${energyLevel}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="glass-panel-strong rounded-2xl p-8 neural-glow">
              <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
                Real-time Brainwave Visualization
              </h3>

              {/* Canvas */}
              <div className="relative mb-6">
                <canvas
                  ref={canvasRef}
                  className="w-full h-48 rounded-lg bg-deep-indigo/50 border border-glass-white-strong"
                />
                
                {/* Overlay indicators */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <Brain className="w-4 h-4 text-electric-cyan" />
                    <span className="text-xs text-white/60">EEG</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Activity className="w-4 h-4 text-violet-accent" />
                    <span className="text-xs text-white/60">Live</span>
                  </div>
                </div>
              </div>

              {/* Current Mode Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: activeMode.color }}
                    />
                    <span className="text-lg font-semibold text-white">
                      {activeMode.label} State
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">
                    {activeMode.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="mt-8 glass-panel rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                How Neurofeedback Works
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Our EEG headset captures your brainwave patterns in real-time. Different mental states 
                produce distinct frequency patterns that we can visualize and use to provide immediate 
                feedback. This helps you learn to recognize and control your mental states naturally.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
