'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, ArrowRight, CheckCircle, X, Heart } from 'lucide-react'

interface FormData {
  name: string
  email: string
  interest: string
  message: string
}

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsModalOpen(false)
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: ''
      })
    }, 3000)
  }

  const handleContactSales = () => {
    window.location.href = 'mailto:jasmeetsngh19@gmail.com?subject=Sales Inquiry - Sentient Biotech'
  }

  return (
    <>
      <section id="cta-section" className="py-20 relative">
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
            className="glass-panel-strong rounded-3xl p-12 neural-glow-strong text-center"
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Join Early Access</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Help shape the future of accessible mental health. Be among the first to experience 
                our revolutionary neurotechnology and contribute to making mental wellness available for all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
                >
                  <span>Request Early Access</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactSales}
                  className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Sales</span>
                </motion.button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-violet-accent" />
                  <span>Early adopter pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-soft-teal" />
                  <span>Direct feedback channel</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-deep-indigo/80 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4 glass-panel-strong rounded-3xl p-8 z-50 neural-glow-strong"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-white">
                  Request Early Access
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full glass-panel flex items-center justify-center hover:bg-glass-white-strong transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass-panel rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-cyan/50 transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass-panel rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-cyan/50 transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-white mb-2">
                        Primary Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-panel rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-cyan/50 transition-all duration-200"
                      >
                        <option value="">Select your primary interest</option>
                        <option value="eeg-headset">EEG Headset</option>
                        <option value="smart-wearable">Smart Wrist Wearable</option>
                        <option value="stress-management">Stress Management</option>
                        <option value="sleep-improvement">Sleep Improvement</option>
                        <option value="cognitive-training">Cognitive Training</option>
                        <option value="research">Research Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 glass-panel rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-cyan/50 transition-all duration-200 resize-none"
                        placeholder="Tell us more about your interest or any questions you have..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-glass-white text-white/50 cursor-not-allowed'
                          : 'btn-primary'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit Request'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>

                    <h4 className="text-2xl font-display font-bold text-white mb-4">
                      Thank You!
                    </h4>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      We've received your early access request. Our team will review your application 
                      and get back to you within 2-3 business days with next steps.
                    </p>

                    <div className="flex items-center justify-center space-x-2 text-electric-cyan">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">Welcome to the future of mental health!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
