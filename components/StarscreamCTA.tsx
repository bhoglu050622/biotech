'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function StarscreamCTA() {
  const handleContact = () => {
    // Open contact modal or scroll to contact section
    console.log('Contact clicked')
  }

  const handleRequestDemo = () => {
    // Open demo request modal
    console.log('Demo requested')
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(0, 230, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 70% 80%, rgba(170, 100, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 30% 20%, rgba(0, 230, 255, 0.15) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Animated grid pattern */}
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
              strokeDasharray: ["0,100", "100,0", "0,100"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Ready for</span>
              <br />
              <span className="text-primary-white">Next-Gen Combat?</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Join the elite pilots who have already upgraded to Starscream. 
              Experience the future of aerial combat today.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-light-blue rounded-full neural-pulse"></div>
                <span className="text-white/80">Military-grade security clearance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-accent rounded-full neural-pulse"></div>
                <span className="text-white/80">24/7 technical support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-soft-teal rounded-full neural-pulse"></div>
                <span className="text-white/80">Custom configuration options</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRequestDemo}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Contact Sales</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-3xl p-8 neural-glow"
          >
            <h3 className="text-2xl font-bold text-primary-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-light-blue/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-electric-cyan" />
                </div>
                <div>
                  <div className="text-primary-white font-medium">Email</div>
                  <div className="text-white/60">sales@starscream.tech</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-violet-accent/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-violet-accent" />
                </div>
                <div>
                  <div className="text-primary-white font-medium">Phone</div>
                  <div className="text-white/60">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-soft-teal/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-soft-teal" />
                </div>
                <div>
                  <div className="text-primary-white font-medium">Headquarters</div>
                  <div className="text-white/60">Silicon Valley, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-sm text-white/60">
                <div className="mb-2">Available 24/7 for military operations</div>
                <div>Confidentiality guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
