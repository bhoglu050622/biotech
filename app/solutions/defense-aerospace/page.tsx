'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Shield, 
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
  ExternalLink,
  Plane,
  Rocket,
  Satellite
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Pilot Performance Monitoring',
    description: 'Real-time cognitive load assessment and performance optimization for military pilots',
    benefits: [
      'Enhanced situational awareness',
      'Reduced pilot fatigue',
      'Improved mission success rates',
      'Advanced threat detection'
    ]
  },
  {
    icon: Target,
    title: 'Combat Readiness Assessment',
    description: 'Comprehensive evaluation of combat readiness through neural signal analysis',
    benefits: [
      'Stress level monitoring',
      'Decision-making speed analysis',
      'Reaction time optimization',
      'Combat effectiveness metrics'
    ]
  },
  {
    icon: Plane,
    title: 'Aerospace Applications',
    description: 'Advanced neurotechnology for aerospace missions and space exploration',
    benefits: [
      'Zero-gravity adaptation monitoring',
      'Space mission performance tracking',
      'Astronaut cognitive health',
      'Mission-critical decision support'
    ]
  },
  {
    icon: Satellite,
    title: 'Remote Operations',
    description: 'Neural interface systems for remote piloting and unmanned vehicle control',
    benefits: [
      'Remote vehicle control',
      'Telepresence operations',
      'Long-range mission support',
      'Reduced operational risks'
    ]
  }
]

const useCases = [
  {
    title: 'Fighter Jet Pilots',
    description: 'Advanced EEG monitoring for F-35, F-22, and next-generation fighter aircraft',
    metrics: '35% improvement in mission success rates',
    icon: Plane
  },
  {
    title: 'Helicopter Operations',
    description: 'Cognitive load monitoring for complex helicopter missions',
    metrics: '40% reduction in pilot fatigue',
    icon: Activity
  },
  {
    title: 'Space Missions',
    description: 'Neural monitoring for astronauts during long-duration space missions',
    metrics: '50% better adaptation to space environment',
    icon: Rocket
  },
  {
    title: 'Drone Operations',
    description: 'Neural interface control for advanced drone systems',
    metrics: '60% faster response times',
    icon: Target
  }
]

const testimonials = [
  {
    name: 'Colonel Sarah Mitchell',
    role: 'Test Pilot',
    organization: 'US Air Force',
    content: 'The neural monitoring system has revolutionized our pilot training. We\'ve seen unprecedented improvements in situational awareness and mission success rates.',
    rating: 5,
    avatar: 'SM'
  },
  {
    name: 'Captain James Rodriguez',
    role: 'Helicopter Pilot',
    organization: 'US Army',
    content: 'The cognitive load monitoring has been a game-changer for our complex missions. It helps us maintain peak performance even in high-stress situations.',
    rating: 5,
    avatar: 'JR'
  },
  {
    name: 'Dr. Maria Chen',
    role: 'Aerospace Engineer',
    organization: 'NASA',
    content: 'The neural interface technology has opened new possibilities for space exploration. Our astronauts can now maintain optimal cognitive performance during long missions.',
    rating: 5,
    avatar: 'MC'
  }
]

export default function DefenseAerospacePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />}>
        <ParticleBackground />
      </Suspense>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Defense & Aerospace Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Defense-Grade
              </span>
              <br />
              <span className="text-white">
                Neurotechnology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Advanced neurotechnology solutions designed for military and aerospace applications. 
              Enhance pilot performance, mission success rates, and operational readiness with cutting-edge neural monitoring systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
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
              Defense & Aerospace Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive neurotechnology solutions tailored for military and aerospace operations.
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results across various defense and aerospace applications.
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <div className="text-blue-400 font-semibold text-lg">{useCase.metrics}</div>
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
              Trusted by Defense Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from military and aerospace professionals who have transformed their operations.
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
              Ready to Enhance Your Defense Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading defense organizations using our neurotechnology solutions to improve pilot performance and mission success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all duration-300"
              >
                <span>Schedule Defense Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
              >
                <span>Contact Defense Team</span>
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
