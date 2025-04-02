'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'

type PlanFeature = string

interface Plan {
  name: string
  price: string
  features: PlanFeature[]
  popular: boolean
  custom?: boolean
}

interface PricingCardsProps {
  plans: Plan[]
}

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
      {plans.map((plan, index) => (
        <div key={index} className="relative">
          <Card
            className={`flex flex-col h-full ${plan.popular ? 'border-blue-500 border-2 shadow-lg pt-6' : 'border'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
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
        </div>
      ))}
    </div>
  )
} 