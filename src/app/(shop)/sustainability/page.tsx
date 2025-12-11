import Image from 'next/image';

export default function SustainabilityPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] pt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=1920"
          alt="Ocean waves"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-ocean-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-4 animate-fade-down">
              🌊 Our Commitment
            </span>
            <h1 className="heading-1 mb-4 animate-fade-up">Protecting Our Oceans</h1>
            <p className="body-text-lg text-white/90 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Sustainable swimwear for a better tomorrow
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-6">Our Mission</h2>
          <p className="body-text-lg text-gray-600 leading-relaxed">
            At Delphine, we believe beautiful swimwear shouldn&apos;t come at the cost of our planet.
            We&apos;re committed to sustainable practices throughout our entire production process.
          </p>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Our Sustainability Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '♻️', title: 'Recycled Materials', desc: 'Fabrics made from recycled ocean plastics and post-consumer waste.' },
              { icon: '💧', title: 'Water Conservation', desc: '90% less water than traditional methods.' },
              { icon: '🌱', title: 'Carbon Neutral', desc: '100% carbon offset through verified projects.' },
              { icon: '📦', title: 'Eco Packaging', desc: 'All packaging from recycled materials. No single-use plastics.' },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <span className="text-5xl mb-4 block animate-bounce-soft">{pillar.icon}</span>
                <h3 className="heading-4 mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ocean-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-12">Our Impact So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Plastic bottles recycled' },
              { value: '2,000', label: 'kg of ocean waste collected' },
              { value: '85%', label: 'Less carbon emissions' },
              { value: '100%', label: 'Recyclable packaging' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-display font-bold text-ocean-300 mb-2">{stat.value}</div>
                <div className="text-sm text-ocean-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-8">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['OEKO-TEX', 'Global Recycled Standard', 'PETA Approved Vegan', 'B Corp Certified'].map((cert) => (
              <div key={cert} className="px-6 py-4 border border-gray-200 rounded-xl hover:border-ocean-300 transition-colors">
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
