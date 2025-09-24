'use client'

import { useEffect, useRef, useState, useCallback, Suspense } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Lazy load the heavy animation component
const HeroBackgroundAnimation = dynamic(() => import('./HeroBackground'), {
  ssr: false,
  loading: () => <HeroBackgroundFallback />
})

// Fallback component for LCP and reduced motion
function HeroBackgroundFallback() {
  return (
    <div className="absolute inset-0">
      {/* Static gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-electric-cyan/5 to-violet-accent/5" />
      
      {/* Simple animated gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.1) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(170, 100, 255, 0.1) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.1) 0%, transparent 70%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />
      
      {/* Simple waveform */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 0 150 Q 250 100 500 150 T 1000 150"
          stroke="#00E6FF"
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              "M 0 150 Q 250 100 500 150 T 1000 150",
              "M 0 150 Q 250 200 500 150 T 1000 150",
              "M 0 150 Q 250 100 500 150 T 1000 150"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  )
}

export default function HeroBackgroundOptimized() {
  const [shouldLoadAnimation, setShouldLoadAnimation] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Load animation after LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadAnimation(true)
    }, 2000) // Wait 2 seconds for LCP

    return () => clearTimeout(timer)
  }, [])

  // Don't load animation if reduced motion is preferred
  if (reducedMotion) {
    return <HeroBackgroundFallback />
  }

  return (
    <Suspense fallback={<HeroBackgroundFallback />}>
      {shouldLoadAnimation ? (
        <HeroBackgroundAnimation />
      ) : (
        <HeroBackgroundFallback />
      )}
    </Suspense>
  )
}
