'use client'

import { motion } from 'framer-motion'
import { Brain, Smartphone, Zap, Shield, Activity } from 'lucide-react'

const products = [
  {
    title: 'EEG Headset',
    description: 'Monitor and optimize brain activity with non-invasive, real-time neurofeedback.',
    icon: Brain,
    features: [
      'State-of-the-art neurofeedback device',
      'Monitors and optimizes brain activity',
      'Non-invasive modalities'
    ],
    additionalFeatures: 2
  },
  {
    title: 'Smart Wrist Wearable',
    description: 'Biofeedback with advanced sensors to track stress, sleep, and daily activity.',
    icon: Activity,
    features: [
      'Combines biofeedback with advanced sensors',
      'Tracks physical and mental well-being',
      'Helps manage stress'
    ],
    additionalFeatures: 2
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-deep-indigo/30">
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
            Our Products
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Cutting-edge neurotech solutions designed to bridge the gap between mind and body, making mental health accessible for all.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-2xl p-8 hover:bg-glass-white-strong transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-white/70">{product.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                  <div className="flex items-center space-x-3 text-white/60 text-sm">
                    <div className="w-2 h-2 bg-violet-accent rounded-full"></div>
                    <span>+{product.additionalFeatures} more features</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel-strong rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to experience the future of mental health technology?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Request Early Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
