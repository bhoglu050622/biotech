'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Newspaper, Megaphone, Lightbulb, ArrowRight, Rss, Mail, Calendar, User, Tag, ExternalLink, Play, Download, Share2 } from 'lucide-react'

const featuredNews = [
  {
    id: 1,
    title: 'Sentient Biotech Secures $25M Series B Funding for Global Expansion',
    excerpt: 'Leading neurotechnology company announces major funding round to accelerate international growth and product development.',
    content: 'Sentient Biotech, a pioneer in neurotechnology solutions, has successfully closed its Series B funding round, raising $25 million from leading venture capital firms and strategic investors. The funding will be used to accelerate global expansion, enhance product development, and strengthen the company\'s position as a leader in brain-computer interface technology.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'Funding',
    readTime: '5 min read',
    image: '/news/series-b-funding.jpg',
    featured: true,
    tags: ['Funding', 'Growth', 'Investment', 'Expansion']
  },
  {
    id: 2,
    title: 'Breakthrough in EEG Technology: New Non-Invasive Monitoring System',
    excerpt: 'Revolutionary EEG system achieves 99.2% accuracy with ultra-low noise signal acquisition for medical applications.',
    content: 'Our research team has developed a groundbreaking EEG monitoring system that achieves unprecedented accuracy levels while maintaining complete non-invasiveness. The new system features advanced signal processing algorithms and ultra-low noise acquisition capabilities, making it ideal for medical diagnosis and research applications.',
    author: 'Dr. Priya Sharma',
    date: '2024-01-10',
    category: 'Technology',
    readTime: '7 min read',
    image: '/news/eeg-breakthrough.jpg',
    featured: true,
    tags: ['Technology', 'Innovation', 'Medical', 'EEG']
  },
  {
    id: 3,
    title: 'Partnership with Indian Air Force for Pilot Headgear Development',
    excerpt: 'Strategic collaboration to develop next-generation pilot headgear with integrated neurotechnology for enhanced performance.',
    content: 'Sentient Biotech has entered into a strategic partnership with the Indian Air Force to develop advanced pilot headgear systems. The collaboration will focus on creating non-invasive monitoring solutions that enhance pilot performance and safety in high-stress combat situations.',
    author: 'Rajesh Kumar',
    date: '2024-01-05',
    category: 'Partnership',
    readTime: '6 min read',
    image: '/news/air-force-partnership.jpg',
    featured: true,
    tags: ['Partnership', 'Defense', 'Military', 'Innovation']
  }
]

const newsCategories = [
  {
    name: 'Technology',
    count: 15,
    icon: Lightbulb,
    color: 'from-primary-blue to-secondary-blue',
    description: 'Latest developments in neurotechnology and brain-computer interface innovations'
  },
  {
    name: 'Partnerships',
    count: 8,
    icon: Megaphone,
    color: 'from-primary-emerald to-secondary-emerald',
    description: 'Strategic collaborations and industry partnerships'
  },
  {
    name: 'Funding',
    count: 5,
    icon: Rss,
    color: 'from-primary-violet to-secondary-violet',
    description: 'Investment rounds and financial milestones'
  },
  {
    name: 'Research',
    count: 12,
    icon: Newspaper,
    color: 'from-primary-cyan to-secondary-cyan',
    description: 'Scientific research and academic publications'
  }
]

