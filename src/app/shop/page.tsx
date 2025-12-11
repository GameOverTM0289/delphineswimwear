'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const allProducts = [
  {
    id: 1,
    name: 'Aegean Yellow One Piece',
    price: 129,
    image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    colors: ['#FFD700', '#E10600', '#6BA4D4'],
    slug: 'aegean-yellow-one-piece',
    category: 'one-pieces',
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: 'Riviera Red Bikini',
    price: 98,
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1606213021798-0ae71d7c8012?w=800&q=80',
    colors: ['#E10600', '#1A1A1A'],
    slug: 'riviera-red-bikini',
    category: 'bikinis',
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: 'Mediterranean Blue Set',
    price: 112,
    image: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    colors: ['#6BA4D4', '#FFD700'],
    slug: 'mediterranean-blue-set',
    category: 'bikinis',
    isNew: true,
    isBestseller: false,
  },
  {
    id: 4,
    name: 'Amalfi Bandeau Top',
    price: 75,
    image: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    colors: ['#FFD700', '#E10600', '#6BA4D4'],
    slug: 'amalfi-bandeau-top',
    category: 'bikinis',
    isNew: false,
    isBestseller: false,
  },
  {
    id: 5,
    name: 'Santorini Deep V One Piece',
    price: 145,
    image: 'https://images.unsplash.com/photo-1606213021798-0ae71d7c8012?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    colors: ['#E10600', '#1A1A1A', '#F5F5F0'],
    slug: 'santorini-deep-v',
    category: 'one-pieces',
    isNew: false,
    isBestseller: true,
  },
  {
    id: 6,
    name: 'Capri Sport Bikini',
    price: 89,
    image: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    colors: ['#FFD700', '#E10600'],
    slug: 'capri-sport-bikini',
    category: 'bikinis',
    isNew: true,
    isBestseller: false,
  },
  {
    id: 7,
    name: 'Mykonos Wrap Cover Up',
    price: 85,
    image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    colors: ['#F5F5F0', '#6BA4D4'],
    slug: 'mykonos-wrap-cover-up',
    category: 'cover-ups',
    isNew: false,
    isBestseller: false,
  },
  {
    id: 8,
    name: 'Positano High Waist Set',
    price: 118,
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    colors: ['#E10600', '#6BA4D4', '#FFD700'],
    slug: 'positano-high-waist-set',
    category: 'bikinis',
    isNew: false,
    isBestseller: true,
  },
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'bikinis', name: 'Bikinis' },
  { id: 'one-pieces', name: 'One Pieces' },
  { id: 'cover-ups', name: 'Cover Ups' },
]

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = allProducts
    .filter((product) => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        default:
          return a.isBestseller === b.isBestseller ? 0 : a.isBestseller ? -1 : 1
      }
    })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-200">
        <div className="container-custom text-center">
          <p className="tagline mb-4">Explore</p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Shop All</h1>
          <p className="text-midnight/60 max-w-xl mx-auto">
            Discover our complete collection of Mediterranean-inspired swimwear, crafted for elegance and freedom.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-cream-300">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-midnight text-white'
                      : 'bg-cream-200 text-midnight hover:bg-cream-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort & Filter Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-midnight/60">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-cream-200 text-sm border-none focus:outline-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="px-3 py-1 bg-delphine-red text-white text-xs tracking-widest uppercase">
                          New
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="px-3 py-1 bg-midnight text-white text-xs tracking-widest uppercase">
                          Bestseller
                        </span>
                      )}
                    </div>

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

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="btn-secondary">
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
