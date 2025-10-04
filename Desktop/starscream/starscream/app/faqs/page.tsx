'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle,
  Shield,
  Brain,
  Zap,
  Users,
  Award,
  Globe
} from 'lucide-react'

const faqCategories = [
  { name: 'All', count: 20, icon: HelpCircle },
  { name: 'Products', count: 6, icon: Brain },
  { name: 'Technical', count: 5, icon: Zap },
  { name: 'Support', count: 4, icon: Users },
  { name: 'Security', count: 3, icon: Shield },
  { name: 'General', count: 2, icon: Globe }
]

const faqs = [
  {
    id: 1,
    question: 'What is the accuracy of your EEG systems?',
    answer: 'Our EEG systems achieve 99.9% accuracy in neural signal acquisition and processing. This high accuracy is achieved through advanced signal processing algorithms, high-resolution sensors, and real-time artifact removal capabilities.',
    category: 'Products',
    tags: ['EEG', 'Accuracy', 'Signal Processing']
  },
  {
    id: 2,
    question: 'How secure are your systems for defense applications?',
    answer: 'Our systems meet the highest security standards including MIL-STD-461F for EMI/EMC, AES-256 encryption for data transmission, and secure authentication protocols. All systems are designed with defense-grade security from the ground up.',
    category: 'Security',
    tags: ['Security', 'Defense', 'Encryption']
  },
  {
    id: 3,
    question: 'What certifications do your products have?',
    answer: 'Our products are certified to ISO 13485:2016 for medical devices, have CE marking for European markets, FDA 510(k) clearance for medical applications, and meet MIL-STD-810G environmental standards for defense use.',
    category: 'General',
    tags: ['Certifications', 'Standards', 'Compliance']
  },
  {
    id: 4,
    question: 'How long does the battery last on wireless EEG systems?',
    answer: 'Our wireless EEG systems provide 8+ hours of continuous operation on a single charge. The battery life can be extended to 12+ hours with optimized settings for specific applications.',
    category: 'Technical',
    tags: ['Battery', 'Wireless', 'Performance']
  },
  {
    id: 5,
    question: 'Can your systems be used in harsh environments?',
    answer: 'Yes, our systems are designed to operate in extreme conditions. They meet MIL-STD-810G standards for temperature (-40°C to +70°C), humidity (0-95% RH), vibration, and altitude (up to 15,000m).',
    category: 'Technical',
    tags: ['Environment', 'Durability', 'Standards']
  },
  {
    id: 6,
    question: 'What kind of training do you provide?',
    answer: 'We provide comprehensive training programs including system operation, data analysis, maintenance procedures, and troubleshooting. Training can be conducted on-site, remotely, or at our facilities in Chennai.',
    category: 'Support',
    tags: ['Training', 'Support', 'Education']
  },
  {
    id: 7,
    question: 'How do you ensure data privacy and compliance?',
    answer: 'We implement strict data privacy measures including GDPR compliance, HIPAA compliance for healthcare applications, and defense-grade security protocols. All data is encrypted both in transit and at rest.',
    category: 'Security',
    tags: ['Privacy', 'Compliance', 'Data Protection']
  },
  {
    id: 8,
    question: 'What is the setup time for your EEG systems?',
    answer: 'Our EEG systems can be set up and operational within 15-30 minutes depending on the configuration. The modular design and intuitive software make installation and calibration straightforward.',
    category: 'Technical',
    tags: ['Setup', 'Installation', 'Time']
  },
  {
    id: 9,
    question: 'Do you provide custom solutions for specific applications?',
    answer: 'Yes, we offer custom development services for specialized applications. Our team works closely with clients to understand requirements and develop tailored solutions that meet specific needs.',
    category: 'Products',
    tags: ['Custom', 'Development', 'Solutions']
  },
  {
    id: 10,
    question: 'What support options are available?',
    answer: 'We provide 24/7 technical support for defense contracts, standard business hours support for other applications, remote diagnostics, on-site service, and comprehensive documentation and training materials.',
    category: 'Support',
    tags: ['Support', '24/7', 'Service']
  },
  {
    id: 11,
    question: 'How do you handle software updates and maintenance?',
    answer: 'We provide regular software updates with new features and improvements. Updates can be installed remotely or on-site. We also offer maintenance contracts that include regular system health checks and preventive maintenance.',
    category: 'Support',
    tags: ['Updates', 'Maintenance', 'Software']
  },
  {
    id: 12,
    question: 'What is the warranty period for your products?',
    answer: 'Our products come with a 2-year comprehensive warranty covering hardware defects and software issues. Extended warranty options are available for critical applications.',
    category: 'General',
    tags: ['Warranty', 'Coverage', 'Support']
  },
  {
    id: 13,
    question: 'Can your systems integrate with existing infrastructure?',
    answer: 'Yes, our systems are designed with open APIs and standard protocols to ensure seamless integration with existing IT infrastructure, hospital systems, and defense networks.',
    category: 'Technical',
    tags: ['Integration', 'APIs', 'Compatibility']
  },
  {
    id: 14,
    question: 'What is the data storage capacity?',
    answer: 'Our systems include 32GB of internal storage with options for external storage expansion. Data can also be streamed to cloud storage or local servers for long-term archiving.',
    category: 'Technical',
    tags: ['Storage', 'Data', 'Capacity']
  },
  {
    id: 15,
    question: 'How do you ensure system reliability?',
    answer: 'We implement multiple layers of redundancy, continuous system monitoring, predictive maintenance algorithms, and rigorous testing protocols to ensure 99.9% system uptime and reliability.',
    category: 'Products',
    tags: ['Reliability', 'Uptime', 'Monitoring']
  },
  {
    id: 16,
    question: 'What are the power requirements for your systems?',
    answer: 'Our systems are designed for low power consumption and can operate on standard AC power, DC power, or battery power. Power consumption ranges from 5W to 15W depending on the configuration.',
    category: 'Technical',
    tags: ['Power', 'Consumption', 'Requirements']
  },
  {
    id: 17,
    question: 'Do you provide data analysis and reporting tools?',
    answer: 'Yes, we provide comprehensive data analysis software with real-time visualization, automated reporting, statistical analysis tools, and customizable dashboards for different user needs.',
    category: 'Products',
    tags: ['Analysis', 'Reporting', 'Software']
  },
  {
    id: 18,
    question: 'What is the lead time for product delivery?',
    answer: 'Standard products are typically delivered within 4-6 weeks. Custom solutions may require 8-12 weeks depending on complexity. Rush delivery options are available for urgent requirements.',
    category: 'Support',
    tags: ['Delivery', 'Lead Time', 'Shipping']
  },
  {
    id: 19,
    question: 'How do you handle international shipping and customs?',
    answer: 'We have experience with international shipping and can assist with customs documentation, export licenses, and compliance requirements for different countries and regions.',
    category: 'Support',
    tags: ['Shipping', 'International', 'Customs']
  },
  {
    id: 20,
    question: 'What research and development capabilities do you have?',
    answer: 'We maintain a dedicated R&D team with expertise in neuroscience, signal processing, AI/ML, and hardware design. We collaborate with leading research institutions and continuously invest in innovation.',
    category: 'Products',
    tags: ['R&D', 'Innovation', 'Research']
  }
]

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our neurotechnology solutions, 
              products, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {faqCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-electric-cyan text-deep-indigo'
                      : 'glass-panel-strong text-white hover:bg-glass-white-strong'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm">{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-glass-white-strong transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {faq.category}
                      </span>
                      <div className="flex space-x-1">
                        {faq.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-white/60 text-xs">
                            {tag}{tagIndex < 1 && ', '}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-left">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-electric-cyan" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/60" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10">
                        <p className="text-white/80 text-sm leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">No FAQs found</h3>
              <p className="text-white/60 text-sm">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support */}
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
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert team is here to help 
              with any questions about our neurotechnology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
