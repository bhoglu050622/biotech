'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import BackToTop from '@/components/BackToTop'
import JsonLd, { organizationSchema } from '@/components/JsonLd'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { Shield, Heart, Brain, Target, ArrowRight } from 'lucide-react'

const industries = [
  {
    title: 'Defense & Aerospace',
    description: 'We provide next-generation pilot headgear, XR-assisted situational awareness, bio-integrated monitoring, AI-driven analytics, and HMI systems to enhance operational performance, safety, and decision-making for air force personnel and chartered aircraft operators.',
    icon: Shield,
    href: '/industries/defence-aerospace',
    color: 'from-primary-blue to-secondary-green'
  },
  {
    title: 'Healthcare',
    description: 'Our EEG systems, bio-integrated sensors, AI-powered diagnostics, and XR-enabled medical simulation platforms empower hospitals, research centers, and healthcare professionals to optimize patient care, monitor cognitive health, and advance medical research with precision.',
    icon: Heart,
    href: '/industries/healthcare',
    color: 'from-secondary-green to-accent-light-blue'
  },
  {
    title: 'Research and Academia',
    description: 'Advanced EEG monitoring, neurotechnology platforms, data fusion, AI analytics, and XR environments support universities, research institutions, and laboratories. Our solutions accelerate cognitive studies, biomedical research, and experiential learning with unparalleled accuracy and insight.',
    icon: Brain,
    href: '/industries/research-academia',
    color: 'from-accent-light-blue to-secondary-green'
  },
  {
    title: 'Simulation and Training',
    description: 'Immersive XR-based simulation platforms, neuroadaptive HMI, AI-driven performance analytics, and bio-sensor monitoring deliver realistic training environments. Professionals in defence, healthcare, and industrial sectors gain hands-on experience, cognitive skill development, and operational readiness.',
    icon: Target,
    href: '/industries/simulation-training',
    color: 'from-secondary-green to-primary-blue'
  }
]

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <JsonLd data={organizationSchema} />
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-4 sm:mb-6">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto px-4">
              Sentient Biotech Private Limited delivers intelligent technologies that transform operations, enhance cognition, and enable advanced decision-making across critical sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20 section-enhanced thematic-bg-defense">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-thematic group cursor-pointer relative"
              >
                <a href={industry.href} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300`}>
                    <industry.icon className="w-8 h-8 text-primary-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">{industry.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm">{industry.description}</p>
                  <div className="flex items-center gap-2 text-primary-blue font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-text-primary font-medium text-base sm:text-lg">
              Sentient Biotech Solutions - Intelligence, Awareness, and Precision Across Industries.
            </p>
          </motion.div>
        </div>
      </section>

      <CommonCTA />
      <Footer />
    </main>
  )
}

