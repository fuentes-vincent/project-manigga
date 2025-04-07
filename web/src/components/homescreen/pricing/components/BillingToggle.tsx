'use client'

import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface BillingToggleProps {
  billingCycle: 'monthly' | 'annually'
  setBillingCycle: (value: 'monthly' | 'annually') => void
}

export function BillingToggle({ billingCycle, setBillingCycle }: BillingToggleProps) {
  return (
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
  )
} 