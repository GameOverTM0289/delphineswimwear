import Link from 'next/link'

export const metadata = {
  title: 'Size Guide | Delphine',
  description: 'Find your perfect fit with our comprehensive swimwear size guide.',
}

const sizeChart = [
  { size: 'XS', bust: '80-84', waist: '60-64', hips: '86-90', eu: '34', uk: '6', us: '2' },
  { size: 'S', bust: '84-88', waist: '64-68', hips: '90-94', eu: '36', uk: '8', us: '4' },
  { size: 'M', bust: '88-92', waist: '68-72', hips: '94-98', eu: '38', uk: '10', us: '6' },
  { size: 'L', bust: '92-96', waist: '72-76', hips: '98-102', eu: '40', uk: '12', us: '8' },
  { size: 'XL', bust: '96-100', waist: '76-80', hips: '102-106', eu: '42', uk: '14', us: '10' },
]

export default function SizeGuidePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream-200">
        <div className="container-custom text-center">
          <p className="tagline mb-4">Find Your Fit</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">Size Guide</h1>
          <p className="text-midnight/60 max-w-xl mx-auto">Use our comprehensive size guide to find your perfect Delphine fit.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <h2 className="font-display text-3xl mb-8 text-center">How to Measure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-cream-200">
                <div className="w-16 h-16 bg-delphine-red rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-white font-display text-2xl">1</span></div>
                <h3 className="font-display text-xl mb-2">Bust</h3>
                <p className="text-sm text-midnight/70">Measure around the fullest part of your bust.</p>
              </div>
              <div className="text-center p-6 bg-cream-200">
                <div className="w-16 h-16 bg-delphine-red rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-white font-display text-2xl">2</span></div>
                <h3 className="font-display text-xl mb-2">Waist</h3>
                <p className="text-sm text-midnight/70">Measure around the narrowest part of your waistline.</p>
              </div>
              <div className="text-center p-6 bg-cream-200">
                <div className="w-16 h-16 bg-delphine-red rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-white font-display text-2xl">3</span></div>
                <h3 className="font-display text-xl mb-2">Hips</h3>
                <p className="text-sm text-midnight/70">Measure around the fullest part of your hips.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl mb-8 text-center">Size Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-midnight text-white"><th className="px-4 py-3 text-left font-medium tracking-widest uppercase">Size</th><th className="px-4 py-3 text-center font-medium tracking-widest uppercase">Bust (cm)</th><th className="px-4 py-3 text-center font-medium tracking-widest uppercase">Waist (cm)</th><th className="px-4 py-3 text-center font-medium tracking-widest uppercase">Hips (cm)</th><th className="px-4 py-3 text-center font-medium tracking-widest uppercase">EU</th><th className="px-4 py-3 text-center font-medium tracking-widest uppercase">UK</th><th className="px-4 py-3 text-center font-medium tracking-widest uppercase">US</th></tr></thead>
                <tbody>
                  {sizeChart.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? 'bg-cream-100' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium">{row.size}</td>
                      <td className="px-4 py-3 text-center text-midnight/70">{row.bust}</td>
                      <td className="px-4 py-3 text-center text-midnight/70">{row.waist}</td>
                      <td className="px-4 py-3 text-center text-midnight/70">{row.hips}</td>
                      <td className="px-4 py-3 text-center text-midnight/70">{row.eu}</td>
                      <td className="px-4 py-3 text-center text-midnight/70">{row.uk}</td>
                      <td className="px-4 py-3 text-center text-midnight/70">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-cream-200 p-8">
            <h2 className="font-display text-2xl mb-6">Fit Tips</h2>
            <ul className="space-y-3 text-midnight/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-delphine-red mt-2 flex-shrink-0" /><span>If between sizes, size up for bikinis and size down for one-pieces.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-delphine-red mt-2 flex-shrink-0" /><span>Our swimwear is designed with stretch fabric that molds to your body.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-delphine-red mt-2 flex-shrink-0" /><span>Take measurements without clothing for most accurate fit.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-delphine-red mt-2 flex-shrink-0" /><span>Still unsure? Contact us for personalized fitting advice.</span></li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <p className="text-midnight/60 mb-4">Need help finding your size?</p>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
