'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Shield, Lock, FileText, User, Globe, Info, CheckCircle, AlertTriangle, Eye, Database, Key, Settings, ArrowRight } from 'lucide-react'

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We implement industry-leading security measures to protect your personal and neural data.',
    details: [
      'End-to-end encryption for all data transmission',
      'Secure data storage with military-grade encryption',
      'Regular security audits and penetration testing',
      'Compliance with international data protection standards'
    ],
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    icon: Lock,
    title: 'Privacy by Design',
    description: 'Privacy considerations are integrated into every aspect of our technology and processes.',
    details: [
      'Minimal data collection principles',
      'Data anonymization and pseudonymization',
      'User consent management systems',
      'Privacy impact assessments for all features'
    ],
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We maintain complete transparency about how we collect, use, and protect your data.',
    details: [
      'Clear and accessible privacy policies',
      'Regular privacy policy updates',
      'User-friendly data management tools',
      'Open communication about data practices'
    ],
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    icon: User,
    title: 'User Control',
    description: 'You have complete control over your personal data and how it is used.',
    details: [
      'Easy data access and portability',
      'Data deletion and correction rights',
      'Consent withdrawal mechanisms',
      'Privacy preference management'
    ],
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const dataTypes = [
  {
    category: 'Personal Information',
    icon: User,
    description: 'Basic personal details and contact information',
    examples: ['Name', 'Email address', 'Phone number', 'Company information'],
    purpose: 'Account management and communication',
    retention: 'Until account deletion or 7 years for legal compliance',
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    category: 'Neural Data',
    icon: Brain,
    description: 'EEG signals and brain activity patterns',
    examples: ['EEG recordings', 'Neural signal patterns', 'Cognitive state data', 'Performance metrics'],
    purpose: 'Product functionality and service delivery',
    retention: 'User-controlled, can be deleted at any time',
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    category: 'Usage Data',
    icon: Database,
    description: 'Information about how you use our services',
    examples: ['Feature usage', 'Session duration', 'Error logs', 'Performance data'],
    purpose: 'Service improvement and optimization',
    retention: '2 years or until account deletion',
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    category: 'Technical Data',
    icon: Settings,
    description: 'Device and system information',
    examples: ['Device specifications', 'Operating system', 'Browser information', 'IP address'],
    purpose: 'Technical support and compatibility',
    retention: '1 year or until account deletion',
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const userRights = [
  {
    right: 'Right to Access',
    description: 'You can request a copy of all personal data we hold about you',
    icon: Eye,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    right: 'Right to Rectification',
    description: 'You can request correction of inaccurate or incomplete data',
    icon: FileText,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    right: 'Right to Erasure',
    description: 'You can request deletion of your personal data',
    icon: Trash2,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    right: 'Right to Portability',
    description: 'You can request transfer of your data to another service',
    icon: Download,
    color: 'from-primary-cyan to-secondary-cyan'
  },
  {
    right: 'Right to Object',
    description: 'You can object to processing of your data for certain purposes',
    icon: AlertTriangle,
    color: 'from-primary-orange to-secondary-orange'
  },
  {
    right: 'Right to Restrict Processing',
    description: 'You can request limitation of how we process your data',
    icon: Settings,
    color: 'from-primary-red to-secondary-red'
  }
]

const securityMeasures = [
  {
    measure: 'Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
    icon: Key,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    measure: 'Access Controls',
    description: 'Strict access controls and authentication mechanisms to prevent unauthorized access',
    icon: Lock,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    measure: 'Regular Audits',
    description: 'Regular security audits and penetration testing to identify and address vulnerabilities',
    icon: Shield,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    measure: 'Data Minimization',
    description: 'We collect only the minimum data necessary for our services to function',
    icon: Database,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

export default function PrivacyPage() {
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
              <span className="text-primary-blue font-medium">Privacy Policy</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Your Privacy is
              <span className="block gradient-text">Our Priority</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal and neural data. Learn about our privacy practices and your rights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Download Policy</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>Contact Privacy Team</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Privacy Principles</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We follow strict privacy principles to ensure your data is protected and used responsibly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{principle.title}</h3>
                    <p className="text-slate-300">{principle.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {principle.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Types of Data We Collect</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We collect only the data necessary to provide our services and improve your experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={dataType.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${dataType.color} rounded-lg flex items-center justify-center`}>
                    <dataType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{dataType.category}</h3>
                    <p className="text-slate-300 text-sm">{dataType.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dataType.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="badge-info text-xs">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Purpose:</h4>
                  <p className="text-slate-300 text-sm">{dataType.purpose}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Retention:</h4>
                  <p className="text-slate-300 text-sm">{dataType.retention}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              You have complete control over your personal data and how it is used.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${right.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <right.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{right.right}</h3>
                <p className="text-slate-300">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Security Measures</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your data and ensure your privacy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.measure}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${measure.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <measure.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{measure.measure}</h3>
                <p className="text-slate-300">{measure.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Privacy?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                If you have any questions about our privacy practices or want to exercise your privacy rights, please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Contact Privacy Team</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Download Full Policy</span>
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