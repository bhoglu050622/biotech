'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Target, 
  Zap, 
  Shield, 
  Brain, 
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

export default function HumanMachineInterfacePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-indigo-900">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900/50 to-indigo-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8"
              >
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">Human-Machine Interface</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Human-Machine Interface
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Revolutionary interfaces that enable seamless interaction between humans and technology through neural signals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <span>Download Specs</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">HMI Control System</h3>
                        <p className="text-slate-300">Neural command interface</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
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
              Interface Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced human-machine interfaces for seamless neural control and interaction.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Neural Command Control',
                description: 'Direct brain-to-machine communication for intuitive control',
                color: 'from-cyan-500 to-blue-400',
                bgColor: 'bg-cyan-500/10',
                borderColor: 'border-cyan-500/20'
              },
              {
                icon: Eye,
                title: 'Visual Feedback Systems',
                description: 'Real-time visual interfaces for enhanced user experience',
                color: 'from-blue-500 to-purple-400',
                bgColor: 'bg-blue-500/10',
                borderColor: 'border-blue-500/20'
              },
              {
                icon: Zap,
                title: 'Instant Response',
                description: 'Ultra-low latency for real-time interaction and control',
                color: 'from-purple-500 to-pink-400',
                bgColor: 'bg-purple-500/10',
                borderColor: 'border-purple-500/20'
              },
              {
                icon: Shield,
                title: 'Secure Communication',
                description: 'Encrypted neural data transmission for privacy and security',
                color: 'from-pink-500 to-red-400',
                bgColor: 'bg-pink-500/10',
                borderColor: 'border-pink-500/20'
              }
            ].map((feature, index) => (
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

      {/* Applications Section */}
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
              Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Versatile human-machine interfaces for diverse applications and industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Defense & Aerospace',
                description: 'Pilot control systems and mission-critical interfaces',
                icon: Shield,
                color: 'from-blue-600 to-blue-400',
                bgColor: 'bg-blue-500/5'
              },
              {
                title: 'Healthcare',
                description: 'Assistive technology and rehabilitation systems',
                icon: Heart,
                color: 'from-emerald-600 to-emerald-400',
                bgColor: 'bg-emerald-500/5'
              },
              {
                title: 'Research',
                description: 'Neuroscience research and cognitive studies',
                icon: Brain,
                color: 'from-purple-600 to-purple-400',
                bgColor: 'bg-purple-500/5'
              }
            ].map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`${app.bgColor} border border-white/10 rounded-2xl p-8`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-slate-300">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
