'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

interface FeaturesSectionProps {
  features: Feature[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id='features' className='w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Everything you need to succeed
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Powerful features to help you manage and grow your business
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <Card key={index} className='bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow'>
              <CardHeader>
                <feature.icon className='w-8 h-8 mb-2 text-blue-600' />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 