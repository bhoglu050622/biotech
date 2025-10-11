'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Heart, ArrowUp } from 'lucide-react'

const footerSections = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Investors', href: '/investors' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    heading: 'Technologies & Products',
    links: [
      { label: 'Technologies', href: '/technologies' },
      { label: 'EEG Solutions', href: '/eeg-solutions' },
      { label: 'Next-Generation Pilot Headgear', href: '/starscream' },
      { label: 'Solutions', href: '/solutions' }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'News & Insights', href: '/news' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Support Center', href: '/support' },
      { label: 'FAQs', href: '/faqs' }
    ]
  },
  {
    heading: 'Support',
    links: [
      { label: 'Support Center', href: '/support' },
      { label: 'Customer Support', href: '/support' },
      { label: 'Training Programs', href: '/support' },
      { label: 'Technical Documentation', href: '/support' }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Compliance & Certifications', href: '#compliance' },
      { label: 'Disclaimer', href: '#disclaimer' }
    ]
  }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href.startsWith('/')) {
      // Internal route
      window.location.href = href
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="relative bg-glass-white backdrop-blur-md border-t border-primary-blue/20">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-blue/10 to-light-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="space-y-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a href="/" className="inline-flex items-center justify-center space-x-2 sm:space-x-3 mb-4 focus-ring rounded-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl overflow-hidden bg-white/5">
                  <img 
                    src="/logo.png" 
                    alt="Sentient Biotech Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.className = 'w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center shadow-blue';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-6 h-6 bg-white rounded-full subtle-pulse"></div>';
                      }
                    }}
                  />
                </div>
                <span className="text-xl sm:text-2xl font-display font-bold gradient-text">
                  Sentient Biotech
                </span>
              </a>
              <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-4 px-4">
                Pioneering human-machine synergy through advanced biotechnology and neurotechnology.
              </p>
            </motion.div>

            {/* Footer Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10"
            >
              {footerSections.map((section, sectionIndex) => (
                <div key={section.heading}>
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-3 sm:mb-4 text-center sm:text-left">{section.heading}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.label}>
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className="block text-center sm:text-left text-text-tertiary hover:text-primary-blue transition-colors duration-200 text-xs sm:text-sm focus-ring rounded py-1"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-blue/20">
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left"
            >
              <div>
                <h4 className="text-text-primary font-semibold mb-2 text-xs sm:text-sm">Registered Office</h4>
                <p className="text-text-tertiary text-xs sm:text-sm leading-relaxed">VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu</p>
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-2 text-xs sm:text-sm">Phone</h4>
                <a href="tel:+917070360676" className="text-text-tertiary hover:text-primary-blue text-xs sm:text-sm transition-colors focus-ring rounded inline-block py-1">
                  +91-7070360676
                </a>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-text-primary font-semibold mb-2 text-xs sm:text-sm">Email</h4>
                <a href="mailto:jasmeet@sentientbiotech.in" className="text-text-tertiary hover:text-primary-blue text-xs sm:text-sm transition-colors focus-ring rounded inline-block py-1 break-all">
                  jasmeet@sentientbiotech.in
                </a>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-6 border-t border-primary-blue/10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-text-tertiary text-xs sm:text-sm text-center md:text-left"
              >
                © 2024 Sentient Biotech Private Limited. All rights reserved.
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-text-tertiary text-xs sm:text-sm"
              >
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-success-green rounded-full"></div>
                  <span className="whitespace-nowrap">Privacy-first</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                  <span className="whitespace-nowrap">Non-invasive</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                  <span className="whitespace-nowrap">Research-backed</span>
                </span>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="hidden md:flex w-10 h-10 rounded-lg glass-panel-strong items-center justify-center hover:bg-primary-blue/10 transition-all duration-200 group focus-ring"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-text-secondary group-hover:text-primary-blue transition-colors duration-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center shadow-blue-lg z-40 md:hidden focus-ring"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  )
}