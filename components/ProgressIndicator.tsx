'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProgressIndicator() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{ opacity }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-accent-light-blue via-violet-accent to-soft-teal"
        style={{ scaleX, transformOrigin: "left" }}
      />
      
      {/* Animated dots along the progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-full w-2 bg-white rounded-full shadow-lg"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, "calc(100vw - 8px)"])
        }}
      />
    </motion.div>
  )
}
