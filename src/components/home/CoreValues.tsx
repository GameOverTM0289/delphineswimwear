'use client'

import Image from 'next/image'

const values = [
  {
    id: 1,
    name: 'Grace',
    description: 'Delphine embodies a silent, fluid strength. Grace is reflected in every movement, capturing the natural poise of women who move with effortless confidence.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  },
  {
    id: 2,
    name: 'Class',
    description: 'Our pieces embody timeless sophistication. Class isn\'t synonymous with excess, but with understated refinement that remains elegant in every season.',
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&q=80',
  },
  {
    id: 3,
    name: 'Elegance',
    description: 'Elegance is Delphine\'s signature. Each swimsuit is designed to simply flatter the body, enhancing it without distractions.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  },
  {
    id: 4,
    name: 'Mediterranean',
    description: 'Delphine\'s heart beats with the Mediterranean. From the sun-kissed sea to coastal architecture, we integrate the region\'s culture and beauty into every collection.',
    image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&q=80',
  },
  {
    id: 5,
    name: 'Freedom',
    description: 'Each piece is made to move with you. Freedom defines Delphine\'s spirit: the freedom to travel, to express yourself, to live boldly without constraints.',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
  },
  {
    id: 6,
    name: 'Natural',
    description: 'Delphine values authenticity. We embrace raw beauty, organic textures, and a minimalist approach that feels honest and spontaneous.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
]

export default function CoreValues() {
  return (
    <section className="section-padding bg-midnight text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="tagline text-white/50 mb-4">Our Philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Core Values</h2>
          <div className="divider-light mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/60 leading-relaxed">
            At Delphine, we believe that swimwear should be more than just a piece of clothing: 
            it should be a reflection of freedom, beauty, and a life inspired by the sea.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={value.image}
                alt={value.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-display text-3xl md:text-4xl mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {value.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
