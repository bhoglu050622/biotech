import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
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
  title: 'Neurotech for Everyday Well-Being | Advanced Brain-Computer Interfaces',
  description: 'Advanced neurotechnology solutions that bridge military-grade precision with everyday wellness. Non-invasive brain-computer interfaces designed for optimal human performance and well-being.',
  keywords: 'neurotechnology, BCI, brain-computer interface, biofeedback, neurofeedback, mental health, EEG, wearable technology, brain interface, cognitive enhancement',
  authors: [{ name: 'Advanced Neurotechnology Solutions' }],
  creator: 'Advanced Neurotechnology Solutions',
  publisher: 'Advanced Neurotechnology Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neurotech-wellbeing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Neurotech for Everyday Well-Being | Advanced Brain-Computer Interfaces',
    description: 'Advanced neurotechnology solutions that bridge military-grade precision with everyday wellness. Non-invasive brain-computer interfaces designed for optimal human performance and well-being.',
    url: 'https://neurotech-wellbeing.com',
    siteName: 'Neurotech Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neurotech for Everyday Well-Being - Advanced Brain-Computer Interfaces',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurotech for Everyday Well-Being | Advanced Brain-Computer Interfaces',
    description: 'Advanced neurotechnology solutions that bridge military-grade precision with everyday wellness. Non-invasive brain-computer interfaces designed for optimal human performance and well-being.',
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0E1A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="skip-to-content">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-military-primary z-50"
          >
            Skip to main content
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
