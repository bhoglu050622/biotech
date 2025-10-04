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
  Globe, 
  ArrowRight, 
  Play, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Star,
  BarChart3,
  Cpu,
  Activity,
  Headphones,
  Monitor,
  Lock,
  Sparkles
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Advanced EEG Solutions',
    description: 'State-of-the-art electroencephalogram systems for precise neural signal acquisition and real-time brain activity monitoring.',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: Headphones,
    title: 'Pilot Wearable Technology',
    description: 'Next-generation headgear designed for military pilots with integrated neurotechnology and biometric monitoring.',
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    icon: Cpu,
    title: 'AI-Driven Analytics',
    description: 'Intelligent systems that analyze biometric data to provide insights into human performance and well-being.',
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    icon: Target,
    title: 'Human-Machine Interface',
    description: 'Revolutionary interfaces that enable seamless interaction between humans and technology through neural signals.',
    color: 'from-cyan-500 to-blue-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20'
  }
]

const industries = [
  {
    name: 'Defense & Aerospace',
    description: 'Enhanced pilot performance monitoring and cognitive load management in high-stress environments.',
    icon: Shield,
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-500/5',
    stats: '35% improvement in mission success rates',
    clients: ['Indian Air Force', 'US Air Force', 'NATO']
  },
  {
    name: 'Healthcare',
    description: 'Non-invasive brain monitoring for diagnosis, treatment, and rehabilitation of neurological conditions.',
    icon: Activity,
    color: 'from-emerald-600 to-emerald-400',
    bgColor: 'bg-emerald-500/5',
    stats: '40% faster diagnosis times',
    clients: ['Johns Hopkins', 'Mayo Clinic', 'Stanford Medicine']
  },
  {
    name: 'Research & Academia',
    description: 'Advanced tools for neuroscience research, cognitive studies, and human performance analysis.',
    icon: Users,
    color: 'from-purple-600 to-purple-400',
    bgColor: 'bg-purple-500/5',
    stats: '50% faster data collection',
    clients: ['MIT', 'Harvard', 'Oxford']
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Neuroscience Researcher',
    organization: 'MIT Brain Research Center',
    content: 'The EEG solutions from Sentient Biotech have revolutionized our research capabilities. The signal quality is exceptional and the real-time processing has opened new possibilities for our studies.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Captain Michael Rodriguez',
    role: 'Test Pilot',
    organization: 'US Air Force',
    content: 'The pilot headgear system has significantly enhanced our situational awareness and performance monitoring. It\'s a game-changer for modern aviation.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Neurologist',
    organization: 'Johns Hopkins Hospital',
    content: 'The non-invasive design and high accuracy make these EEG systems perfect for clinical applications. Our patients are comfortable and we get reliable data.',
    rating: 5,
    avatar: 'PP'
  }
]

const stats = [
  { number: '99.9%', label: 'System Reliability', icon: Shield },
  { number: '35%', label: 'Performance Improvement', icon: TrendingUp },
  { number: '50+', label: 'Research Partners', icon: Users },
  { number: '24/7', label: 'Technical Support', icon: Monitor }
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-indigo-900" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Defense-Grade Neurotechnology</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Neurotech for
                </span>
                <br />
                <span className="text-white">
                  Next-Gen Performance
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Advanced neurotechnology solutions that bridge military-grade precision with everyday wellness. 
                Non-invasive brain-computer interfaces designed for optimal human performance and well-being.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Non-invasive Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Real-time Feedback</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Privacy-First Design</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Device */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Device Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">EEG Headset Pro</h3>
                        <p className="text-slate-300">Real-time neurofeedback</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-12 h-12 border-2 border-blue-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-purple-400/30 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced neurotechnology solutions designed for defense, healthcare, and research applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our solutions are deployed across defense, healthcare, and research organizations worldwide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`${industry.bgColor} border border-white/10 rounded-2xl p-8`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-slate-300 mb-6">{industry.description}</p>
                <div className="text-blue-400 font-semibold mb-4">{industry.stats}</div>
                <div className="text-sm text-slate-400">
                  <div className="font-medium mb-2">Trusted by:</div>
                  <div className="flex flex-wrap gap-2">
                    {industry.clients.map((client, clientIndex) => (
                      <span key={clientIndex} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their operations with our neurotechnology solutions.
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-slate-300 text-sm">{testimonial.role}</div>
                    <div className="text-slate-400 text-sm">{testimonial.organization}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join industry leaders who are already using our neurotechnology solutions to enhance performance and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
              >
                <span>Contact Sales</span>
                <Play className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}