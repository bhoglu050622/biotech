'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { 
  User, 
  Building, 
  Phone, 
  Mail, 
  Package, 
  Send,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

interface FormData {
  firstName: string
  lastName: string
  companyName: string
  mobileNumber: string
  email: string
  product: string
  comments: string
}

export default function EnquiryPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    mobileNumber: '',
    email: '',
    product: '',
    comments: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleEmailSend = () => {
    const subject = `Enquiry for ${formData.product} - ${formData.firstName} ${formData.lastName}`
    const body = `
Dear Sentient Biotech Team,

I am interested in learning more about your ${formData.product} solution.

Contact Details:
- Name: ${formData.firstName} ${formData.lastName}
- Company: ${formData.companyName}
- Mobile: ${formData.mobileNumber}
- Email: ${formData.email}
- Product Interest: ${formData.product}
- Comments: ${formData.comments || 'No additional comments provided'}

Please contact me at your earliest convenience.

Best regards,
${formData.firstName} ${formData.lastName}
    `.trim()

    const mailtoLink = `mailto:support@sentientbiotech.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  if (isSubmitted) {
    return (
      <main className="relative min-h-screen bg-deep-indigo">
        <ParticleBackground />
        <Navbar />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Thank You!
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Your enquiry has been submitted successfully. We'll get back to you soon with more information about our {formData.product} solution.
            </p>
            
            <div className="space-y-4">
              <motion.button
                onClick={handleEmailSend}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold shadow-blue mx-auto"
              >
                <Send className="w-5 h-5" />
                <span>Send Email to support@sentientbiotech.in</span>
              </motion.button>
              
              <div className="pt-4">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Homepage</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Product Enquiry
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get in touch with us to learn more about our cutting-edge neurotechnology solutions. 
            Fill out the form below and we'll contact you with detailed information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-3">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-white">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-20 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-3">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-white">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-20 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-3">
                <label htmlFor="companyName" className="block text-sm font-semibold text-white">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-20 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile Number */}
                <div className="space-y-3">
                  <label htmlFor="mobileNumber" className="block text-sm font-semibold text-white">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-20 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-semibold text-white">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-20 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Interest Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">Product Interest</h3>
              
              {/* Product Selection */}
              <div className="space-y-3">
                <label htmlFor="product" className="block text-sm font-semibold text-white">
                  Product Interest *
                </label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-20 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-deep-indigo text-white">Select a product</option>
                    <option value="EEG" className="bg-deep-indigo text-white">EEG</option>
                    <option value="Starscream" className="bg-deep-indigo text-white">Starscream</option>
                  </select>
                </div>
              </div>

              {/* Comments */}
              <div className="space-y-3">
                <label htmlFor="comments" className="block text-sm font-semibold text-white">
                  Additional Comments
                </label>
                <div className="relative">
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your requirements, use case, or any specific questions you have..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold shadow-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
