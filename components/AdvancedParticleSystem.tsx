'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  direction: number
}

export default function AdvancedParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Memoized particle generation for better performance
  const generateParticles = useMemo(() => {
    if (!isClient) return []
    
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }
    
    const colors = ['#00E6FF', '#AA64FF', '#6BE1C9']
    const newParticles: Particle[] = []
    
    // Reduced particle count for better performance
    for (let i = 0; i < 25; i++) {
      const seed = i * 12345
      newParticles.push({
        id: i,
        x: seededRandom(seed) * 100,
        y: seededRandom(seed + 1) * 100,
        size: seededRandom(seed + 2) * 2 + 0.5, // Smaller particles
        color: colors[Math.floor(seededRandom(seed + 3) * colors.length)],
        speed: seededRandom(seed + 4) * 1.5 + 0.3, // Slower animation
        direction: seededRandom(seed + 5) * 360
      })
    }
    
    return newParticles
  }, [isClient])

  useEffect(() => {
    setIsClient(true)
    setParticles(generateParticles)
  }, [generateParticles])

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('particle-system')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div 
      id="particle-system"
      className="absolute inset-0 pointer-events-none overflow-hidden"
      suppressHydrationWarning
    >
      {/* Simplified particle system - only render when visible */}
      {isVisible && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            x: [0, Math.cos(particle.direction * Math.PI / 180) * 50], // Reduced movement
            y: [0, Math.sin(particle.direction * Math.PI / 180) * 50],
            opacity: [0, 0.6, 0], // Lower opacity
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.speed * 15, // Slower animation
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3, // Reduced delay
          }}
        />
      ))}
      
      {/* Simplified Neural Network Lines - only 5 instead of 10 */}
      {isVisible && (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 15}%`}
              y1={`${30 + i * 10}%`}
              x2={`${60 + i * 6}%`}
              y2={`${70 - i * 8}%`}
              stroke="#00E6FF"
              strokeWidth="0.3"
              animate={{
                opacity: [0, 0.5, 0],
                strokeWidth: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      )}

      {/* Simplified Holographic Scan Lines */}
      {isVisible && (
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-cyan/20 to-transparent h-1"
        />
      )}

      {/* Reduced Data Streams - only 5 instead of 10 */}
      {isVisible && [...Array(5)].map((_, i) => {
        const seededRandom = (seed: number) => {
          const x = Math.sin(seed) * 10000
          return x - Math.floor(x)
        }
        const seed = i * 54321
        return (
          <motion.div
            key={i}
            className="absolute w-0.5 h-16 bg-gradient-to-b from-electric-cyan to-transparent"
            style={{
              left: `${seededRandom(seed) * 100}%`,
              top: '100%',
            }}
            animate={{
              y: [-80, -160],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + seededRandom(seed + 1) * 1.5,
              repeat: Infinity,
              delay: seededRandom(seed + 2) * 2,
            }}
          />
        )
      })}
    </div>
  )
}
