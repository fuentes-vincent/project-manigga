"use client"

import React from 'react'
import { ThemeToggle } from '@/components/components/theme/ThemeToggle'

export function Header() {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav>
        {/* Navigation items */}
      </nav>
      <div className="flex flex-1 items-right justify-end space-x-2">
        <div className="flex items-right pr-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 