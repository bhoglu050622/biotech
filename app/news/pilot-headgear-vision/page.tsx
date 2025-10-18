'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Plane, Calendar, ArrowLeft } from 'lucide-react'

export default function PilotHeadgearBlogPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
      <ParticleBackground />
      <Navbar />
      
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a
            href="/news"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-primary-blue hover:text-accent-blue mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News & Insights</span>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-green to-accent-light-blue rounded-xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary-white" />
              </div>
              <div className="flex items-center gap-2 text-text-tertiary text-sm">
                <Calendar className="w-4 h-4" />
                <span>September 2025</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Starscream – Expanding Vision Beyond Limits
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6 text-text-secondary leading-relaxed">
            <p>
              In modern aerial combat, information is power. Our Starscream integrates multi-camera vision, AI-assisted overlays, and biometric tracking to provide pilots with unparalleled situational awareness. With features like 3D terrain mapping, AR-based navigation, and real-time health monitoring, this innovation brings a new dimension of safety, precision, and performance to the Indian Air Force.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Enhanced Vision and XR Integration
            </h2>
            <p>
              Our pilot headgear integrates advanced imaging sensors and XR technologies to provide unparalleled situational awareness. It enhances day and night vision, compensates for low-light or zero-visibility conditions, and projects a 3D composited terrain and sky map. XR capabilities allow pilots to visualize critical information in real time, ensuring faster decision-making and superior mission performance.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Real-Time Biometric Monitoring
            </h2>
            <p>
              Safety and performance are directly linked to pilot health. The headgear continuously monitors vital biometrics including heart rate, SpO2, temperature, and neural activity. Thermal imaging and real-time SpCO2 monitoring provide a comprehensive understanding of physiological stress, fatigue, and readiness, enabling proactive interventions before performance is affected.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Data Fusion and Operational Awareness
            </h2>
            <p>
              Integrated data fusion combines IR and EO feeds, XR overlays, navigation systems, and sensor inputs to provide a unified, clear, and actionable operational picture. Pilots can focus on mission-critical tasks while the headgear simplifies complex environmental data, reducing cognitive load and improving response accuracy.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Applications
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Air Force Operations:</strong> Enhances situational awareness, mission efficiency, and safety for pilots.</li>
              <li><strong>Chartered Aircraft:</strong> Provides operators with superior navigation, hazard detection, and pilot health monitoring.</li>
              <li><strong>Training and Simulation:</strong> Works in tandem with XR training platforms to replicate realistic operational conditions for skill development.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              The Future of Pilot Headgear
            </h2>
            <p>
              By integrating neurotechnology, AI, XR, and advanced bio-sensors, the headgear represents a step toward fully cognitive-enabled cockpit systems. Sentient Biotech is continuously innovating to ensure pilots operate with intelligence, precision, and confidence beyond human limits.
            </p>
            <p className="text-text-primary font-medium text-lg">
              Sentient Biotech — Expanding Vision, Enhancing Performance, Redefining Aviation.
            </p>
          </div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}

