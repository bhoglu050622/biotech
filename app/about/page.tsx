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
    year: 'July 2024',
    title: 'Company Founded',
    description: 'Sentient Biotech Private Limited was established with a vision to revolutionize biotechnology and neurotechnology',
    icon: Building2
  },
  {
    year: 'December 2024',
    title: 'Partnership',
    description: 'Sentient Biotech Private Limited gets incubated at IIT Mandi, Himachal Pradesh',
    icon: GraduationCap
  },
  {
    year: 'April 2025',
    title: 'First Clinical Neuroimaging Prototype',
    description: 'Developed first iteration of a clinical grade non-invasive neuroimaging system',
    icon: Brain
  },
  {
    year: 'October 2025',
    title: 'Pilot Headgear Solutions',
    description: 'Prototype Development for a Next-Gen Pilot Headgear enters final stage',
    icon: Shield
  }
]

const teamMembers = [
  {
    name: 'Dr. Prateep V. Philip',
    role: 'Founder',
    expertise: 'DGP IPS, Tamil Nadu [Retd.]',
    experience: 'PhD, Founder of Equilibrium Psychology, 30+ years of IPS experience',
    icon: Shield
  },
  {
    name: 'Nikhil Pandey',
    role: 'Defence Solutions Director',
    expertise: '20+ years of experience in defence applications and solutions',
    experience: 'Indian Army',
    icon: Shield
  },
  {
    name: 'Jasmeet Singh',
    role: 'Co-Founder',
    expertise: 'Doctoral Scholar in Neuroscience and Deep Learning',
    experience: 'Head of Clinical Research',
    icon: Brain
  },
  {
    name: 'Navneet Sharma',
    role: 'Electrical and Electronics Engineer',
    expertise: 'Head of Technological Development',
    experience: 'Technology Development Lead',
    icon: Zap
  }
]

const coreValues = [
  {
    title: 'Scientific Integrity',
    description: 'Every circuit, sensor, and algorithm is grounded in biotechnology and neuroscience. We build devices that honor data quality, reproducibility, and real human physiology',
    icon: Award
  },
  {
    title: 'Engineering with Empathy',
    description: 'Technology should adapt to humans, not the other way around. Our hardware and software are designed for comfort, safety, and long-term usability across labs, clinics, and defense environments',
    icon: Users
  },
  {
    title: 'Ethical by Design',
    description: 'We treat neural and physiological data as extensions of human identity. Privacy, consent, and secure on-device processing form the foundation of our every solution',
    icon: Shield
  },
  {
    title: 'Research and Purpose-Driven Innovation',
    description: 'We create technology not just for performance, but for well-being—empowering researchers, clinicians, and pilots to understand and enhance the human experience',
    icon: Target
  }
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold gradient-text mb-6">
              About Us
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Pioneering human-machine synergy through advanced biotechnology and neurotechnology
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Sentient Biotech */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-hover"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-8 text-center">
              About Sentient Biotech
            </h2>
            <div className="space-y-6 text-text-secondary text-base leading-relaxed max-w-5xl mx-auto">
              <p>
                Founded in 2024, Sentient Biotech was born from a simple yet profound realization: the human brain remains the ultimate frontier. In an era of unprecedented technological advancement, our understanding of cognition, mental health, and human performance has yet to reach its full potential. We established ourselves with a vision to close that gap.
              </p>
              <p>
                Our journey began with a dual-pronged approach, applying a unified core of neurotechnology and AI to two of humanity's most critical domains: healthcare and defense.
              </p>
              <p>
                In our labs, we are simultaneously developing clinical-grade neuroimaging hardware for hospitals and creating sophisticated AI models to provide objective, data-driven insights into a spectrum of neuropsychiatric conditions.
              </p>
              <p>
                At the same time, we are engineering the next-generation intelligent, helmet-mounted systems that provide a cognitive edge and enhanced situational awareness in high-stakes environments for the pilots of our nation.
              </p>
              <p className="text-text-primary font-medium text-lg">
                Sentient Biotech is more than a technology company; we are a collective of scientists, engineers, and strategists driven by a common purpose. We are building the tools to decode the mind, pioneering a new era of understanding that will empower individuals, support clinicians, and strengthen national security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-30 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize biotechnology and neurotechnology
            </p>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue via-accent-blue to-light-blue rounded-full"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="card-hover group">
                      <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                          <milestone.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-primary-blue font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-text-primary font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-primary-blue rounded-full border-4 border-deep-indigo flex-shrink-0 shadow-blue z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experts in Biotechnology, Neuroscience, Engineering, and Defense technology working together to push the boundaries of Human-Machine synergy
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-hover group text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">{member.name}</h3>
                <p className="text-primary-blue text-sm mb-3 font-medium">{member.role}</p>
                <p className="text-text-secondary text-sm mb-2 leading-relaxed">{member.expertise}</p>
                <p className="text-text-tertiary text-xs">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-30 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              The principles that guide how we design, build, and deploy technology that connects biology, behavior, and data
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-text-primary mb-3">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              Our Mission & Vision
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary">Our Vision</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                We envision a future where brain health is proactive, not reactive. A world where mental and neurological conditions are understood with objective clarity, and where every individual has access to the tools to optimize their cognitive potential. We see a future where technology augments human capability in the most demanding environments, ensuring a safer and more secure world.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary">Our Mission</h3>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our mission is to create an end-to-end ecosystem for neuro-centric biotechnology. We do this by:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Designing & Building next-generation, multi-modal hardware for clinical, consumer, and defense applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Developing powerful, foundational AI models that translate complex biological signals into actionable intelligence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Deploying integrated solutions that provide unprecedented insights into the heart-brain axis, cognitive states, and neurological health</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-30 bg-gradient-to-br from-primary-blue via-secondary-blue to-accent-blue relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Performance
            </h2>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-base leading-relaxed">
              Join industry leaders who are already using our products and solutions to enhance performance and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-200 focus-ring shadow-soft-lg"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 focus-ring"
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
