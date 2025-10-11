'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Brain } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function StarscreamHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleGetEarlyAccess = () => {
    const ctaSection = document.querySelector('#cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSeeTheTech = () => {
    const howItWorksSection = document.querySelector('#how-it-works')
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Advanced Background Animation System */}
      <div className="absolute inset-0">
        {/* Static gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-electric-cyan/5 to-violet-accent/5" />
        
        {/* Animated gradient layers */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 80% 70%, rgba(170, 100, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.15) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Neural network pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 0 300 Q 250 200 500 300 T 1000 300"
            stroke="#00E6FF"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 0 300 Q 250 200 500 300 T 1000 300",
                "M 0 300 Q 250 400 500 300 T 1000 300",
                "M 0 300 Q 250 200 500 300 T 1000 300"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 0 200 Q 200 150 400 200 T 800 200 T 1000 200"
            stroke="#AA64FF"
            strokeWidth="1.5"
            fill="none"
            animate={{
              d: [
                "M 0 200 Q 200 150 400 200 T 800 200 T 1000 200",
                "M 0 200 Q 200 250 400 200 T 800 200 T 1000 200",
                "M 0 200 Q 200 150 400 200 T 800 200 T 1000 200"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.svg>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              <span className="gradient-text text-balance">
                Starscream
              </span>
              <br />
              <span className="text-white">
                Next-Gen Flight Helmet
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Revolutionary pilot helmet with integrated HUD, neural interface, and advanced threat detection systems for the modern fighter pilot.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetEarlyAccess}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSeeTheTech}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                <span>See the Tech</span>
              </motion.button>
            </motion.div>

            {/* Feature Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-electric-cyan neural-pulse" />
                <span>Neural Interface</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-violet-accent neural-pulse" />
                <span>Advanced HUD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-soft-teal neural-pulse" />
                <span>AI-Powered</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Helmet Model */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end w-full overflow-hidden"
          >
              {/* Enhanced 3D Model Container */}
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
              {/* 3D Model with Enhanced Effects */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 8, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 rounded-3xl overflow-hidden neural-glow-strong w-full"
                style={{
                  aspectRatio: '4/3',
                  minHeight: '400px',
                  maxHeight: '500px'
                }}
              >
                {/* Holographic Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-electric-cyan/50 rounded-full"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-4 left-4 w-12 h-12 border-2 border-violet-accent/50 rounded-full"
                  />
                </div>

                {/* Sketchfab 3D Model */}
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

                {/* Interactive HUD Elements */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute top-8 left-8 glass-panel-strong rounded-xl p-3 neural-glow"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-electric-cyan rounded-full neural-pulse-enhanced"></div>
                      <span className="text-sm text-white font-medium">HUD Active</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute top-8 right-8 glass-panel-strong rounded-xl p-3 neural-glow"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-violet-accent rounded-full neural-pulse-enhanced"></div>
                      <span className="text-sm text-white font-medium">Neural Link</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="absolute bottom-8 left-8 glass-panel-strong rounded-xl p-3 neural-glow"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-soft-teal rounded-full neural-pulse-enhanced"></div>
                      <span className="text-sm text-white font-medium">AI Powered</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating UI Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -top-4 -right-4 glass-panel-strong rounded-lg p-3 neural-glow"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full neural-pulse"></div>
                  <span className="text-xs text-white font-medium">HUD Active</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute -bottom-4 -left-4 glass-panel-strong rounded-lg p-3 neural-glow"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full neural-pulse"></div>
                  <span className="text-xs text-white font-medium">Neural Link</span>
                </div>
              </motion.div>

              {/* Animated waveform overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute inset-0 pointer-events-none"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 800 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M50 225 Q150 175 250 225 T450 225 T650 225 T750 225"
                    stroke="url(#waveGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M50 275 Q150 325 250 275 T450 275 T650 275 T750 275"
                    stroke="url(#waveGradient2)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00E6FF" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#AA64FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#6BE1C9" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#AA64FF" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#6BE1C9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00E6FF" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-electric-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

