'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/components/theme/ThemeToggle'

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center mx-auto px-4 md:px-6'>
        <a href='#' className='mr-6 flex items-center space-x-2'>
          {/* Replace with actual logo if available */}
          <div className='w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>
            M
          </div>
          <span className='font-bold'>Manigga</span>
        </a>
        <nav className='hidden flex-1 gap-6 text-sm font-medium md:flex'>
          <a href='#' className='transition-colors hover:text-foreground/80 text-foreground/60'>
            Products
          </a>
          <a href='#' className='transition-colors hover:text-foreground/80 text-foreground/60'>
            Features
          </a>
          <a href='#' className='transition-colors hover:text-foreground/80 text-foreground/60'>
            Resources
          </a>
          <a href='/pricing' className='transition-colors hover:text-foreground/80 text-foreground/60'>
            Pricing
          </a>
        </nav>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <ThemeToggle />
          <Link href='/login'>
            <Button>Get Started</Button>
          </Link>
          {/* Add mobile menu button here if needed */}
        </div>
      </div>
    </header>
  )
} 