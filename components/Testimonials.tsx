'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "At Sentient Biotech, we believe that mental health is a fundamental right, not a luxury. Our mission is to democratize access to mental health tools through non-invasive and affordable technology.",
    author: "Sentient Biotech Team",
    role: "Company Mission",
    avatar: "SB",
    type: "mission"
  },
  {
    id: 2,
    quote: "By harnessing the power of neurofeedback and biofeedback, we develop solutions that empower individuals to take charge of their well-being. Our technology bridges the gap between mind and body.",
    author: "Research Team",
    role: "Technology Philosophy",
    avatar: "RT",
    type: "research"
  },
  {
    id: 3,
    quote: "We aim to provide a holistic solution—one that addresses both the mind and the body—so everyone can achieve mental clarity, reduce stress, and improve their overall quality of life.",
    author: "Development Team",
    role: "Product Vision",
    avatar: "DT",
    type: "vision"
  },
  {
    id: 4,
    quote: "Equilibrium Psychology represents a novel approach in the field of psychology, balancing both negative and positive aspects of human experience through a dual-process approach.",
    author: "Psychology Team",
    role: "Methodology",
    avatar: "PT",
    type: "methodology"
  },
  {
    id: 5,
    quote: "Our flagship products integrate cutting-edge research in Brain-Computer Interfaces with a user-friendly approach, making mental health accessible for all.",
    author: "Product Team",
    role: "Innovation",
    avatar: "IT",
    type: "innovation"
  }
]

const researchQuotes = [
  {
    quote: "Brain-Computer Interfaces are transforming the fields of healthcare, wellness, and neurotherapy by empowering individuals to take control of their brain activity in ways that were previously unimaginable.",
    source: "BCI Research Foundation",
    type: "research"
  },
  {
    quote: "Non-invasive neurofeedback has shown significant promise in improving cognitive function, reducing stress, and enhancing overall mental well-being in clinical studies.",
    source: "Neuroscience Journal",
    type: "research"
  },
  {
    quote: "The integration of technology and psychology creates new possibilities for personalized mental health interventions that are both effective and accessible.",
    source: "Digital Health Research",
    type: "research"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentResearchQuote, setCurrentResearchQuote] = useState(0)

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Auto-play research quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResearchQuote((prev) => (prev + 1) % researchQuotes.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-cyan/5 to-violet-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-accent/5 to-soft-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Testimonials & Research</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Hear from our team and discover the research that drives our mission 
            to make mental health technology accessible for everyone.
          </p>
        </motion.div>

        {/* Main Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-panel-strong rounded-3xl p-12 neural-glow-strong relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-8 font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-electric-cyan text-sm">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-glass-white-strong transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleAutoPlay}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-glass-white-strong transition-colors duration-200"
                aria-label={isAutoPlaying ? "Pause testimonials" : "Play testimonials"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-glass-white-strong transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-electric-cyan w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Research Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Research-Backed</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our technology is built on solid scientific foundations and ongoing research 
              in neuroscience, psychology, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel-strong rounded-2xl p-6 neural-glow"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-electric-cyan">
                    {quote.source}
                  </div>
                </div>
                
                <blockquote className="text-white/80 text-sm leading-relaxed italic">
                  "{quote.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Ready to be part of the future of mental health technology?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Join Our Early Access Program
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
