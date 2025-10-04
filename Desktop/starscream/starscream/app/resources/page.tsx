'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { BookOpen, FileText, HelpCircle, Headset, Download, Search, ArrowRight, Calendar, User, Tag, ExternalLink, Play, Award, Lightbulb, Users, Globe } from 'lucide-react'

const resourceCategories = [
  {
    name: 'Case Studies',
    count: 12,
    icon: BookOpen,
    color: 'from-primary-blue to-secondary-blue',
    description: 'Real-world implementations and success stories from our customers'
  },
  {
    name: 'Whitepapers',
    count: 8,
    icon: FileText,
    color: 'from-primary-emerald to-secondary-emerald',
    description: 'In-depth technical papers and research insights'
  },
  {
    name: 'FAQs',
    count: 25,
    icon: HelpCircle,
    color: 'from-primary-violet to-secondary-violet',
    description: 'Frequently asked questions and detailed answers'
  },
  {
    name: 'Customer Support',
    count: '24/7',
    icon: Headset,
    color: 'from-primary-cyan to-secondary-cyan',
    description: 'Technical support and customer service resources'
  }
]

const caseStudies = [
  {
    title: 'Military Pilot Enhancement Program',
    organization: 'Indian Air Force',
    industry: 'Defense & Aerospace',
    challenge: 'Improving pilot performance and reducing fatigue in high-stress combat situations',
    solution: 'Implemented advanced EEG monitoring headgear with real-time cognitive load assessment',
    results: [
      '35% improvement in mission success rates',
      '50% reduction in pilot fatigue incidents',
      '90% pilot satisfaction rating',
      'Real-time health monitoring capabilities'
    ],
    download: '/resources/case-studies/military-pilot-enhancement.pdf',
    image: '/resources/case-studies/military-pilot.jpg',
    tags: ['Defense', 'Military', 'Performance', 'Safety']
  },
  {
    title: 'Neurological Diagnosis System',
    organization: 'Johns Hopkins Hospital',
    industry: 'Healthcare',
    challenge: 'Faster and more accurate diagnosis of neurological conditions',
    solution: 'Deployed AI-powered EEG analysis system for real-time neurological assessment',
    results: [
      '40% faster diagnosis times',
      '60% improvement in treatment outcomes',
      '85% patient satisfaction rating',
      'Reduced misdiagnosis rates'
    ],
    download: '/resources/case-studies/neurological-diagnosis.pdf',
    image: '/resources/case-studies/neurological-diagnosis.jpg',
    tags: ['Healthcare', 'Diagnosis', 'AI', 'Medical']
  },
  {
    title: 'Cognitive Research Platform',
    organization: 'MIT Brain Research Center',
    industry: 'Research & Academia',
    challenge: 'Advanced tools for neuroscience research and cognitive studies',
    solution: 'Implemented comprehensive neurotechnology platform for multi-modal brain research',
    results: [
      '50% faster data collection',
      '30% improvement in research accuracy',
      'Enhanced collaboration capabilities',
      'Streamlined research workflows'
    ],
    download: '/resources/case-studies/cognitive-research.pdf',
    image: '/resources/case-studies/cognitive-research.jpg',
    tags: ['Research', 'Neuroscience', 'Academic', 'Collaboration']
  }
]

const whitepapers = [
  {
    title: 'The Future of Brain-Computer Interfaces',
    author: 'Dr. Jasmeet Singh',
    date: '2024-01-15',
    description: 'Comprehensive analysis of current BCI technology and future developments in neural interface systems.',
    download: '/resources/whitepapers/future-of-bci.pdf',
    pages: 45,
    tags: ['BCI', 'Future', 'Technology', 'Research']
  },
  {
    title: 'EEG Signal Processing in Medical Applications',
    author: 'Dr. Priya Sharma',
    date: '2024-01-10',
    description: 'Technical deep-dive into EEG signal processing algorithms and their applications in medical diagnosis.',
    download: '/resources/whitepapers/eeg-signal-processing.pdf',
    pages: 32,
    tags: ['EEG', 'Medical', 'Signal Processing', 'Technical']
  },
  {
    title: 'Neurotechnology in Defense Applications',
    author: 'Rajesh Kumar',
    date: '2024-01-05',
    description: 'Exploring the role of neurotechnology in military applications and defense systems.',
    download: '/resources/whitepapers/neurotechnology-defense.pdf',
    pages: 28,
    tags: ['Defense', 'Military', 'Neurotechnology', 'Applications']
  }
]

