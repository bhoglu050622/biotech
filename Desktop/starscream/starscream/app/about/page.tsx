'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Shield, 
  Target, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Building2,
  GraduationCap,
  Briefcase,
  TrendingUp
} from 'lucide-react'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Sentient Biotech Private Limited established with vision to revolutionize neurotechnology',
    icon: Building2
  },
  {
    year: '2021',
    title: 'First EEG Prototype',
    description: 'Developed breakthrough non-invasive EEG monitoring system for pilot applications',
    icon: Brain
  },
  {
    year: '2022',
    title: 'IAF Partnership',
    description: 'Strategic collaboration with Indian Air Force for pilot headgear development',
    icon: Shield
  },
  {
    year: '2023',
    title: 'DRDO Certification',
    description: 'Achieved DRDO certification for defense-grade neurotechnology solutions',
    icon: Award
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanding operations internationally with focus on aerospace and healthcare',
    icon: Globe
  }
]

const teamMembers = [
  {
    name: 'Dr. Jasmeet Singh',
    role: 'Founder & CEO',
    expertise: 'Neurotechnology & Aerospace Engineering',
    experience: '15+ years in defense R&D',
    icon: Brain
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'CTO',
    expertise: 'Biomedical Signal Processing',
    experience: '12+ years in EEG research',
    icon: Zap
  },
  {
    name: 'Col. Rajesh Kumar (Retd.)',
    role: 'Advisory Board',
    expertise: 'Military Aviation & Safety',
    experience: '25+ years IAF service',
    icon: Shield
  },
  {
    name: 'Dr. Anjali Patel',
    role: 'Head of Research',
    expertise: 'Cognitive Neuroscience',
    experience: '10+ years in brain research',
    icon: Target
  }
]

const certifications = [
  'ISO 13485:2016 - Medical Devices Quality Management',
  'ISO 27001:2013 - Information Security Management',
  'CE Marking - European Conformity',
  'FDA 510(k) Clearance - Medical Device',
  'DRDO Certification - Defense Applications',
  'IAF Approved Supplier - Aerospace Components'
]

const values = [
  {
    title: 'Innovation Excellence',
    description: 'Pioneering breakthrough technologies in neurotechnology and human-machine interfaces',
    icon: Zap
  },
  {
    title: 'Defense Commitment',
    description: 'Dedicated to enhancing national security through advanced biometric monitoring solutions',
    icon: Shield
  },
  {
    title: 'Research Integrity',
    description: 'Maintaining highest standards of scientific rigor and ethical research practices',
    icon: Award
  },
  {
    title: 'Global Impact',
    description: 'Creating solutions that improve human performance and safety worldwide',
    icon: Globe
  }
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              About Sentient Biotech
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Pioneering the future of neurotechnology with cutting-edge EEG solutions and 
              next-generation pilot headgear for defense and aerospace applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                DRDO Certified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                IAF Approved
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                ISO 13485 Certified
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Leading Neurotechnology Innovation
              </h2>
              <p className="text-white/80 mb-6">
                Sentient Biotech Private Limited stands at the forefront of neurotechnology innovation, 
                specializing in advanced EEG solutions and next-generation pilot headgear systems. 
                Our mission is to enhance human performance and safety through cutting-edge biometric 
                monitoring technologies.
              </p>
              <p className="text-white/80 mb-8">
                Based in Tamil Nadu, India, we serve defense, aerospace, healthcare, and research 
                sectors with state-of-the-art solutions that meet the highest standards of quality, 
                reliability, and performance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-cyan mb-2">15+</div>
                  <div className="text-white/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-cyan mb-2">50+</div>
                  <div className="text-white/60">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-cyan mb-2">100%</div>
                  <div className="text-white/60">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-cyan mb-2">24/7</div>
                  <div className="text-white/60">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-panel-strong rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{value.title}</h4>
                        <p className="text-white/60 text-sm">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              From startup to industry leader, our journey has been marked by innovation, 
              partnerships, and breakthrough achievements.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-electric-cyan to-violet-accent"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-panel-strong rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <milestone.icon className="w-6 h-6 text-electric-cyan" />
                        <span className="text-electric-cyan font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-white/70 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-electric-cyan rounded-full border-4 border-deep-indigo flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our team combines deep expertise in neurotechnology, aerospace engineering, 
              and defense applications to deliver cutting-edge solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                <p className="text-electric-cyan text-sm mb-2">{member.role}</p>
                <p className="text-white/60 text-xs mb-2">{member.expertise}</p>
                <p className="text-white/50 text-xs">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Certifications & Standards
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We maintain the highest standards of quality, security, and compliance 
              across all our products and services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-lg p-4 flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-electric-cyan flex-shrink-0" />
                <span className="text-white/80 text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Partner with Us
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing neurotechnology and human-machine interfaces. 
              Let's work together to create the future of biometric monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Our Solutions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
