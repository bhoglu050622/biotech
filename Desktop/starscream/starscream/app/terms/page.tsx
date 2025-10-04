'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Gavel, FileText, UserCheck, ShieldAlert, Info, CheckCircle, AlertTriangle, ArrowRight, Scale, BookOpen, Users, Globe } from 'lucide-react'

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: UserCheck,
    description: 'By accessing and using our services, you agree to be bound by these terms and conditions.',
    details: [
      'You must be at least 18 years old to use our services',
      'You agree to comply with all applicable laws and regulations',
      'You acknowledge that you have read and understood these terms',
      'You agree to be bound by any modifications to these terms'
    ],
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    title: 'Use of Services',
    icon: Globe,
    description: 'Guidelines for the proper use of our neurotechnology services and platforms.',
    details: [
      'Services are provided for legitimate business and research purposes',
      'You may not use our services for illegal or unauthorized activities',
      'You must maintain the confidentiality of your account credentials',
      'You are responsible for all activities that occur under your account'
    ],
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    title: 'Intellectual Property',
    icon: BookOpen,
    description: 'Protection of intellectual property rights and proper use of our technology.',
    details: [
      'All content and technology are protected by copyright and trademark laws',
      'You may not copy, modify, or distribute our proprietary technology',
      'You retain ownership of your data and content',
      'We respect third-party intellectual property rights'
    ],
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    title: 'Privacy and Data Protection',
    icon: ShieldAlert,
    description: 'Commitment to protecting user privacy and handling data responsibly.',
    details: [
      'We collect and process data in accordance with our Privacy Policy',
      'You have rights regarding your personal data',
      'We implement appropriate security measures to protect your data',
      'Data is processed lawfully, fairly, and transparently'
    ],
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const userObligations = [
  {
    obligation: 'Account Security',
    description: 'You are responsible for maintaining the security of your account and all activities that occur under it.',
    icon: ShieldAlert,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    obligation: 'Compliance',
    description: 'You must comply with all applicable laws, regulations, and third-party rights.',
    icon: Scale,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    obligation: 'Prohibited Uses',
    description: 'You may not use our services for illegal, harmful, or unauthorized purposes.',
    icon: AlertTriangle,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    obligation: 'Data Accuracy',
    description: 'You must provide accurate and up-to-date information when using our services.',
    icon: FileText,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const serviceLimitations = [
  {
    limitation: 'Service Availability',
    description: 'We strive for high availability but cannot guarantee uninterrupted service.',
    details: [
      'Services may be temporarily unavailable for maintenance',
      'We are not liable for service interruptions due to circumstances beyond our control',
      'We will provide reasonable notice for planned maintenance',
      'Emergency maintenance may be performed without prior notice'
    ],
    icon: Globe,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    limitation: 'Technical Limitations',
    description: 'Our services are subject to technical limitations and system requirements.',
    details: [
      'Services require compatible hardware and software',
      'Performance may vary based on system specifications',
      'Some features may not be available in all regions',
      'Technical support is provided during business hours'
    ],
    icon: Settings,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    limitation: 'Data Processing',
    description: 'Limitations on data processing and storage capabilities.',
    details: [
      'Data storage is subject to capacity limits',
      'Processing speed may vary based on data complexity',
      'Some data formats may not be supported',
      'Data retention is subject to our data retention policies'
    ],
    icon: Database,
    color: 'from-primary-violet to-secondary-violet'
  }
]

const liabilityLimitations = [
  {
    limitation: 'Limitation of Liability',
    description: 'Our liability is limited to the maximum extent permitted by law.',
    details: [
      'We are not liable for indirect, incidental, or consequential damages',
      'Our total liability is limited to the amount paid for the services',
      'We are not liable for third-party actions or content',
      'Some jurisdictions may not allow limitation of liability'
    ],
    icon: Scale,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    limitation: 'Disclaimer of Warranties',
    description: 'Services are provided "as is" without warranties of any kind.',
    details: [
      'We disclaim all warranties, express or implied',
      'We do not warrant that services will be error-free',
      'We do not warrant that services will meet your requirements',
      'We do not warrant that services will be available at all times'
    ],
    icon: AlertTriangle,
    color: 'from-primary-emerald to-secondary-emerald'
  }
]

const terminationConditions = [
  {
    condition: 'Termination by User',
    description: 'You may terminate your account at any time by contacting our support team.',
    details: [
      'Account termination is effective immediately upon request',
      'You may request data export before termination',
      'Some data may be retained for legal compliance',
      'Termination does not affect your privacy rights'
    ],
    icon: UserCheck,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    condition: 'Termination by Company',
    description: 'We may terminate your account for violations of these terms.',
    details: [
      'We will provide notice before termination when possible',
      'Termination may be immediate for serious violations',
      'You may appeal termination decisions',
      'Termination does not affect your privacy rights'
    ],
    icon: ShieldAlert,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

export default function TermsPage() {
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
              <span className="text-primary-blue font-medium">Terms of Use</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Terms of Service &
              <span className="block gradient-text">Legal Agreement</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms and conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Download Terms</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>Contact Legal Team</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Terms and Conditions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Important terms and conditions that govern your use of our neurotechnology services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-slate-300">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.details.map((detail, detailIndex) => (
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

      {/* User Obligations */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">User Obligations</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your responsibilities when using our services and platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${obligation.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <obligation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                <p className="text-slate-300">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Limitations */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Service Limitations</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Important limitations and restrictions that apply to our services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceLimitations.map((limitation, index) => (
              <motion.div
                key={limitation.limitation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${limitation.color} rounded-lg flex items-center justify-center`}>
                    <limitation.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{limitation.limitation}</h3>
                </div>
                
                <p className="text-slate-300 mb-4">{limitation.description}</p>
                
                <ul className="space-y-2">
                  {limitation.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary-emerald flex-shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liability Limitations */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Liability and Disclaimers</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Important limitations on our liability and disclaimers of warranties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {liabilityLimitations.map((limitation, index) => (
              <motion.div
                key={limitation.limitation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${limitation.color} rounded-lg flex items-center justify-center`}>
                    <limitation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{limitation.limitation}</h3>
                </div>
                
                <p className="text-slate-300 mb-4">{limitation.description}</p>
                
                <ul className="space-y-2">
                  {limitation.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary-emerald flex-shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination Conditions */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Termination Conditions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Conditions under which your account or access to our services may be terminated.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {terminationConditions.map((condition, index) => (
              <motion.div
                key={condition.condition}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${condition.color} rounded-lg flex items-center justify-center`}>
                    <condition.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{condition.condition}</h3>
                </div>
                
                <p className="text-slate-300 mb-4">{condition.description}</p>
                
                <ul className="space-y-2">
                  {condition.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary-emerald flex-shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
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
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Terms?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                If you have any questions about these terms and conditions, please contact our legal team for clarification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Contact Legal Team</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Download Full Terms</span>
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