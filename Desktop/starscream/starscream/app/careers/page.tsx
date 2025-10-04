'use client'

import { Suspense } from 'react'
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
  Clock
} from 'lucide-react'

const openPositions = [
  {
    title: 'Senior EEG Engineer',
    department: 'Engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead development of next-generation EEG systems for defense applications',
    requirements: [
      'Masters in Biomedical Engineering or related field',
      'Experience with signal processing and machine learning',
      'Knowledge of defense standards and certifications',
      'Strong programming skills in Python/C++'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Professional development']
  },
  {
    title: 'Defense Solutions Architect',
    department: 'Product',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '8+ years',
    description: 'Design and architect neurotechnology solutions for military applications',
    requirements: [
      'PhD in Neuroscience or related field',
      'Experience with defense R&D projects',
      'Knowledge of IAF and DRDO requirements',
      'Strong leadership and communication skills'
    ],
    benefits: ['Stock options', 'Flexible work', 'Research opportunities']
  },
  {
    title: 'AI/ML Research Scientist',
    department: 'Research',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Develop AI algorithms for biometric data analysis and prediction',
    requirements: [
      'PhD in Computer Science or AI',
      'Experience with neural networks and deep learning',
      'Publications in top-tier conferences',
      'Experience with EEG signal processing'
    ],
    benefits: ['Research budget', 'Conference attendance', 'Patent opportunities']
  },
  {
    title: 'Quality Assurance Manager',
    department: 'Quality',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '6+ years',
    description: 'Ensure compliance with defense standards and medical device regulations',
    requirements: [
      'Bachelors in Engineering or related field',
      'Experience with ISO 13485 and FDA regulations',
      'Knowledge of defense quality standards',
      'Strong attention to detail'
    ],
    benefits: ['Certification support', 'Team leadership', 'Process improvement']
  }
]

const companyBenefits = [
  {
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries with performance bonuses and stock options',
    icon: TrendingUp
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs',
    icon: Heart
  },
  {
    title: 'Professional Development',
    description: 'Learning budget, conference attendance, and skill development programs',
    icon: GraduationCap
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and generous time off policies',
    icon: Clock
  },
  {
    title: 'Innovation Culture',
    description: 'Cutting-edge projects, research opportunities, and patent incentives',
    icon: Lightbulb
  },
  {
    title: 'Global Impact',
    description: 'Work on solutions that enhance human performance and safety worldwide',
    icon: Globe
  }
]

const companyCulture = [
  {
    value: 'Innovation Excellence',
    description: 'We encourage bold ideas and breakthrough thinking in neurotechnology',
    icon: Zap
  },
  {
    value: 'Defense Commitment',
    description: 'Dedicated to strengthening national security through advanced technology',
    icon: Shield
  },
  {
    value: 'Collaborative Spirit',
    description: 'Cross-functional teams working together to solve complex challenges',
    icon: Users
  },
  {
    value: 'Continuous Learning',
    description: 'Commitment to personal and professional growth for all team members',
    icon: Award
  }
]

const employeeTestimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Senior Research Scientist',
    department: 'R&D',
    experience: '3 years',
    quote: 'Working at Sentient Biotech has been incredible. The cutting-edge research and the opportunity to contribute to defense technology makes every day exciting.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    role: 'Lead Engineer',
    department: 'Engineering',
    experience: '4 years',
    quote: 'The company culture is amazing. We have the freedom to innovate while working on projects that truly matter for national security.',
    rating: 5
  },
  {
    name: 'Dr. Anjali Patel',
    role: 'Product Manager',
    department: 'Product',
    experience: '2 years',
    quote: 'The learning opportunities here are unmatched. I\'ve grown both personally and professionally while working on groundbreaking neurotechnology.',
    rating: 5
  }
]

const departments = [
  {
    name: 'Research & Development',
    description: 'Pioneering breakthrough neurotechnology solutions',
    positions: 8,
    icon: Lightbulb
  },
  {
    name: 'Engineering',
    description: 'Building robust and reliable systems',
    positions: 12,
    icon: Zap
  },
  {
    name: 'Product Management',
    description: 'Defining the future of neurotechnology',
    positions: 4,
    icon: Target
  },
  {
    name: 'Quality Assurance',
    description: 'Ensuring excellence in every product',
    positions: 6,
    icon: Award
  },
  {
    name: 'Business Development',
    description: 'Expanding our global reach',
    positions: 5,
    icon: Globe
  },
  {
    name: 'Operations',
    description: 'Supporting our mission with excellence',
    positions: 7,
    icon: Building2
  }
]

export default function CareersPage() {
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
              Join Our Mission
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Be part of the future of neurotechnology. Join our team of innovators, 
              researchers, and engineers working on cutting-edge solutions for defense, 
              healthcare, and research applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Remote Work Options
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Competitive Benefits
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-electric-cyan" />
                Growth Opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
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
              Our Culture
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We foster an environment of innovation, collaboration, and excellence where 
              every team member can thrive and contribute to our mission.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCulture.map((value, index) => (
              <motion.div
                key={value.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">{value.value}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Benefits & Perks
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We invest in our team's success with comprehensive benefits and growth opportunities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
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
              Departments
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore opportunities across our diverse departments and find your perfect role.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <motion.div
                key={department.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                    <department.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{department.name}</h3>
                    <p className="text-electric-cyan text-sm">{department.positions} positions</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{department.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-electric-cyan text-sm font-medium hover:text-white transition-colors duration-200"
                >
                  View Positions →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of neurotechnology.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-white/80 mb-4">{position.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary lg:ml-4"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <Star className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
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
              What Our Team Says
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hear from our team members about their experience working at Sentient Biotech.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {employeeTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-electric-cyan fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-electric-cyan text-sm">{testimonial.role}</div>
                  <div className="text-white/60 text-xs">{testimonial.department} • {testimonial.experience}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always looking for exceptional talent. 
              Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View All Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Send Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
