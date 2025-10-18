'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Activity, 
  Users, 
  Shield, 
  Heart,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const capabilities = [
  {
    title: 'High-Precision EEG Systems',
    description: 'Capture and analyze brainwave patterns with unparalleled clarity for medical diagnostics, cognitive research, and neuro-performance monitoring.',
    icon: Brain
  },
  {
    title: 'Brain-Computer Interfaces (BCI)',
    description: 'Enable seamless control of devices using neural signals, allowing for hands-free command systems and real-time situational interaction.',
    icon: Zap
  },
  {
    title: 'Cognitive Load and Fatigue Analysis',
    description: 'AI-driven models interpret mental stress, focus, and alertness - essential for pilots, soldiers, and operators in high-stakes environments.',
    icon: Activity
  },
  {
    title: 'Neural Pattern Recognition',
    description: 'Proprietary algorithms identify behavioral and emotional cues, enabling early detection of neurological disorders and cognitive decline.',
    icon: Users
  },
  {
    title: 'Integrated Neuro-Bio Monitoring',
    description: 'Combined with thermal and biometric sensors, our systems deliver a complete neurophysiological profile of human performance.',
    icon: Shield
  }
]

const researchAreas = [
  'Adaptive Neural Interfaces: Developing interfaces that learn and evolve with individual brain patterns for personalized optimization',
  'Neural Signal Enhancement: Using AI-based filtering to reduce noise and distortion, improving accuracy in low-signal environments',
  'Cognitive Augmentation: Exploring methods to amplify human decision-making and reflex responses through real-time neurofeedback loops',
  'Neural Data Encryption: Ensuring secure transmission of brain-derived data through advanced quantum-resistant protocols',
  'Neuroplasticity and Regeneration: Studying how neurostimulation can aid recovery from trauma or enhance learning capabilities'
]

const applications = [
  {
    title: 'Defense & Aviation',
    description: 'Neural fatigue monitoring, AR-assisted cognitive enhancement, and mind-controlled systems for next-generation pilots and command centers.',
    icon: Shield
  },
  {
    title: 'Healthcare & Rehabilitation',
    description: 'Early detection of neurological disorders, brain injury recovery, and emotion-aware therapeutic systems.',
    icon: Heart
  },
  {
    title: 'Research & Cognitive Sciences',
    description: 'High-fidelity EEG analytics for academic and applied neuroscience research.',
    icon: Brain
  },
  {
    title: 'Industrial & Operational Performance',
    description: 'Monitoring stress, focus, and decision-making capacity in high-performance environments.',
    icon: Activity
  }
]

const competitiveEdge = [
  'Proprietary AI frameworks for neural pattern learning',
  'Integration with AR/VR and HMI systems for real-time visualization',
  'Cross-domain adaptability - from clinical to defense-grade applications',
  'Ethical and regulatory compliance under Indian and international biomedical standards'
]

export default function NeurotechnologyPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
      <ParticleBackground />
      <Navbar />
      
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
              Neurotechnology
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Understanding the Power of the Human Mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="space-y-4 sm:space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                At Sentient Biotech Private Limited, we believe that the human brain is the most sophisticated system ever created - and understanding it is the key to unlocking the next revolution in technology and human performance. Our neurotechnology division focuses on developing intelligent systems that read, interpret, and respond to neural activity in real time. By integrating neuroscience, artificial intelligence, and bioengineering, we transform brain signals into actionable data, enabling applications that extend from healthcare to defense.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Our Capabilities
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Bridging Biology and Technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-green rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <capability.icon className="w-8 h-8 text-primary-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4">{capability.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Research */}
      <section className="py-16 sm:py-20 section-enhanced thematic-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-white mb-6 sm:mb-8 text-center">
              Advanced Research
            </h2>
            <p className="text-white/85 mb-8 text-center font-medium">
              Where Science Meets Innovation
            </p>
            <p className="text-white/85 leading-relaxed mb-8 font-medium">
              Our R&D division works at the edge of neuroscience and computation. We collaborate with leading institutions and defense organizations to advance the understanding of brain-computer communication and neural adaptability.
            </p>
            <div className="list-enhanced">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="list-enhanced-item"
                >
                  <CheckCircle className="bullet-icon-primary" />
                  <p className="bullet-text leading-relaxed text-sm">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Applications
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Transforming Human Performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <application.icon className="w-8 h-8 text-primary-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4">{application.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8 text-center">
              Why Sentient Biotech
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              What sets Sentient Biotech apart is our deep integration of biology and computation. Our technologies are not just diagnostic; they are adaptive, predictive, and evolutionary.
            </p>
            <div className="list-enhanced">
              {competitiveEdge.map((edge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="list-enhanced-item"
                >
                  <CheckCircle className="bullet-icon-secondary" />
                  <p className="bullet-text leading-relaxed text-sm">{edge}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-text-secondary leading-relaxed italic">
                We go beyond traditional EEG and brain mapping. We engineer intelligence that understands you - adapting dynamically to your cognitive and emotional state to optimize performance, safety, and health.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8">
              The Future of Neurotechnology
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Sentient Biotech is shaping the next generation of human-machine collaboration. Our long-term vision includes fully immersive cognitive ecosystems where brain signals directly influence digital and physical environments. From AI-assisted decision-making in defense to personalized brain training in healthcare, our research is setting the foundation for the next leap in human evolution.
            </p>
            <p className="text-text-primary font-medium text-base sm:text-lg">
              The human brain is not just a biological organ; it's the foundation of innovation, emotion, and intelligence. At Sentient Biotech, we're committed to understanding and amplifying it - building technologies that respect its complexity and unlock its infinite potential.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}

