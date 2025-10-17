'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
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
    icon: Building2,
    isSpecial: true
  },
  {
    year: 'December 2024',
    title: 'Partnership',
    description: 'Sentient Biotech Private Limited gets incubated at IIT Mandi, Himachal Pradesh',
    icon: GraduationCap,
    iconOnLeft: true
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
    icon: Shield,
    iconOnLeft: true
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
    expertise: '20+ years of experience in defence applications and solutions with the Indian Army',
    experience: '',
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
    experience: '',
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
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-4 sm:mb-6">
              About Sentient Biotech
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              Pioneering human-machine synergy through advanced biotechnology and neurotechnology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 sm:py-20 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-hover"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 sm:mb-8 text-center">
              About Sentient Biotech Private Limited
            </h2>
            <div className="space-y-4 sm:space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed max-w-5xl mx-auto">
              <p>
                Sentient Biotech Private Limited, founded in 2024, was born from a profound realization that even with humanity's remarkable progress in engineering and computation, the most intricate and powerful system still resides within us—the human brain. In an era where machines can analyze, predict, and evolve, true comprehension continues to be an inherently human strength. With this understanding, Sentient Biotech set out to bridge the gap between artificial intelligence and human cognition, merging the precision of technology with the adaptability of biology to pioneer a new paradigm of symbiotic intelligence.
              </p>
              <p>
                At Sentient Biotech, we view the human mind not just as an organ, but as a dynamic interface capable of communication, adaptation, and expansion when integrated with advanced technology. Our research began with a dual mission: to transform healthcare by decoding mental and physiological data with precision, and to strengthen defense by enhancing human capability in extreme conditions. By combining biotechnology, neuroscience, and machine intelligence, we seek to create systems that understand and respond to humans—not as data, but as living beings.
              </p>
              <p>
                Our work in neurotechnology and AI-driven biosensing explores the unseen layers of consciousness, emotion, and performance. Through advanced EEG systems, bio-integrated wearables, and immersive vision technologies, we are redefining how humans connect with their surroundings. Whether monitoring a pilot's cognitive state in flight or detecting stress patterns in medical patients, our innovations translate biological signals into actionable intelligence. Every development at Sentient Biotech is designed with a single purpose—to extend human capability safely and responsibly.
              </p>
              <p>
                The Next-Generation Pilot Headgear stands as one of our landmark innovations, representing our commitment to human-centric design. This system enhances perception in both day and night environments, fuses multiple vision feeds into a unified field of awareness, and integrates biometric monitoring directly into the pilot's gear. The result is not merely a technological upgrade, it is a transformation in how human beings perceive and respond to the world around them. We aim to give every pilot, soldier, and professional the power of complete situational awareness, even when visibility, time, and conditions are against them.
              </p>
              <p>
                Our philosophy rests on the belief that technology should not only serve human needs but also understand human nature. Every product and solution developed at Sentient Biotech is guided by principles of safety, empathy, and sustainability. We are committed to ethical innovation—ensuring that the integration of biology and intelligence enhances humanity rather than replaces it. Through this vision, we aspire to build a future where machines amplify human intuition, not diminish it.
              </p>
              <p>
                As we continue to expand our research and partnerships, Sentient Biotech remains dedicated to one enduring goal—to make intelligence truly sentient. From the skies where pilots navigate with augmented precision, to laboratories where scientists explore the inner workings of thought itself, we are engineering the tools for a new human revolution. One where technology and consciousness coexist in perfect harmony, empowering mankind to evolve beyond limitation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 sm:py-20 md:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
              Key milestones in our mission to revolutionize biotechnology and neurotechnology
            </p>
          </motion.div>
          
          {/* Desktop Timeline */}
          <div className="relative max-w-5xl mx-auto hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue via-accent-blue to-light-blue rounded-full"></div>
            <div className="space-y-12 sm:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 lg:pr-12 text-right' : 'pl-8 lg:pl-12 text-left'}`}>
                    <div className="card-hover group">
                      {milestone.isSpecial ? (
                        // Special layout for Company Founded milestone
                        <div className={`flex items-start space-x-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <div className="flex-1">
                            <span className="text-white font-bold text-base sm:text-lg block mb-2">{milestone.year}</span>
                            <h3 className="text-text-primary font-semibold text-base sm:text-lg mb-2">{milestone.title}</h3>
                            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
                          </div>
                          <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                            <milestone.icon className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      ) : (
                        <div className={`flex items-start space-x-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          {milestone.iconOnLeft ? (
                            <>
                              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                                <milestone.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <span className="text-white font-bold text-base sm:text-lg block mb-2">{milestone.year}</span>
                                <h3 className="text-text-primary font-semibold text-base sm:text-lg mb-2">{milestone.title}</h3>
                                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex-1">
                                <span className="text-white font-bold text-base sm:text-lg block mb-2">{milestone.year}</span>
                                <h3 className="text-text-primary font-semibold text-base sm:text-lg mb-2">{milestone.title}</h3>
                                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
                              </div>
                              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                                <milestone.icon className="w-8 h-8 text-white" />
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-primary-blue rounded-full border-4 border-deep-indigo flex-shrink-0 shadow-blue z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="relative max-w-3xl mx-auto md:hidden">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-accent-blue to-light-blue rounded-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="w-5 h-5 bg-primary-blue rounded-full border-4 border-deep-indigo flex-shrink-0 shadow-blue z-10 mt-1"></div>
                  <div className="flex-1 card-hover group pb-4">
                    <div className="flex items-start space-x-4 mb-3">
                      {milestone.isSpecial ? (
                        // Special layout for Company Founded milestone on mobile
                        <>
                          <div className="flex-1">
                            <span className="text-white font-bold text-sm block mb-2">{milestone.year}</span>
                            <h3 className="text-text-primary font-semibold text-base mb-2">{milestone.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
                          </div>
                          <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                            <milestone.icon className="w-10 h-10 text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          {milestone.iconOnLeft ? (
                            <>
                              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                                <milestone.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <span className="text-white font-bold text-sm block mb-2">{milestone.year}</span>
                                <h3 className="text-text-primary font-semibold text-base mb-2">{milestone.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex-1">
                                <span className="text-white font-bold text-sm block mb-2">{milestone.year}</span>
                                <h3 className="text-text-primary font-semibold text-base mb-2">{milestone.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
                              </div>
                              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow duration-300 flex-shrink-0">
                                <milestone.icon className="w-8 h-8 text-white" />
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 sm:py-20 md:py-30 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
              "Experts in Biotechnology, Neuroscience, Engineering, and Defense technology working together to push the boundaries of Human-Machine synergy"
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                {member.experience && <p className="text-text-tertiary text-xs">{member.experience}</p>}
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
