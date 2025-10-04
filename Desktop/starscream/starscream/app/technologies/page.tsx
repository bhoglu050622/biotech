'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Brain, Cpu, Eye, Zap, Shield, Target, Users, Globe, ArrowRight, CheckCircle, Award, TrendingUp, BarChart3, Settings } from 'lucide-react'

const technologies = [
  {
    icon: Brain,
    title: 'Neurotech Systems',
    description: 'Advanced brain-computer interface technology that enables direct neural communication and control.',
    features: [
      'Real-time neural signal processing',
      'Non-invasive EEG monitoring',
      'Cognitive state analysis',
      'Neural pattern recognition'
    ],
    applications: ['Defense & Aerospace', 'Healthcare', 'Research', 'Gaming'],
    color: 'from-primary-blue to-secondary-blue',
    stats: { accuracy: '99.2%', latency: '8ms', channels: '128' }
  },
  {
    icon: Eye,
    title: 'Pilot Wearable Solutions',
    description: 'Next-generation headgear designed for military pilots with integrated neurotechnology and biometric monitoring.',
    features: [
      'Advanced EEG integration',
      'Biometric health tracking',
      'Cognitive load assessment',
      'Real-time performance tracking'
    ],
    applications: ['Military Aviation', 'Commercial Aviation', 'Space Exploration', 'Training Simulation'],
    color: 'from-primary-violet to-secondary-violet',
    stats: { weight: '< 500g', battery: '8+ hours', rating: 'MIL-STD-810G' }
  },
  {
    icon: Cpu,
    title: 'AI-driven Biometric Monitoring',
    description: 'Intelligent systems that analyze biometric data to provide insights into human performance and well-being.',
    features: [
      'Machine learning algorithms',
      'Predictive analytics',
      'Health trend analysis',
      'Automated alert systems'
    ],
    applications: ['Healthcare', 'Fitness', 'Mental Health', 'Performance Optimization'],
    color: 'from-primary-emerald to-secondary-emerald',
    stats: { accuracy: '95.8%', processing: 'Real-time', algorithms: '50+' }
  },
  {
    icon: Zap,
    title: 'Human-Machine Interface (HMI)',
    description: 'Revolutionary interfaces that enable seamless interaction between humans and technology through neural signals.',
    features: [
      'Direct neural control',
      'Intuitive user interfaces',
      'Multi-modal interaction',
      'Adaptive learning systems'
    ],
    applications: ['Assistive Technology', 'Gaming', 'Virtual Reality', 'Industrial Control'],
    color: 'from-primary-cyan to-secondary-cyan',
    stats: { response: '< 10ms', modes: 'Multi-modal', learning: 'Adaptive' }
  }
]

const technicalSpecs = [
  {
    category: 'EEG Technology',
    icon: Brain,
    specs: [
      { name: 'Sampling Rate', value: 'Up to 1000 Hz', color: 'text-primary-blue' },
      { name: 'Channels', value: '32-128 channels', color: 'text-primary-cyan' },
      { name: 'Resolution', value: '24-bit ADC', color: 'text-primary-emerald' },
      { name: 'Noise Level', value: '< 1 µV RMS', color: 'text-primary-violet' }
    ]
  },
  {
    category: 'Processing Power',
    icon: Cpu,
    specs: [
      { name: 'Real-time Processing', value: '< 10ms latency', color: 'text-primary-blue' },
      { name: 'Machine Learning', value: 'TensorFlow integration', color: 'text-primary-cyan' },
      { name: 'Cloud Processing', value: 'AWS/Azure compatible', color: 'text-primary-emerald' },
      { name: 'Edge Computing', value: 'On-device processing', color: 'text-primary-violet' }
    ]
  },
  {
    category: 'Connectivity',
    icon: Globe,
    specs: [
      { name: 'Wireless', value: 'Bluetooth 5.0, WiFi 6', color: 'text-primary-blue' },
      { name: 'Wired', value: 'USB-C, Ethernet', color: 'text-primary-cyan' },
      { name: 'Security', value: 'End-to-end encryption', color: 'text-primary-emerald' },
      { name: 'Compatibility', value: 'Cross-platform support', color: 'text-primary-violet' }
    ]
  }
]

