'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface NavItem {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

interface MobileMenuProps {
  navItems: NavItem[]
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ navItems, isOpen, onClose }: MobileMenuProps) {
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleNavClick = (href: string) => {
    onClose()
    setActiveDropdown(null)
    if (href.startsWith('/')) {
      router.push(href)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 bg-deep-indigo/90 backdrop-blur-md z-40"
            onClick={onClose}
          />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.2, 0.8, 0.2, 1],
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="fixed top-[72px] left-0 right-0 bottom-0 z-50 md:hidden"
            >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-4 glass-panel-strong border-b border-glass-white-strong">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full neural-pulse"></div>
                </div>
                <span className="text-lg font-display font-bold gradient-text">
                  Sentient Biotech
                </span>
              </div>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 glass-panel rounded-lg hover:bg-glass-white-strong transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <div className="glass-panel-strong h-full overflow-y-auto">
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.05, 
                      duration: 0.3,
                      ease: [0.2, 0.8, 0.2, 1]
                    }}
                    className="border-b border-glass-white-strong/20 last:border-b-0"
                  >
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (item.dropdown) {
                          toggleDropdown(item.label)
                        } else {
                          handleNavClick(item.href)
                        }
                      }}
                      className="flex items-center justify-between w-full text-left py-4 px-2 text-lg font-medium text-white hover:text-electric-cyan transition-colors duration-200 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                      {item.dropdown && (
                        <motion.div
                          animate={{ 
                            rotate: activeDropdown === item.label ? 180 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      )}
                    </motion.button>
                    
                    {/* Dropdown Items */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ 
                            duration: 0.3,
                            ease: [0.2, 0.8, 0.2, 1]
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <motion.button
                                key={dropdownItem.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: dropdownIndex * 0.05,
                                  duration: 0.2
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleNavClick(dropdownItem.href)}
                                className="block w-full text-left py-2 px-3 text-base text-white/80 hover:text-electric-cyan hover:bg-glass-white-strong/10 rounded-lg transition-all duration-200 group"
                              >
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {dropdownItem.label}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Contact Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="p-4 border-t border-glass-white-strong/20"
              >
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href="mailto:jasmeet@sentientbiotech.in"
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 glass-panel rounded-lg py-3 hover:bg-glass-white-strong transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 text-electric-cyan group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Email Us</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+917070360676"
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 glass-panel rounded-lg py-3 hover:bg-glass-white-strong transition-colors duration-200 group"
                  >
                    <Phone className="w-5 h-5 text-electric-cyan group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Call Us</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
