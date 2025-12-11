import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/home/HeroSlider';
import ProductCard from '@/components/product/ProductCard';
import prisma from '@/lib/db/prisma';
import { getImageUrl } from '@/lib/utils';

async function getHomeData() {
  const [slides, featuredProducts, collections] = await Promise.all([
    prisma.heroSlide.findMany({
      where: { isActive: true },
      orderBy: { position: 'asc' },
    }),
    prisma.product.findMany({
      where: { featured: true, isActive: true },
      include: {
        images: true,
        variants: true,
      },
      take: 8,
    }),
    prisma.collection.findMany({
      where: { featured: true, isActive: true },
      take: 3,
    }),
  ]);

  return { slides, featuredProducts, collections };
}

export default async function HomePage() {
  const { slides, featuredProducts, collections } = await getHomeData();

  // Default slides if none in DB
  const heroSlides = slides.length > 0 ? slides : [
    {
      id: '1',
      title: 'Summer 2024',
      subtitle: 'New Collection',
      description: 'Discover our latest Mediterranean-inspired collection',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
      image: '/images/hero/slide-1.jpg',
    },
    {
      id: '2',
      title: 'Timeless Elegance',
      subtitle: 'One Pieces',
      description: 'Sophisticated silhouettes for every occasion',
      buttonText: 'Explore',
      buttonLink: '/collections/one-pieces',
      image: '/images/hero/slide-2.jpg',
    },
  ];

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Featured Products */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] uppercase text-ocean-500">Curated Selection</span>
            <h2 className="heading-2 mt-3">Featured Pieces</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      {collections.length > 0 && (
        <section className="section bg-cream-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-sm tracking-[0.3em] uppercase text-ocean-500">Explore</span>
              <h2 className="heading-2 mt-3">Our Collections</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.slug}`}
                  className="group relative aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={getImageUrl(collection.image || '')}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white">
                    <h3 className="heading-3 text-center mb-2">{collection.name}</h3>
                    <span className="btn-outline-white btn-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brand Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
                alt="Mediterranean coastline"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <span className="text-sm tracking-[0.3em] uppercase text-ocean-500">Our Story</span>
              <h2 className="heading-2 mt-3 mb-6">Born by the Sea</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Delphine was born from a love of the Mediterranean—its crystal-clear waters, 
                  sun-drenched coastlines, and timeless elegance.
                </p>
                <p>
                  Our name comes from the Greek word for dolphin, symbolizing grace, 
                  intelligence, and the joy of moving freely through water.
                </p>
                <p>
                  Each piece is crafted to make you feel confident, comfortable, 
                  and connected to the beauty of the sea.
                </p>
              </div>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-4">Join the Delphine Family</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Subscribe for exclusive offers, new arrivals, and Mediterranean inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-ocean-400"
            />
            <button type="submit" className="btn-ocean px-8">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
