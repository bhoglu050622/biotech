'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Shield, 
  Target, 
  Users, 
  Award, 
  Cpu,
  Layers,
  TrendingUp,
  CheckCircle, 
  ArrowRight,
  Mail,
  Zap
} from 'lucide-react'

const dualMarkets = [
  {
    title: 'Revolutionizing Healthcare',
    description: 'The global mental health crisis and the demand for effective neurological diagnostics represent a massive market in need of objective, scalable tools. Our Neuroimaging products and Deep-Learning Modules are designed to become the new standard for clinical diagnosis and monitoring.',
    icon: Brain,
    gradient: 'from-primary-emerald to-secondary-emerald'
  },
  {
    title: 'Modernizing National Security',
    description: 'The global shift towards technologically superior defense hardware is undeniable. Our Next-Gen Headgear and underlying biosensor technology directly address the critical need for enhanced pilot safety, cognitive performance, and mission effectiveness.',
    icon: Shield,
    gradient: 'from-primary-blue to-secondary-blue'
  }
]

const strategicAdvantages = [
  {
    title: 'Proprietary Foundational AI',
    description: 'Our foundational models, trained on the largest public EEG datasets, serves as a powerful, defensible moat.',
    icon: Cpu
  },
  {
    title: 'Full-Stack Ecosystem',
    description: 'By controlling the hardware, software, and AI, we control the quality, performance, and future roadmap of our entire product ecosystem.',
    icon: Layers
  },
  {
    title: 'World-Class Team',
    description: 'We are a team of dedicated scientists, engineers, and strategists with deep expertise in neuroscience, AI, and hardware engineering.',
    icon: Users
  },
  {
    title: 'Capital Efficiency',
    description: 'Our platform technology is being commercialized with early prototypes already developed and key partnerships being established.',
    icon: TrendingUp
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
              INVESTORS
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Partnering for a Future of Intelligence and Innovation
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              Sentient Biotech Private Limited stands at the intersection of neurotechnology, AI, XR systems, and bio-integrated solutions. We are transforming industries such as defence, healthcare, academia, and simulation with intelligent technologies that enhance human cognition, operational efficiency, and decision-making.
            </p>
            <div className="glass-panel-strong rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-white/90 text-lg">
                We invite investors to join us in this journey of innovation, addressing some of the most critical challenges across sectors while creating sustainable value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              The Investment Thesis: A Dual-Market Opportunity
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              We have built our strategy on a foundation of capital-efficient synergy. Our core innovations in AI and 
              biosensing are being developed as a platform, allowing us to pursue two distinct, multi-billion dollar 
              markets simultaneously:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {dualMarkets.map((market, index) => (
              <motion.div
                key={market.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-8"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${market.gradient} rounded-full flex items-center justify-center mb-6`}>
                  <market.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {market.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {market.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Our Strategic Advantage
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              We are seeking partners to help us accelerate our growth and capture these markets. 
              Our key strategic advantages include:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{advantage.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{advantage.description}</p>
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
