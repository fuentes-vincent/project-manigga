'use client'

import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

type FaqItem = {
  question: string
  answer: string
}

interface FaqSectionProps {
  items: FaqItem[]
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section id='faq' className='container mx-auto px-4 md:px-6 mt-16 md:mt-24'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
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
  )
} 