'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const lookbookImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    alt: 'Mediterranean coastline',
    aspectRatio: 'landscape',
    caption: 'Aegean Dreams',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    alt: 'Yellow one piece swimsuit',
    aspectRatio: 'portrait',
    caption: 'Summer Sun Collection',
    product: 'aegean-yellow-one-piece',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80',
    alt: 'Red bikini',
    aspectRatio: 'portrait',
    caption: 'Riviera Red',
    product: 'riviera-red-bikini',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
    alt: 'Crystal clear waters',
    aspectRatio: 'landscape',
    caption: 'Endless Blue',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80',
    alt: 'Blue bikini set',
    aspectRatio: 'portrait',
    caption: 'Little Boy Blue',
    product: 'mediterranean-blue-set',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200&q=80',
    alt: 'Mediterranean architecture',
    aspectRatio: 'landscape',
    caption: 'Coastal Heritage',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1591985866248-5f7f0cd9a9e0?w=800&q=80',
    alt: 'Sport bikini',
    aspectRatio: 'portrait',
    caption: 'Active Spirit',
    product: 'capri-sport-bikini',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1606213021798-0ae71d7c8012?w=800&q=80',
    alt: 'Deep V swimsuit',
    aspectRatio: 'portrait',
    caption: 'Santorini Sunset',
    product: 'santorini-deep-v',
  },
]

export default function LookbookPage() {
  const [selectedImage, setSelectedImage] = useState<typeof lookbookImages[0] | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-200">
        <div className="container-custom text-center">
          <p className="tagline mb-4">Summer 2025</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">Lookbook</h1>
          <p className="text-midnight/60 max-w-xl mx-auto">
            A visual journey through the Mediterranean spirit. Discover the inspiration behind our latest collection.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lookbookImages.map((image) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden cursor-pointer ${
                  image.aspectRatio === 'landscape' ? 'md:col-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className={`relative ${image.aspectRatio === 'landscape' ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="font-display text-2xl md:text-3xl">{image.caption}</p>
                      {image.product && <p className="text-sm tracking-widest uppercase mt-2">Shop Now</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-midnight text-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-delphine-yellow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="font-display text-3xl md:text-4xl italic text-white/90 mb-8">
            "We too, like flowing water, are travellers in search of a sea."
          </blockquote>
          <cite className="tagline text-white/50 not-italic">— Juan Baladan Gadea</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-200 text-center">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Shop the Look</h2>
          <p className="text-midnight/60 mb-10 max-w-xl mx-auto">Bring the Mediterranean spirit into your wardrobe.</p>
          <Link href="/shop" className="btn-primary">Explore Collection</Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={() => setSelectedImage(null)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image src={selectedImage.src} alt={selectedImage.alt} width={1200} height={800} className="object-contain w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="font-display text-2xl text-white">{selectedImage.caption}</p>
              {selectedImage.product && (
                <Link href={`/products/${selectedImage.product}`} className="inline-block mt-3 text-sm text-white/70 hover:text-white tracking-widest uppercase" onClick={(e) => e.stopPropagation()}>
                  Shop This Look →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
