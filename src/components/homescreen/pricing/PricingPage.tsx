'use client'

import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CtaSection } from '../components/CtaSection'
import { PricingHeader } from './components/PricingHeader'
import { BillingToggle } from './components/BillingToggle'
import { PricingCards } from './components/PricingCards'
import { ComparisonTable } from './components/ComparisonTable'
import { FaqSection } from './components/FaqSection'

// Placeholder data (can be moved or fetched)
const pricingPlans = {
  monthly: [
    { name: 'Starter', price: '$29', features: ['Up to 5 team members', '100 GB storage', 'Basic support', 'Basic analytics'], popular: false },
    { name: 'Professional', price: '$99', features: ['Up to 20 team members', 'Unlimited storage', 'Priority support', 'Advanced analytics', 'Custom integrations', 'API access'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited team members', 'Unlimited storage', '24/7 premium support', 'Custom analytics', 'Advanced security', 'SLA guarantee', 'Dedicated account manager'], popular: false, custom: true },
  ],
  annually: [
    { name: 'Starter', price: '$23', features: ['Up to 5 team members', '100 GB storage', 'Basic support', 'Basic analytics'], popular: false },
    { name: 'Professional', price: '$79', features: ['Up to 20 team members', 'Unlimited storage', 'Priority support', 'Advanced analytics', 'Custom integrations', 'API access'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited team members', 'Unlimited storage', '24/7 premium support', 'Custom analytics', 'Advanced security', 'SLA guarantee', 'Dedicated account manager'], popular: false, custom: true },
  ],
}

const comparisonFeatures = [
  { feature: 'Team members', starter: '5', professional: '20', enterprise: 'Unlimited' },
  { feature: 'Storage', starter: '100 GB', professional: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'API Access', starter: '-', professional: '✔', enterprise: '✔' },
  { feature: 'Custom Domain', starter: '1', professional: '3', enterprise: 'Unlimited' },
  { feature: 'Analytics', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
  { feature: 'Support SLA', starter: '48h', professional: '24h', enterprise: '4h' },
]

const faqItems = [
  { question: 'How does the free trial work?', answer: 'You can try our service for 14 days without any commitment. No credit card required.' },
  { question: 'Can I change plans later?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.' },
  { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.' },
  { question: 'Is there a long-term contract?', answer: 'No, all our plans are month-to-month. You can cancel anytime without penalty.' },
]

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually')
  const currentPlans = pricingPlans[billingCycle]

  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100'>
      <Header />
      <main className='flex-1 py-12 md:py-24 lg:py-32'>
        <section id='pricing' className='container mx-auto px-4 md:px-6'>
          <PricingHeader />
          <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
          <PricingCards plans={currentPlans} />
        </section>
        <ComparisonTable features={comparisonFeatures} />
        <FaqSection items={faqItems} />
        <div className="mt-16 md:mt-24">
           <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  )
} 