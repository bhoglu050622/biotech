'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Heart,
  Scale,
  Leaf,
  Crosshair,
  Zap,
  TrendingUp
} from 'lucide-react'

const coreValues = [
  {
    title: 'Innovation with Purpose',
    description: 'We innovate to improve lives. Every project at Sentient Biotech begins with a clear purpose: how it can help mankind. From neural interfaces to defense-grade biosensors, our focus is to transform visionary ideas into practical technologies that empower people and protect nations.',
    icon: Lightbulb
  },
  {
    title: 'Human Centric Intelligence',
    description: 'We design technologies that adapt to human beings rather than expecting humans to adapt to technology. Our systems enhance awareness, decision-making, and safety by understanding human biology, emotion, and behavior at a deeper level.',
    icon: Heart
  },
  {
    title: 'Integrity and Responsibility',
    description: 'We operate with honesty, transparency, and full responsibility for human and environmental safety. Every collaboration, experiment, and deployment follows the highest standards of national and global ethical responsibility.',
    icon: Scale
  },
  {
    title: 'Sustainability Through Science',
    description: 'Sentient Biotech is committed to innovation that preserves both life and the planet. We pursue clean technologies, environmentally responsible research, and sustainable materials to ensure that progress and nature exist in balance.',
    icon: Leaf
  },
  {
    title: 'Collaboration for Impact',
    description: 'We believe that meaningful progress is achieved through collaboration among researchers, defense agencies, innovators, and visionaries. Our partnerships are built on trust, shared goals, and a common commitment to technologies that create measurable impact for humanity.',
    icon: Users
  },
  {
    title: 'Precision and Excellence',
    description: 'Precision is at the core of everything we do. Whether developing neural sensors or immersive vision systems for defense, we maintain accuracy, discipline, and a constant pursuit of excellence in every detail.',
    icon: Crosshair
  },
  {
    title: 'Courage to Create',
    description: 'We accept challenges that others consider impossible. Sentient Biotech continues to explore the unexplored, building technologies that merge biology with intelligence and human intent with scientific precision.',
    icon: Zap
  },
  {
    title: 'Continuous Learning and Evolution',
    description: 'We believe that the future belongs to those who continue to learn and adapt. Our research and development evolve constantly to address the emerging needs of defense, biotechnology, and cognitive science.',
    icon: TrendingUp
  }
]

export default function CoreValuesPage() {
  return (
    <main className="relative min-h-screen bg-primary-blue">
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
              Our Core Values
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              At Sentient Biotech, our values define who we are, guide how we innovate, and shape every technology we create. We believe that the future of biotechnology and artificial intelligence must serve humanity and strengthen its potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 md:py-30 section-enhanced thematic-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-thematic group relative"
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-green rounded-xl flex items-center justify-center flex-shrink-0 shadow-blue group-hover:shadow-blue-lg transition-all duration-300"
                  >
                    <value.icon className="w-8 h-8 text-primary-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-primary-white mb-4 card-title-hover">{value.title}</h3>
                    <p className="text-white/85 leading-relaxed text-base font-medium">{value.description}</p>
                  </div>
                </div>
                
                {/* Enhanced visual effects */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-electric-cyan rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-accent rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
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

