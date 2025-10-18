'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Target, Shield, Heart, Brain, Eye, CheckCircle } from 'lucide-react'

const capabilities = [
  'XR-Based Simulation: Immersive training environments for pilots, surgeons, soldiers, and researchers',
  'Neuroadaptive Interfaces: HMI systems that adapt to trainee cognitive load for optimal learning',
  'Bio-Integrated Monitoring: Real-time monitoring of heart rate, SpO2, and neural activity',
  'AI-Powered Training Analytics: Machine learning evaluates trainee responses and provides feedback',
  'Data Fusion and Visualization: Integration of sensor and performance data for comprehensive insights',
  'Scenario-Based Learning: Adaptive modules simulating complex missions and emergency procedures',
  'Remote and Collaborative Training: Cloud-enabled platforms for multi-location training'
]

const applications = [
  { title: 'Defence and Aerospace Training', description: 'Pilot headgear and XR-based modules for cockpit training and mission rehearsal', icon: Shield },
  { title: 'Healthcare Training', description: 'XR simulation for surgical procedures and emergency care', icon: Heart },
  { title: 'Academic Training', description: 'Immersive laboratories for neuroscience and biomedical students', icon: Brain },
  { title: 'Corporate Training', description: 'Cognitive and operational training for complex industrial systems', icon: Target }
]

export default function SimulationTrainingPage() {
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
              Simulation & Training
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Transforming Learning Through Immersive Technology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 text-text-secondary leading-relaxed">
            <p>
              Sentient Biotech Private Limited delivers cutting-edge simulation and training solutions for defence, aerospace, healthcare, and academic sectors. Our technologies integrate XR, neurotechnology, AI, human-machine interfaces, and bio-integrated sensors to provide immersive, realistic, and highly adaptive training environments.
            </p>
            <p>
              We empower professionals, students, and operators to develop skills, enhance decision-making, and gain hands-on experience in a safe, controlled, and fully monitored environment.
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
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-green to-primary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
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

