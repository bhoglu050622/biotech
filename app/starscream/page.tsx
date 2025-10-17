'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import BackToTop from '@/components/BackToTop'
import JsonLd, { starscreamProductSchema, generateBreadcrumbSchema } from '@/components/JsonLd'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye,
  Activity,
  Heart,
  CheckCircle, 
  ArrowRight,
  Plane,
  Sparkles,
  Monitor,
  Zap,
  Database,
  Cpu,
  Users,
  Award,
  Globe,
  Lock,
  Settings,
  BarChart3,
  FileText,
  HelpCircle,
  Target,
  Brain,
  Camera,
  MapPin,
  AlertTriangle
} from 'lucide-react'

const capabilities = [
  'Day and Night Vision Enhancement: AI-powered vision augmentation that ensures clarity in all lighting conditions.',
  'Augmented and Virtual Reality Integration: Full 3D terrain reconstruction, sky mapping, and VR overlays where natural vision is limited.',
  'Bio-Metric Monitoring: Real-time recording of heart rate, SpO2, thermal patterns, and neural indicators to track pilot stress, fatigue, and performance.',
  'Multi-Sensor Fusion: Integration of infrared, electro-optical, and radar feeds for precise spatial awareness.',
  'Heads-Up Cognitive Display: Critical flight data, navigation cues, and mission intelligence projected directly in the pilot\'s line of sight.',
  'Predictive Decision Support: AI-driven alerts for potential threats, operational hazards, or performance deterioration.',
  'Adaptive Neural Interface: Neural feedback loops that optimize display and response according to pilot focus and cognitive state.',
  'Lightweight and Ergonomic Design: Comfortable, durable, and fully compatible with helmets, oxygen masks, and communication systems.'
]

const researchAreas = [
  'Neuroadaptive Display Systems: Head-up displays that adapt in real time to cognitive load and focus.',
  '3D Environmental Reconstruction: AI models that synthesize data from multiple sensors into a comprehensive visual map.',
  'Bio-Signal Analytics: Continuous assessment of thermal, oxygen, heart rate, and neural signals for operational optimization.',
  'AI-Enhanced Threat Recognition: Machine learning algorithms that detect anomalies, potential collisions, and situational risks.',
  'VR-Based Training Modules: Realistic pilot training with predictive cognitive response integration.',
  'Multi-Sensor Fusion Research: Combining IR, EO, radar, and neural data to generate a precise real-time operational picture.'
]

const applications = [
  {
    title: 'Indian Air Force Operations',
    description: 'Advanced cockpit integration for fighter pilots, providing superior vision, bio-monitoring, and situational awareness.',
    icon: Shield
  },
  {
    title: 'Chartered Flight Operations',
    description: 'Enhanced safety and cognitive support for pilots managing complex aircraft systems and passenger safety.',
    icon: Plane
  },
  {
    title: 'Training and Simulation',
    description: 'VR and AR environments that replicate real flight conditions for pilot education and readiness assessment.',
    icon: Target
  },
  {
    title: 'Defense Research and Development',
    description: 'Integration with multi-sensor platforms for testing next-generation avionics and operational strategies.',
    icon: Brain
  },
  {
    title: 'Emergency and Tactical Missions',
    description: 'Real-time cognitive and environmental monitoring to enhance decision-making under high-stress conditions.',
    icon: AlertTriangle
  }
]

const developmentPlatforms = [
  {
    title: 'SentientXR Flight Engine',
    description: 'Proprietary AR and VR engine for real-time visualization of 3D terrain and flight data.',
    icon: Eye
  },
  {
    title: 'NeuroPilot Interface',
    description: 'Adaptive neural feedback system that synchronizes with pilot bio-signals for cognitive optimization.',
    icon: Brain
  },
  {
    title: 'AI Vision Suite',
    description: 'Real-time sensor fusion, threat recognition, and vision enhancement algorithms.',
    icon: Cpu
  },
  {
    title: 'Mission Analytics Hub',
    description: 'Cloud and on-board analytics for flight pattern evaluation, bio-metric tracking, and performance assessment.',
    icon: BarChart3
  },
  {
    title: 'Cross-System Integration Layer',
    description: 'Compatible with existing cockpit instrumentation, communication modules, and aircraft HUDs.',
    icon: Settings
  }
]

const keyAdvantages = [
  'Enhanced operational safety through continuous bio-monitoring',
  'Superior day and night vision under all conditions',
  'Predictive decision support with AI-assisted alerts',
  'Immersive VR/AR for training and situational awareness',
  'Modular design allowing future upgrades and integrations'
]

const futureInnovations = [
  'Cognitive AR that predicts pilot intent and provides pre-emptive guidance',
  'Fully autonomous adaptive displays for complex missions',
  'Integration with next-generation brain-machine interfaces for direct neural control of avionics',
  'Advanced VR mission rehearsal with real-time physiological feedback'
]

