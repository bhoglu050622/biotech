import { Suspense } from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import StarscreamHolographic from '@/components/StarscreamHolographic'
import CyberpunkInterface from '@/components/CyberpunkInterface'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import StarscreamFeatures from '@/components/StarscreamFeatures'
import Starscream3D from '@/components/Starscream3D'
import StarscreamCombat from '@/components/StarscreamCombat'
import StarscreamCTA from '@/components/StarscreamCTA'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import SimpleAnimatedDivider from '@/components/SimpleAnimatedDivider'
import CommonCTA from '@/components/CommonCTA'
import BackToTop from '@/components/BackToTop'
import JsonLd, { starscreamProductSchema, generateBreadcrumbSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Starscream - Next-Gen Pilot Headgear | Sentient Biotech',
  description: 'Advanced pilot headgear integrating neurotechnology, extended reality, and AI-driven biometric monitoring for enhanced situational awareness and cognitive performance in defense and aerospace.',
  keywords: 'pilot headgear, defense technology, aerospace, neurotechnology, extended reality, AR/VR, biometric monitoring, cognitive enhancement, situational awareness, military aviation',
  openGraph: {
    title: 'Starscream - Next-Gen Pilot Headgear | Sentient Biotech',
    description: 'Advanced pilot headgear integrating neurotechnology, extended reality, and AI-driven biometric monitoring for enhanced situational awareness and cognitive performance.',
    url: 'https://sentientbiotech.in/starscream',
    siteName: 'Sentient Biotech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Starscream - Next-Generation Pilot Headgear',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starscream - Next-Gen Pilot Headgear | Sentient Biotech',
    description: 'Advanced pilot headgear integrating neurotechnology, extended reality, and AI-driven biometric monitoring for enhanced situational awareness.',
    images: ['/og-image.jpg'],
  },
}

export default function StarscreamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sentientbiotech.in' },
    { name: 'Starscream', url: 'https://sentientbiotech.in/starscream' }
  ])

  return (
    <main id="main-content" className="relative min-h-screen">
      <JsonLd data={starscreamProductSchema} />
      <JsonLd data={breadcrumbSchema} />
      
      {/* Advanced particle background */}
      <AdvancedParticleSystem />
      
      {/* Navigation */}
      <Navbar />
      <BackToTop />
      
      {/* Holographic Hero Section */}
      <StarscreamHolographic />
      
      {/* Cyberpunk Interface */}
      <CyberpunkInterface />
      
      {/* Features Section */}
      <StarscreamFeatures />
      <SimpleAnimatedDivider variant="wave" />
      
      {/* Interactive 3D Section */}
      <Starscream3D />
      <SimpleAnimatedDivider variant="dots" />
      
      {/* Combat Section */}
      <StarscreamCombat />
      <SimpleAnimatedDivider variant="line" />
      
      {/* CTA Section */}
      <StarscreamCTA />
      
      {/* Footer */}
      <CommonCTA />

      <Footer />
    </main>
  )
}