const recentNews = [
  {
    id: 4,
    title: 'New Research Paper Published in Nature Neuroscience',
    excerpt: 'Our team\'s latest research on neural signal processing has been published in the prestigious Nature Neuroscience journal.',
    author: 'Dr. Michael Rodriguez',
    date: '2024-01-12',
    category: 'Research',
    readTime: '4 min read',
    image: '/news/nature-paper.jpg',
    tags: ['Research', 'Publication', 'Neuroscience']
  },
  {
    id: 5,
    title: 'Healthcare Innovation Award 2024',
    excerpt: 'Sentient Biotech receives recognition for outstanding contribution to healthcare technology innovation.',
    author: 'Award Committee',
    date: '2024-01-08',
    category: 'Awards',
    readTime: '3 min read',
    image: '/news/healthcare-award.jpg',
    tags: ['Awards', 'Recognition', 'Healthcare']
  },
  {
    id: 6,
    title: 'Expansion to European Markets',
    excerpt: 'Company announces expansion into European healthcare and research markets with new regional office.',
    author: 'Global Expansion Team',
    date: '2024-01-03',
    category: 'Business',
    readTime: '5 min read',
    image: '/news/europe-expansion.jpg',
    tags: ['Expansion', 'Europe', 'Business']
  },
  {
    id: 7,
    title: 'New Patent Filed for AI-Driven Biometric Analysis',
    excerpt: 'Innovative patent application for machine learning algorithms in biometric data processing.',
    author: 'IP Team',
    date: '2023-12-28',
    category: 'Intellectual Property',
    readTime: '6 min read',
    image: '/news/patent-filing.jpg',
    tags: ['Patent', 'AI', 'Innovation']
  },
  {
    id: 8,
    title: 'Collaboration with MIT Brain Research Center',
    excerpt: 'Joint research initiative to advance understanding of human-machine interface technologies.',
    author: 'Research Team',
    date: '2023-12-20',
    category: 'Research',
    readTime: '7 min read',
    image: '/news/mit-collaboration.jpg',
    tags: ['Research', 'MIT', 'Collaboration']
  },
  {
    id: 9,
    title: 'Product Launch: Next-Gen EEG Headset',
    excerpt: 'Revolutionary EEG headset with wireless connectivity and real-time processing capabilities.',
    author: 'Product Team',
    date: '2023-12-15',
    category: 'Product',
    readTime: '8 min read',
    image: '/news/eeg-headset.jpg',
    tags: ['Product', 'EEG', 'Launch']
  }
]

const pressReleases = [
  {
    title: 'Sentient Biotech Announces Series B Funding Success',
    date: '2024-01-15',
    summary: 'Company raises $25M to accelerate global expansion and product development.',
    download: '/press/series-b-press-release.pdf'
  },
  {
    title: 'Breakthrough in Non-Invasive EEG Technology',
    date: '2024-01-10',
    summary: 'Revolutionary EEG system achieves industry-leading accuracy and performance.',
    download: '/press/eeg-technology-press-release.pdf'
  },
  {
    title: 'Strategic Partnership with Indian Air Force',
    date: '2024-01-05',
    summary: 'Collaboration to develop advanced pilot headgear with neurotechnology integration.',
    download: '/press/air-force-partnership-press-release.pdf'
  }
]

export default function NewsPage() {
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
              <span className="text-primary-blue font-medium">News & Insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Latest News &
              <span className="block gradient-text">Industry Insights</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Stay updated with the latest developments in neurotechnology, company milestones, and industry insights from Sentient Biotech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Subscribe to Updates</span>
                <Mail className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>View Press Releases</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Featured Stories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The latest news and updates from Sentient Biotech and the neurotechnology industry.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-blue/20 to-primary-violet/20 rounded-t-xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-violet rounded-full flex items-center justify-center">
                    <Newspaper className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="badge-primary">{article.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge-info text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-slate-300" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                      >
                        <Download className="w-4 h-4 text-slate-300" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">News Categories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore news and insights by category to find the information most relevant to your interests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsCategories.map((category, index) => (
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
                  <div className="text-sm text-slate-400">Articles</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Recent News</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and insights from Sentient Biotech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary-blue/20 to-primary-violet/20 rounded-t-xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-violet rounded-full flex items-center justify-center">
                    <Newspaper className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="badge-info text-xs">{article.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge-info text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-sm w-full"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Press Releases</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Official press releases and announcements from Sentient Biotech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center">
                    <Newspaper className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{release.title}</h3>
                    <p className="text-primary-blue text-sm">{release.date}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{release.summary}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download PDF</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
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
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest news, insights, and updates from the world of neurotechnology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-primary-blue"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Subscribe</span>
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