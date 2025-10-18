'use client'

import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import BackToTop from '@/components/BackToTop'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/JsonLd'
import AnimatedCounter from '@/components/AnimatedCounter'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Globe, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Star,
  BarChart3,
  Cpu,
  Activity,
  Monitor,
  Lock,
  Mail,
  Newspaper,
  FileText,
  BookOpen,
  Plane,
  Bot,
  MousePointer,
  Eye,
  Headphones,
  Hand
} from 'lucide-react'

const ourTechnologies = [
  {
    icon: Brain,
    title: 'Neurotechnology',
    description: 'Advanced EEG systems and brain-computer interfaces that monitor, analyze, and interpret neural activity in real time for cognitive assessment and performance optimization.',
    color: 'from-primary-blue to-secondary-blue',
    href: '/technologies/neurotechnology'
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'AI and machine learning algorithms that turn complex biological and environmental data into actionable insights for healthcare and defense applications.',
    color: 'from-secondary-blue to-accent-blue',
    href: '/technologies/ai-machine-learning'
  },
  {
    icon: Activity,
    title: 'Bio-Integrated Sensors',
    description: 'Real-time physiological data capture including heart rate, thermal imaging, and blood oxygen levels for continuous monitoring in extreme conditions.',
    color: 'from-accent-blue to-light-blue',
    href: '/technologies/bio-integrated-sensors'
  },
  {
    icon: Headphones,
    title: 'XR and AR Systems',
    description: 'Extended and Augmented reality platforms integrated with neurotechnology for immersive training, real-time simulations, and enhanced visualization.',
    color: 'from-light-blue to-primary-blue',
    href: '/technologies/xr-ar-systems'
  },
  {
    icon: Hand,
    title: 'Human-Machine Interface (HMI)',
    description: 'Advanced HMI systems integrating neural signals, gesture controls, and visual overlays for intuitive control and real-time feedback.',
    color: 'from-primary-blue to-accent-blue',
    href: '/technologies/hmi'
  },
  {
    icon: Monitor,
    title: 'Data Fusion and Visualization',
    description: 'Proprietary algorithms that merge multiple sensor inputs and deliver clear, actionable visual outputs for complex decision-making.',
    color: 'from-accent-blue to-secondary-blue',
    href: '/technologies/data-fusion'
  }
]



