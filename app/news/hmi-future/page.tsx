'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { MousePointer, Calendar, ArrowLeft } from 'lucide-react'

export default function HMIBlogPage() {
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
              <div className="w-12 h-12 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-xl flex items-center justify-center">
                <MousePointer className="w-6 h-6 text-primary-white" />
              </div>
              <div className="flex items-center gap-2 text-text-tertiary text-sm">
                <Calendar className="w-4 h-4" />
                <span>October 2025</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Human-Machine Interfaces – The Future of Intuitive Control
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6 text-text-secondary leading-relaxed">
            <p>
              Human-Machine Interfaces (HMI) are transforming the way we command and control technology. Sentient Biotech's research in neural inputs, voice recognition, and adaptive gesture controls ensures that machines respond intuitively to human intent. This technology bridges the gap between man and machine – creating seamless, responsive, and intelligent interactions that redefine operational efficiency in critical environments.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              What is Human-Machine Interface?
            </h2>
            <p>
              Human-Machine Interface refers to systems that allow humans to communicate with machines in a natural, efficient, and responsive manner. Unlike conventional controls, modern HMI platforms monitor neural and physiological signals to predict user intent, enabling proactive and adaptive machine responses.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Key Features and Capabilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Neuroadaptive Control:</strong> EEG and bio-sensors monitor focus, stress, and cognitive load, dynamically adjusting interface behavior.</li>
              <li><strong>XR Integration:</strong> Immersive visualization of system data, scenarios, and operational information for enhanced situational awareness.</li>
              <li><strong>AI-Powered Analytics:</strong> Real-time analysis of user performance to optimize workflow and decision-making.</li>
              <li><strong>Data Fusion:</strong> Multi-sensor inputs provide a unified operational picture, simplifying complex data for the operator.</li>
              <li><strong>Remote and Collaborative Control:</strong> HMI platforms allow distributed teams to manage systems simultaneously across locations.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              Applications Across Industries
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Defense and Aerospace:</strong> Pilot cockpit interfaces reduce workload, enhance situational awareness, and integrate with next-generation headgear.</li>
              <li><strong>Healthcare:</strong> Surgeons and clinicians gain precise control over robotic instruments and diagnostic tools.</li>
              <li><strong>Research and Academia:</strong> Supports cognitive studies, neuroscience experiments, and advanced simulation research.</li>
              <li><strong>Simulation and Training:</strong> Adaptive HMI improves learning outcomes in XR-based immersive environments.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-text-primary mt-8 mb-4">
              The Future of HMI
            </h2>
            <p>
              The next generation of HMI will fully integrate human cognition with intelligent machines, creating adaptive, immersive, and responsive control systems. Sentient Biotech is pioneering this future, developing neuroadaptive interfaces, predictive AI models, and XR-enhanced visualization tools that maximize human potential and operational efficiency.
            </p>
            <p className="text-text-primary font-medium text-lg">
              Sentient Biotech — Redefining Human-Machine Interaction for Maximum Impact.
            </p>
          </div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}

