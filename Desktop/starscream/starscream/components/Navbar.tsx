'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, Phone } from 'lucide-react'
// Theme toggle removed - keeping dark theme only

const navItems = [
  { label: 'Product', href: '#products' },
  { label: 'What is BCI?', href: '#how-it-works' },
  { label: 'Equilibrium Psychology', href: '#how-it-works' },
  { label: 'Mental Health for All', href: '#use-cases' },
  { label: 'Starscream', href: '/starscream' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('/')) {
      // External route
      window.location.href = href
    } else {
      // Internal anchor link
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'h-14 glass-panel-strong shadow-lg shadow-electric-cyan/10' 
            : 'h-18 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full neural-pulse"></div>
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                Sentient Biotech
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-cyan to-violet-accent group-hover:w-full transition-all duration-300"
                    initial={false}
                    whileHover={{ width: '100%' }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 glass-panel rounded-lg hover:bg-glass-white-strong transition-colors duration-200"
                aria-label="Contact us"
              >
                <Mail className="w-5 h-5 text-electric-cyan" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 glass-panel rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-deep-indigo/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed top-20 left-4 right-4 glass-panel-strong rounded-2xl p-6 z-50 md:hidden"
            >
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-lg font-medium text-white hover:text-electric-cyan transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-glass-white-strong">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary mb-4"
                  >
                    Get Early Access
                  </motion.button>
                  <div className="flex space-x-4">
                    <motion.a
                      href="mailto:jasmeetsngh19@gmail.com"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 glass-panel rounded-lg py-3 hover:bg-glass-white-strong transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5 text-electric-cyan" />
                      <span className="text-sm font-medium">Email</span>
                    </motion.a>
                    <motion.a
                      href="tel:+917070360676"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 glass-panel rounded-lg py-3 hover:bg-glass-white-strong transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 text-electric-cyan" />
                      <span className="text-sm font-medium">Call</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
