'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Shield,
  Brain,
  Users,
  Globe
} from 'lucide-react'

const faqCategories = [
  { name: 'General', icon: Globe },
  { name: 'Technology', icon: Brain },
  { name: 'Partnerships', icon: Users }
]

const faqs = [
  {
    id: 1,
    question: 'What does Sentient Biotech do?',
    answer: 'Sentient Biotech is an advanced neurotechnology company that develops integrated hardware and AI software solutions. We build tools to objectively diagnose and monitor brain health, and we create systems to enhance human performance and safety in high-stakes environments like defense and aerospace.',
    category: 'General'
  },
  {
    id: 2,
    question: 'Is my data safe and private?',
    answer: 'Absolutely. Data privacy and security are foundational to our design philosophy. All data is anonymized and encrypted, and we adhere to the strictest global standards for handling sensitive health and personal information.',
    category: 'General'
  },
  {
    id: 3,
    question: 'How can EEG be used for diagnosis?',
    answer: 'Your brain produces constant electrical activity (brainwaves), which can be recorded by an electroencephalogram (EEG). Different neurological and psychiatric conditions are associated with distinct, often subtle, patterns or "biomarkers" in this activity. Our deep learning modules are trained on thousands of hours of data to recognize these patterns with a high degree of accuracy, providing objective support for clinical diagnosis.',
    category: 'Technology'
  },
  {
    id: 4,
    question: 'What is the "heart-brain axis"?',
    answer: 'The heart-brain axis refers to the constant, bidirectional communication between the heart and the brain. Your cognitive and emotional states can influence your heart rate, and conversely, your cardiovascular health can impact your brain function. Our multi-modal devices, which can measure signals from both organs, allow for a more holistic understanding of a person\'s overall health and wellness.',
    category: 'Technology'
  },
  {
    id: 5,
    question: 'Is Sentient Biotech seeking investment?',
    answer: 'Yes, we are currently engaging with seed-stage investors and strategic partners who share our vision. Accredited investors can learn more by visiting our "Investors" page or contacting us directly.',
    category: 'Partnerships'
  },
  {
    id: 6,
    question: 'How can my hospital or research institution collaborate with you?',
    answer: 'We are actively seeking clinical and academic partners for validation studies and research collaborations. Please reach out to us through our "Contact Us" page to discuss your specific area of interest. We would be delighted to explore how our platforms can support your work.',
    category: 'Partnerships'
  }
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('General')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const filteredFAQs = faqs.filter(faq => faq.category === selectedCategory)

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
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-electric-cyan mr-4" />
              <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Find answers to common questions about our neurotechnology solutions, 
              technology, and partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
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
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-electric-cyan text-deep-indigo shadow-lg shadow-electric-cyan/50'
                    : 'glass-panel-strong text-white hover:bg-glass-white-strong'
                }`}
              >
                <category.icon className={`w-5 h-5 ${
                  selectedCategory === category.name ? 'text-deep-indigo' : 'text-electric-cyan'
                }`} />
                <span className="text-base font-semibold">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="glass-panel-strong rounded-xl overflow-hidden hover:shadow-lg hover:shadow-electric-cyan/10 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-start justify-between hover:bg-glass-white-strong transition-colors duration-200"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
                      {openFAQ !== faq.id && (
                        <p className="text-white/60 text-sm line-clamp-2">{faq.answer}</p>
                      )}
                    </div>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-electric-cyan" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white/60" />
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
                          <p className="text-white/80 text-base leading-relaxed pt-6">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-12 text-center bg-gradient-to-br from-electric-cyan/10 to-violet-accent/10"
          >
            <Shield className="w-16 h-16 text-electric-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand how our neurotechnology solutions 
              can benefit your organization. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/investors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Investor Information
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
