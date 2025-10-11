'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Moon, 
  Target, 
  Heart, 
  Zap, 
  Shield, 
  Activity,
  TrendingUp,
  Users,
  Clock
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
    gradient: 'from-electric-cyan to-violet-accent',
    bgGradient: 'from-electric-cyan/10 to-violet-accent/10'
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
    gradient: 'from-violet-accent to-soft-teal',
    bgGradient: 'from-violet-accent/10 to-soft-teal/10'
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
    gradient: 'from-soft-teal to-electric-cyan',
    bgGradient: 'from-soft-teal/10 to-electric-cyan/10'
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
    gradient: 'from-electric-cyan to-soft-teal',
    bgGradient: 'from-electric-cyan/10 to-soft-teal/10'
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
    gradient: 'from-violet-accent to-electric-cyan',
    bgGradient: 'from-violet-accent/10 to-electric-cyan/10'
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
    gradient: 'from-soft-teal to-violet-accent',
    bgGradient: 'from-soft-teal/10 to-violet-accent/10'
  }
]

const stats = [
  {
    icon: Users,
    value: '10M+',
    label: 'People with mental health needs',
    description: 'Worldwide who could benefit from accessible neurotech'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Improvement rate',
    description: 'In stress management with regular neurofeedback training'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Continuous monitoring',
    description: 'Real-time insights into your mental and physical well-being'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-cyan/5 to-violet-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-accent/5 to-soft-teal/5 rounded-full blur-3xl" />
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
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-display font-bold text-white mb-3">
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
                          <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                          <span className="text-white/60 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-violet-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    initial={false}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="glass-panel-strong rounded-3xl p-12 neural-glow-strong"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Impact & Results</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our technology is designed to make a meaningful difference in people's lives, 
              with measurable improvements in mental health and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center"
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  
                  <p className="text-white/60 text-sm leading-relaxed">
                    {stat.description}
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
