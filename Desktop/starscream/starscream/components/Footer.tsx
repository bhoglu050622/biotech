'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Heart, ArrowUp } from 'lucide-react'

const navigationLinks = [
  { label: 'Product', href: '#products' },
  { label: 'What is BCI?', href: '#how-it-works' },
  { label: 'Equilibrium Psychology', href: '#how-it-works' },
  { label: 'Mental Health for All', href: '#use-cases' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/SentientBiotech/sentient-biotech.github.io', icon: ExternalLink },
  { label: 'Email', href: 'mailto:jasmeetsngh19@gmail.com', icon: Mail },
  { label: 'Phone', href: 'tel:+917070360676', icon: Phone }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="relative bg-deep-indigo/50 backdrop-blur-sm border-t border-glass-white-strong">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-cyan/5 to-violet-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-accent/5 to-soft-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full neural-pulse"></div>
                </div>
                <span className="text-2xl font-display font-bold gradient-text">
                  Sentient Biotech
                </span>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                Pioneering the next generation of neurotechnology to foster holistic well-being. 
                We create innovative, non-invasive neuroimaging devices that bridge the gap between 
                mind and body, making mental health accessible for all.
              </p>

              <div className="flex items-center space-x-2 text-white/60">
                <Heart className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm">Made with care for humanity's mental wellness</span>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, color: '#00E6FF' }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-white/70 hover:text-electric-cyan transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.05 }}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3 text-white/70 hover:text-electric-cyan transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center group-hover:bg-glass-white-strong transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-sm">
                        {social.label === 'Email' ? 'jasmeetsngh19@gmail.com' : 
                         social.label === 'Phone' ? '+91-7070360676' : 
                         social.label}
                      </span>
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-8 p-4 glass-panel rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-electric-cyan" />
                  <span className="text-sm font-medium text-white">Location</span>
                </div>
                <p className="text-white/60 text-sm">
                  India • Global Impact
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-glass-white-strong">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm"
            >
              © 2024 Sentient Biotech Private Limited. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-white/60 text-sm"
            >
              <span>Privacy-first technology</span>
              <span>•</span>
              <span>Non-invasive solutions</span>
              <span>•</span>
              <span>Research-backed</span>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-glass-white-strong transition-all duration-200 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:text-electric-cyan transition-colors duration-200" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center shadow-lg shadow-electric-cyan/25 z-40 md:hidden"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}
