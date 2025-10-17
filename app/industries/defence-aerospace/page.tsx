'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Brain, 
  Eye, 
  Activity,
  Plane,
  CheckCircle
} from 'lucide-react'

const capabilities = [
  'Next-Generation Pilot Headgear: Systems like Starscream with XR overlays, multi-sensor fusion, day and night vision, and real-time bio-metric monitoring',
  'Human-Machine Interfaces: Adaptive HMI platforms translating pilot or operator intent into precise machine responses',
  'Data Fusion and Visualization: Real-time integration of IR, EO, radar, and neural signals into unified operational maps',
  'EEG Systems: Continuous neural monitoring for fatigue detection and cognitive performance optimization',
  'AI-Powered Threat Detection: Predictive analytics and machine learning for real-time identification of potential hazards',
  'XR Systems: Immersive environments for training, simulation, and mission planning',
  'Bio-Integrated Sensors: Real-time physiological monitoring to ensure operator safety'
]

const applications = [
  { title: 'Air Force Operations', description: 'Advanced pilot headgear, cockpit integration, and XR-assisted navigation for fighter and transport aircraft', icon: Plane },
  { title: 'Mission Planning and Simulation', description: 'XR training environments replicating operational and emergency scenarios', icon: Eye },
  { title: 'Field Operations', description: 'Wearable neuro and bio-integrated sensors for real-time physiological monitoring', icon: Activity },
  { title: 'Research and Development', description: 'Integration of AI, EEG, HMI, and XR systems for next-generation defence technologies', icon: Brain }
]

export default function DefenceAerospacePage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-4 sm:mb-6">
              Defence and Aerospace
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Empowering Aerial and Strategic Superiority
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed"
          >
            <p>
              Sentient Biotech Private Limited delivers advanced solutions for the defence and aerospace sector, combining neurotechnology, artificial intelligence, human-machine interfaces, bio-integrated sensors, data fusion, and XR systems to enhance operational performance, situational awareness, and mission safety.
            </p>
            <p>
              Our technologies transform information into intelligence, providing defence personnel and pilots with cognitive augmentation that enables faster, more accurate, and safer decision-making in high-stakes environments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-12 text-center">
            Core Capabilities
          </h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-text-secondary leading-relaxed text-sm">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-12 text-center">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4">{application.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}

