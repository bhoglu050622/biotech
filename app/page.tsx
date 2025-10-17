'use client'

import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import BackToTop from '@/components/BackToTop'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/JsonLd'
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
  Eye
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
    icon: Eye,
    title: 'XR and AR Systems',
    description: 'Extended and Augmented reality platforms integrated with neurotechnology for immersive training, real-time simulations, and enhanced visualization.',
    color: 'from-light-blue to-primary-blue',
    href: '/technologies/xr-ar-systems'
  },
  {
    icon: MousePointer,
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-18 overflow-hidden">
        {/* Subtle Background Mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-dark-navy to-deep-indigo" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(38, 132, 255, 0.08) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)'
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  Redefining
                </span>
                <br />
                <span className="text-text-primary">
                  Human–Machine Synergy
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Integrating Biotechnology, Neurotechnology, and Artificial Intelligence to Enhance Human Cognition, Performance, and Safety.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 sm:mb-12"
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
              <div className="relative w-full max-w-2xl">
                {/* Main Hero Image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                    <img
                      src="/hero-image.png"
                      alt="Advanced neurotechnology scanning system with holographic displays and neural network visualization"
                      className="w-full h-auto object-cover"
                    />
                    {/* Subtle overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 border border-primary-blue/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border border-accent-blue/20 rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sentient Biotech Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8 text-center">
              Redefining the Limits of Human Intelligence
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/about-team-image.png"
                    alt="Sentient Biotech advanced laboratory team working on neurotechnology research and development"
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Right Column - Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-5 sm:space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed"
              >
              <p>
                Sentient Biotech is driven by the vision that the human brain is the ultimate frontier. By merging AI, neurotechnology, and biotechnology, we develop systems that enhance cognitive function, optimize performance, and protect human life in healthcare and defense. Our solutions transform how humans interact with machines, data, and their environment.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <motion.a
                  href="/who-we-are"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-primary-blue hover:text-accent-blue font-semibold transition-colors duration-200"
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Our Advanced Technologies
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Sentient Biotech operates at the intersection of biotechnology, neuroscience, and artificial intelligence, developing advanced technologies that enhance human potential and operational efficiency.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                className="card-hover group cursor-pointer block"
              >
                <div className="border-l-4 border-primary-blue pl-4 sm:pl-6 -ml-2">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300`}>
                    {React.createElement(tech.icon as any, { className: "w-7 h-7 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-blue transition-colors">{tech.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">{tech.description}</p>
                  <div className="flex items-center gap-2 text-primary-blue font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Solutions That Empower
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.a
              href="/eeg-solutions"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">EEG Systems</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Advanced cognitive and neural monitoring for healthcare and research.
              </p>
              <div className="flex items-center gap-2 text-primary-blue font-medium">
                <span>Explore EEG Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            <motion.a
              href="/starscream"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Next-Generation Pilot Headgear</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Fused vision, biometric monitoring, and AR/VR integration for defense applications.
              </p>
              <div className="flex items-center gap-2 text-primary-blue font-medium">
                <span>Discover Starscream</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Sentient Biotech delivers intelligent technologies that transform operations, enhance cognition, and enable advanced decision-making across critical sectors.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.a
              href="/industries/defence-aerospace"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Defense & Aerospace</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Next-gen pilot headgear, XR situational awareness, and AI analytics for enhanced operational performance.
              </p>
            </motion.a>

            <motion.a
              href="/industries/healthcare"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Healthcare</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                EEG systems, bio-sensors, and AI diagnostics to optimize patient care and advance medical research.
              </p>
            </motion.a>

            <motion.a
              href="/industries/research-academia"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Research & Academia</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Advanced EEG, neurotechnology platforms, and XR environments for cognitive studies and research.
              </p>
            </motion.a>

            <motion.a
              href="/industries/simulation-training"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-primary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Simulation & Training</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Immersive XR platforms and AI analytics for realistic training in defense, healthcare, and industry.
              </p>
            </motion.a>
          </div>
        </div>
      </section>


      {/* News & Insights Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Exploring the Frontiers of Human and Machine Intelligence
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto px-4">
              Stay informed with the latest updates, breakthroughs, and thought leadership from Sentient Biotech. Our News & Insights section brings you perspectives from across neuroscience, artificial intelligence, and biotechnology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
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
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-text-tertiary mb-2 block">August 2025</span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Neurotechnology – The Bridge Between Mind and Machine</h3>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                Neurotechnology is redefining how humans interact with technology. Our EEG-based systems decode neural patterns to enable cognitive monitoring and brain-controlled interfaces.
              </p>
              <div className="flex items-center gap-2 text-primary-blue font-medium">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            <motion.a
              href="/news/pilot-headgear-vision"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-text-tertiary mb-2 block">September 2025</span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Next-Generation Pilot Headgear – Expanding Vision Beyond Limits</h3>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                In modern aerial combat, information is power. Our pilot headgear integrates multi-camera vision, AI overlays, and biometric tracking for unparalleled situational awareness.
              </p>
              <div className="flex items-center gap-2 text-primary-blue font-medium">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            <motion.a
              href="/news/hmi-future"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <MousePointer className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-text-tertiary mb-2 block">October 2025</span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">Human-Machine Interfaces – The Future of Intuitive Control</h3>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                Human-Machine Interfaces are transforming the way we command technology. Sentient Biotech's research in neural inputs and adaptive controls creates seamless, responsive interactions.
              </p>
              <div className="flex items-center gap-2 text-primary-blue font-medium">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/news"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-8 py-4 rounded-lg font-semibold hover:from-secondary-blue hover:to-accent-blue transition-all duration-200 focus-ring shadow-blue hover:shadow-blue-lg"
            >
              <span>View All News & Insights</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact & Careers Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-glass-white backdrop-blur-sm relative overflow-hidden">
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
                  href="mailto:jasmeet@sentientbiotech.in"
                  className="inline-flex items-center gap-3 bg-white text-primary-blue px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 focus-ring shadow-soft-lg w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  <span>jasmeet@sentientbiotech.in</span>
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
                  href="mailto:jasmeet@sentientbiotech.in"
                  className="inline-flex items-center gap-3 bg-white text-primary-blue px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 focus-ring shadow-soft-lg w-full justify-center"
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