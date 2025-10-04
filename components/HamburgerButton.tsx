'use client'

import { motion } from 'framer-motion'

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export default function HamburgerButton({ isOpen, onClick, className = '' }: HamburgerButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-2 glass-panel rounded-lg hover:bg-glass-white-strong transition-colors duration-200 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 relative">
        {/* Top line */}
        <motion.div
          className="absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.2, 0.8, 0.2, 1]
          }}
        />
        
        {/* Middle line */}
        <motion.div
          className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: [0.2, 0.8, 0.2, 1]
          }}
        />
        
        {/* Bottom line */}
        <motion.div
          className="absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.2, 0.8, 0.2, 1]
          }}
        />
      </div>
    </motion.button>
  )
}
