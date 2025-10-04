'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Users, BarChart, Lightbulb, Shield, Rocket, Award, ArrowRight, CheckCircle, Target, Globe, Zap } from 'lucide-react'

const investmentHighlights = [
  {
    icon: TrendingUp,
    title: 'Market Opportunity',
    description: 'The global neurotechnology market is projected to reach $17.1 billion by 2025, growing at a CAGR of 12.3%.',
    value: '$17.1B',
    growth: '+12.3%',
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    icon: Target,
    title: 'Revenue Growth',
    description: 'Consistent revenue growth with 150% year-over-year increase and expanding market presence.',
    value: '150%',
    growth: 'YoY',
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    icon: Users,
    title: 'Customer Base',
    description: 'Growing customer base across defense, healthcare, and research sectors with high retention rates.',
    value: '200+',
    growth: 'Clients',
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    icon: Award,
    title: 'Innovation Leadership',
    description: 'Industry-leading R&D investment with 15+ patents and cutting-edge technology development.',
    value: '15+',
    growth: 'Patents',
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const financialMetrics = [
  {
    category: 'Revenue Growth',
    icon: DollarSign,
    metrics: [
      { name: '2023 Revenue', value: '$2.5M', growth: '+150%', color: 'text-primary-emerald' },
      { name: '2024 Projected', value: '$6.2M', growth: '+148%', color: 'text-primary-blue' },
      { name: '2025 Target', value: '$15M', growth: '+142%', color: 'text-primary-violet' }
    ]
  },
  {
    category: 'Market Position',
    icon: BarChart,
    metrics: [
      { name: 'Market Share', value: '12%', growth: '+3%', color: 'text-primary-blue' },
      { name: 'Customer Growth', value: '200+', growth: '+50%', color: 'text-primary-emerald' },
      { name: 'Geographic Reach', value: '25+', growth: '+5', color: 'text-primary-violet' }
    ]
  },
  {
    category: 'Innovation Investment',
    icon: Lightbulb,
    metrics: [
      { name: 'R&D Investment', value: '25%', growth: 'Revenue', color: 'text-primary-blue' },
      { name: 'Patents Filed', value: '15+', growth: '+5', color: 'text-primary-emerald' },
      { name: 'Research Papers', value: '25+', growth: '+10', color: 'text-primary-violet' }
    ]
  }
]

const investmentRounds = [
  {
    round: 'Seed Round',
    amount: '$2.5M',
    date: '2022',
    lead: 'TechVentures Capital',
    participants: ['HealthTech Partners', 'Defense Innovation Fund', 'Angel Investors'],
    use: 'Product development and initial market entry',
    status: 'Completed'
  },
  {
    round: 'Series A',
    amount: '$8.5M',
    date: '2023',
    lead: 'NeuroTech Ventures',
    participants: ['Global Health Fund', 'Defense Capital', 'Strategic Investors'],
    use: 'Market expansion and technology advancement',
    status: 'Completed'
  },
  {
    round: 'Series B',
    amount: '$25M',
    date: '2024',
    lead: 'Leading VC Partners',
    participants: ['International Funds', 'Corporate VCs', 'Government Funds'],
    use: 'Global expansion and product portfolio development',
    status: 'In Progress'
  }
]

const keyInvestors = [
  {
    name: 'TechVentures Capital',
    type: 'Lead Investor',
    focus: 'Deep Tech & Healthcare',
    investment: '$2.5M',
    logo: '/investors/techventures.jpg',
    description: 'Leading investor in breakthrough healthcare technologies with a portfolio of 50+ companies.'
  },
  {
    name: 'NeuroTech Ventures',
    type: 'Series A Lead',
    focus: 'Neurotechnology & AI',
    investment: '$8.5M',
    logo: '/investors/neurotech.jpg',
    description: 'Specialized fund focused on neurotechnology and brain-computer interface innovations.'
  },
  {
    name: 'Global Health Fund',
    type: 'Strategic Investor',
    focus: 'Healthcare Technology',
    investment: '$5M',
    logo: '/investors/globalhealth.jpg',
    description: 'Global healthcare investment fund with extensive network in medical technology sector.'
  },
  {
    name: 'Defense Innovation Fund',
    type: 'Government Investor',
    focus: 'Defense Technology',
    investment: '$3M',
    logo: '/investors/defense.jpg',
    description: 'Government-backed fund supporting defense technology innovation and national security.'
  }
]

const useOfFunds = [
  {
    category: 'Research & Development',
    percentage: 35,
    amount: '$8.75M',
    description: 'Advanced neurotechnology research, AI development, and product innovation',
    icon: Lightbulb,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    category: 'Market Expansion',
    percentage: 25,
    amount: '$6.25M',
    description: 'Global market entry, sales team expansion, and customer acquisition',
    icon: Globe,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    category: 'Product Development',
    percentage: 20,
    amount: '$5M',
    description: 'New product development, manufacturing scale-up, and quality assurance',
    icon: Rocket,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    category: 'Operations & Infrastructure',
    percentage: 20,
    amount: '$5M',
    description: 'Team expansion, infrastructure development, and operational scaling',
    icon: Users,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const competitiveAdvantages = [
  {
    title: 'Technology Leadership',
    description: 'Proprietary algorithms and patents that provide significant competitive moats in the neurotechnology space.',
    icon: Shield,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    title: 'Market Validation',
    description: 'Proven product-market fit with established customers in defense, healthcare, and research sectors.',
    icon: Target,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    title: 'Regulatory Expertise',
    description: 'Deep understanding of regulatory requirements across multiple jurisdictions and industries.',
    icon: Award,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    title: 'Strategic Partnerships',
    description: 'Strong relationships with key industry players, research institutions, and government agencies.',
    icon: Users,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

export default function InvestorsPage() {
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
              <span className="text-primary-blue font-medium">Investment Opportunity</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Invest in the Future of
              <span className="block gradient-text">Neurotechnology</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Join us in revolutionizing human-machine interaction through cutting-edge neurotechnology solutions. Discover the investment opportunity that's transforming industries and creating new possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>View Investment Deck</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>Schedule Meeting</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Investment Highlights</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key metrics and opportunities that make Sentient Biotech an attractive investment opportunity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{highlight.title}</h3>
                <p className="text-slate-300 mb-4">{highlight.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue mb-1">{highlight.value}</div>
                  <div className="text-sm text-primary-emerald">{highlight.growth}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Financial Performance</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strong financial performance and growth trajectory across key business metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {financialMetrics.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-primary-blue" />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-slate-300">{metric.name}</span>
                      <div className="text-right">
                        <div className={`font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-xs text-primary-emerald">{metric.growth}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Rounds */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Investment Rounds</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our funding journey and the strategic investors who believe in our vision.
            </p>
          </motion.div>

          <div className="space-y-8">
            {investmentRounds.map((round, index) => (
              <motion.div
                key={round.round}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl font-bold text-primary-blue">{round.amount}</div>
                      <div className="badge-primary">{round.status}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{round.round}</h3>
                    <p className="text-slate-400 mb-4">{round.date}</p>
                    <p className="text-slate-300 mb-4">{round.use}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Lead Investor:</h4>
                    <p className="text-primary-blue font-medium mb-4">{round.lead}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Participants:</h4>
                    <ul className="space-y-1">
                      {round.participants.map((participant, participantIndex) => (
                        <li key={participantIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0" />
                          <span className="text-slate-300">{participant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Investors */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Key Investors</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic investors who share our vision and support our growth in the neurotechnology space.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInvestors.map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{investor.name}</h3>
                <p className="text-primary-blue font-medium mb-2">{investor.type}</p>
                <p className="text-slate-400 text-sm mb-4">{investor.focus}</p>
                <p className="text-slate-300 text-sm mb-4">{investor.description}</p>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-blue">{investor.investment}</div>
                  <div className="text-xs text-slate-400">Investment</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Use of Funds</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic allocation of Series B funding to accelerate growth and market expansion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useOfFunds.map((fund, index) => (
              <motion.div
                key={fund.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${fund.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <fund.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{fund.category}</h3>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary-blue mb-1">{fund.percentage}%</div>
                  <div className="text-lg text-primary-emerald">{fund.amount}</div>
                </div>
                <p className="text-slate-300 text-sm">{fund.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Competitive Advantages</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key differentiators that position us as a leader in the neurotechnology space.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-lg flex items-center justify-center`}>
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
                </div>
                <p className="text-slate-300">{advantage.description}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Invest in the Future?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join us in revolutionizing neurotechnology and be part of the next generation of human-machine interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Download Investment Deck</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Schedule Investor Call</span>
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