'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import BackToTop from '@/components/BackToTop'
import JsonLd, { eegProductSchema, generateBreadcrumbSchema } from '@/components/JsonLd'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Waves,
  Activity,
  Heart,
  CheckCircle, 
  ArrowRight,
  Stethoscope,
  Sparkles,
  Monitor,
  Smartphone,
  Database,
  Cpu,
  Users,
  Shield,
  Award,
  Zap,
  Globe,
  Lock,
  Settings,
  BarChart3,
  FileText,
  HelpCircle
} from 'lucide-react'

const capabilities = [
  'Ultra-High Fidelity Signal Capture: Advanced dry and wet electrode technologies designed for optimal scalp contact and reduced noise.',
  'AI-Powered Signal Interpretation: Machine learning algorithms that identify cognitive patterns, emotional states, and stress levels with high accuracy.',
  'Real-Time Data Streaming: Continuous neural monitoring for live visualization, recording, and cloud synchronization.',
  'Artifact Reduction and Signal Clarity: Intelligent filtering systems that remove motion and environmental noise without loss of data fidelity.',
  'Multi-Channel Scalability: From portable 8-channel systems to high-density 128-channel configurations for advanced neural research.',
  'Seamless Connectivity: Bluetooth and Wi-Fi enabled for use with mobile, desktop, and cloud platforms.',
  'Adaptive Fit and Design: Lightweight and ergonomic headset options for extended use in clinical, laboratory, or field settings.'
]

const researchAreas = [
  'Cognitive State Classification: Decoding levels of attention, relaxation, and fatigue in real-time.',
  'Emotion and Stress Detection: Identifying subtle neural patterns that reveal psychological and emotional responses.',
  'Neuroadaptive Interfaces: Developing EEG-driven Human-Machine Interfaces (HMI) for defense, healthcare, and immersive environments.',
  'Epilepsy and Neurological Disorder Detection: AI-supported EEG analysis for early diagnosis and continuous monitoring.',
  'Cognitive Rehabilitation Systems: EEG-guided feedback loops to assist in neural recovery and mental conditioning.',
  'AI-Enhanced Brain Mapping: High-resolution visualization of neural connectivity and functional regions.',
  'Portable Neurodiagnostics: Miniaturization research for on-field medical and defense-grade EEG monitoring.'
]

const faqs = [
  {
    question: 'What is an EEG system and how does it work?',
    answer: 'An EEG system measures the brain\'s electrical activity through electrodes placed on the scalp. Sentient Biotech\'s systems capture these signals and use AI to interpret patterns related to cognition, emotion, and health.'
  },
  {
    question: 'What makes Sentient Biotech\'s EEG systems different?',
    answer: 'Our systems combine advanced AI-driven interpretation, superior signal clarity, and real-time data visualization. They are designed for precision, comfort, and adaptability across multiple industries.'
  },
  {
    question: 'Are Sentient Biotech EEG devices medically approved?',
    answer: 'Our clinical-grade systems comply with IEC and ISO medical device standards and are undergoing continuous certification expansion for both research and medical diagnostics.'
  },
  {
    question: 'Can EEG data be integrated with other sensors?',
    answer: 'Yes. Sentient EEG systems can synchronize with biometric, environmental, and motion sensors for comprehensive neurodata fusion.'
  },
  {
    question: 'What applications can benefit from Sentient EEG technology?',
    answer: 'Applications include neuroscience research, clinical diagnostics, mental wellness tracking, pilot fatigue monitoring, and neuroadaptive human-machine interfaces.'
  },
  {
    question: 'How secure is the EEG data?',
    answer: 'Data collected through our platforms is encrypted end-to-end, with GDPR and HIPAA compliance for privacy and data integrity.'
  },
  {
    question: 'Do you provide cloud-based analytics?',
    answer: 'Yes. Our NeuroSync Cloud provides storage, analysis, and visualization tools accessible via web and mobile interfaces.'
  },
  {
    question: 'Can individuals use your EEG devices for self-monitoring?',
    answer: 'Yes. Our consumer-grade devices are specifically designed for personal wellness, focus tracking, and meditation training.'
  },
  {
    question: 'What level of customization is available for researchers?',
    answer: 'Our BioLink SDK enables full customization - from data acquisition parameters to signal processing algorithms - supporting AI model training and hardware interfacing.'
  },
  {
    question: 'Do you offer technical and research support?',
    answer: 'Yes. Sentient Biotech offers comprehensive onboarding, documentation, and dedicated technical assistance for all product lines.'
  }
]

