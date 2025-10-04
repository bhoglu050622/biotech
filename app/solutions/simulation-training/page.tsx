'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Target, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap,
  Award,
  Globe,
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
  Download,
  ExternalLink,
  Gamepad2,
  Users,
  Trophy,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Gamepad2,
    title: 'Virtual Reality Training',
    description: 'Immersive VR environments with neural feedback for realistic training scenarios',
    benefits: [
      'Realistic training environments',
      'Neural performance monitoring',
      'Adaptive difficulty levels',
      'Progress tracking systems'
    ]
  },
  {
    icon: Target,
    title: 'Simulation Platforms',
    description: 'Advanced simulation systems for complex training scenarios',
    benefits: [
      'High-fidelity simulations',
      'Real-time neural monitoring',
      'Scenario customization',
      'Performance analytics'
    ]
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Collaborative training systems for team-based operations',
    benefits: [
      'Multi-user environments',
      'Team coordination training',
      'Communication optimization',
      'Collective performance metrics'
    ]
  },
  {
    icon: Trophy,
    title: 'Assessment & Certification',
    description: 'Comprehensive assessment tools for skill evaluation and certification',
    benefits: [
      'Objective skill assessment',
      'Certification programs',
      'Performance benchmarking',
      'Competency tracking'
    ]
  }
]

const useCases = [
  {
    title: 'Military Training',
    description: 'Advanced simulation systems for military personnel training',
    metrics: '70% improvement in training effectiveness',
    icon: Target
  },
  {
    title: 'Aviation Training',
    description: 'Flight simulation with neural monitoring for pilot training',
    metrics: '50% faster pilot certification',
    icon: Globe
  },
  {
    title: 'Medical Training',
    description: 'Surgical simulation with neural feedback for medical professionals',
    metrics: '60% better skill retention',
    icon: Brain
  },
  {
    title: 'Corporate Training',
    description: 'Professional development programs with neural optimization',
    metrics: '40% increased learning outcomes',
    icon: Users
  }
]

const testimonials = [
  {
    name: 'Captain David Wilson',
    role: 'Training Director',
    organization: 'US Air Force',
    content: 'The simulation training system has revolutionized our pilot training program. The neural feedback provides insights we never had before, leading to much more effective training.',
    rating: 5,
    avatar: 'DW'
  },
  {
    name: 'Dr. Lisa Martinez',
    role: 'Medical Training Coordinator',
    organization: 'Johns Hopkins Hospital',
    content: 'Our surgical training has been transformed. The neural monitoring helps us identify areas for improvement and track progress in ways that were impossible before.',
    rating: 5,
    avatar: 'LM'
  },
  {
    name: 'Sarah Thompson',
    role: 'Corporate Training Manager',
    organization: 'Fortune 500 Company',
    content: 'The corporate training applications have been incredible. We can now personalize training based on individual neural patterns, leading to much better outcomes.',
    rating: 5,
    avatar: 'ST'
  }
]

export default function SimulationTrainingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900" />}>
        <ParticleBackground />
      </Suspense>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900/50 to-red-900" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 70%)'
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Play className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Simulation & Training Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Simulation &
              </span>
              <br />
              <span className="text-white">
                Training
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Revolutionize training and simulation with advanced neurotechnology solutions. 
              Create immersive learning experiences, optimize skill development, and achieve superior training outcomes through neural feedback systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <span>Request Training Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Training Guide</span>
              </motion.button>
            </motion.div>
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
              Simulation & Training Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive neurotechnology solutions designed for immersive training and simulation experiences.
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Training Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results across various training and simulation environments.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <div className="text-orange-400 font-semibold text-lg">{useCase.metrics}</div>
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
              Trusted by Training Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from training professionals who have transformed their programs with our solutions.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Training?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join leading organizations using our neurotechnology solutions to revolutionize training and simulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-orange-50 transition-all duration-300"
              >
                <span>Schedule Training Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
              >
                <span>Contact Training Team</span>
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
