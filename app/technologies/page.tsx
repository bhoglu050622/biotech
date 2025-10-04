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
  Headphones,
  Wifi,
  Database,
  Cloud,
  Smartphone,
  Mic,
  Camera,
  BarChart3,
  TrendingUp,
  Settings,
  Eye,
  Heart,
  Gauge
} from 'lucide-react'

const technologies = [
  {
    title: 'Advanced EEG Systems',
    description: 'State-of-the-art electroencephalogram technology for precise neural signal acquisition',
    icon: Brain,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    features: [
      '256-channel high-density EEG',
      'Real-time signal processing',
      'Noise reduction algorithms',
      'Wireless data transmission'
    ],
    specifications: {
      'Sampling Rate': '256 Hz',
      'Resolution': '24-bit',
      'Latency': '< 1ms',
      'Range': '100m wireless'
    },
    applications: ['Defense', 'Healthcare', 'Research']
  },
  {
    title: 'Pilot Headgear Systems',
    description: 'Next-generation wearable technology for military pilots with integrated neurotechnology',
    icon: Headphones,
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    features: [
      'Integrated EEG sensors',
      'Biometric monitoring',
      'Situational awareness',
      'Performance optimization'
    ],
    specifications: {
      'Weight': '< 200g',
      'Battery Life': '8+ hours',
      'Operating Temp': '-40°C to +60°C',
      'Protection': 'IP67 rated'
    },
    applications: ['Military Aviation', 'Defense', 'Training']
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Machine learning algorithms for real-time neural data analysis and insights',
    icon: Cpu,
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    features: [
      'Neural pattern recognition',
      'Predictive analytics',
      'Cognitive load assessment',
      'Adaptive algorithms'
    ],
    specifications: {
      'Processing Power': '10 TFLOPS',
      'Memory': '32GB RAM',
      'Storage': '1TB SSD',
      'Connectivity': '5G/WiFi 6'
    },
    applications: ['Research', 'Healthcare', 'Defense']
  },
  {
    title: 'Secure Data Platform',
    description: 'Enterprise-grade security and privacy protection for sensitive neural data',
    icon: Shield,
    color: 'from-orange-500 to-red-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    features: [
      'End-to-end encryption',
      'Zero-knowledge architecture',
      'Compliance frameworks',
      'Audit logging'
    ],
    specifications: {
      'Encryption': 'AES-256',
      'Compliance': 'HIPAA, GDPR',
      'Uptime': '99.99%',
      'Backup': 'Real-time'
    },
    applications: ['Healthcare', 'Defense', 'Research']
  }
]

const capabilities = [
  {
    icon: Activity,
    title: 'Real-time Processing',
    description: 'Process neural signals with sub-millisecond latency for immediate feedback',
    metric: '< 1ms',
    color: 'from-electric-cyan to-violet-accent'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'AI-powered insights from neural data patterns and cognitive states',
    metric: '99.7%',
    color: 'from-violet-accent to-soft-teal'
  },
  {
    icon: Shield,
    title: 'Military Grade Security',
    description: 'Defense-level encryption and security protocols for sensitive data',
    metric: 'AES-256',
    color: 'from-soft-teal to-electric-cyan'
  },
  {
    icon: Globe,
    title: 'Global Connectivity',
    description: 'Seamless data transmission across secure networks worldwide',
    metric: '100m',
    color: 'from-electric-cyan to-violet-accent'
  }
]

