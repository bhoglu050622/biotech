'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
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
  { name: 'All', count: 6, icon: HelpCircle },
  { name: 'General', count: 2, icon: Globe },
  { name: 'Technology', count: 2, icon: Brain },
  { name: 'Partnerships', count: 2, icon: Users }
]

const faqs = [
  {
    id: 1,
    question: 'What does Sentient Biotech do?',
    answer: 'Sentient Biotech is an advanced neurotechnology company that develops integrated hardware and AI software solutions. We build tools to objectively diagnose and monitor brain health, and we create systems to enhance human performance and safety in high-stakes environments like defense and aerospace.',
    category: 'General',
    tags: ['Company', 'Neurotechnology', 'Overview']
  },
  {
    id: 2,
    question: 'Is my data safe and private?',
    answer: 'Absolutely. Data privacy and security are foundational to our design philosophy. All data is anonymized and encrypted, and we adhere to the strictest global standards for handling sensitive health and personal information.',
    category: 'General',
    tags: ['Privacy', 'Security', 'Data Protection']
  },
  {
    id: 3,
    question: 'How can EEG be used for diagnosis?',
    answer: 'Your brain produces constant electrical activity (brainwaves), which can be recorded by an electroencephalogram (EEG). Different neurological and psychiatric conditions are associated with distinct, often subtle, patterns or "biomarkers" in this activity. Our deep learning modules are trained on thousands of hours of data to recognize these patterns with a high degree of accuracy, providing objective support for clinical diagnosis.',
    category: 'Technology',
    tags: ['EEG', 'Diagnosis', 'Brainwaves']
  },
  {
    id: 4,
    question: 'What is the "heart-brain axis"?',
    answer: 'The heart-brain axis refers to the constant, bidirectional communication between the heart and the brain. Your cognitive and emotional states can influence your heart rate, and conversely, your cardiovascular health can impact your brain function. Our multi-modal devices, which can measure signals from both organs, allow for a more holistic understanding of a person\'s overall health and wellness.',
    category: 'Technology',
    tags: ['Heart-Brain Axis', 'Multi-modal', 'Wellness']
  },
  {
    id: 5,
    question: 'Is Sentient Biotech seeking investment?',
    answer: 'Yes, we are currently engaging with seed-stage investors and strategic partners who share our vision. Accredited investors can learn more by visiting our "Investors" page or contacting us directly.',
    category: 'Partnerships',
    tags: ['Investment', 'Seed-stage', 'Investors']
  },
  {
    id: 6,
    question: 'How can my hospital or research institution collaborate with you?',
    answer: 'We are actively seeking clinical and academic partners for validation studies and research collaborations. Please reach out to us through our "Contact Us" page to discuss your specific area of interest. We would be delighted to explore how our platforms can support your work.',
    category: 'Partnerships',
    tags: ['Collaboration', 'Clinical', 'Research']
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
              FAQs [Frequently Asked Questions]
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our neurotechnology solutions, 
              products, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-glass-white backdrop-blur-sm">
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

      <CommonCTA />

      <Footer />
    </main>
  )
}
