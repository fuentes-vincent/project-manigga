'use client'

import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Check } from 'lucide-react'
import { CtaSection } from '../components/CtaSection'

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
        {/* Pricing Section */}
        <section id='pricing' className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Choose the Perfect Plan for Your Business
            </h1>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-400'>
              Simple, transparent pricing that grows with you. No hidden fees, no surprises.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className='flex justify-center mb-12'>
            <Tabs defaultValue={billingCycle} onValueChange={(value) => setBillingCycle(value as 'monthly' | 'annually')} className="w-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">
                  Annually <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Save 20%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {currentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col ${plan.popular ? 'border-blue-500 border-2 shadow-lg' : 'border'}`}
              >
                {plan.popular && (
                  <div className="text-center py-1 bg-blue-500 text-white text-sm font-medium rounded-t-lg -mt-px">Most Popular</div>
                )}
                <CardHeader className="items-center text-center pt-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-2">
                    {plan.price}
                    {plan.price !== 'Custom' && (
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {plan.custom ? (
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                  ) : (
                    <Button variant={plan.popular ? 'default' : 'outline'} className="w-full">Get Started</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

        </section>

        {/* Comparison Table Section */}
        <section id='compare' className='container mx-auto px-4 md:px-6 mt-16 md:mt-24'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Compare Plans in Detail
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <TableHead className="w-[250px]">Features</TableHead>
                  <TableHead className="text-center">Starter</TableHead>
                  <TableHead className="text-center">Professional</TableHead>
                  <TableHead className="text-center">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((item, index) => (
                  <TableRow key={index} className="[&>td]:text-center">
                    <TableCell className="font-medium text-left">{item.feature}</TableCell>
                    <TableCell>{item.starter}</TableCell>
                    <TableCell>{item.professional}</TableCell>
                    <TableCell>{item.enterprise}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='faq' className='container mx-auto px-4 md:px-6 mt-16 md:mt-24'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section - Replaced with reusable component */}
        <div className="mt-16 md:mt-24">
           <CtaSection />
        </div>

      </main>
      <Footer />
    </div>
  )
} 