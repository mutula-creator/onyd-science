'use client'

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-[#094ca2]">Our</span>{' '}
            <span className="text-[#eb1e26]">Direction</span>
          </h2>
        </div>
        
        {/* Vision, Mission, Values grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#094ca2]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#094ca2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-[#094ca2] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading provider of innovative medical technology and biomedical engineering 
              solutions in the region.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#eb1e26]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#eb1e26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-[#eb1e26] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality medical equipment, consumables, and technical services that 
              enhance healthcare efficiency and support better patient outcomes.
            </p>
          </div>
          
          {/* Core Values */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#094ca2]/10 to-[#eb1e26]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#094ca2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium mb-4 bg-gradient-to-r from-[#094ca2] to-[#eb1e26] bg-clip-text text-transparent">
              Core Values
            </h3>
            <ul className="space-y-3">
              {[
                'Integrity',
                'Professionalism', 
                'Innovation',
                'Reliability',
                'Customer Commitment'
              ].map((value, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#094ca2] to-[#eb1e26]"></div>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Subtle hexagon background - matching other sections */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vision-hexagon-pattern" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#vision-hexagon-pattern)" />
        </svg>
      </div>
    </section>
  )
}

export default VisionMission