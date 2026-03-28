'use client'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-[#094ca2]">Contact</span>{' '}
            <span className="text-[#eb1e26]">Information</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Get in touch with us for any inquiries or support
          </p>
        </div>

        {/* Contact cards grid - 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Address */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#094ca2]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-6 h-6 text-[#094ca2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Address</h3>
            <p className="text-gray-600 text-center">Nairobi, Kenya</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#eb1e26]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-6 h-6 text-[#eb1e26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Phone</h3>
            <p className="text-gray-600 text-center">0735111625/0703937930</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#094ca2]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-6 h-6 text-[#094ca2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Email</h3>
            <p className="text-gray-600 text-center">info@onyd.co.ke</p>
          </div>
        </div>
      </div>

      {/* Subtle hexagon background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-hexagon-pattern" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#contact-hexagon-pattern)" />
        </svg>
      </div>
    </section>
  )
}

export default Contact