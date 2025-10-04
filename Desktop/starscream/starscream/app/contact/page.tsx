'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Users, MessageSquare, Clock, Globe, Building2, Award, CheckCircle, ArrowRight, Calendar, Headphones } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    details: [
      'Sentient Biotech Pvt. Ltd.',
      '123 Innovation Drive',
      'Bangalore, Karnataka 560001',
      'India'
    ],
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: [
      '+91 80 1234 5678',
      '+91 98765 43210',
      'Mon-Fri: 9:00 AM - 6:00 PM IST'
    ],
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'info@sentientbiotech.com',
      'support@sentientbiotech.com',
      'partnerships@sentientbiotech.com'
    ],
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    icon: Globe,
    title: 'Global Offices',
    details: [
      'San Francisco, USA',
      'London, UK',
      'Singapore',
      'Tokyo, Japan'
    ],
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const departments = [
  {
    name: 'Sales & Business Development',
    email: 'sales@sentientbiotech.com',
    phone: '+91 80 1234 5679',
    description: 'For product inquiries, pricing, and business partnerships',
    icon: Users,
    color: 'from-primary-blue to-secondary-blue'
  },
  {
    name: 'Technical Support',
    email: 'support@sentientbiotech.com',
    phone: '+91 80 1234 5680',
    description: 'For technical assistance and product support',
    icon: Headphones,
    color: 'from-primary-emerald to-secondary-emerald'
  },
  {
    name: 'Research & Development',
    email: 'research@sentientbiotech.com',
    phone: '+91 80 1234 5681',
    description: 'For research collaborations and academic partnerships',
    icon: Award,
    color: 'from-primary-violet to-secondary-violet'
  },
  {
    name: 'Media & Press',
    email: 'media@sentientbiotech.com',
    phone: '+91 80 1234 5682',
    description: 'For media inquiries and press releases',
    icon: MessageSquare,
    color: 'from-primary-cyan to-secondary-cyan'
  }
]

const contactForm = {
  fields: [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your full name'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'Enter your email address'
    },
    {
      name: 'company',
      label: 'Company/Organization',
      type: 'text',
      required: false,
      placeholder: 'Enter your company name'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: false,
      placeholder: 'Enter your phone number'
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true,
      placeholder: 'What is this regarding?'
    },
    {
      name: 'department',
      label: 'Department',
      type: 'select',
      required: true,
      options: [
        'Sales & Business Development',
        'Technical Support',
        'Research & Development',
        'Media & Press',
        'General Inquiry'
      ]
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      placeholder: 'Please describe your inquiry in detail...'
    }
  ]
}

const officeHours = [
  {
    day: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM IST',
    timezone: 'Indian Standard Time'
  },
  {
    day: 'Saturday',
    hours: '10:00 AM - 2:00 PM IST',
    timezone: 'Indian Standard Time'
  },
  {
    day: 'Sunday',
    hours: 'Closed',
    timezone: 'Indian Standard Time'
  }
]

const quickActions = [
  {
    title: 'Schedule a Demo',
    description: 'Book a personalized demonstration of our neurotechnology solutions',
    icon: Calendar,
    color: 'from-primary-blue to-secondary-blue',
    action: 'Schedule Demo'
  },
  {
    title: 'Technical Support',
    description: 'Get immediate assistance with technical issues and product support',
    icon: Headphones,
    color: 'from-primary-emerald to-secondary-emerald',
    action: 'Get Support'
  },
  {
    title: 'Partnership Inquiry',
    description: 'Explore collaboration opportunities and strategic partnerships',
    icon: Users,
    color: 'from-primary-violet to-secondary-violet',
    action: 'Partnership Info'
  },
  {
    title: 'Media Kit',
    description: 'Download our media kit with company information and assets',
    icon: Award,
    color: 'from-primary-cyan to-secondary-cyan',
    action: 'Download Kit'
  }
]

export default function ContactPage() {
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
              <span className="text-primary-blue font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Let's Connect &
              <span className="block gradient-text">Collaborate</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Ready to explore how our neurotechnology solutions can transform your operations? Get in touch with our team to discuss your needs and discover the possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Multiple ways to reach us and connect with our team across different departments and locations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-300 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-xl text-slate-300 mb-8">
                Have a question or want to discuss a project? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {contactForm.fields.slice(0, 4).map((field, index) => (
                    <div key={field.name} className={field.name === 'name' || field.name === 'email' ? '' : 'md:col-span-2'}>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {field.label} {field.required && <span className="text-primary-emerald">*</span>}
                      </label>
                      {field.type === 'select' ? (
                        <select className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-primary-blue">
                          <option value="">Select {field.label}</option>
                          {field.options?.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : field.type === 'textarea' ? (
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-primary-blue"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <input
                          type={field.type}
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-primary-blue"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {contactForm.fields[4].label} <span className="text-primary-emerald">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-primary-blue"
                    placeholder={contactForm.fields[4].placeholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {contactForm.fields[5].label} <span className="text-primary-emerald">*</span>
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-primary-blue">
                    <option value="">Select Department</option>
                    {contactForm.fields[5].options?.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {contactForm.fields[6].label} <span className="text-primary-emerald">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-primary-blue"
                    placeholder={contactForm.fields[6].placeholder}
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{schedule.day}</span>
                      <div className="text-right">
                        <div className="text-primary-blue font-medium">{schedule.hours}</div>
                        <div className="text-xs text-slate-400">{schedule.timezone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-emerald" />
                    <span className="text-slate-300">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-emerald" />
                    <span className="text-slate-300">24/7 technical support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-emerald" />
                    <span className="text-slate-300">Dedicated account managers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-emerald" />
                    <span className="text-slate-300">Multi-language support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Contact by Department</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Reach out to the right team for your specific needs and get the most relevant assistance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                    <p className="text-slate-300">{dept.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary-blue" />
                    <span className="text-slate-300">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary-blue" />
                    <span className="text-slate-300">{dept.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quick Actions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get started quickly with these common actions and resources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-feature group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{action.title}</h3>
                <p className="text-slate-300 mb-6">{action.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full"
                >
                  <span>{action.action}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}