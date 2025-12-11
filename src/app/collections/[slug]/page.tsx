'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const collections: Record<string, { name: string; description: string; image: string }> = {
  'bikinis': {
    name: 'Bikinis',
    description: 'Two-piece elegance for the modern goddess. Our bikini collection combines Mediterranean sophistication with contemporary design.',
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=1920&q=80',
  },
  'one-pieces': {
    name: 'One Pieces',
    description: 'Timeless silhouettes that embrace and celebrate. Each one-piece is designed to flatter and empower.',
    image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=1920&q=80',
  },
  'cover-ups': {
    name: 'Cover Ups',
    description: 'From beach to bar with effortless grace. Our cover-ups complete your coastal wardrobe.',
    image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1920&q=80',
  },
  'new-arrivals': {
    name: 'New Arrivals',
    description: 'The latest additions to our Mediterranean-inspired collection. Be the first to discover.',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80',
  },
}

const products = [
  {
    id: 1,
    name: 'Aegean Yellow One Piece',
    price: 129,
    image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    colors: ['#FFD700', '#E10600', '#6BA4D4'],
    slug: 'aegean-yellow-one-piece',
    isNew: true,
  },
  {
    id: 2,
    name: 'Riviera Red Bikini',
    price: 98,
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1606213021798-0ae71d7c8012?w=800&q=80',
    colors: ['#E10600', '#1A1A1A'],
    slug: 'riviera-red-bikini',
    isNew: false,
  },
  {
    id: 3,
    name: 'Mediterranean Blue Set',
    price: 112,
    image: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    colors: ['#6BA4D4', '#FFD700'],
    slug: 'mediterranean-blue-set',
    isNew: true,
  },
  {
    id: 4,
    name: 'Amalfi Bandeau Top',
    price: 75,
    image: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    colors: ['#FFD700', '#E10600', '#6BA4D4'],
    slug: 'amalfi-bandeau-top',
    isNew: false,
  },
  {
    id: 5,
    name: 'Santorini Deep V One Piece',
    price: 145,
    image: 'https://images.unsplash.com/photo-1606213021798-0ae71d7c8012?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    colors: ['#E10600', '#1A1A1A', '#F5F5F0'],
    slug: 'santorini-deep-v',
    isNew: false,
  },
  {
    id: 6,
    name: 'Capri Sport Bikini',
    price: 89,
    image: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    colors: ['#FFD700', '#E10600'],
    slug: 'capri-sport-bikini',
    isNew: true,
  },
]

export default function CollectionPage() {
  const params = useParams()
  const slug = params.slug as string
  const collection = collections[slug] || collections['bikinis']

  const [sortBy, setSortBy] = useState('featured')

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="tagline text-white/70 mb-4">Collection</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">{collection.name}</h1>
          <p className="max-w-xl mx-auto text-white/80">{collection.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-12 pb-8 border-b border-cream-300">
            <span className="text-sm text-midnight/60">
              {products.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-cream-200 text-sm border-none focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <div className="product-card">
                  <div className="product-card-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                      src={product.hoverImage}
                      alt={product.name}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="product-card-overlay" />

                    {product.isNew && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-delphine-red text-white text-xs tracking-widest uppercase">
                        New
                      </span>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-full py-3 bg-white text-midnight text-xs tracking-widest uppercase hover:bg-midnight hover:text-white transition-colors">
                        Quick Add
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-display text-lg mb-2 group-hover:text-delphine-red transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-midnight/70">€{product.price}</span>
                      <div className="flex items-center space-x-1">
                        {product.colors.map((color, index) => (
                          <span
                            key={index}
                            className="w-3 h-3 rounded-full border border-cream-400"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
