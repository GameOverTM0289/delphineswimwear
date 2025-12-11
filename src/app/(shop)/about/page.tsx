import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] pt-20">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
          alt="Mediterranean coastline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-sm tracking-[0.3em] uppercase opacity-80">Our Story</span>
            <h1 className="heading-1 mt-2">About Delphine</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-ocean-500">Since 2020</span>
              <h2 className="heading-2 mt-3 mb-6">Born by the Mediterranean Sea</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Delphine was born from a deep love of the Mediterranean—its crystal-clear waters, 
                  sun-drenched coastlines, and the timeless elegance that defines its culture.
                </p>
                <p>
                  Our name comes from the Greek word for dolphin, a creature that embodies grace, 
                  intelligence, and the pure joy of moving freely through water.
                </p>
                <p>
                  We believe swimwear should make you feel confident, comfortable, and connected 
                  to the natural beauty of the sea. Every piece in our collection is designed with 
                  this philosophy in mind.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800"
                alt="Beach scene"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] uppercase text-ocean-500">Our Values</span>
            <h2 className="heading-2 mt-3">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Sustainability',
                description: 'We use eco-friendly materials and sustainable production methods to minimize our environmental impact.',
              },
              {
                icon: '✨',
                title: 'Quality',
                description: 'Every piece is crafted with premium fabrics and attention to detail for lasting comfort and style.',
              },
              {
                icon: '💜',
                title: 'Inclusivity',
                description: 'Our designs celebrate all body types, because everyone deserves to feel beautiful by the sea.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-white rounded-lg">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="heading-4 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-4">Ready to dive in?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Explore our collection and find your perfect piece for your next Mediterranean escape.
          </p>
          <Link href="/shop" className="btn-primary">
            Shop Collection
          </Link>
        </div>
      </section>
    </>
  );
}
