'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Shield, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Building2,
  GraduationCap,
  TrendingUp,
  Lightbulb,
  Star,
  Clock,
  MapPin,
  Calendar,
  Send,
  Download,
  Play,
  Brain,
  Cpu,
  Activity,
  Monitor,
  Lock,
  ExternalLink,
  User,
  MessageCircle,
  BarChart3
} from 'lucide-react'

const openPositions = [
  {
    id: 'senior-eeg-engineer',
    title: 'Senior EEG Engineer',
    department: 'Engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '5+ years',
    salary: '₹12-18 LPA',
    description: 'Lead development of next-generation EEG systems for defense applications with cutting-edge signal processing and machine learning.',
    requirements: [
      'Masters in Biomedical Engineering or related field',
      '5+ years experience with EEG signal processing',
      'Expertise in Python, C++, and MATLAB',
      'Knowledge of defense standards and certifications',
      'Experience with machine learning algorithms'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Flexible work hours'],
    skills: ['Signal Processing', 'Machine Learning', 'Python', 'C++', 'MATLAB'],
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    id: 'defense-solutions-architect',
    title: 'Defense Solutions Architect',
    department: 'Product',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '8+ years',
    salary: '₹20-30 LPA',
    description: 'Design and architect neurotechnology solutions for military applications with focus on security and reliability.',
    requirements: [
      'Bachelors in Computer Science or Engineering',
      '8+ years in defense/security solutions',
      'Experience with system architecture design',
      'Knowledge of defense protocols and standards',
      'Strong leadership and communication skills'
    ],
    benefits: ['Premium salary', 'Stock options', 'Health insurance', 'Professional development'],
    skills: ['System Architecture', 'Defense Standards', 'Security', 'Leadership', 'Communication'],
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    department: 'Research',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '3+ years',
    salary: '₹15-25 LPA',
    description: 'Conduct cutting-edge research in AI applications for neurotechnology and brain-computer interfaces.',
    requirements: [
      'PhD in AI, Machine Learning, or Neuroscience',
      '3+ years research experience',
      'Publications in top-tier conferences',
      'Experience with neural networks and deep learning',
      'Strong mathematical background'
    ],
    benefits: ['Research freedom', 'Conference attendance', 'Publication support', 'Competitive salary'],
    skills: ['AI Research', 'Deep Learning', 'Neural Networks', 'Neuroscience', 'Mathematics'],
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '4+ years',
    salary: '₹18-25 LPA',
    description: 'Drive product strategy and roadmap for neurotechnology solutions across defense and healthcare markets.',
    requirements: [
      'Bachelors in Business or Engineering',
      '4+ years product management experience',
      'Experience in healthcare or defense sectors',
      'Strong analytical and strategic thinking',
      'Excellent communication and leadership skills'
    ],
    benefits: ['Leadership role', 'Strategic impact', 'Health insurance', 'Professional development'],
    skills: ['Product Strategy', 'Market Analysis', 'Leadership', 'Communication', 'Analytics'],
    color: 'from-orange-500 to-red-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  }
]

const companyBenefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs',
    color: 'from-red-500 to-pink-400'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Professional development budget, conference attendance, and skill enhancement programs',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Zap,
    title: 'Innovation Time',
    description: '20% time for personal projects and innovation initiatives',
    color: 'from-yellow-500 to-orange-400'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on cutting-edge technology that impacts defense and healthcare globally',
    color: 'from-green-500 to-teal-400'
  }
]

const cultureValues = [
  {
    title: 'Innovation First',
    description: 'We encourage bold ideas and breakthrough thinking',
    icon: Lightbulb,
    color: 'from-electric-cyan to-violet-accent'
  },
  {
    title: 'Collaboration',
    description: 'Cross-functional teams working towards common goals',
    icon: Users,
    color: 'from-violet-accent to-soft-teal'
  },
  {
    title: 'Excellence',
    description: 'Commitment to delivering the highest quality solutions',
    icon: Star,
    color: 'from-soft-teal to-electric-cyan'
  },
  {
    title: 'Impact',
    description: 'Making a real difference in defense and healthcare',
    icon: Target,
    color: 'from-electric-cyan to-violet-accent'
  }
]

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState('senior-eeg-engineer')
  const [isApplying, setIsApplying] = useState(false)

  const currentPosition = openPositions.find(p => p.id === selectedPosition) || openPositions[0]

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
                <Briefcase className="w-4 h-4 text-electric-cyan" />
                <span className="text-electric-cyan text-sm font-medium">Join Our Team</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-electric-cyan via-violet-accent to-soft-teal bg-clip-text text-transparent">
                  Build the
                </span>
                <br />
                <span className="text-white">
                  Future
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Join our team of innovators and help shape the future of neurotechnology. 
                Work on cutting-edge projects that impact defense, healthcare, and research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 230, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
                >
                  <span>View Open Positions</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                >
                  <span>Learn About Culture</span>
                  <Heart className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Career Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
                  <span>Remote Friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Competitive Benefits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Growth Opportunities</span>
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
                {/* Career Display */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Career Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-2xl flex items-center justify-center">
                        <Briefcase className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-violet-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-soft-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Sentient Biotech</h3>
                        <p className="text-slate-300">Building the future of neurotechnology</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-electric-cyan">15+</div>
                          <div className="text-sm text-slate-300">Open Positions</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-violet-accent">50+</div>
                          <div className="text-sm text-slate-300">Team Members</div>
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

      {/* Open Positions */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of neurotechnology. 
              Explore our current openings and find your perfect role.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Position List */}
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.button
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedPosition(position.id)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedPosition === position.id
                      ? 'border-electric-cyan bg-electric-cyan/10 scale-105'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:scale-105'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-300">
                        <span className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{position.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-electric-cyan">{position.salary}</div>
                      <div className="text-sm text-slate-300">{position.experience}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{position.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Position Details */}
            <motion.div
              key={selectedPosition}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{currentPosition.title}</h3>
                <div className="flex items-center space-x-4 text-slate-300 mb-4">
                  <span className="flex items-center space-x-1">
                    <Building2 className="w-4 h-4" />
                    <span>{currentPosition.department}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{currentPosition.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentPosition.type}</span>
                  </span>
                </div>
                <p className="text-slate-300 mb-6">{currentPosition.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-electric-cyan">{currentPosition.salary}</div>
                    <div className="text-slate-300">{currentPosition.experience}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsApplying(true)}
                    className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {currentPosition.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPosition.benefits.map((benefit, i) => (
                      <span key={i} className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPosition.skills.map((skill, i) => (
                      <span key={i} className="bg-electric-cyan/10 text-electric-cyan text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Join Us?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that fosters innovation, growth, and impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and every team member can make a meaningful impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join our team and help us build the future of neurotechnology. 
              Apply today and be part of something revolutionary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-cyan to-violet-accent text-deep-indigo px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-electric-cyan/25 transition-all duration-300"
              >
                <span>View All Positions</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <span>Send Resume</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}