'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Zap, Shield, Brain, Target, Cpu, Wifi, Battery, Eye } from 'lucide-react'

const holographicData = [
  { label: "NEURAL LINK", value: "ACTIVE", status: "online", color: "text-electric-cyan" },
  { label: "HUD SYSTEM", value: "OPERATIONAL", status: "online", color: "text-violet-accent" },
  { label: "THREAT SCAN", value: "CLEAR", status: "online", color: "text-soft-teal" },
  { label: "AI CORE", value: "PROCESSING", status: "online", color: "text-electric-cyan" }
]

const systemMetrics = [
  { icon: Cpu, label: "Processing Power", value: "99.8%", color: "from-electric-cyan to-violet-accent" },
  { icon: Battery, label: "Power Level", value: "87%", color: "from-violet-accent to-soft-teal" },
  { icon: Wifi, label: "Signal Strength", value: "Excellent", color: "from-soft-teal to-electric-cyan" },
  { icon: Eye, label: "Visual Range", value: "360°", color: "from-electric-cyan to-violet-accent" }
]

export default function StarscreamHolographic() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [scanProgress, setScanProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setScanProgress(prev => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00E6FF" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Holographic Scan Lines */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-cyan/20 to-transparent h-2"
        />

        {/* Floating Data Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Holographic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(0, 230, 255, 0.5)",
                "0 0 40px rgba(170, 100, 255, 0.5)",
                "0 0 20px rgba(0, 230, 255, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="gradient-text">STARSCREAM</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl text-white/80 font-mono"
          >
            NEXT-GENERATION COMBAT HELMET
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-sm text-electric-cyan font-mono mt-2"
          >
            SYSTEM STATUS: ONLINE | MISSION READY
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Holographic Data Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <div className="glass-panel-strong rounded-2xl p-6 neural-glow-strong">
              <h3 className="text-xl font-bold text-white mb-6 font-mono">SYSTEM STATUS</h3>
              
              {holographicData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="mb-4 p-3 rounded-lg bg-black/20 border border-electric-cyan/30"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70 font-mono">{item.label}</span>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={`w-2 h-2 rounded-full ${item.color.includes('electric') ? 'bg-electric-cyan' : item.color.includes('violet') ? 'bg-violet-accent' : 'bg-soft-teal'}`}
                      />
                      <span className={`text-sm font-mono ${item.color}`}>{item.value}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Real-time Clock */}
              {isClient && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-6 p-4 rounded-lg bg-gradient-to-r from-electric-cyan/10 to-violet-accent/10 border border-electric-cyan/30"
                >
                  <div className="text-center">
                    <div className="text-2xl font-mono text-electric-cyan">
                      {currentTime.toLocaleTimeString()}
                    </div>
                    <div className="text-sm text-white/60 font-mono">
                      {currentTime.toLocaleDateString()}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Central 3D Model with Holographic Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-1 flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Holographic Frame */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(0, 230, 255, 0.5)",
                    "0 0 60px rgba(170, 100, 255, 0.5)",
                    "0 0 30px rgba(0, 230, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative rounded-3xl overflow-hidden neural-glow-strong w-full"
                style={{
                  aspectRatio: '4/3',
                  minHeight: '300px',
                  maxHeight: '400px'
                }}
              >
                {/* Scan Line Effect */}
                <motion.div
                  animate={{
                    y: [0, 400, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-cyan/30 to-transparent h-1 z-20"
                />

                {/* 3D Model */}
                <div className="sketchfab-embed-wrapper w-full h-full">
                  <iframe 
                    title="Fighter Jet Pilot Helmet (F-35) - FREE" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/41d2f8eb435f4075a3b9d1c50eca1ba7/embed?ui_theme=dark&ui_controls=1&ui_infos=0&ui_inspector=0&ui_watermark=0&ui_stop=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&autostart=1&preload=1"
                    className="w-full h-full"
                  />
                </div>

                {/* Holographic Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 w-8 h-8 border border-electric-cyan/50 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-4 left-4 w-6 h-6 border border-violet-accent/50 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating Holographic Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-panel-strong rounded-xl p-3 neural-glow"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" />
                  <span className="text-xs text-white font-mono">HUD ACTIVE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* System Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-1 order-3 lg:order-3"
          >
            <div className="glass-panel-strong rounded-2xl p-6 neural-glow-strong">
              <h3 className="text-xl font-bold text-white mb-6 font-mono">PERFORMANCE METRICS</h3>
              
              {systemMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="mb-4 p-4 rounded-lg bg-gradient-to-r from-black/20 to-black/10 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center`}>
                        <metric.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white/80 font-mono">{metric.label}</span>
                    </div>
                    <span className="text-lg font-bold text-electric-cyan font-mono">{metric.value}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 80 + 20}%` }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Scan Progress */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mt-6 p-4 rounded-lg bg-gradient-to-r from-violet-accent/10 to-soft-teal/10 border border-violet-accent/30"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/80 font-mono">THREAT SCAN</span>
                  <span className="text-sm text-violet-accent font-mono">{scanProgress}%</span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                  <motion.div
                    animate={{ width: `${scanProgress}%` }}
                    className="h-full bg-gradient-to-r from-violet-accent to-soft-teal rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Holographic Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 230, 255, 0.3)",
                "0 0 20px rgba(170, 100, 255, 0.3)",
                "0 0 10px rgba(0, 230, 255, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg text-white/60 font-mono"
          >
            ADVANCED COMBAT SYSTEMS • NEURAL INTERFACE • AI-POWERED THREAT DETECTION
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
