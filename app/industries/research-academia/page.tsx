'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Brain, Users, Eye, Activity, CheckCircle } from 'lucide-react'

const capabilities = [
  'EEG Systems: High-resolution neural monitoring for cognitive studies and behavioral research',
  'Bio-Integrated Sensors: Real-time physiological monitoring for controlled experiments',
  'Data Fusion and Visualization: Integration of multi-modal data into interactive visualizations',
  'Human-Machine Interfaces: Adaptive interfaces for managing complex experiments',
  'AI-Powered Analytics: Machine learning for pattern recognition and predictive modeling',
  'XR Visualization: Immersive environments for experimental simulations and analysis',
  'Remote Collaboration: Cloud-based platforms for multi-site research'
]

const applications = [
  { title: 'Neuroscience and Cognitive Science', description: 'EEG and bio-sensing systems for studying brain activity, cognition, and learning', icon: Brain },
  { title: 'Biomedical Research', description: 'Physiological monitoring, data fusion, and predictive AI for disease modeling', icon: Activity },
  { title: 'Experimental Simulation', description: 'XR environments for testing hypotheses and visualizing complex data', icon: Eye },
  { title: 'Academic Training', description: 'XR-powered learning tools for students in neuroscience and biomedical sciences', icon: Users }
]

export default function ResearchAcademiaPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
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
              Research & Academia
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Advancing Knowledge Through Technology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 text-text-secondary leading-relaxed">
            <p>
              Sentient Biotech Private Limited partners with research institutions, universities, and academic organizations to provide cutting-edge technologies that enhance experimental precision, data analysis, and cognitive research.
            </p>
            <p>
              Our solutions integrate neurotechnology, AI, human-machine interfaces, bio-integrated sensors, EEG systems, XR visualization, and advanced data fusion. These tools empower researchers to push the boundaries of neuroscience, biomedical science, and cognitive technology.
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <application.icon className="w-8 h-8 text-primary-white" />
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

