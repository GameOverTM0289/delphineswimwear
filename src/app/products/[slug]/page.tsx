'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'

const product = {
  id: 1,
  name: 'Aegean Yellow One Piece',
  price: 129,
  description: 'Inspired by the golden shores of the Aegean Sea, this one-piece swimsuit combines timeless elegance with modern sophistication. The sweetheart neckline flatters every figure, while the textured fabric adds depth and dimension.',
  details: [
    'Sweetheart neckline',
    'Textured stretch fabric',
    'Thin adjustable straps',
    'Full back coverage',
    'UPF 50+ sun protection',
    'Made in Italy',
  ],
  care: 'Hand wash cold. Do not bleach. Lay flat to dry. Do not iron.',
  images: [
    'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=1200&q=80',
    'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=1200&q=80',
    'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=1200&q=80',
    'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=1200&q=80',
  ],
  colors: [
    { name: 'Summer Sun', hex: '#FFD700' },
    { name: 'Delphine Red', hex: '#E10600' },
    { name: 'Little Boy Blue', hex: '#6BA4D4' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  slug: 'aegean-yellow-one-piece',
}

const relatedProducts = [
  {
    id: 2,
    name: 'Riviera Red Bikini',
    price: 98,
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    slug: 'riviera-red-bikini',
  },
  {
    id: 3,
    name: 'Mediterranean Blue Set',
    price: 112,
    image: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    slug: 'mediterranean-blue-set',
  },
  {
    id: 4,
    name: 'Santorini Deep V',
    price: 145,
    image: 'https://images.unsplash.com/photo-1606213021798-0ae71d7c8012?w=800&q=80',
    slug: 'santorini-deep-v',
  },
  {
    id: 5,
    name: 'Capri Sport Bikini',
    price: 89,
    image: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    slug: 'capri-sport-bikini',
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('details')
  
  const { addItem, toggleCart } = useCartStore()

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    
    addItem({
      id: `${product.id}-${selectedColor.name}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor.name,
      size: selectedSize,
      quantity,
    })
    
    toggleCart()
  }

  return (
    <>
      <section className="pt-28 pb-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-cream-200">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-cream-200 transition-all ${
                      selectedImage === index ? 'ring-2 ring-midnight' : 'hover:opacity-80'
                    }`}
                  >
                    <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <nav className="text-sm text-midnight/50 mb-6">
                <Link href="/" className="hover:text-midnight">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/shop" className="hover:text-midnight">Shop</Link>
                <span className="mx-2">/</span>
                <span className="text-midnight">{product.name}</span>
              </nav>

              <h1 className="font-display text-4xl md:text-5xl mb-4">{product.name}</h1>
              <p className="text-2xl text-midnight/70 mb-6">€{product.price}</p>
              <div className="divider mb-6" />
              <p className="text-midnight/70 leading-relaxed mb-8">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-8">
                <p className="text-sm font-medium tracking-widest uppercase mb-4">
                  Color: <span className="text-midnight/60">{selectedColor.name}</span>
                </p>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor.name === color.name ? 'border-midnight scale-110' : 'border-cream-400 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium tracking-widest uppercase">Size</p>
                  <Link href="/size-guide" className="text-sm text-delphine-red hover:underline">Size Guide</Link>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-medium tracking-widest transition-all ${
                        selectedSize === size ? 'bg-midnight text-white' : 'bg-cream-200 text-midnight hover:bg-cream-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm font-medium tracking-widest uppercase mb-4">Quantity</p>
                <div className="flex items-center space-x-4">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center bg-cream-200 hover:bg-cream-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center bg-cream-200 hover:bg-cream-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>

              <button onClick={handleAddToCart} className="w-full btn-primary mb-4">
                Add to Cart — €{(product.price * quantity).toFixed(2)}
              </button>

              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Add to Wishlist</span>
              </button>

              {/* Tabs */}
              <div className="mt-12 border-t border-cream-300 pt-8">
                <div className="flex space-x-8 mb-6">
                  {['details', 'care'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm tracking-widest uppercase ${activeTab === tab ? 'text-midnight font-medium' : 'text-midnight/50 hover:text-midnight'}`}
                    >
                      {tab === 'details' ? 'Details' : 'Care'}
                    </button>
                  ))}
                </div>
                {activeTab === 'details' && (
                  <ul className="space-y-2 text-midnight/70">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-delphine-red mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'care' && <p className="text-midnight/70">{product.care}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-cream-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.slug}`} className="group">
                <div className="product-card">
                  <div className="product-card-image">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="product-card-overlay" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg mb-1 group-hover:text-delphine-red transition-colors">{item.name}</h3>
                    <span className="text-midnight/70">€{item.price}</span>
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
