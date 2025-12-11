export default function ReturnsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-coral-50 to-white pt-32 pb-16">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1 bg-coral-100 text-coral-700 rounded-full text-sm font-medium mb-4 animate-fade-down">
            ↩️ Easy Returns
          </span>
          <h1 className="heading-1 mb-4 animate-fade-up">Returns & Exchanges</h1>
          <p className="body-text-lg text-gray-600 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Not the perfect fit? No worries. We make returns simple.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-cream-50 rounded-2xl">
              <span className="text-4xl mb-4 block">📅</span>
              <h3 className="font-medium mb-2">14 Days</h3>
              <p className="text-sm text-gray-600">Return window from delivery</p>
            </div>
            <div className="text-center p-6 bg-cream-50 rounded-2xl">
              <span className="text-4xl mb-4 block">💰</span>
              <h3 className="font-medium mb-2">Free Returns</h3>
              <p className="text-sm text-gray-600">On all Albanian orders</p>
            </div>
            <div className="text-center p-6 bg-cream-50 rounded-2xl">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="font-medium mb-2">Easy Exchange</h3>
              <p className="text-sm text-gray-600">Different size? We&apos;ll swap it</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-3 mb-8 text-center">How to Return</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Start Your Return', desc: 'Log into your account and select the items you wish to return.' },
                { step: '2', title: 'Pack Your Items', desc: 'Place items in original packaging with tags attached.' },
                { step: '3', title: 'Ship It Back', desc: 'Use the prepaid label or ship via your preferred carrier.' },
                { step: '4', title: 'Get Refunded', desc: 'Refunds processed within 3-5 business days.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-ocean-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-medium mb-4 text-green-700">✓ We Accept</h3>
            <ul className="space-y-2 mb-6 text-sm text-gray-600">
              <li>• Unworn items with all tags attached</li>
              <li>• Items with hygiene liner intact (swimwear)</li>
              <li>• Items in original packaging</li>
            </ul>
            <h3 className="font-medium mb-4 text-red-700">✗ We Cannot Accept</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Items worn, washed, or altered</li>
              <li>• Swimwear without hygiene liner</li>
              <li>• Sale items marked as final sale</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
