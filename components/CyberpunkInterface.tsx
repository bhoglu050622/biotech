'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Target, Zap, Shield, Eye, Radar, Cpu, Battery, Wifi } from 'lucide-react'

const combatData = [
  { id: 1, type: "THREAT", level: "HIGH", distance: "2.3km", bearing: "045°", status: "TRACKING" },
  { id: 2, type: "FRIENDLY", level: "LOW", distance: "5.7km", bearing: "120°", status: "IDENTIFIED" },
  { id: 3, type: "CIVILIAN", level: "MINIMAL", distance: "8.1km", bearing: "270°", status: "MONITORING" }
]

const systemStatus = [
  { name: "NEURAL LINK", status: "ONLINE", efficiency: 98, color: "text-electric-cyan" },
  { name: "HUD SYSTEM", status: "ACTIVE", efficiency: 95, color: "text-violet-accent" },
  { name: "THREAT DETECTION", status: "SCANNING", efficiency: 92, color: "text-soft-teal" },
  { name: "AI CORE", status: "PROCESSING", efficiency: 99, color: "text-electric-cyan" }
]

export default function CyberpunkInterface() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [scanProgress, setScanProgress] = useState(0)
  const [activeThreats, setActiveThreats] = useState(3)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setScanProgress(prev => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cyberGrid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#00E6FF" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyberGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Our Intelligent Helmet Mounted System [IHMS] functions as a seamless cognitive extension for the modern aviator. 
            Developed under the <span className="text-electric-cyan font-semibold">"Make in India"</span> initiative, our helmet is engineered to 
            process and display mission-critical data intuitively on the visor, monitor pilot biometrics, and reduce reaction time, 
            ensuring a decisive advantage in any operational theatre. It is not just a piece of equipment; 
            it is a <span className="text-electric-cyan font-semibold">force multiplier</span>.
          </p>
        </motion.div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-screen">
          
          {/* Left Panel - System Status */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 order-2 lg:order-1"
          >
            <div className="glass-panel-strong rounded-xl p-4 neural-glow">
              <h3 className="text-lg font-bold text-primary-white mb-4 font-mono">SYSTEM STATUS</h3>
              {systemStatus.map((system, index) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="mb-3 p-3 rounded-lg bg-black/30 border border-electric-cyan/20"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80 font-mono">{system.name}</span>
                    <span className={`text-sm font-mono ${system.color}`}>{system.status}</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${system.efficiency}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${system.color.includes('electric') ? 'from-accent-light-blue to-secondary-green' : system.color.includes('violet') ? 'from-secondary-green to-soft-teal' : 'from-soft-teal to-accent-light-blue'} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Real-time Clock */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="glass-panel-strong rounded-xl p-4 neural-glow"
              >
                <h3 className="text-lg font-bold text-primary-white mb-4 font-mono">MISSION TIME</h3>
                <div className="text-center">
                  <div className="text-3xl font-mono text-electric-cyan mb-2">
                    {currentTime.toLocaleTimeString()}
                  </div>
                  <div className="text-sm text-white/60 font-mono">
                    {currentTime.toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Center Panel - 3D Model with HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-2 flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
              {/* Holographic Frame */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(0, 230, 255, 0.6)",
                    "0 0 80px rgba(170, 100, 255, 0.6)",
                    "0 0 40px rgba(0, 230, 255, 0.6)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative rounded-3xl overflow-hidden neural-glow-strong w-full"
                style={{
                  aspectRatio: '16/9',
                  minHeight: '300px',
                  maxHeight: '500px'
                }}
              >
                {/* Scan Line Effect */}
                <motion.div
                  animate={{
                    y: [0, 500, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-cyan/40 to-transparent h-2 z-20"
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

                {/* HUD Overlay Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Crosshair */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-electric-cyan/50 rounded-full"
                  />
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-electric-cyan/70" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-electric-cyan/70" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-electric-cyan/70" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-electric-cyan/70" />
                </div>
              </motion.div>

              {/* Floating Status Indicators */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -left-6 glass-panel-strong rounded-xl p-3 neural-glow"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-light-blue rounded-full animate-pulse" />
                  <span className="text-xs text-primary-white font-mono">HUD ACTIVE</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 glass-panel-strong rounded-xl p-3 neural-glow"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full animate-pulse" />
                  <span className="text-xs text-primary-white font-mono">AI LINKED</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Threat Detection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-4 order-3 lg:order-3"
          >
            <div className="glass-panel-strong rounded-xl p-4 neural-glow">
              <h3 className="text-lg font-bold text-primary-white mb-4 font-mono">THREAT DETECTION</h3>
              <div className="space-y-3">
                {combatData.map((threat, index) => (
                  <motion.div
                    key={threat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className={`p-3 rounded-lg border ${
                      threat.type === 'THREAT' ? 'border-red-500/50 bg-red-500/10' :
                      threat.type === 'FRIENDLY' ? 'border-green-500/50 bg-green-500/10' :
                      'border-yellow-500/50 bg-yellow-500/10'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-primary-white">{threat.type}</span>
                      <span className={`text-xs font-mono ${
                        threat.type === 'THREAT' ? 'text-red-400' :
                        threat.type === 'FRIENDLY' ? 'text-green-400' :
                        'text-yellow-400'
                      }`}>{threat.level}</span>
                    </div>
                    <div className="text-xs text-white/60 font-mono">
                      {threat.distance} • {threat.bearing} • {threat.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scan Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="glass-panel-strong rounded-xl p-4 neural-glow"
            >
              <h3 className="text-lg font-bold text-primary-white mb-4 font-mono">SCAN STATUS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80 font-mono">360° SCAN</span>
                  <span className="text-sm text-electric-cyan font-mono">{scanProgress}%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    animate={{ width: `${scanProgress}%` }}
                    className="h-full bg-gradient-to-r from-accent-light-blue to-secondary-green rounded-full"
                  />
                </div>
                <div className="text-xs text-white/60 font-mono">
                  ACTIVE THREATS: {activeThreats}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
