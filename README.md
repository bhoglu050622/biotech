# Sentient Biotech Website

A futuristic, tech-luxury website for Sentient Biotech - a neurotechnology company focused on making mental health accessible through Brain-Computer Interface (BCI) and biofeedback technology.

## 🧠 About

Sentient Biotech is pioneering the next generation of neurotechnology to foster holistic well-being. Our mission is to create innovative, non-invasive neuroimaging devices that bridge the gap between mind and body, making mental health accessible for all.

## ✨ Features

- **Futuristic Design**: Neural networks + biomorphic forms with soft neon gradients
- **Interactive Components**: 3D device renders, animated EEG waveforms, particle networks
- **Glassmorphism UI**: Modern glass panels with subtle particle effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation, screen reader support, reduced motion options
- **Performance**: Optimized with Next.js, lazy loading, and efficient animations

## 🎨 Design System

### Color Palette
- **Deep Indigo**: `#0B1020` - Primary background
- **Electric Cyan**: `#00E6FF` - Primary accent
- **Violet Accent**: `#AA64FF` - Secondary accent
- **Soft Teal**: `#6BE1C9` - Tertiary accent
- **Glass White**: `rgba(255, 255, 255, 0.06)` - Glass panels

### Typography
- **Primary Font**: Inter (variable weight)
- **Display Font**: Satoshi/Outfit for headings
- **Scale**: 10-14px base, H1 ≈ 48-64px desktop

### Motion
- **Entrance**: 600-900ms for major sections
- **Micro-interactions**: 140-260ms
- **Easing**: `cubic-bezier(0.2, 0.8, 0.2, 1)` for natural motion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sentient-biotech-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Navbar.tsx         # Sticky navigation with glassmorphism
│   ├── Hero.tsx           # Immersive hero section
│   ├── ProductSpotlight.tsx # Interactive product cards
│   ├── HowItWorks.tsx     # BCI and EqP explainer
│   ├── LiveDemo.tsx       # Interactive brainwave simulator
│   ├── UseCases.tsx       # Benefits grid
│   ├── TechTrust.tsx      # Science & technology section
│   ├── Testimonials.tsx   # Carousel with research quotes
│   ├── CTASection.tsx     # Early access form
│   ├── Footer.tsx         # Contact details and links
│   └── ParticleBackground.tsx # Animated particle network
├── public/                # Static assets
└── package.json          # Dependencies and scripts
```

## 🎯 Key Sections

1. **Sticky Navigation** - Glassmorphism header with smooth scroll navigation
2. **Hero Section** - Immersive product intro with 3D device render
3. **Product Spotlight** - Interactive cards for EEG Headset and Smart Wrist Wearable
4. **How It Works** - Animated explainer for BCI and Equilibrium Psychology
5. **Live Demo** - Interactive brainwave simulator with real-time visualization
6. **Use Cases** - Benefits grid with animated cards
7. **Science & Technology** - Trust badges and research foundation
8. **Testimonials** - Carousel with team quotes and research citations
9. **CTA Section** - Early access form with modal
10. **Footer** - Contact details and navigation links

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and micro-interactions
- **Lucide React** - Beautiful icons
- **Canvas API** - Particle effects and waveform visualization

## 📱 Responsive Design

- **Desktop**: Full experience with all animations and interactions
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Simplified animations, hamburger menu, touch gestures

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader**: ARIA labels and semantic HTML
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **High Contrast**: Support for high contrast mode
- **Focus Management**: Visible focus indicators and logical tab order

## 🎨 Animation System

- **Entrance Animations**: Staggered reveals with natural easing
- **Micro-interactions**: Hover effects, button states, form feedback
- **Particle Effects**: Interactive background with mouse parallax
- **3D Transforms**: Subtle device floating and card tilts
- **Waveform Animation**: Real-time brainwave visualization

## 📊 Performance Optimizations

- **Lazy Loading**: Images and components loaded on demand
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Font Optimization**: `font-display: swap` for better loading
- **Bundle Analysis**: Optimized bundle size

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📄 License

This project is proprietary to Sentient Biotech Private Limited.

## 📞 Contact

- **Email**: jasmeetsngh19@gmail.com
- **Phone**: +91-7070360676
- **Website**: http://sentientbiotech.in/
- **GitHub**: https://github.com/SentientBiotech/sentient-biotech.github.io

---

Built with ❤️ for the future of mental health technology.
