'use client'

import Image from 'next/image'

const Products = () => {
  const productCategories = [
    {
      title: 'Medical Devices',
      imageSrc: '/images/medical-devices.jpg',
      items: [
        'Hematology analyzers',
        'Clinical chemistry analyzers',
        'Immunoassay analyzers',
        'Ultrasound systems',
        'Diagnostic equipment'
      ]
    },
    {
      title: 'Laboratory Consumables',
      imageSrc: '/images/lab-consumables.jpg',
      items: [
        'Vacutainer tubes',
        'Sample collection materials',
        'Laboratory plastics',
        'Reagents'
      ]
    },
    {
      title: 'Medical Supplies',
      imageSrc: '/images/medical-supplies.jpg',
      items: [
        'Gloves',
        'Syringes',
        'Infection control supplies',
        'General hospital consumables'
      ]
    }
  ]

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Subtle radial gradient - red center fading to blue edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#eb1e26_0%,_#094ca2_80%)] opacity-30"></div>
      
      {/* Additional soft overlay to tone it down */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium mb-2 text-[#094ca2]" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-[#094ca2]">Our</span>{' '}
            <span className="text-[#eb1e26]">Products</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We supply a wide range of healthcare products including:
          </p>
        </div>

        {/* Products grid - clean white cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-4 text-[#094ca2]">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#eb1e26]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products