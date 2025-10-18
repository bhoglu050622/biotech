'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import BackToTop from '@/components/BackToTop'
import JsonLd, { organizationSchema } from '@/components/JsonLd'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Bot, 
  Activity, 
  Eye, 
  MousePointer, 
  Monitor,
  ArrowRight
} from 'lucide-react'

const technologies = [
  {
    icon: Brain,
    title: 'Neurotechnology',
    description: 'Advanced EEG systems and brain-computer interfaces that monitor, analyze, and interpret neural activity in real time. These systems enable cognitive assessment, mental health monitoring, and performance optimization for both clinical and operational environments.',
    color: 'from-primary-blue to-secondary-green',
    href: '/technologies/neurotechnology'
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence and Machine Learning',
    description: 'AI and machine learning algorithms form the backbone of our data processing and decision support systems. From predictive analytics in healthcare to situational awareness in defense applications, our AI solutions turn complex biological and environmental data into actionable insights.',
    color: 'from-secondary-green to-accent-light-blue',
    href: '/technologies/ai-machine-learning'
  },
  {
    icon: Activity,
    title: 'Bio-Integrated Sensors',
    description: 'Our bio-integrated sensors capture real-time physiological data, including heart rate, thermal imaging, blood oxygen levels, and other vital biometrics. These sensors provide continuous monitoring for pilots, soldiers, and patients, ensuring safety and enhancing performance under extreme conditions.',
    color: 'from-accent-light-blue to-secondary-green',
    href: '/technologies/bio-integrated-sensors'
  },
  {
    icon: Eye,
    title: 'XR and AR Systems',
    description: 'Extended and Augmented reality platforms are integrated with our neurotechnology and sensor systems to create immersive training environments, real time operational simulations, and enhanced visualization tools. These systems extend human perception beyond natural limitations.',
    color: 'from-secondary-green to-primary-blue',
    href: '/technologies/xr-ar-systems'
  },
  {
    icon: MousePointer,
    title: 'Human-Machine Interface (HMI)',
    description: 'Our advanced HMI systems create seamless interaction between humans and machines. By integrating neural signals, gesture controls, voice commands, and visual overlays, HMI technology ensures intuitive control, real-time feedback, and enhanced operational efficiency in complex environments.',
    color: 'from-primary-blue to-accent-light-blue',
    href: '/technologies/hmi'
  },
  {
    icon: Monitor,
    title: 'Data Fusion and Visualization',
    description: 'Our proprietary algorithms merge multiple sensor inputs, normalize environmental and lighting conditions, and deliver clear, actionable visual outputs. This technology supports decision-making in complex environments by presenting real time, context rich information.',
    color: 'from-accent-light-blue to-secondary-green',
    href: '/technologies/data-fusion'
  }
]

export default function TechnologiesPage() {
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
              Our Advanced Technologies
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto px-4">
              Sentient Biotech operates at the intersection of biotechnology, neuroscience, and artificial intelligence, developing advanced technologies that enhance human potential and operational efficiency. Our research and innovation focus on creating systems that are precise, adaptive, and human-centric, delivering solutions for healthcare, defense, and cognitive performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 sm:py-20 section-enhanced thematic-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-thematic group cursor-pointer relative"
              >
                <a href={tech.href} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300`}>
                    <tech.icon className="w-8 h-8 text-primary-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary-blue transition-colors">{tech.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm">{tech.description}</p>
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

      <CommonCTA />

      <Footer />
    </main>
  )
}

