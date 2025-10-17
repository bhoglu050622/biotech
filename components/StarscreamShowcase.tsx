'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

export default function StarscreamShowcase() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(170, 100, 255, 0.08) 0%, transparent 70%)',
              'radial-gradient(circle at 80% 70%, rgba(0, 230, 255, 0.08) 0%, transparent 70%)',
              'radial-gradient(circle at 20% 30%, rgba(170, 100, 255, 0.08) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
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
            Trusted by elite pilots worldwide for mission-critical operations
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
          <div className="relative rounded-3xl overflow-hidden neural-glow">
            <div className="aspect-video bg-gradient-to-br from-deep-indigo to-electric-cyan/20 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold text-white mb-2">Starscream in Action</h3>
              <p className="text-white/80">Watch the helmet in real combat scenarios</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4 mx-auto"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