const useCases = [
  {
    title: 'Defense & Military',
    description: 'Enhanced pilot performance monitoring and cognitive load management in high-stress environments.',
    icon: Shield,
    benefits: ['Improved mission success rates', 'Reduced pilot fatigue', 'Enhanced situational awareness', 'Real-time health monitoring'],
    color: 'from-primary-blue to-secondary-blue',
    metrics: { success: '+35%', fatigue: '-50%', satisfaction: '90%' }
  },
  {
    title: 'Healthcare & Medical',
    description: 'Non-invasive brain monitoring for diagnosis, treatment, and rehabilitation of neurological conditions.',
    icon: Target,
    benefits: ['Early disease detection', 'Personalized treatment plans', 'Remote patient monitoring', 'Improved outcomes'],
    color: 'from-primary-emerald to-secondary-emerald',
    metrics: { accuracy: '+40%', diagnosis: '60% faster', satisfaction: '85%' }
  },
  {
    title: 'Research & Academia',
    description: 'Advanced tools for neuroscience research, cognitive studies, and human performance analysis.',
    icon: Users,
    benefits: ['High-precision data collection', 'Real-time analysis', 'Multi-modal integration', 'Scalable research platforms'],
    color: 'from-primary-violet to-secondary-violet',
    metrics: { papers: '15+', patents: '10+', universities: '50+' }
  },
  {
    title: 'Consumer Applications',
    description: 'Wearable neurotechnology for fitness, gaming, meditation, and personal wellness optimization.',
    icon: Globe,
    benefits: ['Personalized insights', 'Wellness tracking', 'Cognitive enhancement', 'Stress management'],
    color: 'from-primary-cyan to-secondary-cyan',
    metrics: { users: '2,000+', efficiency: '50%', retention: '90%' }
  }
]

export default function TechnologiesPage() {
  return (
    <main className="relative min-h-screen bg-primary-navy">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/20 border border-primary-blue/30 mb-6">
              <span className="text-primary-blue font-medium">Advanced Technologies</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Cutting-Edge
              <span className="block gradient-text">Neurotechnology Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Explore our comprehensive neurotechnology systems including EEG solutions, pilot wearable technology, AI-driven biometric monitoring, and human-machine interfaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Explore Technologies</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>View Specifications</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Technology Stack</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive neurotechnology solutions designed for precision, reliability, and seamless integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-slate-300">{tech.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, appIndex) => (
                      <span key={appIndex} className="badge-info">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(tech.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-primary-blue">{value}</div>
                      <div className="text-xs text-slate-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technical Specifications</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Industry-leading performance metrics and technical capabilities that set our neurotechnology apart.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {technicalSpecs.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-primary-blue" />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between items-center">
                      <span className="text-slate-300">{spec.name}</span>
                      <span className={`font-medium ${spec.color}`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our neurotechnology solutions are transforming industries and creating new possibilities for human-machine interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                </div>
                
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(useCase.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-primary-blue">{value}</div>
                      <div className="text-xs text-slate-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Innovation at the Core</h2>
              <p className="text-xl text-slate-300 mb-8">
                Our neurotechnology solutions represent the culmination of years of research, development, and innovation in brain-computer interface technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Non-Invasive Technology</h3>
                    <p className="text-slate-300">Advanced signal processing algorithms that eliminate the need for invasive procedures while maintaining high accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-violet to-secondary-violet rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Real-Time Processing</h3>
                    <p className="text-slate-300">Ultra-low latency processing that enables real-time neural signal interpretation and response.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-emerald to-secondary-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Analytics</h3>
                    <p className="text-slate-300">Machine learning algorithms that continuously improve accuracy and provide deeper insights into neural patterns.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Signal Accuracy</span>
                      <span className="text-primary-blue font-bold">99.2%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-blue to-secondary-blue h-2 rounded-full" style={{ width: '99.2%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Processing Speed</span>
                      <span className="text-primary-violet font-bold">8ms</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-violet to-secondary-violet h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Battery Life</span>
                      <span className="text-primary-emerald font-bold">12+ hours</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-emerald to-secondary-emerald h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">User Satisfaction</span>
                      <span className="text-primary-cyan font-bold">98.5%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-cyan to-secondary-cyan h-2 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Discover how our neurotechnology solutions can revolutionize your operations and deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Download Brochure</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}