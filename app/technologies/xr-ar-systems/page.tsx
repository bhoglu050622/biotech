'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Brain, 
  Shield, 
  Heart,
  Users,
  Zap,
  Layers,
  CheckCircle
} from 'lucide-react'

const capabilities = [
  {
    title: 'Dynamic Mixed Reality Environments',
    description: 'Real time fusion of physical and digital worlds using AI powered spatial mapping and environmental reconstruction.',
    icon: Layers
  },
  {
    title: 'Neural Feedback Integration',
    description: 'Incorporation of EEG and bio integrated sensor data for adaptive immersive control, making experiences responsive to human thought and emotion.',
    icon: Brain
  },
  {
    title: '3D Terrain and Spatial Awareness',
    description: 'Real time reconstruction of operational terrain for pilots, defense personnel, and field operatives, with adaptive visual cues and tactical overlays.',
    icon: Eye
  },
  {
    title: 'Collaborative XR Frameworks',
    description: 'Multi user and multi location synchronization for mission training, remote diagnostics, and immersive team simulations.',
    icon: Users
  },
  {
    title: 'AI Assisted Vision Enhancement',
    description: 'Adaptive algorithms that adjust visual clarity, brightness, and contrast for optimal visibility under complex conditions.',
    icon: Zap
  },
  {
    title: 'Predictive Simulation Systems',
    description: 'Machine learning models that simulate outcomes based on current actions, allowing better situational decision making and strategy testing.',
    icon: Shield
  }
]

const researchAreas = [
  'Neuro Adaptive Reality Systems: Developing XR platforms that respond dynamically to the user\'s neural and physiological states in real time',
  'Cognitive Load Mapping: Using bio sensors and EEG analytics to understand mental strain and automatically adjust immersive training complexity',
  'AI Driven Scene Understanding: Creating AR systems that identify, classify, and highlight objects and threats within a live operational environment',
  'Bio Optical Interfaces: Integrating high fidelity imaging with bio feedback for seamless communication between user intent and visual data',
  'XR Based Decision Modelling: Leveraging AI enhanced simulations that visualize consequences of tactical actions before execution'
]

const applications = [
  {
    title: 'Defense and Aerospace',
    description: 'Immersive pilot training systems, next generation headgear, and combat readiness simulators that recreate real environments with adaptive realism.',
    icon: Shield
  },
  {
    title: 'Healthcare and Medical Training',
    description: 'Augmented surgical guidance and immersive anatomy simulations improving precision and training efficiency.',
    icon: Heart
  },
  {
    title: 'Industrial and Engineering Systems',
    description: 'XR based maintenance, repair, and design visualization improving safety and accuracy in complex environments.',
    icon: Zap
  },
  {
    title: 'Research and Cognitive Sciences',
    description: 'Experiential simulations for behavioral, neural, and perceptual research with accurate brain signal correlation.',
    icon: Brain
  }
]

export default function XRARSystemsPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-4 sm:mb-6">
              XR and AR Systems
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Expanding Human Perception Beyond Reality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="space-y-4 sm:space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                At Sentient Biotech Private Limited, we are transforming how humans perceive, analyze, and interact with their environment through Extended Reality (XR) and Augmented Reality (AR) systems. Our mission is to expand human capability by merging real world experiences with immersive digital intelligence.
              </p>
              <p>
                We engineer XR and AR technologies that go far beyond visualization. Our systems combine artificial intelligence, environmental mapping, and human sensory feedback to deliver real time, context aware experiences for defense, aerospace, healthcare, and cognitive sciences. From training fighter pilots to guiding neurosurgical precision, Sentient Biotech's XR and AR systems redefine the limits of perception and performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Our Capabilities
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              From Immersion to Intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-primary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4">{capability.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Research */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8 text-center">
              Advanced Research and Innovation
            </h2>
            <p className="text-text-secondary mb-8 text-center leading-relaxed">
              Our research in XR and AR systems is driven by a multidisciplinary approach combining neuroscience, machine learning, optics, and spatial computing. We focus on how immersive technologies can go beyond visual augmentation to create intelligent perception.
            </p>
            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary leading-relaxed text-sm">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Applications Across Industries
            </h2>
          </motion.div>
          
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4">{application.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8">
              Future of Immersive Intelligence
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              The next frontier for Sentient Biotech is Cognitive XR - systems that not only extend perception but also comprehend and respond to intent. Our future research aims to develop XR systems capable of understanding user focus, emotional state, and neural feedback to create intelligent, personalized immersive experiences.
            </p>
            <p className="text-text-primary font-medium text-base sm:text-lg">
              From intelligent pilot helmets that visualize threats before they appear, to augmented healthcare systems that respond to a surgeon's concentration levels, Sentient Biotech envisions a world where human intelligence and machine awareness coexist in perfect harmony.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}

