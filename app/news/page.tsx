'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Brain,
  Zap
} from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: 'Sentient Biotech Secures Major IAF Contract for Pilot Headgear Systems',
    excerpt: 'Multi-year agreement worth ₹25 Crores to supply next-generation pilot monitoring systems to the Indian Air Force.',
    content: 'Sentient Biotech Private Limited has been awarded a significant contract by the Indian Air Force for the supply of advanced pilot headgear systems. The contract, valued at ₹25 Crores over three years, will enhance pilot performance monitoring and safety across IAF operations.',
    author: 'Dr. Jasmeet Singh',
    date: '2024-01-15',
    category: 'Defense',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Breakthrough in EEG Signal Processing Achieves 99.9% Accuracy',
    excerpt: 'New AI algorithms developed by Sentient Biotech researchers improve neural signal processing accuracy by 40%.',
    content: 'Our research team has achieved a significant breakthrough in EEG signal processing, developing new AI algorithms that improve neural signal processing accuracy to 99.9%. This advancement will significantly enhance the performance of our EEG solutions in clinical and research applications.',
    author: 'Dr. Priya Sharma',
    date: '2024-01-10',
    category: 'Research',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 3,
    title: 'DRDO Certification Achieved for Defense-Grade Neurotechnology',
    excerpt: 'Sentient Biotech receives DRDO certification for its neurotechnology solutions, enabling defense applications.',
    content: 'We are proud to announce that our neurotechnology solutions have received DRDO certification, meeting the stringent requirements for defense applications. This certification validates our commitment to providing secure, reliable solutions for military and aerospace applications.',
    author: 'Col. Rajesh Kumar (Retd.)',
    date: '2024-01-05',
    category: 'Certification',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 4,
    title: 'International Partnership with Leading Healthcare Institutions',
    excerpt: 'Collaboration with Johns Hopkins and MIT to advance neurotechnology research and development.',
    content: 'Sentient Biotech has entered into strategic partnerships with leading healthcare institutions including Johns Hopkins Hospital and MIT Brain Research Center. These collaborations will accelerate research and development of next-generation neurotechnology solutions.',
    author: 'Dr. Anjali Patel',
    date: '2023-12-28',
    category: 'Partnership',
    readTime: '6 min read',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 5,
    title: 'New EEG Solutions Launched for Healthcare Applications',
    excerpt: 'Expanded product line includes specialized EEG systems for neurological diagnostics and treatment.',
    content: 'We are excited to announce the launch of our new EEG solutions specifically designed for healthcare applications. These systems offer enhanced precision and comfort for patients while providing healthcare professionals with reliable diagnostic tools.',
    author: 'Product Team',
    date: '2023-12-20',
    category: 'Product',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 6,
    title: 'Sentient Biotech Receives ISO 13485 Certification',
    excerpt: 'International quality management certification for medical devices achieved, ensuring highest standards.',
    content: 'We are pleased to announce that Sentient Biotech has achieved ISO 13485:2016 certification for medical device quality management. This certification demonstrates our commitment to maintaining the highest standards in our neurotechnology solutions.',
    author: 'Quality Team',
    date: '2023-12-15',
    category: 'Certification',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: false
  }
]

const categories = [
  { name: 'All', count: 6, icon: Globe },
  { name: 'Defense', count: 1, icon: Shield },
  { name: 'Research', count: 1, icon: Brain },
  { name: 'Product', count: 1, icon: Zap },
  { name: 'Partnership', count: 1, icon: TrendingUp },
  { name: 'Certification', count: 2, icon: Award }
]

const industryInsights = [
  {
    title: 'The Future of Neurotechnology in Defense',
    description: 'Exploring how brain-computer interfaces are revolutionizing military applications',
    readTime: '8 min read',
    category: 'Industry Analysis'
  },
  {
    title: 'EEG Technology Trends 2024',
    description: 'Latest developments in electroencephalogram systems and applications',
    readTime: '6 min read',
    category: 'Technology'
  },
  {
    title: 'Human-Machine Interface Evolution',
    description: 'How neurotechnology is shaping the future of human-computer interaction',
    readTime: '7 min read',
    category: 'Innovation'
  }
]

export default function NewsPage() {
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
              News & Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Stay updated with the latest developments in neurotechnology, 
              company news, and industry insights from Sentient Biotech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 glass-panel-strong rounded-lg hover:bg-glass-white-strong transition-colors duration-200"
              >
                <category.icon className="w-4 h-4 text-electric-cyan" />
                <span className="text-white text-sm">{category.name}</span>
                <span className="text-white/60 text-xs">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Featured Article</h2>
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="glass-panel-strong rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-white/60 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                    <p className="text-white/80 mb-6">{article.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-white/60 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                  <div className="bg-gradient-to-br from-electric-cyan/20 to-violet-accent/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-32 h-32 text-electric-cyan/50" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-panel-strong rounded-xl overflow-hidden hover:bg-glass-white-strong transition-colors duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-white/60 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-white/60">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-electric-cyan hover:text-white transition-colors duration-200"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Industry Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industryInsights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-panel-strong rounded-xl p-6"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-electric-cyan" />
                    <span className="text-electric-cyan text-sm">{insight.category}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-3">{insight.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{insight.readTime}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-electric-cyan hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and updates 
              from the world of neurotechnology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
