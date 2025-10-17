'use client'

import { motion } from 'framer-motion'
import { Brain, Eye, Zap, Shield, Target, Wifi, Battery, Cpu } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: "Total Situational Awareness",
    description: "A wide-field-of-view augmented reality interface fuses flight data, sensor feeds, and threat intelligence into a single, unified display, allowing the pilot to see and understand everything without looking down.",
    color: "text-electric-cyan",
    bgColor: "bg-electric-cyan/10"
  },
  {
    icon: Brain,
    title: "Pilot State Monitoring",
    description: "A suite of non-invasive biosensors integrated into the helmet lining continuously monitors the pilot's cognitive load and fatigue levels, providing alerts to maintain peak performance and safety.",
    color: "text-violet-accent",
    bgColor: "bg-violet-accent/10"
  },
  {
    icon: Target,
    title: "Intuitive HCI-Ready Control",
    description: "The system is built on a Human-Computer Interface (HCI) ready architecture, paving the way for future integration of thought-driven commands for non-critical systems, enabling true hands-free operation.",
    color: "text-soft-teal",
    bgColor: "bg-soft-teal/10"
  },
  {
    icon: Shield,
    title: "Uncompromising Performance",
    description: "Constructed from advanced, lightweight composite materials, the headgear provides superior protection and comfort for long-duration missions without sacrificing agility.",
    color: "text-electric-cyan",
    bgColor: "bg-electric-cyan/10"
  }
]

const specs = [
  { label: "Response Time", value: "< 10ms", icon: Zap },
  { label: "Battery Life", value: "12+ hours", icon: Battery },
  { label: "Processing Power", value: "Neural AI Core", icon: Cpu },
  { label: "Protection Level", value: "Military Grade", icon: Shield }
]

export default function StarscreamFeatures() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(0, 230, 255, 0.05) 0%, transparent 70%)',
              'radial-gradient(circle at 70% 80%, rgba(170, 100, 255, 0.05) 0%, transparent 70%)',
              'radial-gradient(circle at 30% 20%, rgba(0, 230, 255, 0.05) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">The System's</span> Pillars
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0, 230, 255, 0.2)" 
              }}
              className="glass-panel-strong rounded-2xl p-8 neural-glow hover:neural-glow-strong transition-all duration-300"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel-strong rounded-3xl p-12 neural-glow"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Technical Specifications</h3>
            <p className="text-white/70">Military-grade performance metrics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan/20 to-violet-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-8 h-8 text-electric-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{spec.value}</div>
                <div className="text-white/60">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
