'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Moon, 
  Target, 
  Heart, 
  Zap, 
  Shield, 
  Activity
} from 'lucide-react'

const useCases = [
  {
    icon: Brain,
    title: 'Stress Management',
    description: 'Real-time biofeedback to lower acute stress and build resilience',
    benefits: [
      'Immediate stress detection',
      'Personalized relaxation techniques',
      'Long-term stress reduction',
      'Improved emotional regulation'
    ],
    gradient: 'from-accent-light-blue to-secondary-green',
    bgGradient: 'from-accent-light-blue/10 to-secondary-green/10'
  },
  {
    icon: Moon,
    title: 'Sleep Improvement',
    description: 'Track and improve sleep quality using wearable insights and neurofeedback',
    benefits: [
      'Sleep pattern analysis',
      'Optimal bedtime recommendations',
      'Sleep quality optimization',
      'Circadian rhythm alignment'
    ],
    gradient: 'from-secondary-green to-soft-teal',
    bgGradient: 'from-secondary-green/10 to-soft-teal/10'
  },
  {
    icon: Target,
    title: 'Cognitive Training',
    description: 'Improve focus and mental performance with targeted neurofeedback',
    benefits: [
      'Enhanced concentration',
      'Improved working memory',
      'Faster decision making',
      'Increased mental clarity'
    ],
    gradient: 'from-soft-teal to-accent-light-blue',
    bgGradient: 'from-soft-teal/10 to-accent-light-blue/10'
  },
  {
    icon: Heart,
    title: 'Mental Wellness',
    description: 'Holistic approach to mental health through integrated mind-body monitoring',
    benefits: [
      'Mood tracking and insights',
      'Anxiety management tools',
      'Emotional balance training',
      'Wellness habit formation'
    ],
    gradient: 'from-accent-light-blue to-soft-teal',
    bgGradient: 'from-accent-light-blue/10 to-soft-teal/10'
  },
  {
    icon: Zap,
    title: 'Peak Performance',
    description: 'Optimize mental and physical performance for athletes and professionals',
    benefits: [
      'Flow state induction',
      'Performance optimization',
      'Recovery monitoring',
      'Mental resilience building'
    ],
    gradient: 'from-secondary-green to-accent-light-blue',
    bgGradient: 'from-secondary-green/10 to-accent-light-blue/10'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Early detection and prevention of mental health issues through continuous monitoring',
    benefits: [
      'Early warning systems',
      'Preventive interventions',
      'Health trend analysis',
      'Personalized recommendations'
    ],
    gradient: 'from-soft-teal to-secondary-green',
    bgGradient: 'from-soft-teal/10 to-secondary-green/10'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-light-blue/5 to-secondary-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-green/5 to-soft-teal/5 rounded-full blur-3xl" />
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
            <span className="gradient-text">Use Cases & Benefits</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Our neurotechnology solutions address diverse mental health and wellness needs, 
            making advanced brain monitoring accessible for everyday use.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="glass-panel-strong rounded-2xl p-8 h-full neural-glow hover:neural-glow-strong transition-all duration-300">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-50 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-primary-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-display font-bold text-primary-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: benefitIndex * 0.1, duration: 0.3 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-light-blue rounded-full flex-shrink-0" />
                          <span className="text-white/60 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-light-blue/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    initial={false}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Ready to transform your mental health journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
