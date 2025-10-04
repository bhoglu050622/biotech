'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Heart,
  Lightbulb,
  TrendingUp
} from 'lucide-react'

const missionPillars = [
  {
    title: 'Defense Innovation',
    description: 'Enhancing national security through advanced neurotechnology solutions for military applications',
    icon: Shield,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    title: 'Human Performance',
    description: 'Maximizing human potential through cutting-edge biometric monitoring and cognitive enhancement',
    icon: Brain,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    title: 'Safety Excellence',
    description: 'Ensuring the highest standards of safety and reliability in all our neurotechnology solutions',
    icon: Award,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    title: 'Global Impact',
    description: 'Creating solutions that improve human performance and safety worldwide',
    icon: Globe,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const visionGoals = [
  {
    year: '2025',
    title: 'Advanced Pilot Systems',
    description: 'Deploy next-generation pilot headgear across IAF and international defense forces',
    icon: Shield
  },
  {
    year: '2026',
    title: 'Healthcare Integration',
    description: 'Expand EEG solutions to major healthcare institutions for neurological diagnostics',
    icon: Heart
  },
  {
    year: '2027',
    title: 'AI-Powered Analytics',
    description: 'Launch AI-driven biometric analytics platform for real-time performance optimization',
    icon: Brain
  },
  {
    year: '2030',
    title: 'Global Leadership',
    description: 'Establish Sentient Biotech as the global leader in neurotechnology solutions',
    icon: Globe
  }
]

const coreValues = [
  {
    title: 'Innovation Excellence',
    description: 'Pioneering breakthrough technologies that push the boundaries of what\'s possible in neurotechnology',
    icon: Lightbulb,
    details: [
      'Continuous R&D investment',
      'Cutting-edge technology adoption',
      'Breakthrough innovation focus'
    ]
  },
  {
    title: 'Defense Commitment',
    description: 'Dedicated to strengthening national security through advanced biometric monitoring solutions',
    icon: Shield,
    details: [
      'IAF partnership excellence',
      'DRDO certification standards',
      'Defense-grade security protocols'
    ]
  },
  {
    title: 'Research Integrity',
    description: 'Maintaining the highest standards of scientific rigor and ethical research practices',
    icon: Award,
    details: [
      'Peer-reviewed research',
      'Ethical AI development',
      'Transparent methodologies'
    ]
  },
  {
    title: 'Human-Centric Design',
    description: 'Creating solutions that enhance human capabilities while maintaining dignity and privacy',
    icon: Users,
    details: [
      'Privacy-first approach',
      'User experience focus',
      'Accessibility considerations'
    ]
  }
]

const impactMetrics = [
  {
    metric: '35%',
    description: 'Improvement in pilot mission success rates',
    icon: TrendingUp
  },
  {
    metric: '40%',
    description: 'Faster neurological diagnosis times',
    icon: Brain
  },
  {
    metric: '50%',
    description: 'Reduction in training time for new pilots',
    icon: Award
  },
  {
    metric: '99.9%',
    description: 'System reliability and uptime',
    icon: Shield
  }
]

export default function MissionVisionPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Driving the future of neurotechnology through innovation, excellence, 
              and unwavering commitment to human performance and safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="glass-panel-strong rounded-2xl p-8 max-w-4xl mx-auto">
              <Target className="w-16 h-16 text-electric-cyan mx-auto mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                To revolutionize human-machine interfaces through cutting-edge neurotechnology, 
                enhancing performance and safety in defense, aerospace, and healthcare applications 
                while maintaining the highest standards of innovation, reliability, and ethical practice.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">{pillar.title}</h3>
                <p className="text-white/70 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="glass-panel-strong rounded-2xl p-8 max-w-4xl mx-auto">
              <Eye className="w-16 h-16 text-violet-accent mx-auto mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                To be the global leader in neurotechnology solutions, creating a world where 
                human-machine interfaces seamlessly enhance human capabilities, improve safety, 
                and unlock new possibilities for human performance across all sectors.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionGoals.map((goal, index) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-electric-cyan font-bold">{goal.year}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white font-semibold">{goal.title}</span>
                    </div>
                    <p className="text-white/70 text-sm">{goal.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Core Values
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our values guide every decision, innovation, and partnership we pursue.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                    <p className="text-white/70 text-sm">{value.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-electric-cyan mb-2">{metric.metric}</div>
                <p className="text-white/70 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Be part of the future of neurotechnology. Together, we can create solutions 
              that enhance human performance and safety across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Partner with Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
