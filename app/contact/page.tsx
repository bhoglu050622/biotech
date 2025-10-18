'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import BackToTop from '@/components/BackToTop'
import JsonLd, { organizationSchema, generateBreadcrumbSchema } from '@/components/JsonLd'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Users,
  Globe,
  MessageSquare,
  Headphones
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email for general inquiries',
    contact: 'support@sentientbiotech.in',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    contact: '+91-70703-60676',
    action: 'Call Now'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come to our headquarters in Tamil Nadu',
    contact: 'VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu, India',
    action: 'Get Directions'
  }
]

const departments = [
  {
    name: 'General Inquiries',
    email: 'info@sentientbiotech.in',
    description: 'General questions about our company and services',
    icon: Building2
  },
  {
    name: 'Sales & Partnerships',
    email: 'sales@sentientbiotech.in',
    description: 'Business development and partnership opportunities',
    icon: Users
  },
  {
    name: 'Technical Support',
    email: 'support@sentientbiotech.in',
    description: 'Technical assistance and product support',
    icon: Headphones
  },
  {
    name: 'Media & Press',
    email: 'media@sentientbiotech.in',
    description: 'Press inquiries and media relations',
    icon: Globe
  }
]

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Emergency Support', hours: '24/7 for Defense Contracts' }
]

const inquiryTypes = [
  'General Enquiry',
  'Technical Support',
  'EEG',
  'Commerical EEG',
  'Starscream',
  'Other'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'phone':
        if (value && !/^[\d\s\-+()]+$/.test(value)) return 'Please enter a valid phone number'
        if (value && value.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits'
        return ''
      
      case 'inquiryType':
        if (!value) return 'Please select an inquiry type'
        return ''
      
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        if (value.trim().length < 5) return 'Subject must be at least 5 characters'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        if (value.trim().length > 1000) return 'Message must not exceed 1000 characters'
        return ''
      
      default:
        return ''
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      inquiryType: true,
      subject: true,
      message: true
    })

    // If there are errors, don't submit
    if (Object.keys(newErrors).some(key => newErrors[key])) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: ''
      })
      setErrors({})
      setTouched({})
    }, 3000)
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sentientbiotech.in' },
    { name: 'Contact Us', url: 'https://sentientbiotech.in/contact' }
  ])

  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Get in touch with our team. We're here to help with your neurotechnology 
              needs, partnership opportunities, and technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-glass-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-primary-white mb-4">
              Get in Touch
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs and preferences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-6 text-center flex flex-col items-center justify-between h-full"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-light-blue to-secondary-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">{method.title}</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{method.description}</p>
                  <div className="text-white text-sm font-medium mb-4 break-words max-w-full px-2">
                    {method.title === 'Email Us' ? (
                      <a href={`mailto:${method.contact}`} className="text-white hover:text-primary-blue transition-colors focus-ring rounded">
                        {method.contact}
                      </a>
                    ) : method.title === 'Call Us' ? (
                      <a href={`tel:${method.contact}`} className="text-white hover:text-primary-blue transition-colors focus-ring rounded">
                        {method.contact}
                      </a>
                    ) : (
                      method.contact
                    )}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-sm mt-auto"
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-bold text-primary-white mb-6">
                Send us a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-electric-cyan mx-auto mb-4" />
                  <h4 className="text-primary-white font-semibold mb-2">Message Sent!</h4>
                  <p className="text-white/70">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-primary-white text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-primary-white placeholder-white/50 focus:outline-none transition-colors ${
                          errors.name && touched.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && touched.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label className="block text-primary-white text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-primary-white placeholder-white/50 focus:outline-none transition-colors ${
                          errors.email && touched.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan'
                        }`}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && touched.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-primary-white text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-primary-white placeholder-white/50 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-primary-white text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-primary-white placeholder-white/50 focus:outline-none transition-colors ${
                          errors.phone && touched.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan'
                        }`}
                        placeholder="+91-XXXXXXXXXX"
                      />
                      {errors.phone && touched.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-primary-white text-sm font-medium mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-primary-white focus:outline-none transition-colors ${
                        errors.inquiryType && touched.inquiryType
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan'
                      }`}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-primary-blue text-primary-white">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && touched.inquiryType && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.inquiryType}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-primary-white text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-primary-white placeholder-white/50 focus:outline-none transition-colors ${
                        errors.subject && touched.subject
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan'
                      }`}
                      placeholder="Brief subject of your inquiry"
                    />
                    {errors.subject && touched.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-primary-white text-sm font-medium mb-2 flex items-center justify-between">
                      <span>Message *</span>
                      <span className={`text-xs ${formData.message.length > 1000 ? 'text-red-400' : 'text-white/50'}`}>
                        {formData.message.length}/1000
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-primary-white placeholder-white/50 focus:outline-none resize-none transition-colors ${
                        errors.message && touched.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan'
                      }`}
                      placeholder="Please provide details about your inquiry..."
                    />
                    {errors.message && touched.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="glass-panel-strong rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center text-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                      <span className="text-white font-medium text-base">{schedule.day}</span>
                      <span className="text-white text-sm font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Contacts */}
              <div className="glass-panel-strong rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center text-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  Department Contacts
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-white/20 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                          <dept.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-base mb-1">{dept.name}</h4>
                          <a href={`mailto:${dept.email}`} className="text-primary-blue hover:text-accent-blue text-sm font-medium transition-colors focus-ring rounded">
                            {dept.email}
                          </a>
                          <p className="text-white/80 text-sm mt-1 leading-relaxed">{dept.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-panel-strong rounded-xl p-6">
                <h3 className="text-primary-white font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="text-primary-white text-sm">Download Product Brochure</span>
                    <ArrowRight className="w-4 h-4 text-electric-cyan" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="text-primary-white text-sm">Schedule a Demo</span>
                    <ArrowRight className="w-4 h-4 text-electric-cyan" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="text-primary-white text-sm">Technical Documentation</span>
                    <ArrowRight className="w-4 h-4 text-electric-cyan" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