const useCases = [
  {
    title: 'Defense Applications',
    description: 'Enhanced pilot performance and mission success through neural monitoring',
    icon: Shield,
    color: 'from-blue-500 to-purple-500',
    benefits: ['35% Mission Success', '50% Faster Response', '99.9% Reliability'],
    image: '🛡️'
  },
  {
    title: 'Healthcare Solutions',
    description: 'Revolutionary neurological diagnosis and treatment monitoring systems',
    icon: Activity,
    color: 'from-emerald-500 to-teal-400',
    benefits: ['40% Faster Diagnosis', '60% Accuracy Improvement', 'Real-time Monitoring'],
    image: '🏥'
  },
  {
    title: 'Research Platforms',
    description: 'Advanced tools for neuroscience research and cognitive studies',
    icon: Brain,
    color: 'from-purple-500 to-pink-400',
    benefits: ['50% Faster Data Collection', 'Higher Signal Quality', 'AI-Powered Insights'],
    image: '🔬'
  }
]

export default function TechnologiesPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/20 rounded-full px-4 py-2 mb-8"
              >
                <Cpu className="w-4 h-4 text-electric-cyan" />
                <span className="text-electric-cyan text-sm font-medium">Cutting-Edge Technology</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-electric-cyan via-violet-accent to-soft-teal bg-clip-text text-transparent">
                  Advanced
                </span>
                <br />
                <span className="text-white">
                  Technologies
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover our revolutionary neurotechnology solutions that are transforming industries 
                and pushing the boundaries of human-machine interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <span>View Demo</span>
                  <Monitor className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Tech Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
                  <span>Real-time Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>AI-Powered Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Military-Grade Security</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Tech Display */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Tech Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Neurotech Platform</h3>
                        <p className="text-slate-300">Advanced neural processing</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-electric-cyan">256Hz</div>
                          <div className="text-sm text-slate-300">Sampling</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-violet-accent">0.1ms</div>
                          <div className="text-sm text-slate-300">Latency</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-12 h-12 border-2 border-electric-cyan/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-violet-accent/30 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Core Technologies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive suite of neurotechnology solutions designed for the most demanding applications.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-slate-300 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.applications.map((app, i) => (
                        <span key={i} className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-electric-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Specifications</h4>
                    <div className="space-y-2">
                      {Object.entries(tech.specifications).map(([key, value], i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-slate-400">{key}</span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technical Capabilities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced performance metrics that set our technology apart from the competition.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{capability.description}</p>
                <div className="text-3xl font-bold text-electric-cyan mb-2">{capability.metric}</div>
                <div className="text-xs text-slate-400">Performance Metric</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our technologies are transforming operations across different industries.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-center">{useCase.image}</div>
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 text-center">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-electric-cyan" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Experience Our Technology</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Interactive demonstrations of our neurotechnology capabilities in action.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Live EEG Monitoring</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Simulated EEG Waveform */}
                <div className="bg-black/20 rounded-xl p-4 mb-6">
                  <div className="h-32 relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 400 120">
                      <path
                        d="M0,60 Q50,20 100,60 T200,60 T300,60 T400,60"
                        stroke="#00E6FF"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                      />
                      <path
                        d="M0,80 Q50,40 100,80 T200,80 T300,80 T400,80"
                        stroke="#AA64FF"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-electric-cyan/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-electric-cyan">99.7%</div>
                    <div className="text-sm text-slate-300">Accuracy</div>
                  </div>
                  <div className="bg-violet-accent/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-violet-accent">0.1ms</div>
                    <div className="text-sm text-slate-300">Latency</div>
                  </div>
                  <div className="bg-soft-teal/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-soft-teal">256Hz</div>
                    <div className="text-sm text-slate-300">Sampling</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Real-time Processing</h3>
                </div>
                <p className="text-slate-300">Advanced algorithms process neural signals in real-time, enabling instant feedback and analysis.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-accent to-soft-teal rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Integration</h3>
                </div>
                <p className="text-slate-300">Machine learning models adapt to individual neural patterns for personalized insights.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-teal to-electric-cyan rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Secure & Private</h3>
                </div>
                <p className="text-slate-300">End-to-end encryption ensures your neural data remains completely private and secure.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-cyan/10 to-violet-accent/10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover how our advanced neurotechnology can transform your operations and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <span>Contact Sales</span>
                <Zap className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}