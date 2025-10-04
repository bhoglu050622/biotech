'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, Target, Heart, Shield } from 'lucide-react'

const bciSteps = [
  {
    title: 'Signal Capture',
    description: 'Direct communication between brain and external devices',
    details: 'Our EEG headset captures brain signals through non-invasive sensors, translating neural activity into digital data in real-time.',
    icon: Brain
  },
  {
    title: 'Analysis',
    description: 'Captures brain signals and translates them into commands',
    details: 'Advanced algorithms process the neural data to identify patterns related to focus, relaxation, and stress states.',
    icon: Cpu
  },
  {
    title: 'Feedback',
    description: 'Provides real-time insights into cognitive states',
    details: 'Users receive immediate, personalized feedback through visual, auditory, or haptic cues to guide their mental state.',
    icon: Zap
  }
]

const psychologySteps = [
  {
    title: 'Be At It',
    description: 'Positive psychology approach to mental resilience',
    details: 'Focusing on building positive mental processes, strengths, and capabilities through neurofeedback training.',
    icon: Target
  },
  {
    title: 'Beat It',
    description: 'Addressing negative mental processes',
    details: 'Systematically reducing stress, anxiety, and negative thought patterns through targeted biofeedback interventions.',
    icon: Shield
  },
  {
    title: 'Equilibrium',
    description: 'Balanced dual-process approach',
    details: 'Integrating both positive and negative psychology to create a comprehensive framework for mental wellness.',
    icon: Heart
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-deep-indigo/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            Our technology combines cutting-edge Brain-Computer Interface (BCI) with Equilibrium Psychology to create a comprehensive approach to mental wellness.
          </p>
        </motion.div>

        {/* BCI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-white mb-4">Brain-Computer Interface</h3>
            <p className="text-white/70 max-w-3xl mx-auto">
              Revolutionary technology that allows direct communication between the brain and external devices, providing non-invasive, real-time insights into cognitive states.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bciSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="glass-panel-strong rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-white/70 mb-4">{step.description}</p>
                  <p className="text-white/60 text-sm">{step.details}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Psychology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-white mb-4">Equilibrium Psychology</h3>
            <p className="text-white/70 max-w-3xl mx-auto">
              A novel psychological framework that balances positive and negative aspects of human experience, using a binary approach similar to modern computing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {psychologySteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="glass-panel-strong rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-accent to-soft-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-white/70 mb-4">{step.description}</p>
                  <p className="text-white/60 text-sm">{step.details}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Integrated Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel-strong rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Integrated Approach</h3>
            <p className="text-white/70 mb-6">
              By combining BCI technology with Equilibrium Psychology, we create a comprehensive system that addresses both the technical and psychological aspects of mental wellness. This dual approach ensures that users not only receive real-time feedback but also develop sustainable mental resilience strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn More About Our Science
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}