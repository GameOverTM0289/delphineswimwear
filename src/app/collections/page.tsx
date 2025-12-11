import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Collections | Delphine',
  description: 'Explore our Mediterranean-inspired swimwear collections.',
}

const collections = [
  { id: 1, name: 'Bikinis', description: 'Two-piece elegance', image: 'https://images.unsplash.com/photo-1583308458529-b0fa2a73ec6b?w=800&q=80', slug: 'bikinis', count: 24 },
  { id: 2, name: 'One Pieces', description: 'Timeless silhouettes', image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80', slug: 'one-pieces', count: 18 },
  { id: 3, name: 'Cover Ups', description: 'Beach to bar', image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80', slug: 'cover-ups', count: 12 },
  { id: 4, name: 'New Arrivals', description: 'Latest additions', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80', slug: 'new-arrivals', count: 8 },
]

export default function CollectionsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream-200">
        <div className="container-custom text-center">
          <p className="tagline mb-4">Explore</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">Collections</h1>
          <p className="text-midnight/60 max-w-xl mx-auto">Discover our Mediterranean-inspired swimwear.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.slug}`} className="group relative aspect-[4/5] overflow-hidden">
                <Image src={collection.image} alt={collection.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">{collection.count} Styles</p>
                  <h2 className="font-display text-5xl md:text-6xl mb-3">{collection.name}</h2>
                  <p className="text-white/70 mb-6">{collection.description}</p>
                  <span className="inline-flex items-center text-xs tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
