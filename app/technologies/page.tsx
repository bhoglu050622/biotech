'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Activity,
  Globe,
  Lock,
  Monitor,
  Headphones
} from 'lucide-react'

const technologies = [
  {
    title: 'Neurotech Systems',
    description: 'Advanced neural signal processing and brain-computer interface technologies',
    icon: Brain,
    features: [
      'Real-time EEG signal processing',
      'Neural pattern recognition',
      'Cognitive load monitoring',
      'Brain-computer interfaces'
    ],
    applications: ['Defense', 'Healthcare', 'Research']
  },
  {
    title: 'Pilot Wearable Solutions',
    description: 'Next-generation headgear and wearable systems for military pilots',
    icon: Headphones,
    features: [
      'Integrated EEG sensors',
      'Biometric monitoring',
      'Situational awareness enhancement',
      'Performance optimization'
    ],
    applications: ['Military Aviation', 'Defense', 'Training']
  },
  {
    title: 'AI-driven Biometric Monitoring',
    description: 'Intelligent systems for real-time human performance analysis',
    icon: Cpu,
    features: [
      'Machine learning algorithms',
      'Predictive analytics',
      'Performance optimization',
      'Health monitoring'
    ],
    applications: ['Healthcare', 'Sports', 'Military']
  },
  {
    title: 'Human-machine Interface (HMI)',
    description: 'Revolutionary interfaces enabling seamless human-technology interaction',
    icon: Target,
    features: [
      'Neural control systems',
      'Intuitive interfaces',
      'Real-time feedback',
      'Adaptive learning'
    ],
    applications: ['Defense', 'Healthcare', 'Research']
  }
]

const technicalSpecs = [
  {
    category: 'Signal Processing',
    specs: [
      { name: 'Sampling Rate', value: 'Up to 2kHz' },
      { name: 'Resolution', value: '24-bit' },
      { name: 'Latency', value: '<10ms' },
      { name: 'Noise Level', value: '<0.5μV RMS' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    specs: [
      { name: 'Neural Networks', value: 'Deep Learning Models' },
      { name: 'Processing Power', value: 'Real-time Inference' },
      { name: 'Accuracy', value: '99.9%' },
      { name: 'Learning Rate', value: 'Adaptive' }
    ]
  },
  {
    category: 'Connectivity',
    specs: [
      { name: 'Wireless Range', value: '100m' },
      { name: 'Encryption', value: 'AES-256' },
      { name: 'Protocol', value: 'Secure TCP/IP' },
      { name: 'Battery Life', value: '8+ hours' }
    ]
  }
]

const researchAreas = [
  {
    area: 'Neuroscience',
    description: 'Advanced brain imaging and signal processing research',
    icon: Brain,
    focus: ['EEG Analysis', 'Cognitive Studies', 'Neural Networks']
  },
  {
    area: 'AI & Machine Learning',
    description: 'Cutting-edge AI algorithms for biometric analysis',
    icon: Cpu,
    focus: ['Deep Learning', 'Pattern Recognition', 'Predictive Analytics']
  },
  {
    area: 'Human Factors',
    description: 'Human-machine interaction and ergonomics research',
    icon: Users,
    focus: ['User Experience', 'Interface Design', 'Performance Optimization']
  },
  {
    area: 'Defense Applications',
    description: 'Military and aerospace technology development',
    icon: Shield,
    focus: ['Pilot Monitoring', 'Mission Critical Systems', 'Security']
  }
]

export default function TechnologiesPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              Technologies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Cutting-edge neurotechnology solutions that push the boundaries of 
              human-machine interaction and biometric monitoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Real-time Processing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                AI-Powered Analytics
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Defense-Grade Security
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive neurotechnology solutions designed for defense, healthcare, and research applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">{tech.title}</h3>
                    <p className="text-white/70 text-sm">{tech.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-white/70">
                        <CheckCircle className="w-3 h-3 text-electric-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-2 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Detailed technical specifications for our neurotechnology solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSpecs.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                      <span className="text-white/80 text-sm">{spec.name}</span>
                      <span className="text-electric-cyan text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Research & Development
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Continuous innovation in neurotechnology through dedicated research and development.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">{area.area}</h3>
                <p className="text-white/70 text-sm mb-4">{area.description}</p>
                <div className="space-y-1">
                  {area.focus.map((focus, focusIndex) => (
                    <div key={focusIndex} className="text-electric-cyan text-xs">
                      {focus}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Explore Our Technologies
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Learn more about our specific products and solutions built on these technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
