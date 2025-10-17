'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  MonitorSmartphone,
  Stethoscope,
  Smartphone,
  Gauge,
  Zap,
  CheckCircle,
  ArrowRight,
  Brain
} from 'lucide-react'

const hmiApplications = [
  {
    title: 'For Clinicians & Researchers',
    description: 'We develop powerful software dashboards that transform raw data streams into clear, interactive visualizations. Our AI-driven reports highlight key biomarkers and trends, allowing medical professionals to make faster, more informed decisions without being overwhelmed by complexity.',
    icon: Stethoscope,
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    features: [
      'Powerful software dashboards',
      'Interactive data visualizations',
      'AI-driven report generation',
      'Key biomarker highlighting',
      'Trend analysis & insights',
      'Reduced complexity'
    ]
  },
  {
    title: 'For Consumers',
    description: 'Our mobile applications are designed for clarity and engagement. We translate personal neurological and physiological data into meaningful insights and actionable guidance, empowering users to take control of their mental wellness and cognitive performance.',
    icon: Smartphone,
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    features: [
      'Clarity-focused mobile apps',
      'Engaging user experience',
      'Personal data translation',
      'Meaningful insights',
      'Actionable guidance',
      'Mental wellness empowerment'
    ]
  },
  {
    title: 'For Pilots & Operators',
    description: 'In high-stakes environments, the interface is the mission. Our defense HMI focuses on minimizing cognitive load. This includes intelligent data fusion for our helmet displays and pioneering the use of Human-Computer Interfaces (HCI) for hands-free, thought-driven control of non-critical systems, enabling unparalleled speed and focus.',
    icon: Gauge,
    gradient: 'from-orange-600 via-red-600 to-rose-600',
    features: [
      'Minimized cognitive load',
      'Intelligent data fusion',
      'Helmet display integration',
      'Hands-free HCI control',
      'Thought-driven commands',
      'Mission-critical focus'
    ]
  }
]

export default function HMIPage() {
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
              Human-Machine Interface (HMI)
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Bridging Intelligence Between Humans and Machines
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
                At Sentient Biotech Private Limited, we believe that the future of technology lies not in machines replacing humans, but in seamless collaboration between the two. The Human-Machine Interface (HMI) is where biology meets computation - the point where human intent transforms into digital action, and machine intelligence responds with understanding and precision.
              </p>
              <p>
                Our HMI technologies are designed to create natural, responsive, and adaptive communication between the human brain and digital systems. By integrating bio-signals, cognitive data, and environmental inputs, we are creating interfaces that sense, interpret, and react to human thought, emotion, and behavior.
              </p>
              <p className="text-text-primary font-medium">
                Sentient Biotech's HMI systems redefine interaction - from cockpit controls that respond to a pilot's neural focus to biomedical devices that adapt to a patient's emotional state. We are engineering an ecosystem where thought becomes command, and response becomes intuition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HMI Applications */}
      <section className="py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Our HMI Philosophy in Practice
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="space-y-8">
            {hmiApplications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-10">
                  {/* Left Column - Icon & Title */}
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-24 h-24 bg-gradient-to-br ${application.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <application.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                      {application.title}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed">
                      {application.description}
                    </p>
                  </div>
                  
                  {/* Right Column - Features */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-electric-cyan mr-2" />
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {application.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-white/80"
                        >
                          <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${application.gradient}`}></div>
              </motion.div>
            ))}
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
              <Brain className="w-16 h-16 mx-auto mb-6 text-electric-cyan" />
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Experience the Future of Neurotechnology
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                From cutting-edge hardware to intelligent analytics and intuitive interfaces, 
                our complete ecosystem is ready to transform your vision into reality.
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

