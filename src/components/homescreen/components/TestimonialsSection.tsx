'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

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

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  companyLogos: CompanyLogo[]
}

export function TestimonialsSection({ testimonials, companyLogos }: TestimonialsSectionProps) {
  return (
    <section id='testimonials' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Trusted by industry leaders
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Join thousands of satisfied customers who trust our platform
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='bg-gray-50 dark:bg-gray-900 border-none shadow-none p-6'>
              <div className='flex flex-col'>
                {/* Star Rating Placeholder */}
                <div className='flex mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-5 h-5 text-yellow-400 fill-current' viewBox='0 0 20 20'><path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z'/></svg>
                  ))}
                </div>
                <blockquote className='text-lg font-semibold leading-snug mb-4'>
                  {`"${testimonial.quote}"`}
                </blockquote>
                <div className='flex items-center'>
                  <Avatar className='h-10 w-10 mr-4'>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold'>{testimonial.name}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Company Logos */}
        <div className='mt-12 flex justify-center items-center space-x-8 sm:space-x-12 flex-wrap gap-y-4'>
          {companyLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={120} // Adjust as needed
              height={40}  // Adjust as needed
              className='object-contain opacity-60 hover:opacity-100 transition-opacity'
            />
          ))}
        </div>
      </div>
    </section>
  )
} 