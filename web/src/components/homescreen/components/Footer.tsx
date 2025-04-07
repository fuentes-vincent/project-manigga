'use client'

import React from 'react'

export function Footer() {
  return (
    <footer className='py-12 px-4 md:px-6 bg-gray-900 dark:bg-black text-gray-400'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
           <div className='flex items-center space-x-2 mb-4'>
              {/* Replace with actual logo if available */}
              <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>
                M
              </div>
              <span className='font-semibold text-lg text-white'>Manigga</span>
           </div>
          <p className='text-sm'>Building the future of business technology.</p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className='font-semibold text-white mb-4'>Product</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href='#' className='hover:text-white'>Features</a></li>
            <li><a href='#' className='hover:text-white'>Solutions</a></li>
            <li><a href='#' className='hover:text-white'>Pricing</a></li>
            <li><a href='#' className='hover:text-white'>Updates</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className='font-semibold text-white mb-4'>Company</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href='#' className='hover:text-white'>About</a></li>
            <li><a href='#' className='hover:text-white'>Careers</a></li>
            <li><a href='#' className='hover:text-white'>Blog</a></li>
            <li><a href='#' className='hover:text-white'>Press</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className='font-semibold text-white mb-4'>Resources</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href='#' className='hover:text-white'>Documentation</a></li>
            <li><a href='#' className='hover:text-white'>Support</a></li>
            <li><a href='#' className='hover:text-white'>API</a></li>
            <li><a href='#' className='hover:text-white'>Community</a></li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className='container mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm'>
        <p>© {new Date().getFullYear()} Platform, Inc. All rights reserved.</p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='#' className='hover:text-white'>Terms</a>
          <a href='#' className='hover:text-white'>Privacy</a>
          <a href='#' className='hover:text-white'>Cookies</a>
        </div>
      </div>
    </footer>
  )
} 