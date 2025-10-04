'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { MilitaryTech, HeartPulse, FlaskConical, GraduationCap, Brain, Rocket, Shield, Stethoscope, BookOpen, Users, Lightbulb, Settings, ArrowRight, CheckCircle, Award, TrendingUp } from 'lucide-react'

const solutions = [
  {
    icon: MilitaryTech,
    title: 'Defense & Aerospace',
    description: 'Advanced neurotechnology solutions for military pilots, enhancing situational awareness and performance in high-stress environments.',
    features: [
      'Real-time cognitive load monitoring',
      'Enhanced pilot performance tracking',
      'Fatigue detection and alert systems',
      'Mission-critical decision support',
      'Secure data transmission protocols',
      'Military-grade durability and reliability'
    ],
    benefits: [
      '35% improvement in mission success rates',
      '50% reduction in pilot fatigue incidents',
      '90% pilot satisfaction rating',
      'Real-time health monitoring capabilities'
    ],
    applications: ['Military Aviation', 'Space Exploration', 'Defense Operations', 'Training Simulation'],
    color: 'from-primary-blue to-secondary-blue',
    stats: { pilots: '500+', missions: '10,000+', success: '95%', satisfaction: '90%' }
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Comprehensive neurotechnology solutions for medical diagnosis, treatment monitoring, and patient care optimization.',
    features: [
      'Non-invasive brain monitoring',
      'Real-time neurological assessment',
      'Predictive health analytics',
      'Remote patient monitoring',
      'Clinical decision support systems',
      'Integration with medical devices'
    ],
    benefits: [
      '40% faster diagnosis times',
      '60% improvement in treatment outcomes',
      '85% patient satisfaction rating',
      'Reduced hospital readmission rates'
    ],
    applications: ['Neurology', 'Psychiatry', 'Rehabilitation', 'Mental Health'],
    color: 'from-primary-emerald to-secondary-emerald',
    stats: { patients: '2,000+', hospitals: '50+', accuracy: '98%', outcomes: '+60%' }
  },
  {
    icon: FlaskConical,
    title: 'Research & Academia',
    description: 'Cutting-edge research tools and platforms for neuroscience studies, cognitive research, and academic investigations.',
    features: [
      'High-precision data collection',
      'Multi-modal signal integration',
      'Advanced analytics and visualization',
      'Collaborative research platforms',
      'Real-time data processing',
      'Scalable research infrastructure'
    ],
    benefits: [
      '50% faster research data collection',
      '30% improvement in research accuracy',
      'Enhanced collaboration capabilities',
      'Streamlined research workflows'
    ],
    applications: ['Neuroscience Research', 'Cognitive Studies', 'Human Performance', 'Academic Research'],
    color: 'from-primary-violet to-secondary-violet',
    stats: { papers: '25+', universities: '75+', researchers: '500+', studies: '100+' }
  },
  {
    icon: GraduationCap,
    title: 'Simulation & Training',
    description: 'Immersive training solutions that enhance learning outcomes through neurotechnology-enhanced simulation environments.',
    features: [
      'Adaptive learning algorithms',
      'Real-time performance feedback',
      'Cognitive load optimization',
      'Personalized training programs',
      'Virtual reality integration',
      'Progress tracking and analytics'
    ],
    benefits: [
      '45% faster skill acquisition',
      '70% improvement in retention rates',
      'Personalized learning experiences',
      'Enhanced training effectiveness'
    ],
    applications: ['Pilot Training', 'Medical Training', 'Professional Development', 'Skill Enhancement'],
    color: 'from-primary-cyan to-secondary-cyan',
    stats: { trainees: '1,000+', programs: '25+', effectiveness: '85%', retention: '70%' }
  }
]

