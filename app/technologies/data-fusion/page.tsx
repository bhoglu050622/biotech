'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Monitor, 
  Brain, 
  Shield, 
  Heart,
  Zap,
  Eye,
  Layers,
  CheckCircle
} from 'lucide-react'

const capabilities = [
  {
    title: 'Multisource Data Integration',
    description: 'Combining optical, infrared, radar, and neural signals into one seamless information layer.',
    icon: Layers
  },
  {
    title: '3D Spatial Mapping',
    description: 'Creating dynamic, real-time reconstructions of physical and operational environments from multiple visual and sensor inputs.',
    icon: Eye
  },
  {
    title: 'Neurodata Visualization',
    description: 'Translating brainwave, cognitive, and biometric data into interpretable visual formats for neuroscience and medical applications.',
    icon: Brain
  },
  {
    title: 'AI-Driven Context Analysis',
    description: 'Intelligent models that identify correlations and patterns across multimodal data for better decision-making.',
    icon: Zap
  },
  {
    title: 'Dynamic Visualization Dashboards',
    description: 'Adaptive visual interfaces that update live, enabling pilots, doctors, and researchers to interact with data fluidly.',
    icon: Monitor
  },
  {
    title: 'Signal Confidence Mapping',
    description: 'AI algorithms that weigh data reliability and optimize visualization to highlight the most trustworthy information.',
    icon: Shield
  }
]

const researchAreas = [
  'Cognitive Data Fusion: Developing AI architectures that merge biological and mechanical data to produce holistic situational awareness',
  'Real-Time Sensor Fusion Models: Creating mathematical frameworks that combine asynchronous data streams from multiple sensors without latency',
  'AI-Enhanced Visual Processing: Using deep learning to refine image clarity, normalize brightness, and reduce noise in complex lighting conditions',
  'Semantic Data Interpretation: Systems that understand not just what data represents, but what it means in operational context',
  'Augmented Visualization Interfaces: Building XR-powered visualization tools that project fused data into immersive, interactive environments',
  'Anomaly Detection and Prediction: Machine learning models capable of identifying and predicting deviations or threats across integrated datasets'
]

const applications = [
  {
    title: 'Defense and Aerospace',
    description: 'Situational awareness dashboards, pilot helmet displays, and command visualization systems integrating data from radar, IR, EO, and neural sensors.',
    icon: Shield
  },
  {
    title: 'Neurotechnology and Healthcare',
    description: 'Visualization of cognitive states, brain activity, and bio-signals for diagnostics, monitoring, and therapeutic guidance.',
    icon: Heart
  },
  {
    title: 'Industrial and Environmental Systems',
    description: 'Real-time fusion of IoT, sensor, and process data for safety monitoring and operational optimization.',
    icon: Zap
  },
  {
    title: 'Research and Simulation',
    description: 'Immersive visualization of large-scale experimental data for better pattern recognition and discovery.',
    icon: Brain
  }
]

export default function DataFusionPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
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
              Data Fusion and Visualization
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Turning Complexity into Clarity
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
                At Sentient Biotech Private Limited, we transform raw, fragmented data into clear, actionable intelligence through advanced Data Fusion and Visualization systems. In an era defined by overwhelming information, clarity becomes the most valuable asset. Our technology ensures that every signal, image, and parameter contributes to a single, coherent understanding of reality.
              </p>
              <p>
                We integrate data from multiple sensors, neural systems, environmental inputs, and machine learning models to generate a unified representation of the world. Whether visualizing complex battlefield intelligence, monitoring neural responses, or mapping real-time terrain through multi-camera systems, Sentient Biotech delivers clarity where others see chaos.
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
              Building Unified Intelligence
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <capability.icon className="w-8 h-8 text-primary-white" />
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
              Sentient Biotech's research in Data Fusion and Visualization goes beyond integration - it focuses on creating intelligent systems capable of perception, comprehension, and adaptive interpretation.
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
              Applications Across Domains
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
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-accent-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <application.icon className="w-8 h-8 text-primary-white" />
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
              The Future of Intelligent Visualization
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              The next evolution of Sentient Biotech's data visualization research is Cognitive Fusion Intelligence - systems that not only display information but also understand and anticipate what users need to see. Our goal is to build adaptive visualization platforms that think contextually, highlight anomalies automatically, and communicate insights before users even request them.
            </p>
            <p className="text-text-primary font-medium text-base sm:text-lg">
              Imagine a pilot's headgear that merges sensor data, visual terrain, and predictive AI cues in real time - or a neuroscientist visualizing brain activity as a living, interactive model that evolves with every thought. This is the world Sentient Biotech is building - where data is no longer static, but alive and responsive.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}

