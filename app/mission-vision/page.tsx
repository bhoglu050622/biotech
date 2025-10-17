'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Heart,
  Lightbulb
} from 'lucide-react'

const missionPillars = [
  {
    title: 'Defense Innovation',
    description: 'Enhancing national security through advanced neurotechnology solutions for military applications',
    icon: Shield,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    title: 'Human Performance',
    description: 'Maximizing human potential through cutting-edge biometric monitoring and cognitive enhancement',
    icon: Brain,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    title: 'Safety Excellence',
    description: 'Ensuring the highest standards of safety and reliability in all our neurotechnology solutions',
    icon: Award,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    title: 'Global Impact',
    description: 'Creating solutions that improve human performance and safety worldwide',
    icon: Globe,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const visionGoals = [
  {
    year: '2025',
    title: 'Advanced Pilot Systems',
    description: 'Deploy next-generation pilot headgear across IAF and international defense forces',
    icon: Shield
  },
  {
    year: '2026',
    title: 'Healthcare Integration',
    description: 'Expand EEG solutions to major healthcare institutions for neurological diagnostics',
    icon: Heart
  },
  {
    year: '2027',
    title: 'AI-Powered Analytics',
    description: 'Launch AI-driven biometric analytics platform for real-time performance optimization',
    icon: Brain
  },
  {
    year: '2030',
    title: 'Global Leadership',
    description: 'Establish Sentient Biotech as the global leader in neurotechnology solutions',
    icon: Globe
  }
]

const coreValues = [
  {
    title: 'Innovation Excellence',
    description: 'Pioneering breakthrough technologies that push the boundaries of what\'s possible in neurotechnology',
    icon: Lightbulb,
    details: [
      'Continuous R&D investment',
      'Cutting-edge technology adoption',
      'Breakthrough innovation focus'
    ]
  },
  {
    title: 'Defense Commitment',
    description: 'Dedicated to strengthening national security through advanced biometric monitoring solutions',
    icon: Shield,
    details: [
      'IAF partnership excellence',
      'DRDO certification standards',
      'Defense-grade security protocols'
    ]
  },
  {
    title: 'Research Integrity',
    description: 'Maintaining the highest standards of scientific rigor and ethical research practices',
    icon: Award,
    details: [
      'Peer-reviewed research',
      'Ethical AI development',
      'Transparent methodologies'
    ]
  },
  {
    title: 'Human-Centric Design',
    description: 'Creating solutions that enhance human capabilities while maintaining dignity and privacy',
    icon: Users,
    details: [
      'Privacy-first approach',
      'User experience focus',
      'Accessibility considerations'
    ]
  }
]

export default function MissionVisionPage() {
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
              Mission & Vision
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              "We envision a future where human potential is amplified through seamless integration with advanced neurotechnology and biotechnology solutions"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Driving the future of neurotechnology through innovation, excellence, 
              and unwavering commitment to human performance and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Our Mission
                </h3>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  At Sentient Biotech Private Limited, our mission is to redefine the boundaries of human potential through the convergence of biotechnology, artificial intelligence, and cognitive science. We are dedicated to developing technologies that not only enhance human capability but also deepen our understanding of the mind and body.
                </p>
                <p>
                  Our goal is to create innovations that serve both healthcare and defense, empowering medical professionals to diagnose and treat with precision, and enabling defense personnel to perform beyond conventional human limits. Through continuous research, ethical innovation, and a commitment to excellence, we strive to build a future where technology works in harmony with humanity.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Our Vision
                </h3>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Our vision is to become a global leader in next-generation neurotechnology, driving the evolution of intelligent systems that seamlessly integrate human intuition with machine intelligence. We envision a world where technology augments rather than replaces human ability, a future in which every individual can achieve optimal mental, physical, and operational performance.
                </p>
                <p>
                  Sentient Biotech aims to set new standards in innovation, safety, and human advancement, creating transformative solutions that redefine how we think, heal, and protect.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}
