'use client'

import React from 'react'
import { LayoutGrid, BarChart, Sliders } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'

// Type definitions (could be moved to a separate types file)
type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type Testimonial = {
  quote: string
  name: string
  title: string
  avatar: string
  fallback: string
}

type CompanyLogo = {
  src: string
  alt: string
}

// Placeholder data (could be moved to a constants file or fetched)
const features: Feature[] = [
  {
    icon: LayoutGrid,
    title: 'Powerful Dashboard',
    description: "Get a bird's-eye view of your business with our intuitive dashboard.",
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive analytics tools.',
  },
  {
    icon: Sliders,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and focus on what matters most.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote: 'This platform has transformed how we operate. The results have been incredible.',
    name: 'Sarah Johnson',
    title: 'CEO at TechCorp',
    avatar: '/avatars/sarah.png', // Placeholder path
    fallback: 'SJ',
  },
  {
    quote: "The best solution we've found for our business needs. Highly recommended!",
    name: 'Michael Chen',
    title: 'Founder at InnovateLab',
    avatar: '/avatars/michael.png', // Placeholder path
    fallback: 'MC',
  },
]

const companyLogos: CompanyLogo[] = [
  { src: '/images/login-image.png', alt: 'Company 1' },
  { src: '/images/login-image.png', alt: 'Company 2' },
  { src: '/images/login-image.png', alt: 'Company 3' },
  { src: '/images/login-image.png', alt: 'Company 4' },
  { src: '/images/login-image.png', alt: 'Company 5' },
]

export function HomePage() {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100'>
      <Header />
      <main className='flex-1'>
        <HeroSection />
        <FeaturesSection features={features} />
        <TestimonialsSection testimonials={testimonials} companyLogos={companyLogos} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
} 