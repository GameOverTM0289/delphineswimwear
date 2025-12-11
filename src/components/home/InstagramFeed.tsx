'use client'

import Image from 'next/image'

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    likes: 1243,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=400&q=80',
    likes: 892,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=400&q=80',
    likes: 1567,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80',
    likes: 2103,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    likes: 756,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=400&q=80',
    likes: 1834,
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      {/* Header */}
      <div className="container-custom text-center mb-12">
        <p className="tagline mb-4">Follow Us</p>
        <h2 className="font-display text-4xl md:text-5xl mb-4">@delphine</h2>
        <p className="text-midnight/60">Join our community of free spirits</p>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com/delphine"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={post.image}
              alt="Instagram post"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-delphine-red/0 group-hover:bg-delphine-red/80 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">{post.likes.toLocaleString()}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
