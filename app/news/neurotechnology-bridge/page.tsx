'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Brain, Calendar, ArrowLeft } from 'lucide-react'

export default function NeurotechnologyBlogPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
      <ParticleBackground />
      <Navbar />
      
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a
            href="/news"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-primary-blue hover:text-accent-blue mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News & Insights</span>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-secondary-green rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-white" />
              </div>
              <div className="flex items-center gap-2 text-text-tertiary text-sm">
                <Calendar className="w-4 h-4" />
                <span>August 2025</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Neurotechnology – The Bridge Between Mind and Machine
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6 text-text-secondary leading-relaxed">
            <p>
              Neurotechnology is redefining how humans interact with technology. At Sentient Biotech, our EEG-based systems decode neural patterns to enable cognitive monitoring, emotional mapping, and brain-controlled interfaces. This innovation is paving the way for a new generation of intelligent systems that understand and adapt to human thought processes – transforming healthcare, defense, and performance enhancement.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Understanding Neurotechnology
            </h2>
            <p>
              Neurotechnology encompasses devices and systems designed to record, analyze, and interpret neural signals. By translating brain activity into actionable data, it enables advanced human-machine interaction, real-time cognitive monitoring, and predictive decision-making. EEG systems, neural interfaces, and bio-sensing devices form the backbone of this field, allowing unprecedented insight into human cognition.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Applications Across Industries
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Healthcare:</strong> Continuous monitoring of neural activity for diagnostics, rehabilitation, and personalized treatment.</li>
              <li><strong>Defence and Aerospace:</strong> Neuroadaptive pilot interfaces, biometric monitoring, and decision support for high-stakes operations.</li>
              <li><strong>Research and Academia:</strong> Cognitive studies, neuroscience experiments, and advanced simulations powered by real-time neural data.</li>
              <li><strong>Simulation and Training:</strong> XR-enabled immersive environments that adapt to trainee neural responses, optimizing learning and skill acquisition.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Integration with AI and XR
            </h2>
            <p>
              At Sentient Biotech, neurotechnology is enhanced through AI algorithms that analyze neural data to predict performance, detect anomalies, and guide interventions. XR environments complement this by creating immersive scenarios that respond to cognitive load, focus, and decision-making patterns. This integration enables humans and machines to operate as cohesive, intelligent systems.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              The Future of Neurotechnology
            </h2>
            <p>
              Neurotechnology is the bridge that connects human intelligence with machine precision. Sentient Biotech Private Limited is at the forefront of this transformation, creating solutions that enhance cognition, performance, and operational efficiency across industries.
            </p>
            <p className="text-text-primary font-medium text-lg">
              Sentient Biotech — Unlocking the Power of the Mind Through Technology.
            </p>
          </div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}