const faqs = [
  {
    question: 'What is neurotechnology and how does it work?',
    answer: 'Neurotechnology is the application of technology to understand, monitor, and interact with the nervous system. Our solutions use non-invasive EEG sensors to detect and analyze brain activity patterns, enabling real-time monitoring and control applications.',
    category: 'General',
    tags: ['Neurotechnology', 'EEG', 'Basics']
  },
  {
    question: 'How accurate are your EEG monitoring systems?',
    answer: 'Our EEG systems achieve 99.2% accuracy in signal acquisition with ultra-low noise levels (< 1 µV RMS). The advanced signal processing algorithms ensure reliable data collection for medical, research, and defense applications.',
    category: 'Technical',
    tags: ['Accuracy', 'EEG', 'Performance']
  },
  {
    question: 'What industries can benefit from your solutions?',
    answer: 'Our neurotechnology solutions are designed for defense & aerospace, healthcare, research & academia, and training & simulation industries. Each solution is tailored to meet specific industry requirements and regulatory standards.',
    category: 'Applications',
    tags: ['Industries', 'Applications', 'Solutions']
  },
  {
    question: 'How do you ensure data privacy and security?',
    answer: 'We implement end-to-end encryption, secure data transmission protocols, and comply with international data protection standards. All neural data is processed with the highest security measures and never stored without explicit consent.',
    category: 'Security',
    tags: ['Privacy', 'Security', 'Data Protection']
  },
  {
    question: 'What support do you provide for implementation?',
    answer: 'We offer comprehensive implementation support including technical consultation, training programs, integration assistance, and ongoing support. Our team works closely with clients to ensure successful deployment and adoption.',
    category: 'Support',
    tags: ['Implementation', 'Support', 'Training']
  }
]

const supportResources = [
  {
    title: 'Technical Documentation',
    description: 'Comprehensive technical guides and API documentation for developers and integrators',
    icon: FileText,
    color: 'from-primary-blue to-secondary-blue',
    resources: [
      'API Documentation',
      'Integration Guides',
      'Technical Specifications',
      'SDK Downloads'
    ]
  },
  {
    title: 'Training Materials',
    description: 'Educational resources and training materials for users and administrators',
    icon: BookOpen,
    color: 'from-primary-emerald to-secondary-emerald',
    resources: [
      'User Manuals',
      'Video Tutorials',
      'Training Workshops',
      'Certification Programs'
    ]
  },
  {
    title: 'Support Channels',
    description: 'Multiple channels for technical support and customer service',
    icon: Headset,
    color: 'from-primary-violet to-secondary-violet',
    resources: [
      '24/7 Technical Support',
      'Email Support',
      'Phone Support',
      'Live Chat'
    ]
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users and get help from the community',
    icon: Users,
    color: 'from-primary-cyan to-secondary-cyan',
    resources: [
      'User Forums',
      'Knowledge Base',
      'Best Practices',
      'Feature Requests'
    ]
  }
]

export default function ResourcesPage() {
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
              <span className="text-primary-blue font-medium">Resources & Support</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Knowledge Hub &
              <span className="block gradient-text">Support Center</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Access comprehensive resources, documentation, and support to maximize the value of your neurotechnology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Browse Resources</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>Get Support</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Resource Categories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by category for easy navigation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                <p className="text-slate-300 mb-4">{category.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue mb-1">{category.count}</div>
                  <div className="text-sm text-slate-400">Resources</div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Case Studies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-world implementations and success stories that demonstrate the impact of our neurotechnology solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-blue/20 to-primary-violet/20 rounded-t-xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-violet rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="badge-primary">{study.industry}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-primary-blue font-medium mb-4">{study.organization}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-slate-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
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
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge-info text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>Download Case Study</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Whitepapers</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              In-depth technical papers and research insights from our team of experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary-blue/20 to-primary-violet/20 rounded-t-xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-violet rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="badge-info text-xs">{paper.pages} pages</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-primary-blue text-sm mb-2">By {paper.author}</p>
                  <p className="text-slate-300 text-sm mb-4">{paper.description}</p>
                  
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{paper.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-3 h-3" />
                      <span>{paper.pages} pages</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge-info text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>Download PDF</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find answers to common questions about our neurotechnology solutions and services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                    <span className="badge-primary text-xs">{faq.category}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{faq.answer}</p>
                
                <div className="flex flex-wrap gap-2">
                  {faq.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge-info text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Support Resources</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive support resources to help you get the most out of your neurotechnology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{resource.title}</h3>
                <p className="text-slate-300 mb-6">{resource.description}</p>
                
                <div className="space-y-2">
                  {resource.resources.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              <h2 className="text-4xl font-bold text-white mb-6">Need More Help?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you with any questions or technical issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <Headset className="w-5 h-5 mr-2" />
                  <span>Contact Support</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Browse Knowledge Base</span>
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