'use client'

import { motion } from 'framer-motion'
import { Play, Shield, Target, Zap, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const combatFeatures = [
  {
    title: "Real-Time Threat Detection",
    description: "AI-powered threat assessment with 360-degree situational awareness and predictive analytics.",
    icon: Target,
    color: "from-accent-light-blue to-secondary-green"
  },
  {
    title: "Neural Interface Control",
    description: "Direct brain-computer interface for instant command execution and enhanced decision making.",
    icon: Zap,
    color: "from-secondary-green to-soft-teal"
  },
  {
    title: "Advanced HUD System",
    description: "Augmented reality display with mission-critical data, navigation, and threat prioritization.",
    icon: Shield,
    color: "from-soft-teal to-accent-light-blue"
  }
]

export default function StarscreamCombat() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section id="combat" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 80% 70%, rgba(170, 100, 255, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.1) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Animated Combat Grid */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 0 300 L 1000 300"
            stroke="#00E6FF"
            strokeWidth="1"
            fill="none"
            animate={{
              strokeDasharray: ["0,1000", "1000,0", "0,1000"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M 500 0 L 500 600"
            stroke="#AA64FF"
            strokeWidth="1"
            fill="none"
            animate={{
              strokeDasharray: ["0,600", "600,0", "0,600"]
            }}
            transition={{
              duration: 6,
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
            <span className="gradient-text">Proven</span> in Combat
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Trusted by elite pilots worldwide for mission-critical operations. Real combat data from active military deployments.
          </p>
        </motion.div>

        {/* Video Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden neural-glow-strong">
            <div className="aspect-video bg-gradient-to-br from-deep-indigo via-electric-cyan/10 to-secondary-green/10 flex items-center justify-center relative">
              {/* Combat Simulation Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo to-black/50" />
              
              {/* Animated Combat Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-light-blue rounded-full"
                />
                <motion.div
                  animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-accent rounded-full"
                />
                <motion.div
                  animate={{
                    x: [0, 120, 0],
                    y: [0, -30, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-1/2 right-1/3 w-2 h-2 bg-soft-teal rounded-full"
                />
              </div>

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 neural-glow"
              >
                <Play className="w-10 h-10 text-primary-white ml-1" />
              </motion.button>

              {/* Video Overlay Content */}
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-3xl font-bold text-primary-white mb-2">Starscream in Combat</h3>
                <p className="text-white/80 mb-4">Watch real combat scenarios and mission briefings</p>
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-electric-cyan" />
                    <span>Classified Operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-violet-accent" />
                    <span>Real Combat Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Combat Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-primary-white text-center mb-12">Combat-Ready Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {combatFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0, 230, 255, 0.2)" 
                }}
                className="glass-panel-strong rounded-2xl p-8 neural-glow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-primary-white" />
                </div>
                <h4 className="text-xl font-bold text-primary-white mb-4">{feature.title}</h4>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
