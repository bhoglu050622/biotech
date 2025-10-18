'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ target, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const increment = target / (duration * 60) // 60fps
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment
          if (next >= target) {
            clearInterval(timer)
            return target
          }
          return next
        })
      }, 1000 / 60) // 60fps

      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return (
    <motion.span ref={ref}>
      {Math.floor(count)}{suffix}
    </motion.span>
  )
}
