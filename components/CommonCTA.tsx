'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Heart } from 'lucide-react'
import Link from 'next/link'

export default function CommonCTA() {
  return (
    <section id="common-cta-section" className="py-16 sm:py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-saffron-orange/15 to-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-white/10 to-gray-200/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-olive-green/15 to-green-600/10 rounded-full blur-3xl" />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-saffron-orange via-white to-olive-green bg-clip-text text-transparent drop-shadow-lg">
                Ready to Transform?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              Discover how our cutting-edge neurotechnology can revolutionize your operations. 
              Let's discuss your specific needs and explore the possibilities together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 153, 51, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-saffron-orange to-orange-500 text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center space-x-3 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </Link>

              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(85, 107, 47, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-olive-green to-green-600 text-white font-semibold text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center space-x-3 w-full sm:w-auto hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base">
              <div className="flex items-center space-x-3 bg-saffron-orange/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-saffron-orange/20">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5 drop-shadow-lg" style={{background: 'linear-gradient(135deg, #FF9933 0%, #FF6B00 100%)', borderRadius: '50%', padding: '2px'}} />
                <span className="bullet-text">Free consultation</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5 drop-shadow-lg" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%)', borderRadius: '50%', padding: '2px'}} />
                <span className="bullet-text">Custom solutions</span>
              </div>
              <div className="flex items-center space-x-3 bg-olive-green/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-olive-green/20">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5 drop-shadow-lg" style={{background: 'linear-gradient(135deg, #138808 0%, #006400 100%)', borderRadius: '50%', padding: '2px'}} />
                <span className="bullet-text">Expert support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
