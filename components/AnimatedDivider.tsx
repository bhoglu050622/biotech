'use client'

import { motion } from 'framer-motion'
// Theme system removed - dark theme only

interface AnimatedDividerProps {
  variant?: 'wave' | 'dots' | 'line' | 'neural'
  className?: string
}

export default function AnimatedDivider({ variant = 'wave', className = '' }: AnimatedDividerProps) {

  const variants = {
    wave: (
      <motion.svg
        className={`w-full h-16 ${className}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradientDark)"
          animate={{
            d: [
              "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
              "M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z",
              "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="waveGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E6FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#AA64FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6BE1C9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E6FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#AA64FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6BE1C9" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </motion.svg>
    ),
    
    dots: (
      <div className={`flex justify-center items-center space-x-4 py-8 ${className}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-electric-cyan to-violet-accent"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
    
    line: (
      <div className={`relative py-8 ${className}`}>
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-electric-cyan"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    ),
    
    neural: (
      <div className={`relative py-12 ${className}`}>
        <motion.svg
          className="w-full h-20"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          {[...Array(8)].map((_, i) => {
            const x = (i / 7) * 1200
            return (
              <motion.g key={i}>
                <motion.circle
                  cx={x}
                  cy="40"
                  r="3"
                  fill="#00E6FF"
                  animate={{
                    r: [2, 4, 2],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
                {i < 7 && (
                  <motion.line
                    x1={x}
                    y1="40"
                    x2={(i + 1) / 7 * 1200}
                    y2="40"
                    stroke="#00E6FF"
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{
                      opacity: [0.1, 0.5, 0.1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.g>
            )
          })}
        </motion.svg>
      </div>
    )
  }

  return variants[variant]
}
