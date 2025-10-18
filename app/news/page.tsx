'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import BackToTop from '@/components/BackToTop'
import JsonLd, { organizationSchema } from '@/components/JsonLd'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Brain, Plane, MousePointer, ArrowRight, Calendar } from 'lucide-react'

const blogPosts = [
  {
    title: 'Neurotechnology – The Bridge Between Mind and Machine',
    date: 'August 2025',
    summary: 'Neurotechnology is redefining how humans interact with technology. Our EEG-based systems decode neural patterns to enable cognitive monitoring, emotional mapping, and brain-controlled interfaces.',
    icon: Brain,
    color: 'from-primary-blue to-secondary-green',
    href: '/news/neurotechnology-bridge'
  },
  {
    title: 'Starscream – Expanding Vision Beyond Limits',
    date: 'September 2025',
    summary: 'In modern aerial combat, information is power. Our Starscream integrates multi-camera vision, AI-assisted overlays, and biometric tracking to provide pilots with unparalleled situational awareness.',
    icon: Plane,
    color: 'from-secondary-green to-accent-light-blue',
    href: '/news/pilot-headgear-vision'
  },
  {
    title: 'Human-Machine Interfaces – The Future of Intuitive Control',
    date: 'October 2025',
    summary: 'Human-Machine Interfaces (HMI) are transforming the way we command and control technology. Sentient Biotech\'s research in neural inputs, voice recognition, and adaptive gesture controls ensures that machines respond intuitively to human intent.',
    icon: MousePointer,
    color: 'from-accent-light-blue to-secondary-green',
    href: '/news/hmi-future'
  }
]

export default function NewsPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
      <JsonLd data={organizationSchema} />
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-4 sm:mb-6">
              News & Insights
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Exploring the Frontiers of Human and Machine Intelligence
            </p>
            <p className="text-sm sm:text-base text-text-tertiary max-w-4xl mx-auto px-4 mt-4">
              Stay informed with the latest updates, breakthroughs, and thought leadership from Sentient Biotech. Our News & Insights section brings you perspectives from across neuroscience, artificial intelligence, and biotechnology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-hover group cursor-pointer"
              >
                <a href={post.href} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-br ${post.color} rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300`}>
                    <post.icon className="w-8 h-8 text-primary-white" />
                  </div>
                  <div className="flex items-center gap-2 text-text-tertiary text-xs mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">{post.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm">{post.summary}</p>
                  <div className="flex items-center gap-2 text-primary-blue font-medium text-sm">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}
