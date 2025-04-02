'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 dark:from-blue-950/20 to-white dark:to-gray-950'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Build something amazing with our platform
              </h1>
              <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                Empower your business with cutting-edge solutions that drive growth and innovation.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/login'>
                <Button size='lg'>Get Started →</Button>
              </Link>
              <Button size='lg' variant='outline'>
                Learn More
              </Button>
            </div>
          </div>
          {/* Placeholder for the hero image */}
          <Image
            alt='Hero Image'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
            height='550'
            src='/images/login-image.png'
            width='550'
          />
        </div>
      </div>
    </section>
  )
} 