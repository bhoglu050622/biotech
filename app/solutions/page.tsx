'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Heart, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap,
  Award,
  Globe,
  Activity,
  Monitor,
  Headphones,
  Cpu,
  BarChart3,
  TrendingUp,
  Lock,
  Wifi,
  Database,
  Smartphone,
  Mic,
  Camera,
  Settings,
  Eye,
  Gauge,
  Star,
  Play,
  Download,
  ExternalLink
} from 'lucide-react'

const solutions = [
  {
    id: 'defense',
    title: 'Defense & Aerospace',
    description: 'Advanced neurotechnology solutions for military and aerospace applications',
    icon: Shield,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    features: [
      'Pilot performance monitoring',
      'Cognitive load assessment',
      'Mission-critical reliability',
      'Real-time biometric analysis'
    ],
    benefits: [
      '35% Enhanced mission success rates',
      '50% Improved pilot safety',
      '60% Reduced cognitive fatigue',
      '40% Better decision-making'
    ],
    applications: ['Military Aviation', 'Defense Operations', 'Training Simulation'],
    metrics: {
      'Mission Success': '+35%',
      'Safety Improvement': '+50%',
      'Response Time': '-40%',
      'Reliability': '99.9%'
    },
    image: '🛡️'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Solutions',
    description: 'Non-invasive neurotechnology for medical diagnostics and treatment',
    icon: Heart,
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    features: [
      'Neurological diagnostics',
      'Brain-computer interfaces',
      'Cognitive rehabilitation',
      'Patient monitoring systems'
    ],
    benefits: [
      '40% Faster diagnosis times',
      '60% Improved treatment accuracy',
      '30% Reduced hospital stays',
      '50% Enhanced patient outcomes'
    ],
    applications: ['Neurology', 'Rehabilitation', 'Mental Health', 'Research'],
    metrics: {
      'Diagnosis Speed': '+40%',
      'Treatment Accuracy': '+60%',
      'Patient Outcomes': '+50%',
      'Cost Reduction': '-30%'
    },
    image: '🏥'
  },
  {
    id: 'research',
    title: 'Research & Academia',
    description: 'Cutting-edge tools for neuroscience research and cognitive studies',
    icon: Brain,
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    features: [
      'High-precision EEG systems',
      'Real-time data analysis',
      'Multi-modal brain imaging',
      'Collaborative research platforms'
    ],
    benefits: [
      '50% Faster data collection',
      '80% Higher signal quality',
      '90% Improved research efficiency',
      '100% Secure data sharing'
    ],
    applications: ['Neuroscience', 'Psychology', 'Cognitive Science', 'AI Research'],
    metrics: {
      'Data Quality': '+80%',
      'Collection Speed': '+50%',
      'Research Efficiency': '+90%',
      'Collaboration': '+100%'
    },
    image: '🔬'
  },
  {
    id: 'industrial',
    title: 'Industrial Applications',
    description: 'Neurotechnology solutions for industrial safety and performance optimization',
    icon: Target,
    color: 'from-orange-500 to-red-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    features: [
      'Worker safety monitoring',
      'Fatigue detection systems',
      'Performance optimization',
      'Predictive maintenance'
    ],
    benefits: [
      '45% Improved safety records',
      '30% Increased productivity',
      '55% Reduced accidents',
      '25% Lower operational costs'
    ],
    applications: ['Manufacturing', 'Construction', 'Transportation', 'Energy'],
    metrics: {
      'Safety Improvement': '+45%',
      'Productivity': '+30%',
      'Accident Reduction': '+55%',
      'Cost Savings': '+25%'
    },
    image: '🏭'
  }
]

const interactiveFeatures = [
  {
    title: 'Solution Finder',
    description: 'Find the perfect solution for your specific needs',
    icon: Target,
    color: 'from-electric-cyan to-violet-accent'
  },
  {
    title: 'ROI Calculator',
    description: 'Calculate the return on investment for your implementation',
    icon: BarChart3,
    color: 'from-violet-accent to-soft-teal'
  },
  {
    title: 'Live Demo',
    description: 'Experience our technology in real-time',
    icon: Play,
    color: 'from-soft-teal to-electric-cyan'
  },
  {
    title: 'Case Studies',
    description: 'Explore success stories from our clients',
    icon: Award,
    color: 'from-electric-cyan to-violet-accent'
  }
]

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState('defense')
  const [activeTab, setActiveTab] = useState('overview')

  const currentSolution = solutions.find(s => s.id === selectedSolution) || solutions[0]

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
                <Target className="w-4 h-4 text-electric-cyan" />
                <span className="text-electric-cyan text-sm font-medium">Industry Solutions</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-electric-cyan via-violet-accent to-soft-teal bg-clip-text text-transparent">
                  Tailored
                </span>
                <br />
                <span className="text-white">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover how our neurotechnology solutions can transform your industry, 
                enhance performance, and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
                >
                  <span>Find Your Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <span>View Demo</span>
                  <Play className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Solution Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
                  <span>Industry-Specific</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Custom Implementation</span>
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
                {/* Interactive Solution Display */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Solution Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center">
                        <currentSolution.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">{currentSolution.title}</h3>
                        <p className="text-slate-300 text-sm">{currentSolution.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-electric-cyan">{Object.values(currentSolution.metrics)[0]}</div>
                          <div className="text-sm text-slate-300">Improvement</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-violet-accent">{Object.values(currentSolution.metrics)[1]}</div>
                          <div className="text-sm text-slate-300">Performance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
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

      {/* Interactive Solution Selector */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Industry</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Select your industry to explore tailored neurotechnology solutions designed for your specific needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {solutions.map((solution, index) => (
              <motion.button
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedSolution(solution.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedSolution === solution.id
                    ? 'border-electric-cyan bg-electric-cyan/10 scale-105'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:scale-105'
                }`}
              >
                <div className="text-4xl mb-4">{solution.image}</div>
                <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-slate-300 text-sm">{solution.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Solution Details */}
          <motion.div
            key={selectedSolution}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentSolution.color} rounded-2xl flex items-center justify-center`}>
                    <currentSolution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{currentSolution.title}</h3>
                    <p className="text-slate-300">{currentSolution.description}</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6">
                  {['overview', 'features', 'benefits', 'metrics'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-electric-cyan text-deep-indigo'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === 'overview' && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Solution Overview</h4>
                      <p className="text-slate-300 mb-4">{currentSolution.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {currentSolution.applications.map((app, i) => (
                          <span key={i} className="bg-white/10 text-slate-300 text-sm px-3 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {currentSolution.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-electric-cyan" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'benefits' && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Proven Benefits</h4>
                      <ul className="space-y-3">
                        {currentSolution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <TrendingUp className="w-5 h-5 text-violet-accent" />
                            <span className="text-slate-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'metrics' && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(currentSolution.metrics).map(([key, value], i) => (
                          <div key={i} className="bg-white/5 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-electric-cyan mb-1">{value}</div>
                            <div className="text-sm text-slate-300">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Quick Stats</h4>
                  <div className="space-y-4">
                    {Object.entries(currentSolution.metrics).map(([key, value], i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-slate-300">{key}</span>
                        <span className="text-electric-cyan font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Applications</h4>
                  <div className="space-y-2">
                    {currentSolution.applications.map((app, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                        <span className="text-slate-300 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Interactive Tools</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our interactive tools to find the perfect solution for your needs and calculate your ROI.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interactiveFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Try Now
                </motion.button>
              </motion.div>
            ))}
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
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover how our neurotechnology solutions can drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <span>Download Brochure</span>
                <Download className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}