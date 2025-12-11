import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Story | Delphine',
  description: 'Discover the story behind Delphine - a swimwear brand born from the heart of the Mediterranean, embodying elegance, freedom, and timeless beauty.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1920&q=80"
          alt="Mediterranean coastline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="tagline text-white/70 mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">The Spirit of</h1>
          <h1 className="font-display text-5xl md:text-7xl italic text-delphine-yellow">Delphine</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-cream-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 border border-midnight/20 mb-10">
              <span className="font-display text-4xl italic text-midnight">Đ</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">Born in the Mediterranean</h2>
            <p className="text-lg md:text-xl text-midnight/70 leading-relaxed mb-6">
              Delphine is a swimwear brand inspired by the enchanting beauty of the Mediterranean Sea. 
              Rooted in the region's rich culture, history, and natural wonders, Delphine brings the 
              essence of Mediterranean elegance to the world of fashion.
            </p>
            <p className="text-lg md:text-xl text-midnight/70 leading-relaxed">
              Our designs capture the warmth of the sun, the gentle sea breeze, and the effortless 
              sophistication of coastal living. Delphine is more than just a swimsuit: it's a statement 
              of grace, class, and freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80"
                alt="Mediterranean sea"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="tagline mb-4">Our Philosophy</p>
              <h2 className="font-display text-4xl md:text-5xl mb-8">Where Simplicity Meets Depth</h2>
              <div className="divider mb-8" />
              <p className="text-midnight/70 leading-relaxed mb-6">
                At Delphine, we believe that swimwear should be more than just a piece of clothing: 
                it should be a reflection of freedom, beauty, and a life inspired by the sea.
              </p>
              <p className="text-midnight/70 leading-relaxed mb-6">
                Our philosophy draws inspiration from the Mediterranean spirit, where simplicity meets 
                depth, nature informs design, and confidence is expressed through delicacy.
              </p>
              <p className="text-midnight/70 leading-relaxed">
                We see luxury in the small details: the touch of fabric on sun-warmed skin, the harmony 
                of lines and shapes, and the calm elegance of pieces that transcend passing trends. 
                Each creation is a celebration of living slowly and beautifully, embodying the soul of 
                the Mediterranean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-delphine-red text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="tagline text-white/70 mb-4">Our Mission</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              To translate the beauty and spirit of the Mediterranean into refined swimwear
            </h2>
            <div className="w-16 h-px bg-white/50 mx-auto mb-8" />
            <p className="text-xl text-white/80 leading-relaxed">
              We create garments that combine quality and comfort with a sense of freedom, designed to 
              enhance natural beauty and accompany women with confidence at every moment by the sea.
            </p>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="section-padding bg-cream-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="tagline mb-4">The Name</p>
              <h2 className="font-display text-4xl md:text-5xl mb-8">Delphine</h2>
              <div className="divider mb-8" />
              <p className="text-midnight/70 leading-relaxed mb-6">
                The name Delphine was born from the desire to create a brand that embodied the charm, 
                elegance, and inner strength of women.
              </p>
              <p className="text-midnight/70 leading-relaxed mb-6">
                In French, this name expresses finesse and stability, while in Greek mythology it is 
                associated with Delphi, the center of the world, a symbol of mystery and discovery.
              </p>
              <p className="text-midnight/70 leading-relaxed">
                Another source of inspiration is the dolphin, a symbol of freedom, playfulness, and 
                closeness to the Mediterranean Sea. Like this symbol, Delphine embodies the gentleness, 
                charm, and enigmatic power of the sea, transforming swimwear into a true icon of elegance 
                and sensuality.
              </p>
            </div>
            <div className="relative aspect-[4/5] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                alt="Dolphin symbolism"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Symbolism */}
      <section className="section-padding bg-midnight text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="tagline text-white/50 mb-4">Symbolism</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8">The Dolphin</h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
            <p className="text-xl text-white/70 leading-relaxed mb-6">
              The dolphin is more than just an emblem: it represents luck, freedom, and a deep connection 
              with the sea. Throughout history, dolphins have been seen as protectors of sailors and symbols 
              of intelligence, grace, and harmony.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              Delphine embraces this powerful symbolism, offering not just swimwear, but a lifestyle that 
              embraces the boundless beauty of the Mediterranean and its spirit of adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-cream-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-8 text-delphine-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="quote mb-8">
              "We too, like flowing water, are travellers in search of a sea."
            </blockquote>
            <cite className="tagline not-italic">— Juan Baladan Gadea</cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Dive In?</h2>
          <p className="text-midnight/60 mb-10 max-w-xl mx-auto">
            Explore our collection and find the perfect piece to accompany your Mediterranean adventures.
          </p>
          <Link href="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  )
}
