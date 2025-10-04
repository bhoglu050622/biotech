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
  Award, 
  CheckCircle, 
  ArrowRight,
  Headphones,
  Monitor,
  Cpu,
  Activity,
  TrendingUp,
  Users,
  Globe,
  Star
} from 'lucide-react'

const keyFeatures = [
  {
    title: 'High-Resolution EEG',
    description: '128-channel EEG system with 24-bit resolution for precise neural signal acquisition',
    icon: Brain,
    specs: ['128 channels', '24-bit resolution', '0.1μV sensitivity']
  },
  {
    title: 'Real-Time Processing',
    description: 'Advanced signal processing algorithms for immediate neural activity analysis',
    icon: Cpu,
    specs: ['<10ms latency', 'Real-time filtering', 'Artifact removal']
  },
  {
    title: 'Wireless Connectivity',
    description: 'Secure wireless transmission with military-grade encryption for field operations',
    icon: Zap,
    specs: ['256-bit encryption', '100m range', 'Battery life: 8+ hours']
  },
  {
    title: 'Defense-Grade Durability',
    description: 'Ruggedized design meeting MIL-STD-810G standards for harsh environments',
    icon: Shield,
    specs: ['MIL-STD-810G', 'IP67 rating', 'Temperature: -40°C to +70°C']
  }
]

const applications = [
  {
    sector: 'Defense & Aerospace',
    description: 'Pilot monitoring, cognitive load assessment, and performance optimization',
    icon: Shield,
    benefits: [
      'Enhanced mission success rates',
      'Reduced pilot fatigue',
      'Improved decision-making'
    ]
  },
  {
    sector: 'Healthcare',
    description: 'Neurological diagnostics, brain-computer interfaces, and rehabilitation',
    icon: Activity,
    benefits: [
      'Faster diagnosis times',
      'Non-invasive monitoring',
      'Precision treatment'
    ]
  },
  {
    sector: 'Research & Academia',
    description: 'Neuroscience research, cognitive studies, and human performance analysis',
    icon: Users,
    benefits: [
      'High-quality data',
      'Research flexibility',
      'Publication-ready results'
    ]
  }
]

const technicalSpecs = [
  {
    category: 'Signal Acquisition',
    specs: [
      { name: 'Channels', value: '128' },
      { name: 'Resolution', value: '24-bit' },
      { name: 'Sampling Rate', value: 'Up to 2kHz' },
      { name: 'Input Impedance', value: '>1GΩ' },
      { name: 'Noise Level', value: '<0.5μV RMS' }
    ]
  },
  {
    category: 'Connectivity',
    specs: [
      { name: 'Wireless Range', value: '100m' },
      { name: 'Encryption', value: 'AES-256' },
      { name: 'Battery Life', value: '8+ hours' },
      { name: 'Data Storage', value: '32GB internal' },
      { name: 'Charging Time', value: '2 hours' }
    ]
  },
  {
    category: 'Environmental',
    specs: [
      { name: 'Operating Temperature', value: '-40°C to +70°C' },
      { name: 'Humidity', value: '0-95% RH' },
      { name: 'Altitude', value: 'Up to 15,000m' },
      { name: 'Vibration', value: 'MIL-STD-810G' },
      { name: 'EMI/EMC', value: 'MIL-STD-461F' }
    ]
  }
]

const certifications = [
  'ISO 13485:2016 - Medical Devices',
  'CE Marking - European Conformity',
  'FDA 510(k) Clearance',
  'MIL-STD-810G - Environmental Testing',
  'MIL-STD-461F - EMI/EMC',
  'IP67 - Ingress Protection'
]

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Neuroscience Researcher',
    organization: 'MIT Brain Research Center',
    content: 'The EEG system from Sentient Biotech has revolutionized our research capabilities. The signal quality is exceptional and the real-time processing has opened new possibilities for our studies.',
    rating: 5
  },
  {
    name: 'Captain Michael Rodriguez',
    role: 'Test Pilot',
    organization: 'US Air Force',
    content: 'The pilot monitoring system has significantly enhanced our situational awareness and performance monitoring. It\'s a game-changer for modern aviation.',
    rating: 5
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Neurologist',
    organization: 'Johns Hopkins Hospital',
    content: 'The non-invasive design and high accuracy make these EEG systems perfect for clinical applications. Our patients are comfortable and we get reliable data.',
    rating: 5
  }
]

export default function EEGSolutionsPage() {
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
              EEG Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Advanced electroencephalogram systems for precise neural signal acquisition, 
              real-time brain activity monitoring, and human performance optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                128-Channel System
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Real-Time Processing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Defense-Grade Security
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Key Features
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Cutting-edge EEG technology designed for defense, healthcare, and research applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-white/70 text-sm mb-4 text-center">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center space-x-2 text-sm text-electric-cyan">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
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
              Applications
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Versatile EEG solutions across multiple industries and use cases.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.sector}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{app.sector}</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
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
              Detailed technical specifications for our EEG solutions.
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

      {/* Certifications */}
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
              Certifications & Standards
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our EEG solutions meet the highest international standards for quality, safety, and performance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-lg p-4 flex items-center space-x-3"
              >
                <Award className="w-5 h-5 text-electric-cyan flex-shrink-0" />
                <span className="text-white/80 text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Trusted by leading organizations worldwide for their EEG monitoring needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-electric-cyan fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-electric-cyan text-sm">{testimonial.role}</div>
                  <div className="text-white/60 text-xs">{testimonial.organization}</div>
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
              Ready to Experience Advanced EEG Technology?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our team to schedule a demonstration or learn more about our EEG solutions 
              for your specific application needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
