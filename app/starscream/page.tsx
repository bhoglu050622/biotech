'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CommonCTA from '@/components/CommonCTA'
import BackToTop from '@/components/BackToTop'
import JsonLd, { starscreamProductSchema, generateBreadcrumbSchema } from '@/components/JsonLd'
import StarscreamHero from '@/components/StarscreamHero'
import Starscream3D from '@/components/Starscream3D'
import StarscreamShowcase from '@/components/StarscreamShowcase'
import StarscreamFeatures from '@/components/StarscreamFeatures'
import StarscreamCombat from '@/components/StarscreamCombat'
import StarscreamHolographic from '@/components/StarscreamHolographic'
import StarscreamCTA from '@/components/StarscreamCTA'

export default function StarscreamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sentientbiotech.in' },
    { name: 'Starscream', url: 'https://sentientbiotech.in/starscream' }
  ])

  return (
    <main className="relative min-h-screen bg-primary-blue">
      <JsonLd data={starscreamProductSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ParticleBackground />
      <Navbar />
      <BackToTop />
      
      {/* Hero Section with 3D Model */}
      <StarscreamHero />
      
      {/* Interactive 3D Experience */}
      <Starscream3D />
      
      {/* Features Showcase */}
      <StarscreamFeatures />
      
      {/* Combat Applications */}
      <StarscreamCombat />
      
      {/* Holographic Interface Demo */}
      <StarscreamHolographic />
      
      {/* Video Showcase */}
      <StarscreamShowcase />
      
      {/* Final CTA */}
      <StarscreamCTA />
      
      <Footer />
    </main>
  )
}