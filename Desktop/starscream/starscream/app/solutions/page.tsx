'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Heart, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap,
  Award,
  Globe,
  Activity,
  Monitor,
  Headphones,
  Cpu
} from 'lucide-react'

const solutions = [
  {
    title: 'Defense & Aerospace',
    description: 'Advanced neurotechnology solutions for military and aerospace applications',
    icon: Shield,
    features: [
      'Pilot performance monitoring',
      'Cognitive load assessment',
      'Mission-critical reliability',
      'Real-time biometric analysis'
    ],
    benefits: [
      'Enhanced mission success rates',
      'Improved pilot safety',
      'Reduced cognitive fatigue',
      'Better decision-making under pressure'
    ],
    applications: ['Military Aviation', 'Defense Operations', 'Training Simulation']
  },
  {
    title: 'Healthcare',
    description: 'Non-invasive neurotechnology for medical diagnostics and treatment',
    icon: Heart,
    features: [
      'Neurological diagnostics',
      'Brain-computer interfaces',
      'Rehabilitation support',
      'Patient monitoring'
    ],
    benefits: [
      'Faster diagnosis times',
      'Improved treatment outcomes',
      'Enhanced patient comfort',
      'Better clinical insights'
    ],
    applications: ['Hospitals', 'Clinics', 'Research Centers', 'Rehabilitation']
  },
  {
    title: 'Research & Academia',
    description: 'Cutting-edge tools for neuroscience research and academic studies',
    icon: Users,
    features: [
      'High-resolution data collection',
      'Advanced signal processing',
      'Statistical analysis tools',
      'Research collaboration'
    ],
    benefits: [
      'Accelerated research',
      'Higher data quality',
      'Publication-ready results',
      'Interdisciplinary collaboration'
    ],
    applications: ['Universities', 'Research Institutes', 'Clinical Studies', 'Academic Projects']
  },
  {
    title: 'Simulation & Training',
    description: 'Immersive training solutions for complex operational environments',
    icon: Target,
    features: [
      'Virtual reality integration',
      'Real-time performance feedback',
      'Adaptive training programs',
      'Skill assessment tools'
    ],
    benefits: [
      'Reduced training time',
      'Higher skill retention',
      'Cost-effective training',
      'Standardized assessment'
    ],
    applications: ['Military Training', 'Medical Education', 'Professional Development', 'Skill Certification']
  }
]

const industryStats = [
  {
    metric: '35%',
    description: 'Improvement in pilot mission success rates',
    icon: Shield
  },
  {
    metric: '40%',
    description: 'Faster neurological diagnosis times',
    icon: Heart
  },
  {
    metric: '50%',
    description: 'Reduction in training time for complex skills',
    icon: Target
  },
  {
    metric: '99.9%',
    description: 'System reliability and uptime',
    icon: Award
  }
]

const caseStudies = [
  {
    client: 'Indian Air Force',
    solution: 'Pilot Headgear Systems',
    result: '35% improvement in mission success rates',
    icon: Shield
  },
  {
    client: 'Johns Hopkins Hospital',
    solution: 'EEG Diagnostic Systems',
    result: '40% faster diagnosis times',
    icon: Heart
  },
  {
    client: 'MIT Research Center',
    solution: 'Neuroscience Research Tools',
    result: '50% faster data collection',
    icon: Users
  }
]

export default function SolutionsPage() {
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
              Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive neurotechnology solutions tailored for defense, healthcare, 
              research, and training applications across multiple industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Industry-Specific
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Proven Results
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Custom Solutions
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
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
              Industry Solutions
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Tailored neurotechnology solutions designed to meet the specific needs of different industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">{solution.title}</h3>
                    <p className="text-white/70 text-sm">{solution.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <CheckCircle className="w-3 h-3 text-electric-cyan flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <ArrowRight className="w-3 h-3 text-electric-cyan flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-white font-medium mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
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
              Proven Results
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Measurable improvements across all our solution areas.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-electric-cyan mb-2">{stat.metric}</div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success Stories
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Real-world results from our industry-leading clients.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{study.client}</h3>
                <p className="text-electric-cyan text-sm mb-3">{study.solution}</p>
                <p className="text-white/70 text-sm">{study.result}</p>
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our neurotechnology solutions can enhance your specific use case 
              and deliver measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
