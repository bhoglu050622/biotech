'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Globe, 
  Calendar,
  Scale,
  Lock,
  Award
} from 'lucide-react'

const termsSections = [
  {
    title: 'Acceptance of Terms',
    description: 'By accessing and using our services, you agree to be bound by these terms and conditions',
    icon: CheckCircle
  },
  {
    title: 'Service Description',
    description: 'We provide neurotechnology solutions including EEG systems and pilot headgear for various applications',
    icon: FileText
  },
  {
    title: 'User Responsibilities',
    description: 'Users must comply with all applicable laws and regulations when using our products and services',
    icon: Users
  },
  {
    title: 'Intellectual Property',
    description: 'All intellectual property rights in our products and services remain with Sentient Biotech',
    icon: Lock
  }
]

const userObligations = [
  'Use products only for authorized purposes',
  'Maintain confidentiality of sensitive information',
  'Comply with all applicable laws and regulations',
  'Report any security incidents immediately',
  'Respect intellectual property rights',
  'Provide accurate information when required'
]

const prohibitedUses = [
  'Unauthorized reverse engineering or decompilation',
  'Use for illegal or harmful purposes',
  'Attempting to circumvent security measures',
  'Sharing confidential information without authorization',
  'Modifying products without permission',
  'Using products in violation of export control laws'
]

const liabilityLimitations = [
  'Products are provided "as is" without warranties',
  'Limitation of liability for indirect damages',
  'User assumes responsibility for proper use',
  'Force majeure events beyond our control',
  'Third-party software and services',
  'Compliance with local laws and regulations'
]

const disputeResolution = [
  {
    step: '1',
    title: 'Direct Negotiation',
    description: 'Parties will attempt to resolve disputes through good faith negotiations'
  },
  {
    step: '2',
    title: 'Mediation',
    description: 'If negotiation fails, disputes will be referred to mediation'
  },
  {
    step: '3',
    title: 'Arbitration',
    description: 'Binding arbitration under Indian Arbitration and Conciliation Act'
  },
  {
    step: '4',
    title: 'Court Proceedings',
    description: 'Jurisdiction in courts of Tamil Nadu, India'
  }
]

export default function TermsOfUsePage() {
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
              Terms of Use
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              These terms and conditions govern your use of our neurotechnology solutions 
              and services. Please read them carefully before using our products.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Last Updated: January 15, 2024
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Legally Binding
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Indian Law Governed
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
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
              Terms Overview
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              These terms outline the rights and responsibilities of both parties in our business relationship.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">{section.title}</h3>
                <p className="text-white/70 text-sm">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
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
              User Obligations
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Users must comply with these obligations to maintain access to our services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-electric-cyan mr-2" />
                Required Actions
              </h3>
              <ul className="space-y-3">
                {userObligations.map((obligation, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span>{obligation}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                Prohibited Uses
              </h3>
              <ul className="space-y-3">
                {prohibitedUses.map((prohibition, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-white/80">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{prohibition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
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
              Intellectual Property Rights
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              All intellectual property rights in our products and services are protected by law.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel-strong rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-3">Our Rights</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Patents and trademarks</li>
                <li>• Copyrighted software</li>
                <li>• Trade secrets</li>
                <li>• Proprietary algorithms</li>
              </ul>
            </div>
            
            <div className="glass-panel-strong rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-3">User Rights</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• License to use products</li>
                <li>• Access to documentation</li>
                <li>• Technical support</li>
                <li>• Updates and upgrades</li>
              </ul>
            </div>
            
            <div className="glass-panel-strong rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-3">Restrictions</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• No reverse engineering</li>
                <li>• No unauthorized copying</li>
                <li>• No resale without permission</li>
                <li>• No modification of code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liability and Warranties */}
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
              Liability and Warranties
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Important limitations on our liability and warranty coverage for our products and services.
            </p>
          </motion.div>
          
          <div className="glass-panel-strong rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-electric-cyan mr-2" />
                  Warranty Coverage
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span>2-year hardware warranty</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span>90-day software warranty</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span>Professional installation support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span>Technical support during warranty</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                  Liability Limitations
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {liabilityLimitations.map((limitation, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
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
              Dispute Resolution
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We are committed to resolving disputes fairly and efficiently through established procedures.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {disputeResolution.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Scale className="w-5 h-5 text-electric-cyan mr-2" />
                  Governing Law
                </h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• These terms are governed by Indian law</li>
                  <li>• Jurisdiction: Courts of Tamil Nadu, India</li>
                  <li>• Disputes subject to Indian Arbitration Act</li>
                  <li>• English language for legal proceedings</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-electric-cyan mr-2" />
                  International Compliance
                </h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Export control regulations compliance</li>
                  <li>• International trade law adherence</li>
                  <li>• Data protection law compliance</li>
                  <li>• Industry-specific regulations</li>
                </ul>
              </div>
            </div>
          </motion.div>
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
              Questions About These Terms?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              If you have questions about these terms and conditions, please contact our legal team.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-white font-semibold mb-4">Legal Department</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Email: legal@sentientbiotech.in</p>
                  <p>Phone: +91-7070360676</p>
                  <p>Address: VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu</p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold mb-4">Response Times</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>General inquiries: 5 business days</p>
                  <p>Legal questions: 10 business days</p>
                  <p>Contract reviews: 15 business days</p>
                  <p>Urgent matters: 24 hours</p>
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
