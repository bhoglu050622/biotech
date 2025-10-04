import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductSpotlight from '@/components/ProductSpotlight'
import HowItWorks from '@/components/HowItWorks'
import LiveDemo from '@/components/LiveDemo'
import UseCases from '@/components/UseCases'
import TechTrust from '@/components/TechTrust'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import AnimationDemo from '@/components/AnimationDemo'
import SimpleAnimatedDivider from '@/components/SimpleAnimatedDivider'

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-military-dark">
      {/* Military tactical background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Product Spotlight */}
      <ProductSpotlight />
      <SimpleAnimatedDivider variant="wave" />
      
      {/* How It Works */}
      <HowItWorks />
      <SimpleAnimatedDivider variant="dots" />
      
      {/* Live Demo */}
      <LiveDemo />
      <SimpleAnimatedDivider variant="line" />
      
      {/* Use Cases */}
      <UseCases />
      <SimpleAnimatedDivider variant="wave" />
      
      {/* Tech & Trust */}
      <TechTrust />
      <SimpleAnimatedDivider variant="dots" />
      
      {/* Testimonials */}
      <Testimonials />
      <SimpleAnimatedDivider variant="line" />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
