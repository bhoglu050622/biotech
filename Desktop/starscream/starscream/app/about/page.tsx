'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Brain, Target, Users, Award, Globe, Shield, Zap, Heart, Building2, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const coreValues = [
  {
    icon: Brain,
    title: 'Innovation Excellence',
    description: 'Pioneering breakthrough neurotechnology solutions that redefine human-machine interaction boundaries.',
    color: 'from-primary-blue to-secondary-blue',
    stats: '15+ Patents'
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Ensuring complete data privacy and security in all our neurotechnology solutions with military-grade encryption.',
    color: 'from-primary-violet to-secondary-violet',
    stats: '99.9% Uptime'
  },
  {
    icon: Users,
    title: 'Human-Centric Design',
    description: 'Creating intuitive, non-invasive solutions that enhance human capabilities and well-being.',
    color: 'from-primary-emerald to-secondary-emerald',
    stats: '500+ Users'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Developing solutions that benefit humanity across defense, healthcare, and research sectors worldwide.',
    color: 'from-primary-cyan to-secondary-cyan',
    stats: '25+ Countries'
  }
]

const leadershipTeam = [
  {
    name: 'Dr. Jasmeet Singh',
    position: 'Founder & CEO',
    expertise: 'Neurotechnology & AI',
    description: 'Pioneer in brain-computer interface research with 15+ years of experience in neurotechnology.',
    image: '/team/ceo.jpg',
    achievements: ['15+ Years Experience', '50+ Research Papers', '10+ Patents']
  },
  {
    name: 'Dr. Priya Sharma',
    position: 'Chief Technology Officer',
    expertise: 'Biomedical Engineering',
    description: 'Expert in EEG signal processing and wearable neurotechnology solutions.',
    image: '/team/cto.jpg',
    achievements: ['PhD Biomedical Eng', '20+ Publications', '5+ Patents']
  },
  {
    name: 'Rajesh Kumar',
    position: 'Head of R&D',
    expertise: 'Human-Machine Interface',
    description: 'Leading research in next-generation pilot headgear and defense applications.',
    image: '/team/rd.jpg',
    achievements: ['Masters in HMI', '15+ Projects', '3+ Patents']
  }
]

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Sentient Biotech established with vision to revolutionize neurotechnology',
    icon: Building2,
    color: 'text-primary-blue'
  },
  {
    year: '2021',
    title: 'First EEG Prototype',
    description: 'Developed breakthrough non-invasive EEG monitoring system',
    icon: Brain,
    color: 'text-primary-cyan'
  },
  {
    year: '2022',
    title: 'Defense Partnership',
    description: 'Secured partnership with Indian defense for pilot headgear development',
    icon: Shield,
    color: 'text-primary-violet'
  },
  {
    year: '2023',
    title: 'Healthcare Launch',
    description: 'Launched healthcare-focused neurotechnology solutions',
    icon: Heart,
    color: 'text-primary-emerald'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanding internationally with advanced neurotech solutions',
    icon: Globe,
    color: 'text-secondary-blue'
  }
]

const achievements = [
  { metric: 'Research Papers', value: '50+', icon: TrendingUp },
  { metric: 'Patents Filed', value: '15+', icon: Award },
  { metric: 'Team Members', value: '100+', icon: Users },
  { metric: 'Countries Served', value: '25+', icon: Globe }
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-primary-navy">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/20 border border-primary-blue/30"
                >
                  <span className="text-primary-blue font-medium">About Sentient Biotech</span>
                </motion.div>
                
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                  Pioneering the Future of
                  <span className="block gradient-text">Neurotechnology</span>
                </h1>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  We are revolutionizing human-machine interfaces through cutting-edge neurotechnology solutions that enhance human capabilities and well-being across defense, healthcare, and research sectors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Our Mission</span>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.metric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                      <div className="text-sm text-slate-400">{achievement.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Driving innovation in neurotechnology to create a better future for humanity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                To revolutionize human-machine interaction through advanced neurotechnology, creating non-invasive solutions that enhance human capabilities while maintaining the highest standards of privacy and security.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-emerald" />
                  <span className="text-slate-300">Non-invasive technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-emerald" />
                  <span className="text-slate-300">Privacy-first approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-emerald" />
                  <span className="text-slate-300">Human-centric design</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-violet to-secondary-violet rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                To become the global leader in neurotechnology solutions, empowering individuals and organizations with brain-computer interfaces that seamlessly integrate with human cognition and enhance performance across all sectors.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-emerald" />
                  <span className="text-slate-300">Global leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-emerald" />
                  <span className="text-slate-300">Seamless integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-emerald" />
                  <span className="text-slate-300">Performance enhancement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our innovation and shape our commitment to advancing neurotechnology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 mb-4">{value.description}</p>
                <div className="text-primary-blue font-semibold text-sm">{value.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation in neurotechnology and shaping the future of human-machine interfaces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-blue font-medium mb-2">{member.position}</p>
                <p className="text-slate-400 text-sm mb-4">{member.expertise}</p>
                <p className="text-slate-300 text-sm mb-6">{member.description}</p>
                <div className="space-y-2">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="text-xs text-primary-emerald bg-primary-emerald/10 px-3 py-1 rounded-full">
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From startup to industry leader - the milestones that define our growth in neurotechnology
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-primary-violet rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-hover">
                      <div className="flex items-center space-x-4 mb-4">
                        <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                        <div className="text-2xl font-bold text-primary-blue">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-blue to-primary-violet rounded-full border-4 border-primary-navy z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Be part of the neurotechnology revolution. Discover how our solutions can transform your operations and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <span>Learn More</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}