'use client'

import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

type ComparisonFeature = {
  feature: string
  starter: string
  professional: string
  enterprise: string
}

interface ComparisonTableProps {
  features: ComparisonFeature[]
}

export function ComparisonTable({ features }: ComparisonTableProps) {
  return (
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
            {features.map((item, index) => (
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
  )
} 