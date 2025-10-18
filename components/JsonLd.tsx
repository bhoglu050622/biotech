interface JsonLdProps {
  data: Record<string, any>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sentient Biotech Private Limited',
  alternateName: 'Sentient Biotech',
  url: 'https://sentientbiotech.in',
  logo: 'https://sentientbiotech.in/logo.webp',
  description: 'Non-invasive BCI & biofeedback that helps you understand and improve your mind and body — real-time, accessible, humane.',
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'Jasmeet Singh'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@sentientbiotech.in',
    contactType: 'Customer Service',
    availableLanguage: ['English']
  },
  sameAs: [
    // Add social media profiles here when available
  ],
  industry: 'Biotechnology, Neurotechnology, Medical Devices'
}

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sentient Biotech',
  url: 'https://sentientbiotech.in',
  description: 'Neurotech for Everyday Well-Being',
  publisher: {
    '@type': 'Organization',
    name: 'Sentient Biotech Private Limited'
  }
}

// Product Schemas
export const eegProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'EEG Solutions',
  description: 'Clinical-grade electroencephalogram (EEG) systems for neuroimaging and brain-computer interface applications.',
  brand: {
    '@type': 'Brand',
    name: 'Sentient Biotech'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Sentient Biotech Private Limited'
  },
  category: 'Medical Devices, Neurotechnology',
  applicationCategory: 'Healthcare, Research, Clinical Diagnostics'
}

export const starscreamProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Starscream - Starscream',
  description: 'Advanced pilot headgear integrating neurotechnology, extended reality, and AI-driven biometric monitoring for enhanced situational awareness and cognitive performance.',
  brand: {
    '@type': 'Brand',
    name: 'Sentient Biotech'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Sentient Biotech Private Limited'
  },
  category: 'Defense Technology, Aerospace, Neurotechnology',
  applicationCategory: 'Defense & Aerospace, Pilot Training, Simulation'
}

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// FAQ Schema Generator
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

// Article Schema Generator
export const generateArticleSchema = (article: {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author || 'Sentient Biotech'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sentient Biotech Private Limited',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sentientbiotech.in/logo.webp'
    }
  },
  image: article.image || 'https://sentientbiotech.in/og-image.jpg'
})

