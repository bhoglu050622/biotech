'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Users, 
  BookOpen, 
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
  GraduationCap,
  Microscope,
  Beaker,
  Lightbulb
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Neuroscience Research',
    description: 'Advanced EEG systems for cutting-edge neuroscience research and brain studies',
    benefits: [
      'High-resolution neural mapping',
      'Real-time brain activity analysis',
      'Cognitive research tools',
      'Neural network studies'
    ]
  },
  {
    icon: BookOpen,
    title: 'Academic Studies',
    description: 'Comprehensive tools for academic research and educational programs',
    benefits: [
      'Student research projects',
      'Thesis and dissertation support',
      'Educational demonstrations',
      'Research methodology training'
    ]
  },
  {
    icon: Microscope,
    title: 'Laboratory Applications',
    description: 'Precision neural monitoring for laboratory research environments',
    benefits: [
      'Controlled experiment design',
      'Data collection automation',
      'Statistical analysis tools',
      'Research protocol compliance'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Discovery',
    description: 'Supporting breakthrough research and scientific discoveries',
    benefits: [
      'Novel research methodologies',
      'Cross-disciplinary studies',
      'Publication support',
      'Patent development assistance'
    ]
  }
]

const useCases = [
  {
    title: 'Universities',
    description: 'Advanced research tools for neuroscience departments',
    metrics: '50% faster data collection',
    icon: GraduationCap
  },
  {
    title: 'Research Institutes',
    description: 'Cutting-edge neural research capabilities',
    metrics: '3x more research output',
    icon: Microscope
  },
  {
    title: 'Laboratories',
    description: 'Precision neural monitoring for controlled studies',
    metrics: '90% data accuracy improvement',
    icon: Beaker
  },
  {
    title: 'Academic Conferences',
    description: 'Live demonstrations and research presentations',
    metrics: '200% engagement increase',
    icon: Users
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Neuroscience Professor',
    organization: 'MIT',
    content: 'The EEG research system has transformed our neuroscience department. We can now conduct studies that were previously impossible, leading to groundbreaking discoveries.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Research Director',
    organization: 'Stanford Neuroscience Institute',
    content: 'Our research productivity has increased dramatically with these tools. The data quality and collection speed have exceeded all our expectations.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Dr. Emily Johnson',
    role: 'Cognitive Science Professor',
    organization: 'Harvard University',
    content: 'The academic integration has been seamless. Our students can now conduct sophisticated research projects that prepare them for cutting-edge careers.',
    rating: 5,
    avatar: 'EJ'
  }
]

export default function ResearchAcademiaPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900" />}>
        <ParticleBackground />
      </Suspense>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-indigo-900" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 70%)'
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
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Research & Academia Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Research &
              </span>
              <br />
              <span className="text-white">
                Academia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Empower academic research and scientific discovery with advanced neurotechnology solutions. 
              Accelerate breakthroughs, enhance educational programs, and support the next generation of neuroscience researchers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <span>Request Research Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Research Guide</span>
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
              Research & Academia Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive neurotechnology solutions designed for academic research and scientific discovery.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
              Academic Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results across various academic and research institutions.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <div className="text-purple-400 font-semibold text-lg">{useCase.metrics}</div>
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
              Trusted by Academic Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from researchers and academics who have advanced their work with our solutions.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Advance Research?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join leading academic institutions using our neurotechnology solutions to accelerate research and discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-purple-50 transition-all duration-300"
              >
                <span>Schedule Research Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
              >
                <span>Contact Research Team</span>
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
