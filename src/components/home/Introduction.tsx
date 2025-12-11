'use client'

import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Monogram */}
          <div className="inline-flex items-center justify-center w-20 h-20 border border-midnight/20 mb-10">
            <span className="font-display text-4xl italic text-midnight">Đ</span>
          </div>

          {/* Quote */}
          <blockquote className="mb-10">
            <p className="quote mb-6">
              "We too, like flowing water, are travellers in search of a sea."
            </p>
            <cite className="tagline not-italic">— Juan Baladan Gadea</cite>
          </blockquote>

          {/* Divider */}
          <div className="divider mx-auto mb-10" />

          {/* Description */}
          <p className="text-lg md:text-xl text-midnight/70 leading-relaxed mb-8">
            Delphine is a swimwear brand inspired by the enchanting beauty of the Mediterranean Sea. 
            Rooted in the region's rich culture, history, and natural wonders, Delphine brings the 
            essence of Mediterranean elegance to the world of fashion.
          </p>

          <p className="text-lg md:text-xl text-midnight/70 leading-relaxed mb-10">
            Our designs capture the warmth of the sun, the gentle sea breeze, and the effortless 
            sophistication of coastal living. Delphine is more than just a swimsuit: it's a statement 
            of grace, class, and freedom.
          </p>

          <Link href="/about" className="btn-secondary">
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
