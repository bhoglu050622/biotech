'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Cpu, 
  Brain, 
  Activity, 
  Zap,
  CheckCircle,
  Award,
  Users,
  Globe
} from 'lucide-react'

const technologies = [
  'Neurofeedback',
  'Biofeedback',
  'Brain-Computer Interfaces (BCIs)',
  'Non-invasive neuroimaging',
  'Real-time feedback systems',
  'EEG technology',
  'Advanced sensors',
  'Machine learning algorithms'
]

const trustBadges = [
  {
    icon: Shield,
    title: 'Non-invasive',
    description: 'Safe, comfortable technology that doesn\'t require any surgical procedures',
    color: 'from-electric-cyan to-violet-accent'
  },
  {
    icon: Lock,
    title: 'Data-first Privacy',
    description: 'Your data stays local when possible, with end-to-end encryption',
    color: 'from-violet-accent to-soft-teal'
  },
  {
    icon: Users,
    title: 'Made for Everyday Use',
    description: 'Designed for comfort and ease of use in daily life',
    color: 'from-soft-teal to-electric-cyan'
  },
  {
    icon: Award,
    title: 'Research-backed',
    description: 'Built on decades of neuroscience and psychology research',
    color: 'from-electric-cyan to-soft-teal'
  }
]

const researchAreas = [
  {
    title: 'Neuroscience',
    description: 'Advanced brain imaging and signal processing techniques',
    icon: Brain
  },
  {
    title: 'Psychology',
    description: 'Evidence-based therapeutic approaches and interventions',
    icon: Activity
  },
  {
    title: 'Technology',
    description: 'Cutting-edge hardware and software development',
    icon: Cpu
  },
  {
    title: 'Accessibility',
    description: 'Making mental health tools available to everyone',
    icon: Globe
  }
]

export default function TechTrust() {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-electric-cyan/5 to-violet-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-accent/5 to-soft-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Science & Technology</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Built on solid scientific foundations with cutting-edge technology, 
            our solutions prioritize safety, privacy, and accessibility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="glass-panel-strong rounded-2xl p-8 neural-glow">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Our Technology Stack
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="glass-panel rounded-lg p-3 text-center cursor-pointer"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                      <span className="text-sm font-medium text-white">{tech}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-glass-white-strong pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Safety & Privacy</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our technology is designed with privacy and safety as core principles. 
                  We use non-invasive methods that don't require any medication or surgical procedures. 
                  Data processing happens locally when possible, and all data transmission is encrypted 
                  with industry-standard security protocols.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon
                return (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-panel-strong rounded-xl p-6 neural-glow cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {badge.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="glass-panel-strong rounded-3xl p-12 neural-glow-strong"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Research Foundation</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our technology is built on decades of research across multiple disciplines, 
              ensuring evidence-based approaches to mental health and wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-electric-cyan/25"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {area.title}
                  </h4>
                  
                  <p className="text-white/60 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Interested in learning more about our research and development?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Contact Our Research Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
