'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, Target, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react'

const bciSteps = [
  {
    icon: Brain,
    title: 'Signal Capture',
    description: 'Direct communication between brain and external devices',
    details: 'Our EEG headset captures brain signals through non-invasive sensors, translating neural activity into digital data in real-time.'
  },
  {
    icon: Cpu,
    title: 'Analysis',
    description: 'Captures brain signals and translates them into commands',
    details: 'Advanced algorithms process the neural data to identify patterns related to focus, relaxation, and stress states.'
  },
  {
    icon: Zap,
    title: 'Feedback',
    description: 'Provides real-time insights into cognitive states',
    details: 'Users receive immediate, personalized feedback through visual, auditory, or haptic cues to guide their mental state.'
  }
]

const eqpConcepts = [
  {
    icon: Target,
    title: 'Be At It',
    description: 'Positive psychology approach to mental resilience',
    details: 'Focusing on building positive mental processes, strengths, and capabilities through neurofeedback training.'
  },
  {
    icon: ArrowDown,
    title: 'Beat It',
    description: 'Addressing negative mental processes',
    details: 'Systematically reducing stress, anxiety, and negative thought patterns through targeted biofeedback interventions.'
  },
  {
    icon: ArrowUp,
    title: 'Equilibrium',
    description: 'Balanced dual-process approach',
    details: 'Integrating both positive and negative psychology to create a comprehensive framework for mental wellness.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-electric-cyan/10 to-violet-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-violet-accent/10 to-soft-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">How it works</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Our technology combines cutting-edge Brain-Computer Interface (BCI) with 
            Equilibrium Psychology to create a comprehensive approach to mental wellness.
          </p>
        </motion.div>

        {/* BCI Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              <span className="text-white">Brain-Computer Interface</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Revolutionary technology that allows direct communication between the brain and external devices, 
              providing non-invasive, real-time insights into cognitive states.
            </p>
          </div>

          {/* BCI Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {bciSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < bciSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-electric-cyan/50 to-transparent z-0" />
                  )}

                  <div className="glass-panel-strong rounded-2xl p-8 h-full relative z-10 neural-glow">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-display font-bold text-white mb-3">
                        {step.title}
                      </h4>
                      <p className="text-white/80 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Equilibrium Psychology Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              <span className="text-white">Equilibrium Psychology</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              A novel psychological framework that balances positive and negative aspects of human experience, 
              using a binary approach similar to modern computing systems.
            </p>
          </div>

          {/* EqP Concepts */}
          <div className="grid md:grid-cols-3 gap-8">
            {eqpConcepts.map((concept, index) => {
              const IconComponent = concept.icon
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-panel-strong rounded-2xl p-8 h-full neural-glow">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-accent to-soft-teal flex items-center justify-center"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-display font-bold text-white mb-3">
                        {concept.title}
                      </h4>
                      <p className="text-white/80 mb-4 leading-relaxed">
                        {concept.description}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {concept.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-panel-strong rounded-3xl p-12 text-center neural-glow-strong">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-electric-cyan via-violet-accent to-soft-teal flex items-center justify-center"
            >
              <Brain className="w-12 h-12 text-white" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              <span className="gradient-text">Integrated Approach</span>
            </h3>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              By combining BCI technology with Equilibrium Psychology, we create a comprehensive 
              system that addresses both the technical and psychological aspects of mental wellness. 
              This dual approach ensures that users not only receive real-time feedback but also 
              develop sustainable mental resilience strategies.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
            >
              <span>Learn More About Our Science</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
