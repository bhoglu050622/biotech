'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Heart, 
  Thermometer, 
  Zap,
  Shield,
  Brain,
  Droplet,
  CheckCircle
} from 'lucide-react'

const capabilities = [
  {
    title: 'Multi Modal Biosensing',
    description: 'Our sensors measure neural, muscular, and cardiac activity along with temperature, hydration, and oxygenation for comprehensive body analytics.',
    icon: Activity
  },
  {
    title: 'Smart Data Interpretation',
    description: 'Embedded machine learning systems convert raw biological data into meaningful health and performance indicators in real time.',
    icon: Brain
  },
  {
    title: 'Seamless Body Integration',
    description: 'Flexible biocompatible materials allow sensors to integrate naturally with skin, tissue, and wearable systems without discomfort or interference.',
    icon: Heart
  },
  {
    title: 'Autonomous Calibration',
    description: 'The sensors learn from each user\'s biological patterns, adjusting sensitivity and thresholds to ensure long term accuracy.',
    icon: Zap
  },
  {
    title: 'Wireless and Energy Efficient Design',
    description: 'Compact, low power architectures enable continuous data transmission without intrusive cables or frequent charging.',
    icon: Shield
  },
  {
    title: 'AI Assisted Monitoring',
    description: 'Continuous learning algorithms recognize trends in physical and emotional states, predicting fatigue, stress, or health anomalies before they occur.',
    icon: Thermometer
  }
]

const researchAreas = [
  'Neuro Adaptive Sensor Networks: Studying neural signal pathways to design sensors that can detect and learn from subtle brain activity',
  'Bioelectric Intelligence: Developing circuits that interpret electrical patterns from the nervous and muscular systems for predictive diagnostics',
  'Molecular Sensing and Learning: Researching molecular level detection that allows early identification of disease biomarkers and immune responses',
  'Self Healing Sensor Materials: Creating flexible polymers and nanocomposites that can repair microdamage and maintain performance over long periods',
  'Closed Loop Learning Systems: Integrating AI models that continuously learn from biological feedback, improving decision making in critical applications'
]

const applications = [
  {
    title: 'Healthcare and Medical Diagnostics',
    description: 'Real time tracking of patient vitals, neural responses, and metabolic states for personalized care and early intervention.',
    icon: Heart
  },
  {
    title: 'Defense and Tactical Operations',
    description: 'Wearable bio sensing units monitor fatigue, stress, and cognitive load to enhance soldier safety and mission efficiency.',
    icon: Shield
  },
  {
    title: 'Sports and Performance',
    description: 'Continuous monitoring of athletes\' physiology for performance optimization and injury prevention.',
    icon: Activity
  },
  {
    title: 'Environmental and Industrial Safety',
    description: 'Detection of biological stress markers in workers exposed to extreme or hazardous environments.',
    icon: Droplet
  }
]

export default function BioIntegratedSensorsPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
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
              Bio-Integrated Sensors and Learning
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Merging Biology with Intelligent Systems
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
                At Sentient Biotech Private Limited, we are pioneering the future of interaction between biology and technology. Our Bio Integrated Sensors and Learning systems are engineered to create a seamless bridge between the human body and intelligent machines. These sensors do not simply capture data; they interpret and learn from biological signals to deliver precise, context aware insights.
              </p>
              <p>
                By combining biotechnology, artificial intelligence, and material innovation, we have developed sensors that can detect, adapt, and respond to human physiological states in real time. Whether in the field of healthcare, neuroscience, or defense, our systems are designed to understand life itself - reading what the body feels, predicting what it needs, and responding intelligently.
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
              Intelligent Sensing at Biological Scale
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4">{capability.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Research */}
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
              Advanced Research
            </h2>
            <p className="text-text-secondary mb-8 text-center leading-relaxed">
              Our research in Bio Integrated Sensors extends beyond traditional biosensing. We are creating living interfaces that adapt through continuous feedback, powered by intelligent learning models that evolve alongside biological changes.
            </p>
            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary leading-relaxed text-sm">{area}</p>
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
              Real World Impact of Intelligent Bio Sensing
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
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <application.icon className="w-8 h-8 text-white" />
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
              The Future of Bio Integrated Intelligence
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Our next generation research is focused on developing self aware bio sensing networks capable of autonomous learning and adaptation. Future developments include implantable sensors that synchronize with neural and muscular activity, real time biofeedback loops for remote healthcare, and adaptive systems that adjust environmental conditions based on human state detection.
            </p>
            <p className="text-text-primary font-medium text-base sm:text-lg">
              We envision a world where machines no longer rely solely on code but respond with intuition derived from life itself. Sentient Biotech stands at the center of this transformation, shaping the next era of intelligent biological interaction.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}

