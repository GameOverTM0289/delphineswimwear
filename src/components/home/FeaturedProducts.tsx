'use client'

import Image from 'next/image'
import Link from 'next/link'

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
]

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="tagline mb-4">New Arrivals</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Bestsellers</h2>
          <div className="divider mx-auto" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <div className="product-card">
                {/* Image */}
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
                  
                  {/* Badge */}
                  {product.isNew && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-delphine-red text-white text-xs tracking-widest uppercase">
                      New
                    </span>
                  )}

                  {/* Quick Add */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full py-3 bg-white text-midnight text-xs tracking-widest uppercase hover:bg-midnight hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Details */}
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

        {/* View All */}
        <div className="text-center mt-14">
          <Link href="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
