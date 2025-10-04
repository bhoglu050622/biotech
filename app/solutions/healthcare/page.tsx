'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Activity, 
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
  Play,
  Download,
  ExternalLink,
  Stethoscope,
  Pill,
  Microscope,
  Shield
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Neurological Diagnosis',
    description: 'Advanced EEG analysis for early detection and monitoring of neurological conditions',
    benefits: [
      'Early Alzheimer\'s detection',
      'Epilepsy monitoring',
      'Stroke rehabilitation tracking',
      'Cognitive assessment tools'
    ]
  },
  {
    icon: Heart,
    title: 'Mental Health Monitoring',
    description: 'Real-time monitoring of mental health indicators and stress levels',
    benefits: [
      'Depression screening',
      'Anxiety level monitoring',
      'Sleep quality assessment',
      'Mood tracking systems'
    ]
  },
  {
    icon: Activity,
    title: 'Rehabilitation Support',
    description: 'Neural feedback systems for physical and cognitive rehabilitation',
    benefits: [
      'Stroke recovery support',
      'Traumatic brain injury rehab',
      'Motor function restoration',
      'Cognitive training programs'
    ]
  },
  {
    icon: Stethoscope,
    title: 'Clinical Applications',
    description: 'Integration with clinical workflows for healthcare professionals',
    benefits: [
      'Patient monitoring systems',
      'Treatment effectiveness tracking',
      'Clinical decision support',
      'Remote patient care'
    ]
  }
]

const useCases = [
  {
    title: 'Hospitals & Clinics',
    description: 'Neurological monitoring in hospital settings for patient care',
    metrics: '40% faster diagnosis times',
    icon: Heart
  },
  {
    title: 'Rehabilitation Centers',
    description: 'Neural feedback therapy for stroke and brain injury patients',
    metrics: '60% improvement in recovery rates',
    icon: Activity
  },
  {
    title: 'Mental Health Facilities',
    description: 'EEG-based monitoring for mental health treatment',
    metrics: '50% better treatment outcomes',
    icon: Brain
  },
  {
    title: 'Research Institutions',
    description: 'Advanced neural research tools for medical studies',
    metrics: '3x faster data collection',
    icon: Microscope
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Neurologist',
    organization: 'Mayo Clinic',
    content: 'The EEG monitoring system has revolutionized our diagnostic capabilities. We can now detect neurological conditions much earlier and provide more targeted treatments.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Rehabilitation Specialist',
    organization: 'Johns Hopkins Hospital',
    content: 'Our stroke patients have shown remarkable improvements with the neural feedback therapy. The recovery rates have exceeded our expectations.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Psychiatrist',
    organization: 'Stanford Medicine',
    content: 'The mental health monitoring capabilities have transformed how we approach patient care. We can now provide more personalized and effective treatments.',
    rating: 5,
    avatar: 'ER'
  }
]

export default function HealthcarePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900" />}>
        <ParticleBackground />
      </Suspense>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/50 to-teal-900" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
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
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Heart className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Healthcare Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Healthcare
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
              Transform healthcare delivery with advanced neurotechnology solutions. 
              Improve patient outcomes, accelerate diagnosis, and enhance treatment effectiveness through cutting-edge neural monitoring systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <span>Request Healthcare Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Healthcare Guide</span>
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
              Healthcare Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive neurotechnology solutions designed for healthcare professionals and patient care.
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
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
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
              Healthcare Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results across various healthcare settings and specialties.
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
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <div className="text-emerald-400 font-semibold text-lg">{useCase.metrics}</div>
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
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from healthcare professionals who have transformed patient care with our solutions.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Join leading healthcare institutions using our neurotechnology solutions to improve patient outcomes and care delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-emerald-50 transition-all duration-300"
              >
                <span>Schedule Healthcare Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
              >
                <span>Contact Healthcare Team</span>
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