const caseStudies = [
  {
    title: 'Military Pilot Enhancement Program',
    organization: 'Indian Air Force',
    challenge: 'Improving pilot performance and reducing fatigue in high-stress combat situations.',
    solution: 'Implemented advanced EEG monitoring headgear with real-time cognitive load assessment.',
    results: [
      '35% improvement in mission success rates',
      '50% reduction in pilot fatigue incidents',
      '90% pilot satisfaction rating',
      'Real-time health monitoring capabilities'
    ],
    icon: MilitaryTech,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    title: 'Neurological Diagnosis System',
    organization: 'Johns Hopkins Hospital',
    challenge: 'Faster and more accurate diagnosis of neurological conditions.',
    solution: 'Deployed AI-powered EEG analysis system for real-time neurological assessment.',
    results: [
      '40% faster diagnosis times',
      '60% improvement in treatment outcomes',
      '85% patient satisfaction rating',
      'Reduced misdiagnosis rates'
    ],
    icon: HeartPulse,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    title: 'Cognitive Research Platform',
    organization: 'MIT Brain Research Center',
    challenge: 'Advanced tools for neuroscience research and cognitive studies.',
    solution: 'Implemented comprehensive neurotechnology platform for multi-modal brain research.',
    results: [
      '50% faster data collection',
      '30% improvement in research accuracy',
      'Enhanced collaboration capabilities',
      'Streamlined research workflows'
    ],
    icon: FlaskConical,
    color: 'from-primary-violet to-secondary-violet'
  }
]

const industries = [
  {
    name: 'Defense & Military',
    description: 'Enhancing military capabilities through advanced neurotechnology solutions.',
    icon: Shield,
    color: 'from-primary-blue to-secondary-blue',
    clients: '15+',
    projects: '50+',
    satisfaction: '95%'
  },
  {
    name: 'Healthcare & Medical',
    description: 'Transforming patient care with innovative neurotechnology applications.',
    icon: Stethoscope,
    color: 'from-primary-emerald to-secondary-emerald',
    clients: '50+',
    projects: '200+',
    satisfaction: '90%'
  },
  {
    name: 'Research & Academia',
    description: 'Empowering researchers with cutting-edge neurotechnology tools.',
    icon: BookOpen,
    color: 'from-primary-violet to-secondary-violet',
    clients: '75+',
    projects: '150+',
    satisfaction: '88%'
  },
  {
    name: 'Training & Education',
    description: 'Revolutionizing learning through neurotechnology-enhanced training.',
    icon: Users,
    color: 'from-primary-cyan to-secondary-cyan',
    clients: '30+',
    projects: '100+',
    satisfaction: '92%'
  }
]

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-primary-navy">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/20 border border-primary-blue/30 mb-6">
              <span className="text-primary-blue font-medium">Industry Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Tailored
              <span className="block gradient-text">Neurotechnology Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Discover how our neurotechnology solutions are transforming industries and creating new possibilities for human-machine interaction across defense, healthcare, research, and training sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>View Case Studies</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our neurotechnology solutions are designed to meet the unique challenges and requirements of different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-300">{solution.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Proven Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-primary-blue flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, appIndex) => (
                      <span key={appIndex} className="badge-info">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(solution.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-primary-blue">{value}</div>
                      <div className="text-xs text-slate-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-world implementations that demonstrate the transformative power of our neurotechnology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center`}>
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{study.title}</h3>
                    <p className="text-primary-blue text-sm">{study.organization}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-slate-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-slate-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary-emerald flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industry Impact</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our solutions are making a significant impact across multiple industries, driving innovation and delivering measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                <p className="text-slate-300 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Clients:</span>
                    <span className="text-primary-blue font-semibold">{industry.clients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Projects:</span>
                    <span className="text-primary-blue font-semibold">{industry.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Satisfaction:</span>
                    <span className="text-primary-emerald font-semibold">{industry.satisfaction}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Implementation Process</h2>
              <p className="text-xl text-slate-300 mb-8">
                Our proven implementation methodology ensures successful deployment and adoption of neurotechnology solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Assessment & Planning</h3>
                    <p className="text-slate-300">Comprehensive evaluation of your requirements and development of a customized implementation plan.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-violet to-secondary-violet rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Customization & Integration</h3>
                    <p className="text-slate-300">Tailored solution development and seamless integration with your existing systems and workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-emerald to-secondary-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Training & Support</h3>
                    <p className="text-slate-300">Comprehensive training programs and ongoing support to ensure successful adoption and optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-cyan to-secondary-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Optimization & Growth</h3>
                    <p className="text-slate-300">Continuous monitoring, optimization, and expansion to maximize the value of your neurotechnology investment.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Solutions?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary-blue" />
                    <span className="text-slate-300">Industry-leading expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary-blue" />
                    <span className="text-slate-300">Proven security and reliability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-primary-blue" />
                    <span className="text-slate-300">Customizable solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary-blue" />
                    <span className="text-slate-300">Dedicated support team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary-blue" />
                    <span className="text-slate-300">Measurable results</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Discover how our neurotechnology solutions can revolutionize your operations and deliver exceptional results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Download Case Studies</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}