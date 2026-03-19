'use client'

import { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Company Name with Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 relative mr-2">
              {!logoError ? (
                <Image
                  src="/images/onyd-logo.jpg" // Make sure extension matches your file
                  alt="Onyd Science Logo"
                  fill
                  className="object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                // Fallback if image doesn't load
                <div className="w-full h-full bg-gradient-to-r from-[#eb1e26] to-[#094ca2] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  OS
                </div>
              )}
            </div>
            <span className="text-base font-medium">
              <span style={{ color: '#094ca2' }}>Onyd</span>{' '}
              <span style={{ color: '#eb1e26' }}>Science</span>
            </span>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} Onyd Science Limited. All rights reserved.
          </div>
        </div>
      </div>

      {/* Subtle hexagon background - very faint */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-3">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-hexagon-pattern" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z" 
                    fill="none" 
                    stroke="#999999" 
                    strokeWidth="0.3"/>
              <path d="M28 64 L56 48 L56 80 L28 96 L0 80 L0 48 Z" 
                    fill="none" 
                    stroke="#999999" 
                    strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-hexagon-pattern)" />
        </svg>
      </div>
    </footer>
  )
}

export default Footer