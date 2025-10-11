'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, Phone, ChevronDown } from 'lucide-react'
// Theme toggle removed - keeping dark theme only

const navItems = [
  { 
    label: 'Home', 
    href: '/' 
  },
  { 
    label: 'About Us', 
    href: '/about',
    dropdown: [
      { label: 'About Sentient Biotech', href: '/about' },
      { label: 'Mission & Vision', href: '/mission-vision' }
    ]
  },
  { 
    label: 'Technologies', 
    href: '/technologies',
    dropdown: [
      { label: 'Neurotech Systems', href: '/technologies#neurotech-systems' },
      { label: 'Pilot Wearable Solutions', href: '/technologies#pilot-wearable' },
      { label: 'AI-driven Biometric Monitoring', href: '/technologies#ai-biometric' },
      { label: 'Human-machine Interface (HMI)', href: '/technologies#hmi' }
    ]
  },
  { 
    label: 'Products', 
    href: '#products',
    dropdown: [
      { label: 'Electroencephalogram (EEG) Solutions', href: '/eeg-solutions' },
      { label: 'Next-Generation Pilot Headgear', href: '/starscream' }
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    dropdown: [
      { label: 'Defense & Aerospace', href: '/solutions#defense-aerospace' },
      { label: 'Healthcare', href: '/solutions#healthcare' },
      { label: 'Research & Academia', href: '/solutions#research-academia' },
      { label: 'Simulation & Training', href: '/solutions#simulation-training' }
    ]
  },
  { 
    label: 'Investors', 
    href: '/investors' 
  },
  { 
    label: 'News & Insights', 
    href: '#news',
    dropdown: [
      { label: 'Latest News', href: '/news' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQs', href: '/faqs' }
    ]
  },
  { 
    label: 'Careers', 
    href: '/careers' 
  },
  { 
    label: 'Contact Us', 
    href: '/contact' 
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
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
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    onClick={() => !item.dropdown && handleNavClick(item.href)}
                    className="flex items-center space-x-1 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-cyan to-violet-accent group-hover:w-full transition-all duration-300"
                      initial={false}
                      whileHover={{ width: '100%' }}
                    />
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 glass-panel-strong rounded-xl shadow-lg shadow-electric-cyan/10 border border-glass-white-strong overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <motion.button
                                key={dropdownItem.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropdownIndex * 0.05 }}
                                onClick={() => handleNavClick(dropdownItem.href)}
                                className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-glass-white-strong transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
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
                  <div key={item.label}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => {
                        if (item.dropdown) {
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        } else {
                          handleNavClick(item.href)
                        }
                      }}
                      className="flex items-center justify-between w-full text-left text-lg font-medium text-white hover:text-electric-cyan transition-colors duration-200 py-2"
                    >
                      <span>{item.label}</span>
                      {item.dropdown && (
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </motion.button>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2 mt-2">
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <motion.button
                                  key={dropdownItem.label}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: dropdownIndex * 0.05 }}
                                  onClick={() => handleNavClick(dropdownItem.href)}
                                  className="block w-full text-left text-base text-white/80 hover:text-electric-cyan transition-colors duration-200 py-2"
                                >
                                  {dropdownItem.label}
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-glass-white-strong">
                  <div className="flex space-x-4">
                    <motion.a
                      href="mailto:jasmeet@sentientbiotech.in"
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
