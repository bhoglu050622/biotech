'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  ArrowRight,
  Brain,
  TrendingUp
} from 'lucide-react'

const whyJoinReasons = [
  {
    title: 'Solve Grand Challenges',
    description: 'From diagnosing neurological disorders with AI to developing next-generation pilot interfaces, your work will be at the absolute cutting edge of neurotechnology and biotechnology.',
    icon: Brain
  },
  {
    title: 'Create Foundational Impact',
    description: 'As an early member of our team, you won\'t just be executing a plan—you\'ll be shaping it. You will have a profound influence on our products, our culture, and our long-term success.',
    icon: Target
  },
  {
    title: 'Work with an Elite Team',
    description: 'We are a deeply collaborative, multi-disciplinary team. You will work alongside experts in neuroscience, machine learning, hardware engineering, and defense strategy in a fast-paced, intellectually stimulating environment.',
    icon: Users
  },
  {
    title: 'Grow With Us',
    description: 'We are building a company for the long term. We are committed to investing in the professional growth and development of every team member as we scale.',
    icon: TrendingUp
  }
]

export default function CareersPage() {
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
              CAREERS
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              "Work on Problems that Matter"
            </h2>
            <div className="text-base text-text-secondary max-w-4xl mx-auto space-y-6 leading-relaxed">
              <p>
                At Sentient Biotech, we are tackling some of the most complex and meaningful challenges of our time. We are a team of scientists, engineers, and visionaries dedicated to building technology that will redefine mental healthcare and enhance national security.
              </p>
              <p>
                This is more than a job. It is an opportunity to be a foundational member of a team that is building the future. Your work here will directly contribute to decoding the human mind, empowering clinicians with life-changing diagnostic tools, and providing a cognitive edge to those who protect us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
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
              Why Join Sentient Biotech?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyJoinReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-text-primary mb-3">{reason.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{reason.description}</p>
                  </div>
                </div>
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
