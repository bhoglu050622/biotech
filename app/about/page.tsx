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
  TrendingUp,
  Cpu,
  Activity,
  Lock,
  Sparkles,
  Star,
  BarChart3,
  Headphones,
  Monitor
} from 'lucide-react'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Sentient Biotech Private Limited established with vision to revolutionize neurotechnology',
    icon: Building2,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    year: '2021',
    title: 'First EEG Prototype',
    description: 'Developed breakthrough non-invasive EEG monitoring system for pilot applications',
    icon: Brain,
    color: 'from-purple-500 to-pink-400'
  },
  {
    year: '2022',
    title: 'IAF Partnership',
    description: 'Strategic collaboration with Indian Air Force for pilot headgear development',
    icon: Shield,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    year: '2023',
    title: 'DRDO Certification',
    description: 'Achieved DRDO certification for defense-grade neurotechnology solutions',
    icon: Award,
    color: 'from-orange-500 to-red-400'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded operations internationally with partnerships in healthcare and research',
    icon: Globe,
    color: 'from-violet-500 to-purple-400'
  }
]

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'Neural Engineering',
    image: '👩‍🔬',
    achievements: ['PhD Neural Engineering', '15+ Years Experience', '50+ Patents']
  },
  {
    name: 'Captain Michael Rodriguez',
    role: 'Defense Solutions Director',
    expertise: 'Aerospace Applications',
    image: '👨‍✈️',
    achievements: ['Former IAF Pilot', 'Defense Specialist', 'Mission Critical Systems']
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Head of Research',
    expertise: 'Biomedical Engineering',
    image: '👩‍⚕️',
    achievements: ['MD Neuroscience', 'Clinical Research', 'FDA Approvals']
  },
  {
    name: 'Alex Thompson',
    role: 'AI & Machine Learning Lead',
    expertise: 'Computational Neuroscience',
    image: '👨‍💻',
    achievements: ['MS Computer Science', 'AI Research', 'Real-time Processing']
  }
]

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'End-to-end encryption and privacy protection for all neural data',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Military-grade accuracy and reliability in every solution we deliver',
    color: 'from-purple-500 to-pink-400'
  },
  {
    icon: Users,
    title: 'Human-Centered',
    description: 'Technology that enhances human capabilities without compromising safety',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    icon: Zap,
    title: 'Innovation Driven',
    description: 'Continuous research and development to stay at the forefront of neurotechnology',
    color: 'from-orange-500 to-red-400'
  }
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/20 rounded-full px-4 py-2 mb-8"
              >
                <Brain className="w-4 h-4 text-electric-cyan" />
                <span className="text-electric-cyan text-sm font-medium">Pioneering Neurotechnology</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-electric-cyan via-violet-accent to-soft-teal bg-clip-text text-transparent">
                  About
                </span>
                <br />
                <span className="text-white">
                  Sentient Biotech
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                We are revolutionizing the future of human-machine interaction through 
                advanced neurotechnology solutions that bridge the gap between mind and machine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
                >
                  <span>Our Mission</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <Zap className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
                  <span>Defense-Grade Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Research-Backed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Privacy-First Design</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Device */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Company Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Sentient Biotech</h3>
                        <p className="text-slate-300">Advanced neurotechnology solutions</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-electric-cyan">99.9%</div>
                          <div className="text-sm text-slate-300">Accuracy</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-violet-accent">0.1ms</div>
                          <div className="text-sm text-slate-300">Latency</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-12 h-12 border-2 border-electric-cyan/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-violet-accent/30 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We envision a future where human potential is amplified through seamless integration with advanced neurotechnology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                To develop and deploy cutting-edge neurotechnology solutions that enhance human capabilities, 
                improve safety in high-risk environments, and advance our understanding of the human brain.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-slate-300">Defense-grade security and reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-slate-300">Privacy-first data protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span className="text-slate-300">Continuous innovation and research</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-accent to-soft-teal rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                To become the global leader in neurotechnology, creating a world where human potential 
                is unlimited and technology serves to enhance rather than replace human capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-violet-accent" />
                  <span className="text-slate-300">Global impact through technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-violet-accent" />
                  <span className="text-slate-300">Ethical and responsible innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-violet-accent" />
                  <span className="text-slate-300">Human-centered design principles</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From startup to industry leader, discover the key milestones that shaped our company.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-cyan via-violet-accent to-soft-teal rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center`}>
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-electric-cyan">{milestone.year}</div>
                          <h3 className="text-lg font-bold text-white">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full border-4 border-deep-indigo"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              World-class experts in neuroscience, engineering, and defense technology working together to push the boundaries of what's possible.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-electric-cyan font-semibold mb-2">{member.role}</p>
                <p className="text-slate-300 text-sm mb-4">{member.expertise}</p>
                <div className="space-y-2">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="text-xs text-slate-400 bg-white/5 rounded-lg px-2 py-1">
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do, from product development to customer relationships.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-cyan/10 to-violet-accent/10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform the Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing neurotechnology and creating solutions that enhance human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
              >
                <span>Join Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <span>Contact Us</span>
                <Zap className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}