'use client'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Section header - no line */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-[#094ca2]">Company</span>{' '}
            <span className="text-[#eb1e26]">Overview</span>
          </h2>
        </div>
        
        {/* Company description - left aligned, clean typography */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Onyd Science Limited is a healthcare technology company specializing in the supply of 
              medical devices, laboratory consumables, and biomedical engineering technical services.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We support hospitals, laboratories, clinics, and healthcare institutions by delivering 
              reliable medical technology solutions that improve diagnostic efficiency and patient care.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Through strong technical expertise and commitment to quality, Onyd Science Limited ensures 
              healthcare facilities maintain optimal equipment performance and operational reliability.
            </p>
          </div>
          
          {/* Why Choose Us box */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-medium text-[#094ca2] mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  'ISO Certified Quality Management',
                  'Expert Biomedical Engineering Team',
                  'Comprehensive Product Range',
                  'Competitive Pricing',
                  'Nationwide Coverage'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#eb1e26] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About