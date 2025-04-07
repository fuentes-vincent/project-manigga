'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section id='cta' className='w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-950 text-white'>
      <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto'>
        <div className='space-y-3'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
            Ready to get started?
          </h2>
          <p className='mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Join thousands of businesses that trust our platform
          </p>
        </div>
        <div className='mx-auto w-full max-w-sm space-x-2 flex justify-center'>
          <Link href='/login'>
            <Button size='lg'>Start Free Trial</Button>
          </Link>
          <Button size='lg' variant='outline' className='bg-transparent border-white text-white hover:bg-white hover:text-gray-800'>
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
} 