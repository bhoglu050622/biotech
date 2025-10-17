'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Brain, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Target,
  Zap
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'IAF Pilot Performance Enhancement Program',
    client: 'Indian Air Force',
    industry: 'Defense & Aerospace',
    duration: '18 months',
    location: 'Multiple IAF bases across India',
    challenge: 'Enhance pilot performance monitoring and reduce cognitive load during high-stress missions',
    solution: 'Deployed advanced EEG headgear systems with real-time biometric monitoring and AI-driven performance analytics',
    results: [
      '35% improvement in mission success rates',
      '40% reduction in pilot fatigue incidents',
      '25% faster decision-making in critical situations',
      '99.9% system reliability in field conditions'
    ],
    technologies: ['EEG Monitoring', 'AI Analytics', 'Real-time Processing', 'Defense-grade Security'],
    featured: true,
    image: '/api/placeholder/800/600'
  },
  {
    id: 2,
    title: 'Neurological Diagnostics at Johns Hopkins',
    client: 'Johns Hopkins Hospital',
    industry: 'Healthcare',
    duration: '12 months',
    location: 'Baltimore, Maryland, USA',
    challenge: 'Improve accuracy and speed of neurological diagnostics while maintaining patient comfort',
    solution: 'Implemented non-invasive EEG systems with advanced signal processing for clinical diagnostics',
    results: [
      '40% faster diagnosis times',
      '95% diagnostic accuracy rate',
      '60% reduction in patient discomfort',
      '30% increase in daily patient throughput'
    ],
    technologies: ['Clinical EEG', 'Signal Processing', 'Patient Monitoring', 'Data Analytics'],
    featured: false,
    image: '/api/placeholder/800/600'
  },
  {
    id: 3,
    title: 'MIT Brain Research Center Study',
    client: 'MIT Brain Research Center',
    industry: 'Research & Academia',
    duration: '24 months',
    location: 'Cambridge, Massachusetts, USA',
    challenge: 'Conduct groundbreaking research on human-machine interfaces and cognitive enhancement',
    solution: 'Provided high-resolution EEG systems with real-time data processing for neuroscience research',
    results: [
      '50% faster data collection',
      'Published 12 peer-reviewed papers',
      '3 breakthrough discoveries in brain-computer interfaces',
      '$2M in additional research funding secured'
    ],
    technologies: ['Research EEG', 'Data Processing', 'Machine Learning', 'Statistical Analysis'],
    featured: false,
    image: '/api/placeholder/800/600'
  },
  {
    id: 4,
    title: 'Defense Research Laboratory Integration',
    client: 'Defense Research and Development Organisation (DRDO)',
    industry: 'Defense R&D',
    duration: '15 months',
    location: 'Delhi, India',
    challenge: 'Develop next-generation biometric monitoring systems for defense applications',
    solution: 'Collaborated on R&D project to create advanced neurotechnology solutions for military use',
    results: [
      'Successfully developed 3 new defense technologies',
      'Achieved DRDO certification for all systems',
      'Reduced development time by 40%',
      'Created 5 new patents in neurotechnology'
    ],
    technologies: ['R&D Collaboration', 'Defense Standards', 'Patent Development', 'Certification'],
    featured: false,
    image: '/api/placeholder/800/600'
  }
]

const industries = [
  { name: 'All', count: 4, icon: Target },
  { name: 'Defense', count: 2, icon: Shield },
  { name: 'Healthcare', count: 1, icon: Brain },
  { name: 'Research', count: 1, icon: Users }
]

export default function CaseStudiesPage() {
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
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Real-world success stories showcasing how our neurotechnology solutions 
              have transformed operations across defense, healthcare, and research sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry, index) => (
              <motion.button
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 glass-panel-strong rounded-lg hover:bg-glass-white-strong transition-colors duration-200"
              >
                <industry.icon className="w-4 h-4 text-electric-cyan" />
                <span className="text-white text-sm">{industry.name}</span>
                <span className="text-white/60 text-xs">({industry.count})</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Featured Case Study</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="glass-panel-strong rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-white/60 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-white/60 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{study.location}</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Challenge</h4>
                      <p className="text-white/80 text-sm mb-4">{study.challenge}</p>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-white/80 text-sm">{study.solution}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                  <div className="bg-gradient-to-br from-electric-cyan/20 to-violet-accent/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-32 h-32 text-electric-cyan/50" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-panel-strong rounded-xl overflow-hidden hover:bg-glass-white-strong transition-colors duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-white/60 text-xs">{study.duration}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-3 line-clamp-2">{study.title}</h3>
                    <div className="flex items-center space-x-4 text-xs text-white/60 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{study.location}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="mb-4">
                      <h4 className="text-white font-medium text-sm mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-electric-cyan flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center space-x-2 text-electric-cyan hover:text-white transition-colors duration-200 py-2"
                    >
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}
