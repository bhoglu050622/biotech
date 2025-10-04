'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Calendar
} from 'lucide-react'

const privacyPrinciples = [
  {
    title: 'Data Minimization',
    description: 'We collect only the data necessary for providing our services and improving our products',
    icon: Database
  },
  {
    title: 'Transparency',
    description: 'Clear communication about what data we collect, how we use it, and who we share it with',
    icon: Eye
  },
  {
    title: 'Security First',
    description: 'Robust security measures to protect your data from unauthorized access and breaches',
    icon: Lock
  },
  {
    title: 'User Control',
    description: 'You have control over your personal data, including access, correction, and deletion rights',
    icon: Users
  }
]

const dataTypes = [
  {
    category: 'Personal Information',
    examples: ['Name', 'Email address', 'Phone number', 'Company affiliation'],
    purpose: 'Communication, account management, service delivery'
  },
  {
    category: 'Technical Data',
    examples: ['IP address', 'Device information', 'Usage patterns', 'System logs'],
    purpose: 'Service optimization, security monitoring, technical support'
  },
  {
    category: 'Biometric Data',
    examples: ['EEG signals', 'Neural activity patterns', 'Performance metrics'],
    purpose: 'Product functionality, research and development, service improvement'
  },
  {
    category: 'Communication Data',
    examples: ['Support tickets', 'Email correspondence', 'Training records'],
    purpose: 'Customer support, service delivery, relationship management'
  }
]

const dataRights = [
  {
    right: 'Access',
    description: 'Request a copy of all personal data we hold about you',
    icon: Eye
  },
  {
    right: 'Rectification',
    description: 'Correct inaccurate or incomplete personal data',
    icon: CheckCircle
  },
  {
    right: 'Erasure',
    description: 'Request deletion of your personal data under certain circumstances',
    icon: AlertTriangle
  },
  {
    right: 'Portability',
    description: 'Receive your data in a structured, machine-readable format',
    icon: Database
  },
  {
    right: 'Restriction',
    description: 'Limit how we process your personal data',
    icon: Lock
  },
  {
    right: 'Objection',
    description: 'Object to processing of your data for certain purposes',
    icon: Shield
  }
]

const securityMeasures = [
  'AES-256 encryption for data in transit and at rest',
  'Multi-factor authentication for system access',
  'Regular security audits and penetration testing',
  'Role-based access controls and least privilege principles',
  'Secure data centers with physical security controls',
  'Employee training on data protection and security',
  'Incident response procedures and breach notification protocols',
  'Compliance with international security standards'
]

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Your privacy is fundamental to our mission. This policy explains how we collect, 
              use, and protect your personal information in compliance with global privacy regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                GDPR Compliant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Last Updated: January 15, 2024
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy Principles
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We are committed to protecting your privacy through transparent, secure, and responsible data practices.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">{principle.title}</h3>
                <p className="text-white/70 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
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
              Data We Collect
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We collect different types of data to provide and improve our services while maintaining your privacy.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={dataType.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-4">{dataType.category}</h3>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {dataType.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-white/70">
                        <CheckCircle className="w-3 h-3 text-electric-cyan flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Purpose:</h4>
                  <p className="text-white/70 text-sm">{dataType.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Rights */}
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
              Your Data Rights
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              You have comprehensive rights regarding your personal data under applicable privacy laws.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                    <right.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{right.right}</h3>
                </div>
                <p className="text-white/70 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
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
              Security Measures
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We implement comprehensive security measures to protect your data and maintain the highest standards of security.
            </p>
          </motion.div>
          
          <div className="glass-panel-strong rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Technical Safeguards</h3>
                <ul className="space-y-3">
                  {securityMeasures.slice(0, 4).map((measure, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm text-white/80">
                      <Shield className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Organizational Safeguards</h3>
                <ul className="space-y-3">
                  {securityMeasures.slice(4).map((measure, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm text-white/80">
                      <Shield className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
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
              Data Sharing
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We are transparent about when and how we share your data with third parties.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">We DO NOT share data with:</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Third-party advertisers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Data brokers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Social media platforms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Unauthorized third parties</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">We MAY share data with:</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Service providers (under contract)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Legal authorities (when required)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Research partners (anonymized)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Business partners (with consent)</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Data Retention</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Personal data: 3 years</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Technical data: 1 year</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Biometric data: As required</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-electric-cyan" />
                  <span>Legal requirements: As mandated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              Privacy Questions?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              If you have questions about this privacy policy or want to exercise your data rights, 
              please contact our Data Protection Officer.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-white font-semibold mb-4">Data Protection Officer</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Email: privacy@sentientbiotech.in</p>
                  <p>Phone: +91-7070360676</p>
                  <p>Address: VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu</p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold mb-4">Response Times</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Data access requests: 30 days</p>
                  <p>Data correction requests: 7 days</p>
                  <p>Data deletion requests: 30 days</p>
                  <p>General privacy inquiries: 5 business days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
