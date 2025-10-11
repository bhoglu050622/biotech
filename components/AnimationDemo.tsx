'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Brain, Zap, Heart } from 'lucide-react'

const modes = [
  { id: 'calm', name: 'Calm', icon: Heart, color: '#6BE1C9' },
  { id: 'focus', name: 'Focus', icon: Brain, color: '#00E6FF' },
  { id: 'stress', name: 'Stress', icon: Zap, color: '#AA64FF' }
]

export default function AnimationDemo() {
  const [currentMode, setCurrentMode] = useState('calm')
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    // Check if the global API is available
    if (typeof window !== 'undefined' && (window as any).heroAnimation) {
      const api = (window as any).heroAnimation
      
      // Set initial mode
      api.setMode(currentMode)
      
      // Set initial play state
      if (!isPlaying) {
        api.pause()
      }
    }
  }, [currentMode, isPlaying])

  const handleModeChange = (modeId: string) => {
    setCurrentMode(modeId)
    if (typeof window !== 'undefined' && (window as any).heroAnimation) {
      (window as any).heroAnimation.setMode(modeId)
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (typeof window !== 'undefined' && (window as any).heroAnimation) {
      if (isPlaying) {
        (window as any).heroAnimation.pause()
      } else {
        (window as any).heroAnimation.resume()
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-50 glass-panel-strong rounded-2xl p-4 neural-glow"
    >
      <div className="text-center mb-4">
        <h3 className="text-sm font-semibold text-white mb-2">Animation Controls</h3>
        
        {/* Mode Selector */}
        <div className="flex space-x-2 mb-4">
          {modes.map((mode) => {
            const IconComponent = mode.icon
            return (
              <motion.button
                key={mode.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleModeChange(mode.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  currentMode === mode.id
                    ? 'bg-glass-white-strong'
                    : 'bg-glass-white hover:bg-glass-white-strong'
                }`}
                style={{
                  border: currentMode === mode.id ? `2px solid ${mode.color}` : '2px solid transparent'
                }}
                title={mode.name}
              >
                <IconComponent 
                  className="w-4 h-4" 
                  style={{ color: currentMode === mode.id ? mode.color : '#ffffff' }}
                />
              </motion.button>
            )
          })}
        </div>

        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayPause}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            isPlaying 
              ? 'bg-violet-accent text-white' 
              : 'bg-electric-cyan text-deep-indigo'
          }`}
          title={isPlaying ? 'Pause Animation' : 'Play Animation'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>

        {/* Current Mode Display */}
        <div className="mt-3 text-xs text-white/60">
          Mode: <span className="font-medium" style={{ color: modes.find(m => m.id === currentMode)?.color }}>
            {modes.find(m => m.id === currentMode)?.name}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-xs text-white/40 text-center">
        <div>Press Ctrl+Shift+P for performance monitor</div>
        <div>Move mouse to interact with particles</div>
      </div>
    </motion.div>
  )
}