const faqs = [
  {
    question: 'What is Starscream?',
    answer: 'Starscream is a next-generation pilot headgear designed to enhance vision, monitor bio-signals, and integrate AR/VR for operational intelligence.'
  },
  {
    question: 'Who can use Starscream?',
    answer: 'Starscream is specifically designed for Indian Air Force pilots and chartered plane operators. Commercial availability is limited to certified flight personnel.'
  },
  {
    question: 'How does Starscream improve vision?',
    answer: 'The headgear uses AI-powered day and night vision enhancement, infrared, and electro-optical sensors to ensure clarity in all conditions.'
  },
  {
    question: 'What bio-metrics are monitored?',
    answer: 'Starscream monitors heart rate, SpO2, thermal patterns, neural signals, and fatigue indicators to optimize pilot performance and safety.'
  },
  {
    question: 'Can Starscream integrate with existing cockpit systems?',
    answer: 'Yes, the headgear is fully compatible with aircraft HUDs, communication systems, and avionics instrumentation.'
  },
  {
    question: 'Does Starscream include VR training?',
    answer: 'Yes, integrated VR modules allow immersive flight simulation and cognitive adaptation exercises for pilots.'
  },
  {
    question: 'How is data processed and stored?',
    answer: 'All data is processed in real-time through on-board AI engines. Cloud integration is optional and encrypted for security.'
  },
  {
    question: 'What makes Starscream different from other headgear?',
    answer: 'Starscream combines multi-sensor fusion, neuroadaptive interfaces, AR/VR integration, and AI-driven predictive analytics in one ergonomic system.'
  },
  {
    question: 'Is Starscream lightweight and comfortable for long missions?',
    answer: 'Yes, the headgear is designed with advanced materials for comfort, durability, and extended operational use.'
  },
  {
    question: 'What support and maintenance are provided?',
    answer: 'Sentient Biotech provides comprehensive technical support, firmware updates, calibration, and training for all Starscream users.'
  }
]

export default function StarscreamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sentientbiotech.in' },
    { name: 'Starscream', url: 'https://sentientbiotech.in/starscream' }
  ])

  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <JsonLd data={starscreamProductSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-block">
                <Shield className="w-20 h-20 mx-auto mb-6 text-electric-cyan" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold gradient-text mb-6">
              STARSCREAM
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
              Next-Generation Pilot Headgear
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel-strong rounded-2xl p-8 text-left"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                Sentient Biotech Private Limited introduces Starscream, the next-generation pilot headgear engineered for precision, safety, and unmatched situational awareness. Starscream merges advanced neurotechnology, augmented reality, and cognitive sensing to give pilots the power to see, interpret, and act faster than ever before.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Designed specifically for Indian Air Force pilots and chartered plane operators, Starscream transforms the cockpit into an intelligent environment where every visual, spatial, and biometric signal is integrated into one seamless interface.
              </p>
              <p>
                This headgear is more than a device - it is a cognitive extension of the pilot, enabling superior decision-making, enhanced perception, and unmatched operational efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Intelligence Beyond Vision
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg text-white/80 mb-8">
              Starscream combines human cognition and machine intelligence to create a fully immersive and adaptive flight experience.
            </p>
            
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <p className="text-white/80">{capability}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-lg text-white/80 mt-8">
              Starscream ensures pilots operate with enhanced awareness, reduced cognitive load, and maximum safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advanced Research */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Advanced Research and Innovation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Sentient Biotech's R&D team has developed Starscream using the latest advances in neurotechnology, AR/VR, and AI-driven human-machine interfaces.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <Brain className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <p className="text-white/80">{area}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-lg text-white/80 mt-8">
              Our research ensures that Starscream is not only technologically advanced but also mission ready, providing intelligence that adapts to the pilot and the environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Applications
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{app.title}</h3>
                <p className="text-white/80">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Platforms */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Development Platforms and Infrastructure
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Starscream is built on a modular, adaptive, and high-performance platform, ensuring seamless integration with military and chartered aircraft systems.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentPlatforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{platform.title}</h3>
                <p className="text-white/80">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Versions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Product Versions and Plans
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Starscream Military Edition
              </h3>
              <p className="text-white/80">
                Full suite for Indian Air Force, including advanced VR, AR, and multi-sensor fusion capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Starscream Charter Edition
              </h3>
              <p className="text-white/80">
                Lightweight headgear for commercial and private pilots with bio-monitoring, AR navigation, and safety features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Training Module Add-On
              </h3>
              <p className="text-white/80">
                Immersive VR environments for pilot simulation and cognitive adaptation exercises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Key Advantages
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-4">
              {keyAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <p className="text-white/80">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Future Innovations
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-4">
              {futureInnovations.map((innovation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <Zap className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <p className="text-white/80">{innovation}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 md:p-12 text-center"
          >
            <p className="text-lg text-white/80 mb-6">
              Starscream is more than a headgear. It is a cognitive extension of the pilot, designed to enhance perception, improve decision-making, and maximize mission safety. At Sentient Biotech, we are redefining aerial intelligence, one neural signal at a time.
            </p>
            <p className="text-2xl font-display font-bold gradient-text">
              Starscream by Sentient Biotech - Where Vision Meets Intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}