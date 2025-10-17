'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Heart } from 'lucide-react'
import Link from 'next/link'

export default function CommonCTA() {
  return (
    <section id="common-cta-section" className="py-16 sm:py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-electric-cyan/10 to-violet-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="glass-panel-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 neural-glow-strong text-center"
        >
          {/* Heartbeat Animation */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-8 right-8 w-4 h-4 bg-electric-cyan rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Ready to Transform?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Discover how our cutting-edge neurotechnology can revolutionize your operations. 
              Let's discuss your specific needs and explore the possibilities together.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-2 w-full sm:w-auto"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>

              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-2 w-full sm:w-auto"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-violet-accent" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-soft-teal" />
                <span>Expert support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
