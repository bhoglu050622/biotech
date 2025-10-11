'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Globe, 
  ArrowRight, 
  Play, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Star,
  BarChart3,
  Cpu,
  Activity,
  Headphones,
  Monitor,
  Lock,
  Sparkles,
  Mail
} from 'lucide-react'

const corePillars = [
  {
    icon: Brain,
    title: 'Revolutionizing Neuroimaging & Diagnostics',
    description: 'We are developing clinical-grade neuroimaging and diagnostic tools to provide accessible and objective mental health assessments. Our deep-learning models are trained to identify biomarkers for a range of neuropsychiatric disorders, empowering clinicians and researchers with actionable insights.',
    color: 'from-primary-blue to-secondary-blue',
    bgColor: 'bg-primary-blue/10',
    borderColor: 'border-primary-blue/20'
  },
  {
    icon: Headphones,
    title: 'Enhancing Cognitive Performance',
    description: 'Our consumer-end of the neurotechnology is designed to seamlessly integrate into daily life. From ergonomic headbands to smart wearables, we are creating a new ecosystem for understanding the heart-brain axis and optimizing daily human potential.',
    color: 'from-secondary-blue to-accent-blue',
    bgColor: 'bg-secondary-blue/10',
    borderColor: 'border-secondary-blue/20'
  },
  {
    icon: Shield,
    title: 'Advancing National Security',
    description: 'In line with Make in India and advancing the defense sector, we are engineering the next generation of pilot headgear. Our technology provides enhanced situational awareness and biosensing capabilities to protect and empower the pilots of our aviation.',
    color: 'from-accent-blue to-light-blue',
    bgColor: 'bg-accent-blue/10',
    borderColor: 'border-accent-blue/20'
  }
]

const commitments = [
  {
    title: 'Scientific Rigor',
    description: 'Our work is grounded in rigorous scientific research and validated methodologies, ensuring the highest standards of accuracy and reliability.',
    icon: Award,
    color: 'from-primary-blue to-secondary-blue',
    bgColor: 'bg-primary-blue/5'
  },
  {
    title: 'Data Privacy',
    description: 'We implement industry-leading data protection measures to safeguard your sensitive information at every stage.',
    icon: Lock,
    color: 'from-secondary-blue to-accent-blue',
    bgColor: 'bg-secondary-blue/5'
  },
  {
    title: 'Ethical Innovation',
    description: 'Every technology we develop is guided by ethical principles that prioritize human welfare and responsible advancement.',
    icon: CheckCircle,
    color: 'from-accent-blue to-light-blue',
    bgColor: 'bg-accent-blue/5'
  },
  {
    title: 'Privacy-First Design',
    description: 'Our technologies are designed with privacy at the core, not as an afterthought, ensuring secure and trustworthy solutions.',
    icon: Shield,
    color: 'from-primary-blue to-accent-blue',
    bgColor: 'bg-primary-blue/5'
  }
]


export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-18 overflow-hidden">
        {/* Subtle Background Mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-dark-navy to-deep-indigo" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(38, 132, 255, 0.08) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)'
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 badge mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary-blue" />
                <span className="text-primary-blue text-sm font-medium">Advanced Biotechnology & Neurotechnology</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
              >
                <span className="gradient-text">
                  Redefining
                </span>
                <br />
                <span className="text-text-primary">
                  Human–Machine Synergy
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Revolutionizing human–machine interaction through advanced biotechnology and neurotechnology. We blend science, engineering, and human-factors to build devices that are both rigorous and intuitive for all aspects of life.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-base shadow-blue"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-base"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
              >
                <div className="flex items-center space-x-2 text-text-secondary">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  <span className="text-sm font-medium">Non-invasive Technology</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <CheckCircle className="w-5 h-5 text-primary-blue" />
                  <span className="text-sm font-medium">Real-time Feedback</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <CheckCircle className="w-5 h-5 text-accent-blue" />
                  <span className="text-sm font-medium">Privacy-First Design</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Professional Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Device Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="card-hover clinical-glow">
                    <div className="flex flex-col items-center space-y-8">
                      {/* Device Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl flex items-center justify-center shadow-blue-lg">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="flex space-x-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-3 h-3 bg-success-green rounded-full subtle-pulse"></div>
                          <span className="text-xs text-text-tertiary">Active</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-3 h-3 bg-primary-blue rounded-full subtle-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <span className="text-xs text-text-tertiary">Processing</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-3 h-3 bg-accent-blue rounded-full subtle-pulse" style={{ animationDelay: '0.6s' }}></div>
                          <span className="text-xs text-text-tertiary">Secure</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-text-primary mb-2">EEG Headset Pro</h3>
                        <p className="text-text-secondary">Real-time neurofeedback monitoring</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 border border-primary-blue/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border border-accent-blue/20 rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sentient Biotech Section */}
      <section className="py-30 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              About Sentient Biotech
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We are revolutionizing human–machine interaction through advanced biotechnology and neurotechnology that bridges the gap between mind and machine. Blending biotechnology, neuroscience, and human-factors, we are building devices that are as rigorous as well as intuitive for various aspects of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section */}
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
              Core Pillars
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our three foundational pillars driving innovation in biotechnology and neurotechnology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="border-l-4 border-primary-blue pl-6 -ml-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-4">{pillar.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-30 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              Built on a Foundation of Trust
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              At Sentient Biotech, we are committed to the highest standards of scientific rigor, data privacy, and ethical innovation. Our work is grounded in research and a "privacy-first" design philosophy, ensuring that our technologies are not only powerful but also responsible.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${commitment.color} rounded-xl flex items-center justify-center mb-4 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300`}>
                  <commitment.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{commitment.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
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
              Join Us in Shaping the Future
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We are actively seeking partnerships with research institutions, healthcare providers, and defense organizations to accelerate the development and deployment of our technologies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">Research Institutions</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Collaborate with us to advance neurotechnology research and unlock new discoveries in cognitive science and brain-machine interfaces.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-blue to-accent-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">Healthcare Providers</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Partner with us to bring advanced neuroimaging and diagnostic tools to clinical practice, improving patient outcomes.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-light-blue rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">Defense Organizations</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Work with us to develop next-generation pilot headgear and biosensing technologies for enhanced mission performance.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Careers Section */}
      <section className="py-30 bg-gradient-to-br from-primary-blue via-secondary-blue to-accent-blue relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                Have questions or want to learn more about our technologies? We'd love to hear from you.
              </p>
              <a 
                href="mailto:jasmeet@sentientbiotech.in"
                className="inline-flex items-center gap-3 bg-white text-primary-blue px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 focus-ring shadow-soft-lg"
              >
                <Mail className="w-5 h-5" />
                <span>jasmeet@sentientbiotech.in</span>
              </a>
            </motion.div>

            {/* Join Our Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">We're Hiring</h2>
              </div>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                We are always on the lookout for passionate, talented and innovative minds wanting to join our team and contribute to the development of next-gen Human-Machine Interface.
              </p>
              <p className="text-white/80 text-sm mb-6">
                Share your latest CV, Git Repos (if any), and work demos
              </p>
              <a 
                href="mailto:jasmeet@sentientbiotech.in"
                className="inline-flex items-center gap-3 bg-white text-primary-blue px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 focus-ring shadow-soft-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Apply Now</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}