import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import PerformanceMonitor from '@/components/PerformanceMonitor'
// Theme system removed - dark theme only

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sentient Biotech | Neurotech for Everyday Well-Being',
  description: 'Non-invasive BCI & biofeedback that helps you understand and improve your mind and body — real-time, accessible, humane.',
  keywords: 'neurotechnology, BCI, brain-computer interface, biofeedback, neurofeedback, mental health, EEG, wearable technology',
  authors: [{ name: 'Sentient Biotech Private Limited' }],
  creator: 'Sentient Biotech Private Limited',
  publisher: 'Sentient Biotech Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sentientbiotech.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sentient Biotech | Neurotech for Everyday Well-Being',
    description: 'Non-invasive BCI & biofeedback that helps you understand and improve your mind and body — real-time, accessible, humane.',
    url: 'https://sentientbiotech.in',
    siteName: 'Sentient Biotech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sentient Biotech - Neurotech for Everyday Well-Being',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentient Biotech | Neurotech for Everyday Well-Being',
    description: 'Non-invasive BCI & biofeedback that helps you understand and improve your mind and body — real-time, accessible, humane.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B1020" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <PerformanceMonitor />
        <div id="skip-to-content">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-electric-cyan text-deep-indigo px-4 py-2 rounded-lg font-semibold z-50"
          >
            Skip to main content
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
