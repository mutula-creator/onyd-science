'use client'

import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-24 lg:pt-28">
      {/* Background Image with low opacity - flipped horizontally */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-hero.jpg"
          alt="Medical background"
          fill
          className="object-cover scale-x-[-1]" // This flips the image horizontally
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#094ca2]/30 via-transparent to-[#eb1e26]/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="max-w-3xl">
          {/* Company name - white text for contrast against image */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 text-white" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-white">Onyd Science</span>{' '}
            <span className="text-white">Limited</span>
          </h1>
          
          {/* Description - white text */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            We help healthcare providers deliver better care by supplying reliable medical devices, 
            quality lab consumables, and hands-on biomedical engineering support.
          </p>
          
          {/* CTA Buttons - Our Products first, then Contact Us */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('products')}
              className="group bg-white text-[#094ca2] px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Our Products
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-transparent text-white px-8 py-4 rounded-full text-base font-medium border-2 border-white hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero