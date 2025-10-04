'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Award, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  BarChart3,
  PieChart,
  LineChart,
  Building2,
  Briefcase,
  Star,
  Zap
} from 'lucide-react'

const financialHighlights = [
  {
    metric: '₹50 Cr',
    description: 'Total Funding Raised',
    icon: DollarSign,
    growth: '+25% YoY'
  },
  {
    metric: '₹15 Cr',
    description: 'Annual Revenue',
    icon: BarChart3,
    growth: '+40% YoY'
  },
  {
    metric: '85%',
    description: 'Defense Revenue Share',
    icon: Shield,
    growth: 'Stable'
  },
  {
    metric: '15+',
    description: 'Active Contracts',
    icon: Briefcase,
    growth: '+3 New'
  }
]

const marketOpportunities = [
  {
    sector: 'Defense & Aerospace',
    marketSize: '$2.5B',
    growth: '12% CAGR',
    description: 'Growing demand for pilot monitoring systems and human-machine interfaces',
    icon: Shield
  },
  {
    sector: 'Healthcare Neurotech',
    marketSize: '$1.8B',
    growth: '15% CAGR',
    description: 'Expanding applications in neurological diagnostics and treatment',
    icon: Zap
  },
  {
    sector: 'Research & Academia',
    marketSize: '$800M',
    growth: '18% CAGR',
    description: 'Increasing research funding for neuroscience and cognitive studies',
    icon: Target
  }
]

const keyPartnerships = [
  {
    name: 'Indian Air Force',
    type: 'Strategic Partnership',
    description: 'Multi-year contract for pilot headgear systems and training solutions',
    value: '₹25 Cr',
    status: 'Active'
  },
  {
    name: 'DRDO',
    type: 'R&D Collaboration',
    description: 'Joint development of next-generation biometric monitoring systems',
    value: '₹15 Cr',
    status: 'Active'
  },
  {
    name: 'Defense Research Labs',
    type: 'Technology Transfer',
    description: 'Licensing agreements for EEG technology applications',
    value: '₹8 Cr',
    status: 'Active'
  },
  {
    name: 'International Defense',
    type: 'Export Partnership',
    description: 'Global expansion of pilot monitoring solutions',
    value: '₹12 Cr',
    status: 'Pipeline'
  }
]

const investmentHighlights = [
  {
    title: 'Proven Technology',
    description: 'Patented EEG solutions with 99.9% accuracy in real-world applications',
    icon: Award
  },
  {
    title: 'Defense Focus',
    description: 'Strong relationships with IAF, DRDO, and international defense organizations',
    icon: Shield
  },
  {
    title: 'Scalable Platform',
    description: 'Technology platform adaptable across multiple industries and applications',
    icon: Globe
  },
  {
    title: 'Experienced Team',
    description: 'Leadership with 15+ years in defense R&D and neurotechnology',
    icon: Users
  }
]

const revenueStreams = [
  {
    stream: 'Defense Contracts',
    percentage: 60,
    description: 'IAF, DRDO, and international defense partnerships',
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    stream: 'Healthcare Solutions',
    percentage: 25,
    description: 'EEG systems for hospitals and research institutions',
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    stream: 'Research & Academia',
    percentage: 10,
    description: 'Licensing and technology transfer agreements',
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    stream: 'Training & Support',
    percentage: 5,
    description: 'Professional services and maintenance contracts',
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const growthProjections = [
  {
    year: '2024',
    revenue: '₹15 Cr',
    contracts: '15',
    description: 'Current year performance with new IAF contracts'
  },
  {
    year: '2025',
    revenue: '₹25 Cr',
    contracts: '22',
    description: 'Expansion into international defense markets'
  },
  {
    year: '2026',
    revenue: '₹40 Cr',
    contracts: '30',
    description: 'Healthcare market penetration and AI platform launch'
  },
  {
    year: '2027',
    revenue: '₹65 Cr',
    contracts: '45',
    description: 'Global expansion and next-generation product lines'
  }
]

export default function InvestorsPage() {
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
              Investor Relations
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Leading neurotechnology innovation with strong financial performance, 
              strategic partnerships, and significant growth opportunities in defense and healthcare markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Profitable Growth
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Defense Focus
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Global Expansion
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
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
              Financial Highlights
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Strong financial performance with consistent growth and diversified revenue streams.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-electric-cyan mb-2">{highlight.metric}</div>
                <div className="text-white/80 text-sm mb-2">{highlight.description}</div>
                <div className="text-electric-cyan text-xs font-medium">{highlight.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
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
              Market Opportunities
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Significant growth potential across defense, healthcare, and research sectors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {marketOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.sector}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                    <opportunity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{opportunity.sector}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-electric-cyan font-medium">{opportunity.marketSize}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/60">{opportunity.growth}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-sm">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
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
              Strategic Partnerships
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Strong relationships with leading defense organizations and research institutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {keyPartnerships.map((partnership, index) => (
              <motion.div
                key={partnership.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold mb-1">{partnership.name}</h3>
                    <p className="text-electric-cyan text-sm">{partnership.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-electric-cyan font-bold">{partnership.value}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      partnership.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {partnership.status}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-sm">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
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
              Revenue Diversification
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Balanced revenue portfolio across defense, healthcare, and research sectors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-6">Revenue Distribution</h3>
              <div className="space-y-4">
                {revenueStreams.map((stream, index) => (
                  <div key={stream.stream} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-electric-cyan to-violet-accent rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm">{stream.stream}</span>
                        <span className="text-electric-cyan text-sm font-medium">{stream.percentage}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-electric-cyan to-violet-accent h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${stream.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-white/60 text-xs mt-1">{stream.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-6">Growth Projections</h3>
              <div className="space-y-4">
                {growthProjections.map((projection, index) => (
                  <motion.div
                    key={projection.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
                  >
                    <div>
                      <div className="text-white font-medium">{projection.year}</div>
                      <div className="text-white/60 text-sm">{projection.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-electric-cyan font-bold">{projection.revenue}</div>
                      <div className="text-white/60 text-xs">{projection.contracts} contracts</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
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
              Investment Highlights
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Key factors that make Sentient Biotech an attractive investment opportunity.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">{highlight.title}</h3>
                <p className="text-white/70 text-sm">{highlight.description}</p>
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
              Investment Opportunities
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing neurotechnology. We're seeking strategic investors 
              and partners to accelerate our growth and global expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Download Investor Deck
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Schedule Meeting
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}