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
  Users
} from 'lucide-react'

const clinicalFeatures = [
  'High-channel count configurations available for advanced source localization',
  'Provides access to raw, unprocessed data streams',
  'Compatible with standard academic analysis tools like MATLAB, EEGLAB, and Python',
  'Modular design for integration with other research equipment (TMS, tDCS)',
  'Robust pre-processing, denoising and pre-processing',
  'AI-powered diagnostic support for MDD, ADHD, GAD, Schizophrenia, MCI, and more',
  'Rapid, automated sleep staging and OSA detection reports',
  'Intuitive dashboard that visualizes neural patterns and biomarkers',
  'Generates streamlined, easy-to-interpret reports for patient files'
]

const wellnessFeatures = [
  'Real-time tracking of focus, calm, and cognitive states',
  'Advanced sleep analysis with detailed architecture and heart-rate data',
  'Guided meditation and breathing exercises with live biofeedback',
  'Personalized insights on your unique heart-brain axis'
]

export default function EEGSolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sentientbiotech.in' },
    { name: 'EEG Solutions', url: 'https://sentientbiotech.in/eeg-solutions' }
  ])

  return (
    <main className="relative min-h-screen bg-deep-indigo">
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
              NEUROIMAGING SOLUTIONS
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
              For Clinics, Hospitals & Research Institutions: Integrated Solutions for Clinic, Lab, and Life
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel-strong rounded-2xl p-8 text-left"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                At Sentient Biotech, we package our advanced neurotechnology into a portfolio of purpose-built products. 
                Each solution is tailored to the unique demands of its environment, from critical clinical diagnostics 
                and cutting-edge research to personal wellness and human performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Solution Section */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 p-8 md:p-12 border-b border-white/10">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <Stethoscope className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    For Clinics & Hospitals
                  </h2>
                  <p className="text-xl text-electric-cyan font-semibold mb-4">
                    "Objective Insights for Confident Diagnosis"
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Our pilot <span className="text-electric-cyan font-semibold">32-channel EEG system</span> is a 
                    comprehensive diagnostic support system designed to integrate seamlessly into the modern neurological 
                    and psychiatric workflow. It combines our high-fidelity, clinical-grade EEG hardware with the 
                    analytical power of our deep-learning modules. This system provides clinicians with objective, 
                    data-driven biomarkers to support the diagnosis and monitoring of complex neuropsychiatric conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-electric-cyan mr-3" />
                Key Features
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {clinicalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Boxes */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl p-6 border border-blue-500/20">
                  <Monitor className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Research Integration</h4>
                  <p className="text-white/70 text-sm">Compatible with MATLAB, EEGLAB, and Python</p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-600/10 to-teal-600/10 rounded-xl p-6 border border-cyan-500/20">
                  <Cpu className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">AI-Powered Analysis</h4>
                  <p className="text-white/70 text-sm">Diagnostic support for MDD, ADHD, GAD, and more</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-600/10 to-green-600/10 rounded-xl p-6 border border-teal-500/20">
                  <Database className="w-8 h-8 text-teal-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Raw Data Access</h4>
                  <p className="text-white/70 text-sm">Unprocessed data streams for advanced analysis</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </div>

            {/* Accent Line */}
            <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
          </motion.div>
        </div>
      </section>

      {/* Wellness Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 p-8 md:p-12 border-b border-white/10">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <Waves className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    For Daily Life & Wellness
                  </h2>
                  <p className="text-xl text-electric-cyan font-semibold mb-4">
                    "Understand Your Mind"
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Our commercial headband is a <span className="text-electric-cyan font-semibold">multi-modal neuro-wearable</span> designed 
                    for everyone. It combines a discreet <span className="text-electric-cyan font-semibold">8-channel EEG</span> with 
                    an integrated <span className="text-electric-cyan font-semibold">SpO2 sensor</span> to deliver powerful insights 
                    into your cognitive and physiological states. Paired with our intuitive mobile app, the headband helps you 
                    understand your focus, manage stress, and optimize your sleep, unlocking a new level of personal wellness.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-electric-cyan mr-3" />
                Key Features
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {wellnessFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-violet-600/5 to-purple-600/5 border border-violet-500/10"
                  >
                    <CheckCircle className="w-5 h-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Boxes */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-xl p-6 border border-violet-500/20">
                  <Activity className="w-10 h-10 text-violet-400 mb-4" />
                  <h4 className="text-white font-semibold text-lg mb-2">Cognitive Insights</h4>
                  <p className="text-white/70">
                    Track your focus, calm, and mental states in real-time with 8-channel EEG technology 
                    in an ergonomic, discreet design.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10 rounded-xl p-6 border border-purple-500/20">
                  <Heart className="w-10 h-10 text-purple-400 mb-4" />
                  <h4 className="text-white font-semibold text-lg mb-2">Heart-Brain Connection</h4>
                  <p className="text-white/70">
                    Integrated SpO2 sensor provides personalized insights into your unique heart-brain axis 
                    for holistic wellness.
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Line */}
            <div className="h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"></div>
          </motion.div>
        </div>
      </section>

      {/* Join Us in Shaping the Future */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Join Us in Shaping the Future
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto px-4">
              We are actively seeking partnerships with healthcare professionals, researchers, and individuals to accelerate the development and deployment of our neuroimaging technologies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-blue">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Therapists & Clinicians</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Partner with us to bring advanced neuroimaging and diagnostic tools to clinical practice, improving patient outcomes and enabling data-driven mental health assessments.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-blue">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Individuals</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Experience the power of personal neurotechnology. Our consumer-grade solutions help you understand your mind, optimize focus, and enhance your daily wellness.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-blue">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Research Institutions</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Collaborate with us to advance neurotechnology research and unlock new discoveries in cognitive science and brain-machine interfaces with our high-fidelity systems.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-blue">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Healthcare Providers</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Integrate our clinical-grade EEG systems into your practice to provide objective, data-driven insights for neuropsychiatric diagnosis and monitoring.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 via-violet-accent/10 to-fuchsia-pink/10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <Smartphone className="w-16 h-16 mx-auto mb-6 text-electric-cyan" />
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Transform Your Practice or Lifestyle
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                Whether you're a clinician seeking diagnostic precision or an individual pursuing 
                personal wellness, our neuroimaging solutions are designed for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
                <motion.a
                  href="/solutions"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Explore Solutions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}
