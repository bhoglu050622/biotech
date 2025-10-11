'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  Heart, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react'

const solutions = [
  {
    title: 'Defense & Aerospace',
    tagline: 'Enhancing Mission Readiness and Operator Performance',
    description: 'In the defense and aerospace sector, the margin for error is zero. The cognitive state of the operator is as critical as the capability of the machine. Sentient Biotech provides solutions engineered to enhance human performance, accelerate decision-making, and ensure the safety and effectiveness of personnel in the most demanding environments on Earth.',
    icon: Shield,
    capabilities: [
      {
        title: 'Peak Operator Performance',
        description: 'We provide real-time cognitive state monitoring for pilots, drone operators, and command-and-control staff. By objectively measuring cognitive load and fatigue, our systems help maintain peak performance and prevent skill degradation, ensuring operators are always mission-ready.'
      },
      {
        title: 'Accelerated Decision-Making',
        description: 'Our next-generation Human-Machine Interfaces (HMIs), reduce the cognitive burden on operators. By fusing complex data into an intuitive synthetic visual format, we enable faster, more accurate decisions when seconds matter.'
      },
      {
        title: 'Optimized Training Protocols',
        description: 'Our neuro-analytic tools can be integrated into training simulators to provide an unprecedented level of insight into skill acquisition. Instructors can objectively measure a trainee\'s cognitive state, identify optimal learning conditions, and personalize training for faster and more durable skill development.'
      }
    ],
    cta: 'Discuss your Operational Needs'
  },
  {
    title: 'Health',
    tagline: 'Powering the Future of Objective Patient Care',
    description: 'For too long, the diagnosis and treatment of neurological and psychiatric disorders have relied on subjective, observational methods. Sentient Biotech is at the forefront of a new paradigm, providing healthcare professionals with objective, data-driven tools to improve patient outcomes. Our solutions integrate seamlessly into clinical workflows, offering a new level of diagnostic clarity and confidence.',
    icon: Heart,
    capabilities: [
      {
        title: 'Data-Driven Diagnosis',
        description: 'Our deep learning powered diagnostic systems, provides clinicians with objective neuro-biomarkers to support the diagnosis of conditions like MDD, ADHD, and MCI. This leads to earlier, more accurate diagnoses and personalized treatment plans.'
      },
      {
        title: 'Effective Treatment Monitoring',
        description: 'By establishing a patient\'s neural baseline, our technology allows clinicians to objectively track their response to therapies over time. This provides clear, quantitative data on whether a treatment is working, allowing for timely adjustments to the care plan.'
      },
      {
        title: 'Streamlined Clinic Operations',
        description: 'For specialized centers like sleep clinics, our automated analysis platform drastically reduces the time and resources required for manual scoring of studies. This increases patient throughput and allows specialists to focus on interpretation and care.'
      }
    ],
    cta: 'Transform your Clinical Practice'
  },
  {
    title: 'Research & Academia',
    tagline: 'Accelerating Neuroscience from Hypothesis to Discovery to Clinical Applications',
    description: 'The pace of discovery in neuroscience is dictated by the quality of the tools available. Sentient Biotech is committed to empowering the academic community with accessible, powerful, and high-fidelity research platforms. We provide the robust hardware and flexible software needed to explore the frontiers of brain science, from fundamental cognitive research to the development of novel therapeutic approaches.',
    icon: Users,
    capabilities: [
      {
        title: 'High-Fidelity Data Acquisition',
        description: 'Our Data acquisition platform provides a reliable, low-noise solution for capturing pristine EEG and biosignal data, forming the bedrock of reproducible, high-impact research.'
      },
      {
        title: 'Novel Avenues of Inquiry',
        description: 'Our multi-modal systems allow researchers to simultaneously investigate the central and autonomic nervous systems. This opens up new possibilities for studying the heart-brain axis, psychophysiology, and affective neuroscience.'
      },
      {
        title: 'Brain-Computer Interface (BCI) Development',
        description: 'We provide a stable and powerful platform for academic labs to design, test, and validate the next generation of BCI algorithms and human-machine interface applications.'
      }
    ],
    cta: 'Collaborate with us'
  },
  {
    title: 'Simulation & Training',
    tagline: 'Optimizing Skill Acquisition with Neuro-Analytics',
    description: 'Traditional training measures performance. We measure the cognitive process behind the performance tracking load in real-time for pilots in high-stake zones. Sentient Biotech offers a revolutionary approach to simulation and training for high-stakes professions. By integrating our biosensing and AI platforms into training environments, we provide a direct window into the learner\'s cognitive state, transforming training from a one-size-fits-all process into a highly personalized and efficient program.',
    icon: Target,
    capabilities: [
      {
        title: 'Adaptive Training Scenarios',
        description: 'Our systems can measure a trainee\'s cognitive load in real-time. This data can be used to dynamically adjust the difficulty of a simulation, keeping the trainee in the optimal "flow state" for rapid and durable learning.'
      },
      {
        title: 'Objective Debriefing and Assessment',
        description: 'Move beyond simple outcome-based feedback. Our analytics allow instructors to pinpoint the exact moments a trainee experienced cognitive overload, distraction, or fatigue, leading to more targeted and effective debriefing sessions.'
      },
      {
        title: 'Proficiency and Skill Fade Monitoring',
        description: 'For critical skills that degrade over time, our technology can be used to objectively assess cognitive and neural proficiency, allowing organizations to implement data-driven "refresher" training before performance drops in a real-world scenario.'
      }
    ],
    cta: 'Redefine your Training Programs'
  }
]

export default function SolutionsPage() {
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
              Solutions
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-10">
              Transforming neurotechnology into actionable solutions across defense, healthcare, 
              research, and training sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success-green" />
                <span className="font-medium">Industry-Leading</span>
              </span>
              <span className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-primary-blue" />
                <span className="font-medium">Mission-Critical</span>
              </span>
              <span className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-blue" />
                <span className="font-medium">Proven Results</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300">
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-primary-blue font-semibold mb-4">
                    {solution.tagline}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  Our solutions enable:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {solution.capabilities.map((capability, capIndex) => (
                    <motion.div
                      key={capability.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: capIndex * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-glass-white-strong backdrop-blur-sm rounded-xl p-6 border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300 hover:shadow-soft"
                    >
                      <h4 className="text-text-primary font-semibold text-base mb-3">
                        {capability.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-6">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    {solution.cta}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