export default function EEGSolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sentientbiotech.in' },
    { name: 'EEG Solutions', url: 'https://sentientbiotech.in/eeg-solutions' }
  ])

  return (
    <main className="relative min-h-screen bg-primary-blue">
      <JsonLd data={eegProductSchema} />
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
                <Brain className="w-20 h-20 mx-auto mb-6 text-electric-cyan" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold gradient-text mb-6">
              EEG SYSTEMS
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
              Reading the Language of the Brain
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel-strong rounded-2xl p-8 text-left"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                At Sentient Biotech Private Limited, our mission is to understand and enhance human cognition through advanced EEG (Electroencephalogram) technologies. The human brain generates patterns of electrical activity that define every thought, decision, and emotion. Our EEG systems are designed to capture, decode, and interpret these signals with unmatched clarity and precision.
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
                Built on years of research in neurotechnology and artificial intelligence, Sentient Biotech's EEG platforms transform neural activity into actionable data. From cognitive research and mental health analysis to performance monitoring and human-machine control, our EEG systems unlock new dimensions of understanding - bridging biology, intelligence, and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-white mb-6">
              Our Capabilities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Precision in Every Signal
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
              Sentient Biotech's EEG systems combine state-of-the-art sensor technology, AI-driven signal processing, and ergonomic design to deliver accurate, real-time brain data for clinical, research, and personal use.
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-white mb-6">
              Advanced Research
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Leading the Future of Brain Science
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
              Sentient Biotech's EEG research integrates neuroscience, artificial intelligence, and advanced bio-signal processing to push the boundaries of brain data analysis.
            </p>
            
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
          </motion.div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-white mb-6">
              Product Lines and Commercial Offerings
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Commercial EEG Systems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-green rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-white mb-4">
                A. Commercial EEG Systems for Research Centers and Hospitals
              </h3>
              <p className="text-white/80 mb-6">
                Our professional-grade EEG platforms are designed for research institutions, universities, and hospitals that demand precision, scalability, and compliance with medical-grade standards.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">High-density electrode arrays for superior spatial resolution</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Advanced data analytics and machine learning integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Seamless cloud-based storage and analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Compatibility with neurofeedback and VR training modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Comprehensive SDK for research customization</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary-white mb-2">Ideal for:</h4>
                <p className="text-white/80 text-sm">Neurocognitive research, medical diagnostics, sleep studies, brain-computer interface development, and clinical psychology.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-white mb-2">Commercial Plans:</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Enterprise License: Lifetime access with AI analytics suite and cloud integration</li>
                  <li>• Academic Research Plan: Annual subscription for universities and labs with open data frameworks</li>
                  <li>• Institutional Collaboration Program: Customized system deployment with co-research opportunities</li>
                </ul>
              </div>
            </motion.div>

            {/* Handheld EEG Systems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-green to-accent-light-blue rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-white mb-4">
                B. Handheld EEG Systems for Healthcare Professionals
              </h3>
              <p className="text-white/80 mb-6">
                Compact and portable EEG systems designed for real-time patient monitoring, rapid diagnostics, and neuro-performance assessments.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Wireless connectivity and mobile app integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">AI-assisted anomaly detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Auto-reporting for clinical workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Rechargeable power module with long operation time</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">HIPAA-compliant data management</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary-white mb-2">Ideal for:</h4>
                <p className="text-white/80 text-sm">Neurologists, psychiatrists, and healthcare practitioners conducting on-site or remote assessments.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-white mb-2">Plans:</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Professional Kit: One-time purchase with cloud-based analytics tools</li>
                  <li>• Clinical Subscription: Monthly plan with data analytics and service support</li>
                </ul>
              </div>
            </motion.div>

            {/* Personal EEG Devices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-white mb-4">
                C. Personal EEG Devices for Individuals
              </h3>
              <p className="text-white/80 mb-6">
                Designed for individuals interested in cognitive enhancement, stress management, and mental wellness tracking.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Lightweight, comfortable design for daily use</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Real-time stress and focus analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Brain training and meditation modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Mobile connectivity with personal dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-white/80 text-sm">Secure cloud storage for progress tracking</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary-white mb-2">Ideal for:</h4>
                <p className="text-white/80 text-sm">Personal wellness, cognitive enhancement, and mental health monitoring.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-white mb-2">Plans:</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Wellness Plan: App-based monitoring with AI-guided mental exercises</li>
                  <li>• Premium Plan: Advanced neurofeedback and customized data analytics</li>
                </ul>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-white mb-6">
              Development Platforms and Ecosystem
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Sentient Biotech's EEG systems are supported by a unified development and analytics infrastructure that enables real-time processing, advanced AI training, and seamless integration.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-green rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-white mb-4">NeuroCore Engine</h3>
              <p className="text-white/80">Proprietary signal processing framework that extracts meaningful features from complex neural data.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-green to-accent-light-blue rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-white mb-4">Sentient NeuroAI Suite</h3>
              <p className="text-white/80">Machine learning platform that trains models for cognitive and emotional recognition.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-white mb-4">NeuroSync Cloud</h3>
              <p className="text-white/80">Secure cloud platform for EEG data storage, visualization, and collaborative research.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-green to-primary-blue rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-white mb-4">BioLink SDK</h3>
              <p className="text-white/80">Developer kit allowing third-party integration with Sentient EEG systems for custom research or application development.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-accent-light-blue rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-white mb-4">Cross-Device Integration</h3>
              <p className="text-white/80">Compatibility with AR headgear, HMI systems, and biomedical instruments for multi-sensor fusion.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future of EEG Systems */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-white mb-6">
              Future of EEG Systems
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The future of EEG technology lies in intelligence that understands context. Sentient Biotech's next-generation EEG systems will feature self-calibrating electrodes, cognitive prediction models, and real-time neuroadaptive feedback for instant brain-state modulation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 md:p-12 text-center"
          >
            <p className="text-lg text-white/80 mb-6">
              Our vision is to create EEG systems that not only read brain signals but also understand intent - enabling seamless mind-machine communication for defense, healthcare, and human development.
            </p>
            <p className="text-xl text-primary-white font-medium">
              At Sentient Biotech Private Limited, we are redefining how humanity understands the brain. Our EEG systems merge neuroscience with artificial intelligence to illuminate the unseen - transforming thought into knowledge, and knowledge into progress.
            </p>
            <p className="text-2xl font-display font-bold gradient-text mt-8">
              Sentient Biotech EEG Systems - Understanding the Mind, Empowering the Future.
            </p>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-white mb-6">
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
                    <h3 className="text-lg font-semibold text-primary-white mb-2">{faq.question}</h3>
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                </div>
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