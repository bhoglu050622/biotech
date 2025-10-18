'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Brain, 
  Eye, 
  Shield, 
  Heart,
  Activity,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const capabilities = [
  {
    title: 'Cognitive Data Processing',
    description: 'Algorithms designed to interpret EEG, biometric, and environmental data for real time decision support in healthcare and defense.',
    icon: Brain
  },
  {
    title: 'Predictive Intelligence Models',
    description: 'Advanced neural networks capable of forecasting physical, mental, and operational conditions with precision.',
    icon: TrendingUp
  },
  {
    title: 'Computer Vision and Image Fusion',
    description: 'AI powered systems that merge visual inputs from multiple cameras and sensors to create crystal clear visual outputs under any lighting condition.',
    icon: Eye
  },
  {
    title: 'Behavioral and Emotional Analytics',
    description: 'Machine learning models that can detect stress, fatigue, and emotional variation in human subjects to improve safety and performance.',
    icon: Activity
  },
  {
    title: 'AI Enhanced Bio Monitoring',
    description: 'Integration of physiological and cognitive data for a unified view of human health and efficiency.',
    icon: Heart
  },
  {
    title: 'Decision Support Systems',
    description: 'Adaptive algorithms that provide intelligent recommendations for medical professionals, defense operators, and researchers.',
    icon: Shield
  }
]

const researchAreas = [
  'Explainable Artificial Intelligence: Creating transparent AI systems that provide understandable reasoning behind every decision',
  'Cognitive Machine Learning: Developing models that learn from neural data and replicate elements of human thought and emotion',
  'AI for Neuroadaptive Systems: Integrating machine learning into brain computer interfaces to enable fluid communication between mind and machine',
  'Adaptive Learning Algorithms: Building systems that reconfigure themselves based on user behavior, environmental conditions, and mission dynamics',
  'Federated and Secure AI: Researching decentralized AI models that learn across distributed data networks while maintaining full privacy and data integrity'
]

const applications = [
  {
    title: 'Defense and Aviation',
    description: 'Real time target recognition, terrain interpretation, and pilot assistance systems integrated with headgear and cockpit AI.',
    icon: Shield
  },
  {
    title: 'Healthcare and Life Sciences',
    description: 'AI guided diagnostics, predictive analytics, and treatment optimization for faster and more accurate medical interventions.',
    icon: Heart
  },
  {
    title: 'Neurotechnology Integration',
    description: 'AI models that decode neural signals for cognitive assessment, fatigue monitoring, and performance enhancement.',
    icon: Brain
  },
  {
    title: 'Operational Intelligence',
    description: 'Intelligent data fusion systems for field operations, environmental monitoring, and resource optimization.',
    icon: Activity
  }
]

export default function AIMLPage() {
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
              Artificial Intelligence and Machine Learning
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Intelligence that Learns, Adapts, and Evolves
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
                At Sentient Biotech Private Limited, we see Artificial Intelligence and Machine Learning not as tools but as extensions of human capability. Our mission is to create systems that do more than compute - they think, learn, and adapt. By combining biological intelligence with computational precision, we develop AI frameworks that enhance decision making, prediction accuracy, and cognitive understanding across healthcare, neuroscience, and defense.
              </p>
              <p>
                Our technology allows machines to interpret complex biological and environmental signals, recognize patterns invisible to the human eye, and make decisions that are fast, reliable, and human aligned. Through years of research and engineering, we have created AI systems that can reason with purpose, adapt with experience, and perform with human like intuition.
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
              Redefining the Boundaries of Intelligence
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
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-green to-accent-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
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
      <section className="py-16 sm:py-20 section-enhanced thematic-bg-secondary">
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
            <p className="text-white/85 mb-8 text-center leading-relaxed font-medium">
              Our AI research is dedicated to creating systems that continuously evolve. We focus on hybrid models that blend human reasoning with computational learning, ensuring our solutions remain adaptive and explainable.
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
                  <CheckCircle className="bullet-icon-accent" />
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
              From Data to Intelligent Action
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

      {/* Future Vision */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8">
              The Future of AI at Sentient Biotech
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Our long term research is focused on creating symbiotic intelligence, where human and artificial cognition function as one system. Future developments include fully autonomous AI copilots, emotion sensitive healthcare assistants, and real time adaptive command systems for defense and emergency operations.
            </p>
            <p className="text-text-primary font-medium text-base sm:text-lg">
              By merging biology and computation, Sentient Biotech is preparing the world for a new class of intelligent systems that think with purpose, act with empathy, and learn without limit.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}

