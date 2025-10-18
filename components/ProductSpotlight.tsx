'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Brain, Activity, Zap, Shield, Clock, Target } from 'lucide-react'
// import FloatingCard from './FloatingCard'
// import TextReveal from './TextReveal'

const products = [
  {
    id: 'eeg-headset',
    title: 'EEG Headset',
    subtitle: 'Monitor and optimize brain activity with non-invasive, real-time neurofeedback.',
    icon: Brain,
    features: [
      'State-of-the-art neurofeedback device',
      'Monitors and optimizes brain activity',
      'Non-invasive modalities',
      'Real-time neurofeedback',
      'Enhances mental, emotional and cognitive abilities'
    ],
    gradient: 'from-accent-light-blue to-secondary-green',
    bgGradient: 'from-accent-light-blue/10 to-secondary-green/10'
  },
  {
    id: 'smart-wrist-wearable',
    title: 'Smart Wrist Wearable',
    subtitle: 'Biofeedback with advanced sensors to track stress, sleep, and daily activity.',
    icon: Activity,
    features: [
      'Combines biofeedback with advanced sensors',
      'Tracks physical and mental well-being',
      'Helps manage stress',
      'Improves sleep quality',
      'Monitors daily activities'
    ],
    gradient: 'from-secondary-green to-soft-teal',
    bgGradient: 'from-secondary-green/10 to-soft-teal/10'
  }
]

const featureIcons = {
  'State-of-the-art neurofeedback device': Zap,
  'Monitors and optimizes brain activity': Brain,
  'Non-invasive modalities': Shield,
  'Real-time neurofeedback': Clock,
  'Enhances mental, emotional and cognitive abilities': Target,
  'Combines biofeedback with advanced sensors': Activity,
  'Tracks physical and mental well-being': Brain,
  'Helps manage stress': Shield,
  'Improves sleep quality': Clock,
  'Monitors daily activities': Target
}

export default function ProductSpotlight() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null)

  return (
    <section id="products" className="py-20 relative">
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
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Cutting-edge neurotech solutions designed to bridge the gap between mind and body, 
            making mental health accessible for all.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            const isActive = activeProduct === product.id
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`relative glass-panel-strong rounded-2xl p-8 h-full cursor-pointer overflow-hidden ${
                    isActive ? 'neural-glow-strong' : 'neural-glow'
                  }`}
                  onClick={() => setActiveProduct(isActive ? null : product.id)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-50`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                        >
                          <IconComponent className="w-8 h-8 text-primary-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-primary-white mb-2">
                            {product.title}
                          </h3>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {product.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/40"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Features */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                          className="space-y-4"
                        >
                          <div className="border-t border-glass-white-strong pt-6">
                            <h4 className="text-lg font-semibold text-primary-white mb-4">Key Features</h4>
                            <div className="space-y-3">
                              {product.features.map((feature, featureIndex) => {
                                const FeatureIcon = featureIcons[feature as keyof typeof featureIcons] || Target
                                return (
                                  <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                                    className="flex items-center space-x-3"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-glass-white flex items-center justify-center flex-shrink-0">
                                      <FeatureIcon className="w-4 h-4 text-electric-cyan" />
                                    </div>
                                    <span className="text-white/80 text-sm">{feature}</span>
                                  </motion.div>
                                )
                              })}
                            </div>
                          </div>
                          
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full mt-6 py-3 px-6 rounded-lg bg-gradient-to-r ${product.gradient} text-primary-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg`}
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Quick Preview (when not expanded) */}
                    <AnimatePresence>
                      {!isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          {product.features.slice(0, 3).map((feature, featureIndex) => {
                            const FeatureIcon = featureIcons[feature as keyof typeof featureIcons] || Target
                            return (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                                className="flex items-center space-x-3"
                              >
                                <div className="w-6 h-6 rounded-lg bg-glass-white flex items-center justify-center flex-shrink-0">
                                  <FeatureIcon className="w-3 h-3 text-electric-cyan" />
                                </div>
                                <span className="text-white/60 text-sm">{feature}</span>
                              </motion.div>
                            )
                          })}
                          {product.features.length > 3 && (
                            <p className="text-white/40 text-sm ml-9">
                              +{product.features.length - 3} more features
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-light-blue/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Ready to experience the future of mental health technology?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Request Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
