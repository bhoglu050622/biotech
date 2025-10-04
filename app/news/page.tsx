'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  Star,
  Globe,
  Award,
  Brain,
  Cpu,
  Activity,
  Shield,
  Target,
  Zap,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Download,
  Play,
  Eye,
  ThumbsUp
} from 'lucide-react'

const newsArticles = [
  {
    id: 'defense-partnership-2024',
    title: 'Sentient Biotech Partners with Indian Air Force for Advanced Pilot Training',
    excerpt: 'Revolutionary neurotechnology solutions to enhance pilot performance and mission success rates through real-time cognitive monitoring.',
    content: 'Sentient Biotech has announced a groundbreaking partnership with the Indian Air Force to implement advanced neurotechnology solutions in pilot training programs. The collaboration will focus on real-time cognitive monitoring, fatigue detection, and performance optimization to enhance mission success rates.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    category: 'Defense',
    readTime: '5 min read',
    image: '🛡️',
    tags: ['Defense', 'Partnership', 'Training', 'Neurotechnology'],
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 'eeg-breakthrough-2024',
    title: 'Breakthrough in Non-Invasive EEG Technology Achieves 99.9% Accuracy',
    excerpt: 'New signal processing algorithms enable unprecedented precision in neural signal acquisition for defense and healthcare applications.',
    content: 'Our research team has achieved a major breakthrough in non-invasive EEG technology, reaching 99.9% accuracy in neural signal acquisition. The new signal processing algorithms enable unprecedented precision for both defense and healthcare applications.',
    author: 'Dr. Priya Patel',
    date: '2024-01-10',
    category: 'Research',
    readTime: '7 min read',
    image: '🧠',
    tags: ['Research', 'EEG', 'Technology', 'Healthcare'],
    featured: true,
    views: 2100,
    likes: 156
  },
  {
    id: 'healthcare-expansion-2024',
    title: 'Expanding Healthcare Solutions: New Partnerships with Leading Medical Institutions',
    excerpt: 'Strategic partnerships with Johns Hopkins and MIT to advance neurological diagnosis and treatment monitoring systems.',
    content: 'We are excited to announce strategic partnerships with leading medical institutions including Johns Hopkins and MIT to advance our neurological diagnosis and treatment monitoring systems. These collaborations will accelerate the development of next-generation healthcare solutions.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Healthcare',
    readTime: '6 min read',
    image: '🏥',
    tags: ['Healthcare', 'Partnership', 'Medical', 'Innovation'],
    featured: false,
    views: 980,
    likes: 67
  },
  {
    id: 'award-recognition-2024',
    title: 'Sentient Biotech Receives DRDO Excellence Award for Innovation',
    excerpt: 'Recognition for outstanding contributions to defense technology and commitment to advancing neurotechnology solutions.',
    content: 'We are honored to receive the DRDO Excellence Award for Innovation, recognizing our outstanding contributions to defense technology. This award reflects our commitment to advancing neurotechnology solutions and our dedication to excellence in research and development.',
    author: 'Captain Michael Rodriguez',
    date: '2024-01-01',
    category: 'Awards',
    readTime: '4 min read',
    image: '🏆',
    tags: ['Award', 'Recognition', 'Innovation', 'Defense'],
    featured: false,
    views: 1450,
    likes: 123
  },
  {
    id: 'research-publication-2024',
    title: 'Groundbreaking Research Published in Nature Neuroscience',
    excerpt: 'Our latest findings on brain-computer interfaces published in the prestigious Nature Neuroscience journal.',
    content: 'Our research team has published groundbreaking findings on brain-computer interfaces in the prestigious Nature Neuroscience journal. The study demonstrates significant advances in neural signal processing and real-time cognitive monitoring capabilities.',
    author: 'Dr. Sarah Chen',
    date: '2023-12-28',
    category: 'Research',
    readTime: '8 min read',
    image: '📚',
    tags: ['Research', 'Publication', 'Neuroscience', 'BCI'],
    featured: false,
    views: 3200,
    likes: 234
  },
  {
    id: 'product-launch-2024',
    title: 'Next-Generation Pilot Headgear System Launched',
    excerpt: 'Revolutionary wearable technology for military pilots with integrated neurotechnology and biometric monitoring.',
    content: 'We are proud to announce the launch of our next-generation pilot headgear system, featuring integrated neurotechnology and biometric monitoring. This revolutionary wearable technology represents a significant advancement in military pilot capabilities.',
    author: 'Alex Thompson',
    date: '2023-12-20',
    category: 'Product',
    readTime: '5 min read',
    image: '🎧',
    tags: ['Product', 'Launch', 'Military', 'Wearable'],
    featured: false,
    views: 1800,
    likes: 145
  }
]

const categories = [
  { name: 'All', count: 6, color: 'from-electric-cyan to-violet-accent' },
  { name: 'Defense', count: 2, color: 'from-blue-500 to-cyan-400' },
  { name: 'Research', count: 2, color: 'from-purple-500 to-pink-400' },
  { name: 'Healthcare', count: 1, color: 'from-emerald-500 to-teal-400' },
  { name: 'Awards', count: 1, color: 'from-orange-500 to-red-400' },
  { name: 'Product', count: 1, color: 'from-violet-500 to-purple-400' }
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/20 rounded-full px-4 py-2 mb-8"
              >
                <Globe className="w-4 h-4 text-electric-cyan" />
                <span className="text-electric-cyan text-sm font-medium">Latest News</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-electric-cyan via-violet-accent to-soft-teal bg-clip-text text-transparent">
                  News &
                </span>
                <br />
                <span className="text-white">
                  Updates
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Stay informed about our latest breakthroughs, partnerships, and innovations 
                in neurotechnology that are shaping the future of defense and healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
                >
                  <span>Subscribe to Updates</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <span>Download Press Kit</span>
                  <Download className="w-5 h-5" />
                </motion.button>
              </div>

              {/* News Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
                  <span>Latest Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Industry Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Research Breakthroughs</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* News Display */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      {/* News Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center">
                        <Globe className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Sentient Biotech</h3>
                        <p className="text-slate-300">Latest news and updates</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-electric-cyan">6</div>
                          <div className="text-sm text-slate-300">Articles</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-violet-accent">2.1K</div>
                          <div className="text-sm text-slate-300">Views</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-12 h-12 border-2 border-electric-cyan/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-violet-accent/30 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:border-electric-cyan focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-electric-cyan text-deep-indigo'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our most important updates and breakthrough announcements.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{article.image}</div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-electric-cyan/10 text-electric-cyan text-xs px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="bg-violet-accent/10 text-violet-accent text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
                        <Bookmark className="w-4 h-4 text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
                        <Share2 className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                  <p className="text-slate-300 mb-6">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-sm">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Articles</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse through all our news articles and updates.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{article.image}</div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
                      <Bookmark className="w-4 h-4 text-slate-400" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
                      <Share2 className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="bg-white/10 text-slate-300 text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{article.likes}</span>
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-electric-cyan/10 to-violet-accent/10 rounded-3xl p-8 border border-electric-cyan/20"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest news, breakthroughs, and updates from Sentient Biotech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-electric-cyan focus:outline-none transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
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