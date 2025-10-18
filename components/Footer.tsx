'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Heart, ArrowUp, Youtube, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'

const footerSections = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Core Values', href: '/core-values' },
      { label: 'Investors', href: '/investors' },
      { label: 'Careers', href: '/careers' }
    ]
  },
  {
    heading: 'Technologies',
    links: [
      { label: 'Neurotechnology', href: '/technologies/neurotechnology' },
      { label: 'AI & Machine Learning', href: '/technologies/ai-machine-learning' },
      { label: 'Bio-Integrated Sensors', href: '/technologies/bio-integrated-sensors' },
      { label: 'XR and AR Systems', href: '/technologies/xr-ar-systems' },
      { label: 'Human-Machine Interface', href: '/technologies/hmi' },
      { label: 'Data Fusion', href: '/technologies/data-fusion' }
    ]
  },
  {
    heading: 'Products & Industries',
    links: [
      { label: 'EEG Systems', href: '/eeg-solutions' },
      { label: 'Pilot Headgear', href: '/starscream' },
      { label: 'Defense & Aerospace', href: '/industries/defence-aerospace' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Research & Academia', href: '/industries/research-academia' },
      { label: 'Simulation & Training', href: '/industries/simulation-training' }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'News & Insights', href: '/news' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'FAQs', href: '/faqs' }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Compliance & Certifications', href: '/compliance' },
      { label: 'Contact Us', href: '/contact' }
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
    <footer className="relative bg-black border-t border-gray-800">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-blue/10 to-light-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="space-y-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a href="/" className="inline-flex items-center justify-center space-x-2 sm:space-x-3 mb-4 focus-ring rounded-lg">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                  <img 
                    src="/logo.webp" 
                    alt="Sentient Biotech Logo" 
                    className="w-full h-full object-contain"
                    style={{ 
                      filter: 'brightness(0) invert(1)',
                      WebkitFilter: 'brightness(0) invert(1)'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.className = 'w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center shadow-blue';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-10 h-10 bg-white rounded-full subtle-pulse"></div>';
                      }
                    }}
                  />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white">
                  Sentient Biotech
                </span>
              </a>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4 leading-loose mb-12">
                Pioneering human-machine synergy through advanced biotechnology and neurotechnology for healthcare and defense applications.
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
        <div className="py-8 border-t border-gray-800">
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              <div className="text-center">
                <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Visit Us</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu, India</p>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Call Us</h4>
                <a href="tel:+917070360676" className="text-gray-400 hover:text-primary-blue text-xs sm:text-sm transition-colors focus-ring rounded inline-block py-1">
                  +91-70703-60676
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Email Us</h4>
                <a href="mailto:support@sentientbiotech.in" className="text-gray-400 hover:text-primary-blue text-xs sm:text-sm transition-colors focus-ring rounded inline-block py-1 whitespace-nowrap">
                  support@sentientbiotech.in
                </a>
              </div>
              <div className="text-center">
                <h5 className="text-white font-semibold mb-1 text-xs sm:text-sm">Follow Us</h5>
                <div className="flex justify-center gap-2">
                  <motion.a
                    href="https://www.youtube.com/@SentientBiotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-7 h-7 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors duration-200 focus-ring"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/sentient-biotech-1a2968389/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-7 h-7 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors duration-200 focus-ring"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61582059542899"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-7 h-7 bg-blue-800 hover:bg-blue-900 rounded-full text-white transition-colors duration-200 focus-ring"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.quora.com/profile/Sentient-Biotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors duration-200 focus-ring"
                    aria-label="Quora"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.instagram.com/sentientbiotech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full text-white transition-colors duration-200 focus-ring"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href="https://x.com/SentientBiotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-7 h-7 bg-gray-900 hover:bg-black rounded-full text-white transition-colors duration-200 focus-ring"
                    aria-label="Twitter (X)"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col items-center justify-center space-y-4 pt-6 border-t border-gray-800">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-400 text-xs sm:text-sm text-center"
              >
                © 2026 Sentient Biotech Private Limited. All rights reserved.
              </motion.div>
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