export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      
      {/* Hero Section - Clinical + Defense Theme */}
      <section className="relative flex items-center justify-center pt-12 pb-4 overflow-hidden bg-glass-white backdrop-blur-sm">
        {/* Clinical Background with Defense Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-dark-navy to-deep-indigo" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(0, 82, 204, 0.08) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(76, 154, 255, 0.08) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 40%, rgba(0, 82, 204, 0.08) 0%, transparent 60%)'
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          {/* Defense Geometric Overlay */}
          <div className="absolute inset-0 opacity-5">
            {/* Geometric overlays removed */}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-center lg:text-left"
            >
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-tight mb-6"
              >
                <span className="gradient-text">
                  Redefining Human–Machine Synergy
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Integrating Biotechnology, Neurotechnology, and Artificial Intelligence to Enhance Human Cognition, Performance, and Safety in Healthcare and Defense Applications.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              >
                <motion.a
                  href="/technologies"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-blue w-full sm:w-auto"
                >
                  <span>Explore Our Innovations</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm">
                {/* Main Hero Image - Vertical Orientation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10">
                    <img
                      src="/hero-image.png"
                      alt="Advanced neurotechnology scanning system with holographic displays and neural network visualization"
                      className="w-full h-auto object-cover aspect-[3/4] max-h-96"
                    />
                    {/* Subtle overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Decorative Elements - Defense Theme */}
                {/* Decorative borders removed */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sentient Biotech Section - Clinical Theme */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8 text-center">
              Protecting Lives, Enhancing Performance
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 flex justify-center"
              >
                <div className="relative w-full max-w-sm">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10">
                    <img
                      src="/about-team-image.png"
                      alt="Sentient Biotech advanced laboratory team working on neurotechnology research and development"
                      className="w-full h-auto object-cover aspect-[3/4] max-h-96"
                    />
                    {/* Subtle overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Text with Clinical Border */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 pl-6 space-y-5 sm:space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed"
              >
              <p>
                Sentient Biotech is driven by the vision that the human brain is the ultimate frontier. By merging AI, neurotechnology, and biotechnology, we develop systems that enhance cognitive function, optimize performance, and protect human life in healthcare and defense. Our solutions transform how humans interact with machines, data, and their environment.
              </p>
              
              <p>
                At Sentient Biotech, we view the human mind not just as an organ, but as a dynamic interface capable of communication, adaptation, and expansion when integrated with advanced technology. Our research began with a dual mission: to transform healthcare by decoding mental and physiological data with precision, and to strengthen defense by enhancing human capability in extreme conditions.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <motion.a
                  href="/about-us"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-link inline-flex items-center gap-2 font-bold"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Technologies Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Our Advanced Technologies
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Sentient Biotech operates at the intersection of biotechnology, neuroscience, and artificial intelligence, developing advanced technologies that enhance human potential and operational efficiency.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {ourTechnologies.map((tech, index) => (
              <motion.a
                key={tech.title}
                href={tech.href}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="card-hover group cursor-pointer block h-full"
              >
                <div className="pl-4 sm:pl-6 -ml-2 h-full flex flex-col">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0`}>
                    {React.createElement(tech.icon as any, { className: "w-6 h-6 sm:w-7 sm:h-7 text-white" })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-3 sm:mb-4">{tech.title}</h3>
                  <p className="text-gray-200 leading-relaxed flex-grow">{tech.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Solutions That Empower
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <motion.a
              href="/eeg-solutions"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">EEG Systems</h3>
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow">
                  Advanced cognitive and neural monitoring for healthcare and research.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center gap-2 cta-link text-sm font-bold">
                    <span>Explore EEG Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 cta-link text-sm font-bold">
                    <span>Make an Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
            </motion.a>

            <motion.a
              href="/starscream"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer defense-border h-full flex flex-col"
            >
                <div className="w-16 h-16 bg-gradient-to-br from-olive-green to-military-khaki rounded-xl flex items-center justify-center mb-6 defense-glow group-hover:shadow-lg group-hover:shadow-olive-green/20 transition-shadow duration-300 flex-shrink-0">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover-defense mb-4">Starscream</h3>
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow">
                  Fused vision, biometric monitoring, and AR/VR integration for defense applications.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center gap-2 cta-link-defense text-sm font-bold">
                    <span>Discover Starscream</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 cta-link-defense text-sm font-bold">
                    <span>Make an Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Sentient Biotech delivers intelligent technologies that transform operations, enhance cognition, and enable advanced decision-making across critical sectors.
                </p>
              </motion.div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer defense-border h-full flex flex-col"
            >
              <a href="/industries/defence-aerospace" className="block h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-olive-green to-military-khaki rounded-xl flex items-center justify-center mb-6 defense-glow group-hover:shadow-lg group-hover:shadow-olive-green/20 transition-shadow duration-300 flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover-defense mb-4">Defense & Aerospace</h3>
                <p className="text-gray-200 leading-relaxed text-sm flex-grow">
                  Next-gen pilot headgear, XR situational awareness, and AI analytics for enhanced operational performance.
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
              <a href="/industries/healthcare" className="block h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">Healthcare</h3>
                <p className="text-gray-200 leading-relaxed text-sm flex-grow">
                  EEG systems, bio-sensors, and AI diagnostics to optimize patient care and advance medical research.
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
              <a href="/industries/research-academia" className="block h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">Research & Academia</h3>
                <p className="text-gray-200 leading-relaxed text-sm flex-grow">
                  Advanced EEG, neurotechnology platforms, and XR environments for cognitive studies and research.
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
              <a href="/industries/simulation-training" className="block h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-primary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">Simulation & Training</h3>
                <p className="text-gray-200 leading-relaxed text-sm flex-grow">
                  Immersive XR platforms and AI analytics for realistic training in defense, healthcare, and industry.
                </p>
              </a>
            </motion.div>
            </div>
        </div>
      </section>


      {/* News & Insights Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Exploring the Frontiers of Human and Machine Intelligence
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Stay informed with the latest updates, breakthroughs, and thought leadership from Sentient Biotech. Our News & Insights section brings you perspectives from across neuroscience, artificial intelligence, and biotechnology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            <motion.a
              href="/news/neurotechnology-bridge"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="patriotic-badge px-3 py-2 rounded-full text-sm font-medium">🇮🇳 Featured</span>
                  <span className="text-sm text-text-tertiary">August 2025</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">Neurotechnology – The Bridge Between Mind and Machine</h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm flex-grow">
                  Neurotechnology is redefining how humans interact with technology. Our EEG-based systems decode neural patterns to enable cognitive monitoring and brain-controlled interfaces.
                </p>
            </motion.a>

            <motion.a
              href="/news/pilot-headgear-vision"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="patriotic-badge px-3 py-2 rounded-full text-sm font-medium">🇮🇳 Defense</span>
                  <span className="text-sm text-text-tertiary">September 2025</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">Starscream – Expanding Vision Beyond Limits</h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm flex-grow">
                  In modern aerial combat, information is power. Our pilot headgear integrates multi-camera vision, AI overlays, and biometric tracking for unparalleled situational awareness.
                </p>
            </motion.a>

            <motion.a
              href="/news/hmi-future"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-hover group cursor-pointer h-full flex flex-col"
            >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                  <MousePointer className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="patriotic-badge px-3 py-2 rounded-full text-sm font-medium">🇮🇳 Innovation</span>
                  <span className="text-sm text-text-tertiary">October 2025</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold card-title-hover mb-4">Human-Machine Interfaces – The Future of Intuitive Control</h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm flex-grow">
                  Human-Machine Interfaces are transforming the way we command technology. Sentient Biotech's research in neural inputs and adaptive controls creates seamless, responsive interactions.
                </p>
            </motion.a>
          </motion.div>
          
          <div className="text-center mt-8">
            <motion.a
              href="/news"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-8 py-4 rounded-lg font-bold hover:from-secondary-blue hover:to-accent-blue hover:text-white hover:shadow-xl hover:shadow-primary-blue/40 hover:scale-105 transition-all duration-200 focus-ring"
            >
              <span>View All News & Insights</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Quantifying Our Innovation Journey
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Through relentless research, breakthrough innovations, and strategic partnerships, we've built a foundation of excellence that drives the future of human-machine integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-4 shadow-blue mx-auto">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-2"
              >
                <AnimatedCounter target={5} suffix="+" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-text-secondary">Years of Research</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-4 shadow-blue mx-auto">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-2"
              >
                <AnimatedCounter target={2} suffix="+" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-text-secondary">Innovations</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-4 shadow-blue mx-auto">
                <Users className="w-7 h-7 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-2"
              >
                <AnimatedCounter target={10} suffix="+" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-text-secondary">Collaborations</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-primary-blue rounded-xl flex items-center justify-center mb-4 shadow-blue mx-auto">
                <Award className="w-7 h-7 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-2"
              >
                <AnimatedCounter target={30} suffix="+" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-text-secondary">Experts</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Careers Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-glass-white backdrop-blur-sm relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-white/90 text-base leading-relaxed mb-8 flex-grow">
                Have questions or want to learn more about our technologies? We'd love to hear from you.
              </p>
              <div className="mt-auto">
                <a 
                  href="mailto:support@sentientbiotech.in"
                  className="inline-flex items-center gap-3 bg-white text-primary-blue px-6 py-4 rounded-lg font-bold hover:bg-gray-50 hover:text-primary-blue hover:shadow-xl hover:shadow-primary-blue/20 hover:scale-105 transition-all duration-200 focus-ring shadow-soft-lg w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@sentientbiotech.in</span>
                </a>
              </div>
            </motion.div>

            {/* Join Our Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">We're Hiring</h2>
              </div>
              <div className="flex-grow">
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  We are always on the lookout for passionate, talented and innovative minds wanting to join our team and contribute to the development of next-gen Human-Machine Interface.
                </p>
                <p className="text-white/80 text-sm">
                  Share your latest CV, Git Repos (if any), and work demos
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a 
                  href="mailto:support@sentientbiotech.in"
                  className="inline-flex items-center gap-3 bg-white text-primary-blue px-6 py-4 rounded-lg font-bold hover:bg-gray-50 hover:text-primary-blue hover:shadow-xl hover:shadow-primary-blue/20 hover:scale-105 transition-all duration-200 focus-ring shadow-soft-lg w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  <span>Apply Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}