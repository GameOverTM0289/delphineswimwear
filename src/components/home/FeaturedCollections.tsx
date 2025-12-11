'use client'

import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    id: 1,
    name: 'Bikinis',
    description: 'Two-piece elegance',
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    slug: 'bikinis',
    count: 24,
  },
  {
    id: 2,
    name: 'One Pieces',
    description: 'Timeless silhouettes',
    image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    slug: 'one-pieces',
    count: 18,
  },
  {
    id: 3,
    name: 'Cover Ups',
    description: 'Beach to bar',
    image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80',
    slug: 'cover-ups',
    count: 12,
  },
]

export default function FeaturedCollections() {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="tagline mb-4">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Collections</h2>
          <div className="divider mx-auto" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Image */}
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
                  {collection.count} Styles
                </p>
                <h3 className="font-display text-4xl md:text-5xl mb-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {collection.name}
                </h3>
                <p className="text-white/70 mb-6">{collection.description}</p>
                <span className="inline-flex items-center text-xs tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
