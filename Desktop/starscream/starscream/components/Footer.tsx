'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Heart, ArrowUp } from 'lucide-react'

const footerSections = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Mission & Vision', href: '/about#mission-vision' },
      { label: 'Investors', href: '/investors' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    heading: 'Technologies & Products',
    links: [
      { label: 'Technologies', href: '/technologies' },
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Defense & Aerospace', href: '/solutions#defense-aerospace' },
      { label: 'Healthcare', href: '/solutions#healthcare' }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'News & Insights', href: '/news' },
      { label: 'Case Studies', href: '/resources#case-studies' },
      { label: 'Whitepapers', href: '/resources#whitepapers' },
      { label: 'FAQs', href: '/resources#faqs' }
    ]
  },
  {
    heading: 'Support',
    links: [
      { label: 'Customer Support', href: '/resources#support' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Technical Support', href: '/resources#support' },
      { label: 'Documentation', href: '/resources#documentation' }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Compliance & Certifications', href: '/compliance' },
      { label: 'Disclaimer', href: '/disclaimer' }
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
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="relative bg-deep-indigo/50 backdrop-blur-sm border-t border-glass-white-strong">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-cyan/5 to-violet-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-accent/5 to-soft-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="space-y-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full neural-pulse"></div>
                </div>
                <span className="text-2xl font-display font-bold gradient-text">
                  Sentient Biotech
                </span>
              </div>
            </motion.div>

            {/* Footer Sections - All in one block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            >
              {footerSections.map((section, sectionIndex) => (
                <div key={section.heading}>
                  <h3 className="text-lg font-semibold text-white mb-6 text-center md:text-left">{section.heading}</h3>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.button
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5, color: '#00E6FF' }}
                        onClick={() => handleNavClick(link.href)}
                        className="block text-center md:text-left text-white/70 hover:text-electric-cyan transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-glass-white-strong">
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 text-center md:text-left"
            >
              <div>
                <h4 className="text-white font-semibold mb-2">Registered Office</h4>
                <p className="text-white/60 text-sm">
                  SENTIENT BIOTECH PRIVATE LIMITED<br />
                  VGN Coasta, 14th Floor, Flat No.B<br />
                  Muttukadu, Chinglepet, Kanchipuram- 603112<br />
                  Tamil Nadu
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-white/60 text-sm">+91-7070360676</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-white/60 text-sm">jasmeet@sentientbiotech.in</p>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm"
              >
                © 2024 Sentient Biotech Private Limited. All rights reserved.
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-white/60 text-sm"
              >
                <span>Privacy-first technology</span>
                <span>•</span>
                <span>Non-invasive solutions</span>
                <span>•</span>
                <span>Research-backed</span>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-glass-white-strong transition-all duration-200 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:text-electric-cyan transition-colors duration-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-electric-cyan to-violet-accent flex items-center justify-center shadow-lg shadow-electric-cyan/25 z-40 md:hidden"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}
