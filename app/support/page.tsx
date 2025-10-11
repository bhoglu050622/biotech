'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Headphones, 
  Book, 
  GraduationCap, 
  FileText, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Download,
  ExternalLink,
  Shield,
  Zap,
  Users,
  Award
} from 'lucide-react'

const supportServices = [
  {
    title: '24/7 Technical Support',
    description: 'Round-the-clock technical assistance for defense contracts and critical applications',
    icon: Headphones,
    features: [
      '24/7 availability for defense contracts',
      'Remote diagnostics and troubleshooting',
      'Priority response for critical issues',
      'Multi-language support'
    ],
    availability: '24/7',
    responseTime: '< 1 hour'
  },
  {
    title: 'Product Documentation',
    description: 'Comprehensive manuals, guides, and technical specifications for all products',
    icon: Book,
    features: [
      'Installation and setup guides',
      'User manuals and quick start guides',
      'Technical specifications',
      'Troubleshooting guides'
    ],
    availability: 'Online',
    responseTime: 'Instant'
  },
  {
    title: 'Training Programs',
    description: 'Professional training for system operation, maintenance, and data analysis',
    icon: GraduationCap,
    features: [
      'On-site and remote training options',
      'Certification programs',
      'Custom training curricula',
      'Ongoing education support'
    ],
    availability: 'Scheduled',
    responseTime: '1-2 weeks'
  },
  {
    title: 'Technical Documentation',
    description: 'Detailed technical documentation, APIs, and integration guides',
    icon: FileText,
    features: [
      'API documentation and SDKs',
      'Integration guides',
      'System architecture documentation',
      'Performance optimization guides'
    ],
    availability: 'Online',
    responseTime: 'Instant'
  }
]

const supportChannels = [
  {
    name: 'Phone Support',
    contact: '+91-7070360676',
    description: 'Direct phone support for urgent technical issues',
    icon: Phone,
    hours: '9 AM - 6 PM IST (24/7 for Defense)',
    responseTime: 'Immediate'
  },
  {
    name: 'Email Support',
    contact: 'support@sentientbiotech.in',
    description: 'Email support for detailed technical queries',
    icon: Mail,
    hours: '24/7',
    responseTime: '< 4 hours'
  },
  {
    name: 'Live Chat',
    contact: 'Available on website',
    description: 'Real-time chat support for quick questions',
    icon: MessageSquare,
    hours: '9 AM - 6 PM IST',
    responseTime: '< 5 minutes'
  }
]

const trainingPrograms = [
  {
    title: 'System Administration',
    duration: '2 days',
    level: 'Intermediate',
    description: 'Comprehensive training on system setup, configuration, and maintenance',
    topics: [
      'System installation and configuration',
      'User management and security',
      'Backup and recovery procedures',
      'Performance monitoring and optimization'
    ]
  },
  {
    title: 'Data Analysis & Interpretation',
    duration: '3 days',
    level: 'Advanced',
    description: 'Advanced training on EEG data analysis and interpretation techniques',
    topics: [
      'Signal processing fundamentals',
      'Artifact detection and removal',
      'Statistical analysis methods',
      'Clinical interpretation guidelines'
    ]
  },
  {
    title: 'Defense Applications',
    duration: '5 days',
    level: 'Expert',
    description: 'Specialized training for defense and aerospace applications',
    topics: [
      'Military operational requirements',
      'Security protocols and compliance',
      'Field deployment procedures',
      'Mission-critical troubleshooting'
    ]
  }
]

const documentation = [
  {
    title: 'User Manuals',
    description: 'Comprehensive user guides for all products',
    icon: Book,
    downloads: 12,
    lastUpdated: '2024-01-15'
  },
  {
    title: 'Technical Specifications',
    description: 'Detailed technical specifications and datasheets',
    icon: FileText,
    downloads: 8,
    lastUpdated: '2024-01-10'
  },
  {
    title: 'API Documentation',
    description: 'Complete API reference and integration guides',
    icon: Zap,
    downloads: 15,
    lastUpdated: '2024-01-12'
  },
  {
    title: 'Installation Guides',
    description: 'Step-by-step installation and setup instructions',
    icon: Shield,
    downloads: 6,
    lastUpdated: '2024-01-08'
  }
]

const faqCategories = [
  {
    category: 'Technical Issues',
    count: 25,
    icon: Zap
  },
  {
    category: 'Installation',
    count: 15,
    icon: Shield
  },
  {
    category: 'Training',
    count: 10,
    icon: Users
  },
  {
    category: 'General',
    count: 20,
    icon: Award
  }
]

export default function SupportPage() {
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
              Support Center
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive support services to ensure your neurotechnology solutions 
              operate at peak performance. We're here to help every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                24/7 Support Available
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Expert Training
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Comprehensive Documentation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Services */}
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
              Support Services
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Professional support services designed to maximize your system performance and minimize downtime.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Availability:</span>
                    <span className="text-electric-cyan">{service.availability}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-white/60">Response:</span>
                    <span className="text-electric-cyan">{service.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
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
              Get in Touch
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Multiple ways to reach our support team for quick assistance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{channel.name}</h3>
                <p className="text-electric-cyan text-sm font-medium mb-3">{channel.contact}</p>
                <p className="text-white/70 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Hours:</span>
                    <span className="text-white/80">{channel.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Response:</span>
                    <span className="text-electric-cyan">{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
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
              Training Programs
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive training programs to maximize your team's expertise with our neurotechnology solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">{program.title}</h3>
                  <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                    {program.level}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{program.description}</p>
                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {program.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-2 text-sm text-white/60">
                        <CheckCircle className="w-3 h-3 text-electric-cyan flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-secondary text-sm"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
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
              Documentation Library
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive documentation and resources to help you get the most out of your systems.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentation.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center mb-4">
                  <doc.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{doc.title}</h3>
                <p className="text-white/70 text-sm mb-4">{doc.description}</p>
                <div className="space-y-2 text-sm text-white/60 mb-4">
                  <div className="flex justify-between">
                    <span>Downloads:</span>
                    <span className="text-electric-cyan">{doc.downloads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Updated:</span>
                    <span>{doc.lastUpdated}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 text-electric-cyan hover:text-white transition-colors duration-200 py-2"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Download</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
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
              Quick Help
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Browse our frequently asked questions by category for quick answers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faqCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{category.category}</h3>
                <p className="text-white/60 text-sm mb-4">{category.count} articles</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-electric-cyan hover:text-white transition-colors duration-200"
                >
                  Browse FAQs →
                </motion.button>
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
              Need Immediate Assistance?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our expert support team is ready to help you resolve any issues quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Schedule Training
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
