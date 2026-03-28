'use client'

const Clients = () => {
  const clientCategories = [
    {
      title: 'Hospitals',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Public and private hospitals across the region'
    },
    {
      title: 'Medical Laboratories',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Diagnostic and research laboratories'
    },
    {
      title: 'Diagnostic Centers',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      description: 'Imaging and diagnostic facilities'
    },
    {
      title: 'Clinics',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      description: 'Specialized and general practice clinics'
    },
    {
      title: 'Research Institutions',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Universities and research organizations'
    }
  ]

  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      {/* Subtle radial gradient - red center fading to blue edges (same as products section) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#eb1e26_0%,_#094ca2_80%)] opacity-30"></div>
      
      {/* Soft white overlay to tone it down */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-[#094ca2]">Our</span>{' '}
            <span className="text-[#eb1e26]">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We serve a diverse range of healthcare institutions across the region
          </p>
        </div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clientCategories.map((client, index) => (
            <div key={index} className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg border border-gray-200">
                <span className="text-[#094ca2] group-hover:text-[#eb1e26] transition-colors duration-300">
                  {client.icon}
                </span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{client.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 relative shadow-lg">
            {/* Quote icon */}
            <svg className="absolute top-6 left-6 w-12 h-12 text-[#094ca2]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <div className="relative z-10 text-center">
              <p className="text-xl text-gray-700 italic mb-6 max-w-2xl mx-auto">
                "Onyd Science Limited has been instrumental in equipping our laboratory with state-of-the-art 
                diagnostic equipment. Their technical support team is exceptional."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#094ca2] to-[#eb1e26] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SJ
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Dr. Sarah Mwangi</p>
                  <p className="text-sm text-gray-600">Director, Blessed Hearts Medical Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients