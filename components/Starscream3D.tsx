'use client'

import { motion } from 'framer-motion'
import { RotateCcw, ZoomIn, Move3D, Eye, Settings, Layers } from 'lucide-react'
import { useState } from 'react'

const interactiveFeatures = [
  {
    icon: RotateCcw,
    title: "360° Rotation",
    description: "Fully interactive 3D model with smooth rotation controls",
    color: "from-electric-cyan to-violet-accent"
  },
  {
    icon: ZoomIn,
    title: "Zoom & Pan",
    description: "Detailed inspection with zoom and pan capabilities",
    color: "from-violet-accent to-soft-teal"
  },
  {
    icon: Move3D,
    title: "3D Navigation",
    description: "Intuitive 3D navigation with gesture controls",
    color: "from-soft-teal to-electric-cyan"
  }
]

const helmetSpecs = [
  { label: "Weight", value: "2.3 kg", icon: "⚖️" },
  { label: "Material", value: "Carbon Fiber", icon: "🔬" },
  { label: "Protection", value: "Level IV", icon: "🛡️" },
  { label: "Battery Life", value: "12+ hours", icon: "🔋" },
  { label: "Connectivity", value: "5G/WiFi", icon: "📡" },
  { label: "Sensors", value: "12x Array", icon: "📊" }
]

export default function Starscream3D() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isModelLoaded, setIsModelLoaded] = useState(false)

  return (
    <section id="interactive-3d" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(0, 230, 255, 0.08) 0%, transparent 70%)',
              'radial-gradient(circle at 70% 80%, rgba(170, 100, 255, 0.08) 0%, transparent 70%)',
              'radial-gradient(circle at 30% 20%, rgba(0, 230, 255, 0.08) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* 3D Grid Pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
            stroke="#00E6FF"
            strokeWidth="0.5"
            fill="none"
            animate={{
              strokeDasharray: ["0,400", "400,0", "0,400"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
            stroke="#AA64FF"
            strokeWidth="0.3"
            fill="none"
            animate={{
              strokeDasharray: ["0,320", "320,0", "0,320"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Interactive</span> 3D Experience
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore the Starscream helmet in full 3D. Rotate, zoom, and inspect every detail of this revolutionary pilot helmet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Enhanced 3D Model Container */}
            <div className="relative w-full">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 10, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 rounded-3xl overflow-hidden neural-glow-strong w-full"
                style={{
                  aspectRatio: '4/3',
                  minHeight: '400px',
                  maxHeight: '600px'
                }}
              >
                {/* Loading State */}
                {!isModelLoaded && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-deep-indigo to-electric-cyan/20 flex items-center justify-center z-20"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-electric-cyan/30 border-t-electric-cyan rounded-full mx-auto mb-4"
                      />
                      <p className="text-white/80">Loading 3D Model...</p>
                    </div>
                  </motion.div>
                )}

                {/* Sketchfab 3D Model */}
                <div className="sketchfab-embed-wrapper w-full h-full">
                  <iframe 
                    title="Fighter Jet Pilot Helmet (F-35) - FREE" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/41d2f8eb435f4075a3b9d1c50eca1ba7/embed?ui_theme=dark&ui_controls=1&ui_infos=1&ui_inspector=1&ui_watermark=0&ui_stop=0&ui_help=0&ui_settings=1&ui_vr=1&ui_fullscreen=1&ui_annotations=1&autostart=1&preload=1"
                    className="w-full h-full"
                    onLoad={() => setIsModelLoaded(true)}
                  />
                </div>

                {/* Interactive Overlay Elements */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute top-4 left-4 glass-panel-strong rounded-xl p-3 neural-glow"
                  >
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-electric-cyan" />
                      <span className="text-sm text-white font-medium">3D Active</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute top-4 right-4 glass-panel-strong rounded-xl p-3 neural-glow"
                  >
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-violet-accent" />
                      <span className="text-sm text-white font-medium">Interactive</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-4 left-4 glass-panel-strong rounded-xl p-3 neural-glow"
                  >
                    <div className="flex items-center space-x-2">
                      <Layers className="w-4 h-4 text-soft-teal" />
                      <span className="text-sm text-white font-medium">HD Quality</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating 3D Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 border border-electric-cyan/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-8 h-8 border border-violet-accent/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Column - Interactive Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 w-full lg:pl-8"
          >
            {/* Interactive Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Interactive Features</h3>
              <div className="space-y-4">
                {interactiveFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 30px rgba(0, 230, 255, 0.1)" 
                    }}
                    onClick={() => setActiveFeature(index)}
                    className={`glass-panel-strong rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      activeFeature === index ? 'neural-glow-strong' : 'neural-glow'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-white/70 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {helmetSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-panel rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl mb-2">{spec.icon}</div>
                    <div className="text-lg font-semibold text-white mb-1">{spec.value}</div>
                    <div className="text-sm text-white/60">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3D Controls */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">3D Controls</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between glass-panel rounded-xl p-4">
                  <span className="text-white">Mouse/Touch Controls</span>
                  <span className="text-electric-cyan text-sm">Active</span>
                </div>
                <div className="flex items-center justify-between glass-panel rounded-xl p-4">
                  <span className="text-white">Auto-rotate</span>
                  <span className="text-violet-accent text-sm">Enabled</span>
                </div>
                <div className="flex items-center justify-between glass-panel rounded-xl p-4">
                  <span className="text-white">Quality</span>
                  <span className="text-soft-teal text-sm">4K</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
