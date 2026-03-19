'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['About', 'Products', 'Services', 'Contact']

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with actual image */}
          <div className="flex items-center">
            <div className="w-10 h-10 relative mr-3">
              <Image
                src="/images/onyd-logo.jpg"
                alt="Onyd Science Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-5">
                <span style={{ color: '#094ca2' }}>Onyd</span>{' '}
                <span style={{ color: '#eb1e26' }}>Science</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu - with proper dark text for visibility */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#094ca2] transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <button 
              className="bg-[#094ca2] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#094ca2]/90 transition-all duration-200 hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#094ca2]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-[#094ca2] transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-[#094ca2] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#094ca2]/90 transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar