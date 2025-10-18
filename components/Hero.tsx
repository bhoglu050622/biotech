'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
// import HeroBackgroundOptimized from './HeroBackgroundOptimized'
// import FloatingCard from './FloatingCard'
// import TextReveal from './TextReveal'

export default function Hero() {
  const handleGetEarlyAccess = () => {
    // Scroll to CTA section or open modal
    const ctaSection = document.querySelector('#cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSeeTheTech = () => {
    // Scroll to how it works section
    const howItWorksSection = document.querySelector('#how-it-works')
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Clinical Background with Defense Accents */}
        <div className="absolute inset-0">
          {/* Static gradient fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-electric-cyan/5 to-violet-accent/5" />
          
          {/* Simple animated gradient */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(0, 82, 204, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(85, 107, 47, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 20% 30%, rgba(0, 82, 204, 0.1) 0%, transparent 70%)'
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />
          
          {/* Defense Geometric Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border border-olive-green/20 rotate-45" />
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-military-khaki/20 rotate-12" />
          </div>
        
        {/* Simple waveform */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1000 300"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 0 150 Q 250 100 500 150 T 1000 150"
            stroke="#00E6FF"
            strokeWidth="1"
            fill="none"
            animate={{
              d: [
                "M 0 150 Q 250 100 500 150 T 1000 150",
                "M 0 150 Q 250 200 500 150 T 1000 150",
                "M 0 150 Q 250 100 500 150 T 1000 150"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                Redefining Human–Machine Synergy
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Integrating Biotechnology, Neurotechnology, and Artificial Intelligence to Enhance Human Cognition, Performance, and Safety.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 204, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetEarlyAccess}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Explore Our Innovations</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSeeTheTech}
                className="btn-defense flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                <span>See the Tech</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-blue rounded-full neural-pulse"></div>
                <span>Clinical Precision</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-olive-green rounded-full neural-pulse"></div>
                <span>Defense-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-saffron-orange rounded-full neural-pulse"></div>
                <span>Made in India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Smaller Device Render */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Device Container - Vertical Orientation */}
            <div className="relative w-full max-w-sm">
              {/* Animated EEG Headset */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotateY: [0, 3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                {/* Device Mockup */}
                <div className="relative">
                  {/* Main device body - Vertical */}
                  <div className="w-48 h-64 mx-auto glass-panel-strong rounded-xl p-6 neural-glow">
                    <div className="flex flex-col items-center space-y-4 h-full">
                      {/* Device visual representation - Vertical */}
                      <div className="w-16 h-20 bg-gradient-to-br from-primary-blue/30 to-olive-green/30 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-primary-blue rounded-full neural-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Status indicators */}
                      <div className="flex flex-col space-y-2">
                        <div className="w-2 h-2 bg-primary-blue rounded-full neural-pulse"></div>
                        <div className="w-2 h-2 bg-olive-green rounded-full neural-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-2 h-2 bg-saffron-orange rounded-full neural-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center flex-grow flex flex-col justify-center">
                        <h3 className="text-base font-semibold text-white mb-1">EEG Headset</h3>
                        <p className="text-xs text-white/60">Real-time neurofeedback</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements around device - Vertical */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-3 -right-3 w-6 h-6 border border-olive-green/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-3 -left-3 w-5 h-5 border border-military-khaki/30 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Animated waveform overlay - Smaller */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute inset-0 pointer-events-none"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M40 100 Q80 80 120 100 T200 100 T260 100"
                    stroke="url(#waveGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0052CC" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#556B2F" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FF9933" stopOpacity="0.8" />
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
        transition={{ delay: 1.5, duration: 0.8 }}
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
