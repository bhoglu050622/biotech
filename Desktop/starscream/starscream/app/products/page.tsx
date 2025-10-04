'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Brain, Headphones, Zap, Shield, Target, Users, CheckCircle, ArrowRight, Star, Award, Download, Play, Eye } from 'lucide-react'

const products = [
  {
    id: 'eeg-solutions',
    name: 'Advanced EEG Solutions',
    category: 'Brain-Computer Interface',
    description: 'State-of-the-art electroencephalogram systems for precise neural signal acquisition and real-time brain activity monitoring.',
    image: '/products/eeg-system.jpg',
    features: [
      'High-density electrode arrays (32-128 channels)',
      'Ultra-low noise signal acquisition',
      'Real-time signal processing and analysis',
      'Wireless connectivity with secure data transmission',
      'Compatible with multiple software platforms',
      'Non-invasive, comfortable design'
    ],
    specifications: {
      'Sampling Rate': 'Up to 1000 Hz',
      'Resolution': '24-bit ADC',
      'Channels': '32-128 channels',
      'Noise Level': '< 1 µV RMS',
      'Battery Life': '12+ hours continuous use',
      'Connectivity': 'Bluetooth 5.0, WiFi 6, USB-C'
    },
    applications: ['Medical Diagnosis', 'Research Studies', 'Cognitive Assessment', 'Mental Health Monitoring'],
    price: 'Contact for pricing',
    availability: 'Available now',
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'pilot-headgear',
    name: 'Next-Generation Pilot Headgear',
    category: 'Defense & Aerospace',
    description: 'Revolutionary pilot headgear with integrated neurotechnology for enhanced situational awareness and performance monitoring.',
    image: '/products/pilot-headgear.jpg',
    features: [
      'Integrated EEG monitoring system',
      'Biometric health tracking',
      'Cognitive load assessment',
      'Real-time performance analytics',
      'Military-grade durability',
      'Seamless HUD integration'
    ],
    specifications: {
      'Weight': '< 500g total system',
      'Battery Life': '8+ hours mission time',
      'Processing Power': 'Real-time < 10ms latency',
      'Environmental Rating': 'IP67 waterproof',
      'Temperature Range': '-40°C to +70°C',
      'Certification': 'MIL-STD-810G compliant'
    },
    applications: ['Military Aviation', 'Commercial Aviation', 'Space Exploration', 'Training Simulation'],
    price: 'Contact for pricing',
    availability: 'Available for pre-order',
    rating: 4.8,
    reviews: 89
  }
]

const productBenefits = [
  {
    icon: Brain,
    title: 'Precision Monitoring',
    description: 'Advanced signal processing algorithms ensure accurate neural signal acquisition with minimal noise interference.',
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Ultra-low latency processing enables real-time neural signal interpretation and immediate response generation.',
    color: 'from-primary-cyan to-secondary-cyan'
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'End-to-end encryption and secure data handling ensure complete privacy and protection of sensitive neural data.',
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    icon: Target,
    title: 'Customizable Solutions',
    description: 'Flexible configuration options allow customization for specific applications and user requirements.',
    color: 'from-primary-emerald to-secondary-emerald'
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Neuroscience Researcher',
    organization: 'MIT Brain Research Center',
    content: 'The EEG solutions from Sentient Biotech have revolutionized our research capabilities. The signal quality is exceptional and the real-time processing has opened new possibilities for our studies.',
    rating: 5,
    avatar: '/testimonials/sarah-chen.jpg'
  },
  {
    name: 'Captain Michael Rodriguez',
    role: 'Test Pilot',
    organization: 'US Air Force',
    content: 'The pilot headgear system has significantly enhanced our situational awareness and performance monitoring. It\'s a game-changer for modern aviation.',
    rating: 5,
    avatar: '/testimonials/michael-rodriguez.jpg'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Neurologist',
    organization: 'Johns Hopkins Hospital',
    content: 'The non-invasive design and high accuracy make these EEG systems perfect for clinical applications. Our patients are comfortable and we get reliable data.',
    rating: 5,
    avatar: '/testimonials/priya-patel.jpg'
  }
]

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen bg-primary-navy">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/20 border border-primary-blue/30 mb-6">
              <span className="text-primary-blue font-medium">Neurotechnology Products</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Cutting-Edge
              <span className="block gradient-text">Neurotechnology Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Discover our advanced neurotechnology products designed for precision, reliability, and seamless integration across defense, healthcare, and research applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <Play className="w-5 h-5 mr-2" />
                <span>Watch Demo</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Product Image */}
                  <div className="relative h-80 lg:h-auto bg-gradient-to-br from-primary-blue/10 to-primary-violet/10 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-blue to-primary-violet rounded-full flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-slate-400 text-sm">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-8">
                    <div className="mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="badge-primary">{product.category}</span>
                        <span className="text-slate-400 text-sm">{product.availability}</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">{product.description}</p>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-emerald flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Specifications */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Technical Specifications:</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value], specIndex) => (
                          <div key={specIndex} className="flex justify-between">
                            <span className="text-slate-400">{key}:</span>
                            <span className="text-primary-blue font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Applications */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Applications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span key={appIndex} className="badge-info">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pricing and Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-slate-400 text-sm">Price</div>
                        <div className="text-primary-blue font-bold">{product.price}</div>
                      </div>
                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          <span>Learn More</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary"
                        >
                          <span>Get Quote</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Products</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our neurotechnology products are designed with cutting-edge innovation, precision engineering, and user-centric design principles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Customer Testimonials</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from our customers about their experience with our neurotechnology products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-testimonial"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-primary-blue text-sm">{testimonial.role}</div>
                    <div className="text-slate-400 text-sm">{testimonial.organization}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Discover how our neurotechnology products can transform your operations and unlock new possibilities for human-machine interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <Play className="w-5 h-5 mr-2" />
                  <span>Request Demo</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span>Download Brochure</span>
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