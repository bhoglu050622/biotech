'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

const mentalStates = [
  {
    name: 'Calm',
    description: 'Deep relaxation state with theta waves (4-8 Hz)',
    frequency: '4-8 Hz',
    color: 'from-soft-teal to-electric-cyan'
  },
  {
    name: 'Focus',
    description: 'Concentrated attention with beta waves (13-30 Hz)',
    frequency: '13-30 Hz',
    color: 'from-electric-cyan to-violet-accent'
  },
  {
    name: 'Stress',
    description: 'High arousal state with irregular patterns',
    frequency: 'Irregular',
    color: 'from-red-500 to-orange-500'
  }
]

export default function LiveDemo() {
  const [selectedState, setSelectedState] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [energyLevel, setEnergyLevel] = useState(0)

  const currentState = mentalStates[selectedState]

  const startSimulation = () => {
    setIsPlaying(true)
    // Simulate energy level changes
    const interval = setInterval(() => {
      setEnergyLevel(prev => {
        const newLevel = prev + (Math.random() - 0.5) * 20
        return Math.max(0, Math.min(100, newLevel))
      })
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      setIsPlaying(false)
    }, 5000)
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setEnergyLevel(0)
  }

  return (
    <section id="live-demo" className="py-20 bg-deep-indigo/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Live Demo
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience how neurofeedback translates brainwave patterns into actionable insights. Try different mental states and see the real-time visualization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel-strong rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Brainwave Simulator</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Simulate Mental State:</h4>
                  <div className="space-y-3">
                    {mentalStates.map((state, index) => (
                      <motion.button
                        key={state.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedState(index)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                          selectedState === index
                            ? 'bg-gradient-to-r from-electric-cyan/20 to-violet-accent/20 border border-electric-cyan/50'
                            : 'glass-panel hover:bg-glass-white-strong'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-white font-medium">{state.name}</h5>
                            <p className="text-white/60 text-sm">{state.description}</p>
                          </div>
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${state.color}`}></div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Energy Level</h4>
                  <div className="relative">
                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${currentState.color} rounded-full`}
                        style={{ width: `${energyLevel}%` }}
                        animate={{ width: `${energyLevel}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-white/60 text-sm">0%</span>
                      <span className="text-white font-medium">{Math.round(energyLevel)}%</span>
                      <span className="text-white/60 text-sm">100%</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startSimulation}
                    disabled={isPlaying}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? 'Running...' : 'Play'}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetDemo}
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Reset</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel-strong rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Real-time Brainwave Visualization</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-electric-cyan rounded-full neural-pulse"></div>
                    <span className="text-white font-medium">EEG</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full neural-pulse"></div>
                    <span className="text-white/60 text-sm">Live</span>
                  </div>
                </div>

                <div className="bg-deep-indigo/50 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-2">{currentState.name} State</h4>
                  <p className="text-white/60 text-sm mb-4">{currentState.description}</p>
                  
                  {/* Brainwave Visualization */}
                  <div className="relative h-32 bg-black/20 rounded-lg overflow-hidden">
                    <motion.svg
                      className="w-full h-full"
                      viewBox="0 0 400 120"
                      fill="none"
                    >
                      <motion.path
                        d="M0 60 Q50 40 100 60 T200 60 T300 60 T400 60"
                        stroke="url(#waveGradient)"
                        strokeWidth="2"
                        fill="none"
                        animate={isPlaying ? {
                          d: [
                            "M0 60 Q50 40 100 60 T200 60 T300 60 T400 60",
                            "M0 60 Q50 80 100 60 T200 60 T300 60 T400 60",
                            "M0 60 Q50 40 100 60 T200 60 T300 60 T400 60"
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                      />
                      <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00E6FF" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#AA64FF" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#6BE1C9" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </div>
                </div>

                <div className="glass-panel rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">How Neurofeedback Works</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our EEG headset captures your brainwave patterns in real-time. Different mental states produce distinct frequency patterns that we can visualize and use to provide immediate feedback. This helps you learn to recognize and control your mental states naturally.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}