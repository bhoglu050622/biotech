'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Globe, 
  Calendar,
  Scale,
  Lock,
  Award,
  Building,
  Mail,
  Phone,
  MapPin,
  Info
} from 'lucide-react'

export default function TermsOfUsePage() {
  return (
    <main className="relative min-h-screen bg-deep-indigo">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              Legal Documents
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Terms & Conditions, Privacy Policy, and Disclaimer governing the use of Sentient Biotech services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-electric-cyan" />
                Effective Date: 06-Oct-2025
              </span>
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-electric-cyan" />
                Governed by Indian Law
              </span>
              <span className="flex items-center gap-2">
                <Building className="w-4 h-4 text-electric-cyan" />
                CIN: U72100TN2024PTC171028
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-strong rounded-xl p-6">
            <h2 className="text-white font-semibold mb-4 text-center">Quick Navigation</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#terms" className="px-6 py-2 bg-gradient-to-r from-electric-cyan to-violet-accent rounded-lg text-white font-medium hover:scale-105 transition-transform">
                Terms & Conditions
              </a>
              <a href="#privacy" className="px-6 py-2 bg-gradient-to-r from-electric-cyan to-violet-accent rounded-lg text-white font-medium hover:scale-105 transition-transform">
                Privacy Policy
              </a>
              <a href="#disclaimer" className="px-6 py-2 bg-gradient-to-r from-electric-cyan to-violet-accent rounded-lg text-white font-medium hover:scale-105 transition-transform">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section id="terms" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Terms & Conditions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* 1. Introduction */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-electric-cyan mr-3" />
                1. Introduction
              </h3>
              <div className="text-white/80 space-y-3">
                <p>Welcome to <strong>Sentient Biotech Private Limited</strong> ("Company", "we", "us", or "our").</p>
                <p>By accessing or using our website <a href="https://sentientbiotech.in" className="text-electric-cyan hover:underline">https://sentientbiotech.in</a>, products, services, or technologies ("Services"), you agree to be bound by these Terms & Conditions and our Privacy Policy.</p>
                <p>If you do not agree, you may not use our Services.</p>
              </div>
            </div>

            {/* 2. Company Details */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Building className="w-6 h-6 text-electric-cyan mr-3" />
                2. Company Details
              </h3>
              <div className="text-white/80 space-y-3">
                <p><strong>Legal Entity:</strong> Sentient Biotech Private Limited</p>
                <p><strong>Registered Office:</strong> VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu</p>
                <p><strong>CIN:</strong> U72100TN2024PTC171028</p>
                <p><strong>Jurisdiction:</strong> Kanchipuram, Tamil Nadu</p>
              </div>
            </div>

            {/* 3. Use of Website & Services */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-electric-cyan mr-3" />
                3. Use of Website & Services
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>You agree to use the website only for lawful purposes in accordance with the Information Technology Act, 2000 and related amendments.</li>
                <li>You shall not attempt to gain unauthorized access to our servers, systems, or networks.</li>
                <li>You shall not copy, modify, or reverse-engineer any content, images, or source code hosted on this website.</li>
              </ul>
            </div>

            {/* 4. Intellectual Property Rights */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-electric-cyan mr-3" />
                4. Intellectual Property Rights (IPR)
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>All trademarks, trade names, logos, patents, and copyrights, including product designs, schematics, algorithms, and device specifications (such as EEG Systems and Next-Generation Pilot Headgear) are the exclusive property of Sentient Biotech Private Limited.</li>
                <li>Unauthorized use, reproduction, or redistribution of such materials may lead to civil and criminal liability under The Copyright Act, 1957, The Patents Act, 1970, and The Trademarks Act, 1999.</li>
                <li>You may not use our brand name, logo, or product references without express written permission.</li>
              </ul>
            </div>

            {/* 5. Product Usage Disclaimer */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-electric-cyan mr-3" />
                5. Product Usage Disclaimer
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>Sentient Biotech's products, including medical and defense-grade equipment, are to be used strictly in accordance with their user manuals, certifications, and government-approved purposes.</li>
                <li>Any misuse, modification, or unauthorized integration may void warranty and legal protections.</li>
                <li>Sentient Biotech is not liable for damages resulting from improper use, modification, or unapproved deployment of its devices.</li>
              </ul>
            </div>

            {/* 6. Confidentiality & Export Control */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-electric-cyan mr-3" />
                6. Confidentiality & Export Control
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>Certain technologies (including defense-related devices) may be subject to export control laws and national security regulations under The Defence Production Policy of India.</li>
                <li>No confidential, restricted, or classified government data shall be transmitted via this website or stored without explicit authorization.</li>
                <li>All R&D partnerships, pilot trials, or co-developments are covered under Non-Disclosure Agreements (NDAs).</li>
              </ul>
            </div>

            {/* 7. Data Privacy & Protection */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-electric-cyan mr-3" />
                7. Data Privacy & Protection
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>Personal and biometric data collected through Sentient Biotech systems (e.g., EEG, biometric sensors) will be handled in accordance with The Digital Personal Data Protection Act, 2023 and IT (Reasonable Security Practices and Procedures) Rules, 2011.</li>
                <li>Data is securely processed, anonymized where required, and not shared without user consent.</li>
                <li>You have the right to request correction or deletion of personal data.</li>
              </ul>
            </div>

            {/* 8. Warranties & Liability Limitations */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-electric-cyan mr-3" />
                8. Warranties & Liability Limitations
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>All information and products are provided "as is" without warranties, express or implied.</li>
                <li>Sentient Biotech disclaims all liability for indirect, incidental, or consequential damages resulting from:
                  <ul className="ml-8 mt-2 space-y-2 list-circle">
                    <li>Product malfunction</li>
                    <li>Website downtime</li>
                    <li>Unauthorized data access or misuse</li>
                  </ul>
                </li>
                <li>Under The Consumer Protection Act, 2019, our liability is limited strictly to repair, replacement, or refund as per warranty terms.</li>
              </ul>
            </div>

            {/* 9. Third-Party Links */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-electric-cyan mr-3" />
                9. Third-Party Links & External Resources
              </h3>
              <p className="text-white/80">Our website may contain links to third-party sites. Sentient Biotech is not responsible for the content, accuracy, or privacy practices of such external resources.</p>
            </div>

            {/* 10. Indemnification */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 text-electric-cyan mr-3" />
                10. Indemnification
              </h3>
              <p className="text-white/80">You agree to indemnify, defend, and hold harmless Sentient Biotech Pvt. Ltd., its directors, employees, and affiliates against all claims, damages, or expenses arising from misuse or violation of these Terms.</p>
            </div>

            {/* 11. Governing Law & Jurisdiction */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 text-electric-cyan mr-3" />
                11. Governing Law & Jurisdiction
              </h3>
              <ul className="text-white/80 space-y-3 list-disc list-inside">
                <li>These Terms shall be governed by and construed under the laws of India.</li>
                <li>Any dispute shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra (or your registered office city).</li>
                <li>In the event of arbitration, proceedings shall follow the Arbitration and Conciliation Act, 1996.</li>
              </ul>
            </div>

            {/* 12. Amendments */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-electric-cyan mr-3" />
                12. Amendments
              </h3>
              <p className="text-white/80">Sentient Biotech reserves the right to modify or update these Terms & Conditions at any time without prior notice. Updates will be reflected on this page with a revised date.</p>
            </div>

            {/* 13. Contact Information */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-electric-cyan mr-3" />
                13. Contact Information
              </h3>
              <div className="text-white/80 space-y-2">
                <p>For legal or compliance-related inquiries:</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@sentientbiotech.in" className="text-electric-cyan hover:underline">privacy@sentientbiotech.in</a></p>
                <p><strong>Website:</strong> <a href="https://sentientbiotech.in" className="text-electric-cyan hover:underline">https://sentientbiotech.in</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">Effective Date: 06-Oct-2025</p>
          </motion.div>

          <div className="space-y-8">
            {/* 1. Introduction */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-electric-cyan mr-3" />
                1. Introduction
              </h3>
              <div className="text-white/80 space-y-3">
                <p>This Privacy Policy explains how <strong>Sentient Biotech Private Limited</strong> ("Company", "we", "us", or "our") collects, uses, processes, and safeguards your personal, biometric, and technical data when you visit <a href="https://sentientbiotech.in" className="text-electric-cyan hover:underline">https://sentientbiotech.in</a> or use our products, including EEG Systems and Next-Generation Pilot Headgear.</p>
                <p>By using our website, products, or services, you consent to the terms of this Privacy Policy in accordance with the Digital Personal Data Protection Act, 2023, and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
              </div>
            </div>

            {/* 2. Scope */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-electric-cyan mr-3" />
                2. Scope
              </h3>
              <p className="text-white/80 mb-3">This policy applies to:</p>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <li>Website visitors, clients, researchers, and partners.</li>
                <li>Users of Sentient Biotech products and devices (EEG systems, pilot headgear, sensors).</li>
                <li>Employees, contractors, and vendors handling company systems or R&D data.</li>
              </ul>
            </div>

            {/* 3. Information We Collect */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 text-electric-cyan mr-3" />
                3. Information We Collect
              </h3>
              <p className="text-white/80 mb-4">Depending on the interaction, we may collect the following types of data:</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">(a) Personal Data</h4>
                  <ul className="text-white/80 space-y-2 list-disc list-inside ml-4">
                    <li>Name, email address, phone number, organization, and designation.</li>
                    <li>Identity or contact details shared via contact forms or business correspondence.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">(b) Biometric & Neuro-Data (Special Category Data)</h4>
                  <ul className="text-white/80 space-y-2 list-disc list-inside ml-4">
                    <li>EEG signals, thermal data, SpO₂ levels, pulse, or stress indicators collected through devices.</li>
                    <li>Data collected only for research, medical, or defense-related authorized purposes.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">(c) Device & Technical Data</h4>
                  <ul className="text-white/80 space-y-2 list-disc list-inside ml-4">
                    <li>IP address, browser type, device ID, and cookies.</li>
                    <li>Location or telemetry data for authorized equipment testing.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">(d) Research & R&D Data</h4>
                  <ul className="text-white/80 space-y-2 list-disc list-inside ml-4">
                    <li>Experimental logs, sensor test data, prototype results, and environmental readings.</li>
                    <li>Such data remains confidential and is used strictly for internal R&D and performance improvement.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Purpose of Data Collection */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-electric-cyan mr-3" />
                4. Purpose of Data Collection
              </h3>
              <p className="text-white/80 mb-3">We collect and process data for:</p>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <li>Product testing, calibration, and performance analytics.</li>
                <li>Safety and mission-critical monitoring in defense-grade systems.</li>
                <li>Research and clinical development of EEG-based applications.</li>
                <li>Communication, support, and partnership collaboration.</li>
                <li>Legal compliance and export control verification.</li>
                <li>Improving AI and sensor algorithms using anonymized datasets.</li>
              </ul>
            </div>

            {/* 5. Data Processing Principles */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-electric-cyan mr-3" />
                5. Data Processing Principles
              </h3>
              <p className="text-white/80 mb-3">In line with the DPDP Act, 2023 and GDPR-equivalent principles, we ensure:</p>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <li>Lawful, fair, and transparent processing.</li>
                <li>Purpose limitation: data used only for stated objectives.</li>
                <li>Data minimization: only necessary data is collected.</li>
                <li>Accuracy & security: continuous monitoring for integrity.</li>
                <li>Limited retention: data is deleted or anonymized after the project or contract ends.</li>
              </ul>
            </div>

            {/* 6. Data Sharing & Disclosure */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-electric-cyan mr-3" />
                6. Data Sharing & Disclosure
              </h3>
              <div className="text-white/80 space-y-3">
                <p>Sentient Biotech does not sell, rent, or trade your data. We may share limited information only with:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Authorized government or defense agencies, as per national security protocols.</li>
                  <li>Research partners or contractors under strict NDAs.</li>
                  <li>Legal authorities when mandated under Indian Law or court order.</li>
                </ul>
                <p>All third-party data transfers follow encryption and traceability standards.</p>
              </div>
            </div>

            {/* 7. Data Protection & Security Measures */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-electric-cyan mr-3" />
                7. Data Protection & Security Measures
              </h3>
              <div className="text-white/80 space-y-3">
                <p>We maintain high security standards compliant with:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>ISO/IEC 27001 Information Security Management</li>
                  <li>IT Rules, 2011 – Reasonable Security Practices</li>
                  <li>Multi-layer encryption (AES-256, RSA-2048) for sensitive datasets</li>
                  <li>Biometric data storage in segregated, access-controlled environments</li>
                  <li>2FA authentication and activity logging for R&D data access</li>
                </ul>
                <p>In case of a data breach, Sentient Biotech will notify affected individuals and relevant authorities as mandated under the DPDP Act, 2023.</p>
              </div>
            </div>

            {/* 8. Your Rights */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Award className="w-6 h-6 text-electric-cyan mr-3" />
                8. Your Rights (Under Indian & Global Law)
              </h3>
              <div className="text-white/80 space-y-3">
                <p>As a data principal (individual), you have the right to:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Access your data and receive copies upon request.</li>
                  <li>Correct or update inaccurate information.</li>
                  <li>Withdraw Consent at any time (subject to operational necessity).</li>
                  <li>Data Portability – request transfer to another controller (where applicable).</li>
                  <li>Erase Data ("Right to be Forgotten") under lawful circumstances.</li>
                </ul>
                <p>Requests can be made by writing to <a href="mailto:privacy@sentientbiotech.in" className="text-electric-cyan hover:underline">privacy@sentientbiotech.in</a>.</p>
              </div>
            </div>

            {/* 9. Children's Data */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-electric-cyan mr-3" />
                9. Children's Data
              </h3>
              <p className="text-white/80">Our website and technologies are not intended for minors under 18 years of age. We do not knowingly collect data from children.</p>
            </div>

            {/* 10. Cross-Border Data Transfer */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-electric-cyan mr-3" />
                10. Cross-Border Data Transfer
              </h3>
              <div className="text-white/80 space-y-3">
                <p>In the event of collaborations or cloud operations outside India, Sentient Biotech ensures compliance with:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>DPDP Act, 2023 Section 16 (transfer restrictions)</li>
                  <li>EU GDPR Chapter V for partners operating in the EU</li>
                </ul>
                <p>Transfers occur only to jurisdictions with adequate data protection frameworks.</p>
              </div>
            </div>

            {/* 11. Cookies & Analytics */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 text-electric-cyan mr-3" />
                11. Cookies & Analytics
              </h3>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <li>We use minimal cookies for analytics, performance monitoring, and website optimization.</li>
                <li>Users can opt out of non-essential cookies through browser settings.</li>
                <li>We do not use cookies for advertising or profiling.</li>
              </ul>
            </div>

            {/* 12. Retention Policy */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-6 h-6 text-electric-cyan mr-3" />
                12. Retention Policy
              </h3>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <li>R&D and biometric data are retained only for the duration necessary for project completion, regulatory compliance, or safety audits.</li>
                <li>Post-retention, data is securely deleted or irreversibly anonymized.</li>
              </ul>
            </div>

            {/* 13. Third-Party Services */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-electric-cyan mr-3" />
                13. Third-Party Services
              </h3>
              <p className="text-white/80">Our website may use secure third-party tools (e.g., cloud hosting, analytics). Each vendor is carefully selected to ensure compliance with Indian and international privacy standards.</p>
            </div>

            {/* 14. Legal Compliance References */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 text-electric-cyan mr-3" />
                14. Legal Compliance References
              </h3>
              <div className="text-white/80 space-y-2">
                <p>This Privacy Policy complies with:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Digital Personal Data Protection Act, 2023 (India)</li>
                  <li>Information Technology Act, 2000</li>
                  <li>IT Rules, 2011 – Sensitive Personal Data or Information (SPDI)</li>
                  <li>Consumer Protection (E-Commerce) Rules, 2020</li>
                  <li>Arbitration and Conciliation Act, 1996</li>
                  <li>EU General Data Protection Regulation (GDPR) – applicable for global partners</li>
                </ul>
              </div>
            </div>

            {/* 15. Updates to This Policy */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-electric-cyan mr-3" />
                15. Updates to This Policy
              </h3>
              <p className="text-white/80">Sentient Biotech may update this policy periodically. Changes will be reflected on this page with the updated effective date. Continued use of our website or products implies acceptance of the revised policy.</p>
            </div>

            {/* 16. Contact Information */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-electric-cyan mr-3" />
                16. Contact Information
              </h3>
              <div className="text-white/80 space-y-2">
                <p>For any privacy-related concerns or to exercise your data rights, contact:</p>
                <p><strong>Data Protection Officer (DPO)</strong></p>
                <p><strong>Email:</strong> <a href="mailto:privacy@sentientbiotech.in" className="text-electric-cyan hover:underline">privacy@sentientbiotech.in</a></p>
                <p><strong>Website:</strong> <a href="https://sentientbiotech.in" className="text-electric-cyan hover:underline">https://sentientbiotech.in</a></p>
                <p><strong>Office:</strong> VGN Coasta, 14th Floor, Flat No.B, Muttukadu, Chinglepet, Kanchipuram- 603112, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Disclaimer
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* 1. General Information */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 text-electric-cyan mr-3" />
                1. General Information
              </h3>
              <div className="text-white/80 space-y-3">
                <p>The information provided on the website of <strong>Sentient Biotech Private Limited</strong> ("Company", "we", "our", or "us") — including data, images, specifications, and product information — is for general informational and research purposes only.</p>
                <p>We make every effort to ensure that the data presented is accurate and up to date; however, Sentient Biotech assumes no liability for any error, omission, or interpretation arising from its use.</p>
              </div>
            </div>

            {/* 2. No Medical or Defense Advice */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-electric-cyan mr-3" />
                2. No Medical or Defense Advice
              </h3>
              <p className="text-white/80">The content, research data, or sensor readings displayed on this website do not constitute medical, therapeutic, or defense-operational advice. All EEG or pilot headgear devices are intended strictly for research, experimental, and authorized institutional purposes.</p>
            </div>

            {/* 3. Intellectual Property Rights */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-electric-cyan mr-3" />
                3. Intellectual Property Rights
              </h3>
              <div className="text-white/80 space-y-3">
                <p>All content on this website — including text, graphics, code, images, product names, trademarks, and patents — are intellectual property of Sentient Biotech Private Limited, protected under:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Copyright Act, 1957 (India)</li>
                  <li>Patents Act, 1970 (as amended)</li>
                  <li>Trademarks Act, 1999</li>
                  <li>Information Technology Act, 2000</li>
                </ul>
                <p>Any unauthorized use, reproduction, or distribution of this material is strictly prohibited and may result in civil and criminal prosecution.</p>
              </div>
            </div>

            {/* 4. Product Use & Liability */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-electric-cyan mr-3" />
                4. Product Use & Liability
              </h3>
              <div className="text-white/80 space-y-3">
                <p>Sentient Biotech products are intended for controlled testing, research, and authorized operations only. The company is not liable for misuse, modification, or unauthorized deployment of its devices, software, or hardware.</p>
                <p>All buyers and partners must comply with applicable Indian defense export control, data privacy, and biomedical equipment standards before any deployment or demonstration.</p>
              </div>
            </div>

            {/* 5. Third-Party Links */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-electric-cyan mr-3" />
                5. Third-Party Links
              </h3>
              <p className="text-white/80">External links (if any) are provided for convenience. Sentient Biotech is not responsible for the content, security, or practices of linked websites.</p>
            </div>

            {/* 6. Limitation of Liability */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-electric-cyan mr-3" />
                6. Limitation of Liability
              </h3>
              <div className="text-white/80 space-y-3">
                <p>Under Section 79 of the IT Act, 2000, Sentient Biotech operates as an intermediary with due diligence. We are not liable for any indirect, incidental, or consequential damages arising out of use or reliance on website content, product data, or downloadable files.</p>
              </div>
            </div>

            {/* 7. Jurisdiction */}
            <div className="glass-panel-strong rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 text-electric-cyan mr-3" />
                7. Jurisdiction
              </h3>
              <p className="text-white/80">All disputes are subject to the exclusive jurisdiction of the courts of Pune, Maharashtra, India, under the Indian Contract Act, 1872 and relevant statutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              For questions regarding these legal documents or to exercise your rights, please contact us:
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <a href="mailto:privacy@sentientbiotech.in" className="text-electric-cyan hover:underline text-sm">
                  privacy@sentientbiotech.in
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <a href="tel:+917070360676" className="text-electric-cyan hover:underline text-sm">
                  +91-70703-60676
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-violet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-white/80 text-sm">
                  VGN Coasta, 14th Floor, Flat No.B<br />
                  Muttukadu, Chinglepet<br />
                  Kanchipuram - 603112, Tamil Nadu
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CommonCTA />

      <Footer />
    </main>
  )
}
