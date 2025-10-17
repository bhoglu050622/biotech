'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Heart, Brain, Activity, Eye, CheckCircle } from 'lucide-react'

const capabilities = [
  'EEG Systems: High-fidelity neural monitoring for diagnostics, cognitive assessment, and therapy guidance',
  'Bio-Integrated Sensors: Real-time monitoring of heart rate, SpO2, temperature, and vital signals',
  'Human-Machine Interfaces: Adaptive interfaces for clinicians to interact with patient data efficiently',
  'Data Fusion and Visualization: Multi-modal data integration for informed medical decisions',
  'AI-Powered Diagnostics: Machine learning algorithms for anomaly detection and treatment planning',
  'XR Systems for Medical Simulation: Immersive environments for surgical training and assessment',
  'Remote Monitoring and Telemedicine: Cloud-enabled continuous patient monitoring'
]

const applications = [
  { title: 'Hospitals and Clinics', description: 'Patient monitoring, cognitive assessment, and treatment guidance using EEG and bio-integrated sensors', icon: Heart },
  { title: 'Research Centers', description: 'High-resolution neural monitoring and AI-driven research tools for neuroscience studies', icon: Brain },
  { title: 'Telemedicine', description: 'Continuous patient monitoring, predictive analytics, and remote diagnostics', icon: Activity },
  { title: 'Medical Training', description: 'XR-powered immersive environments for surgical practice and procedural rehearsal', icon: Eye }
]

export default function HealthcarePage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-4 sm:mb-6">
              Healthcare
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Advancing Human Health with Intelligence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 text-text-secondary leading-relaxed">
            <p>
              Sentient Biotech Private Limited delivers advanced technologies for the healthcare industry, integrating neurotechnology, AI, human-machine interfaces, bio-integrated sensors, EEG systems, and XR solutions to enhance diagnostics, patient monitoring, and medical research.
            </p>
            <p>
              Our systems empower healthcare professionals to make faster, more accurate, and informed decisions. By combining human insight with intelligent technology, we help hospitals, research centers, and healthcare providers achieve better outcomes for patients.
            </p>
          </div>
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
                transition={{ delay: index * 0.1 }}
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
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
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

