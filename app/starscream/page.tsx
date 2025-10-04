import { Suspense } from 'react'
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

export default function StarscreamPage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      {/* Advanced particle background */}
      <AdvancedParticleSystem />
      
      {/* Navigation */}
      <Navbar />
      
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
      <Footer />
    </main>
  )
}
