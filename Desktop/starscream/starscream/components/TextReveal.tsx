'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  stagger?: boolean
}

export default function TextReveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  direction = 'up',
  className = '',
  stagger = false
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  }

  const animateTo = { x: 0, y: 0, opacity: 1 }

  if (stagger && typeof children === 'string') {
    const words = children.split(' ')
    
    return (
      <div ref={ref} className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={directionVariants[direction]}
            animate={isInView ? animateTo : directionVariants[direction]}
            transition={{
              duration,
              delay: delay + index * 0.1,
              ease: [0.2, 0.8, 0.2, 1]
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionVariants[direction]}
      animate={isInView ? animateTo : directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.8, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
