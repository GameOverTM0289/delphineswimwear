export default function ShippingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ocean-50 to-white pt-32 pb-16">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4 animate-fade-down">
            🚚 Delivery
          </span>
          <h1 className="heading-1 mb-4 animate-fade-up">Shipping Information</h1>
          <p className="body-text-lg text-gray-600 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fast, reliable shipping to get your swimwear to you in time for your next adventure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="mb-16">
            <h2 className="heading-3 mb-8 text-center">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-2xl hover:border-ocean-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="font-medium mb-2">Standard Shipping</h3>
                <p className="text-2xl font-bold text-ocean-600 mb-2">€8.99</p>
                <p className="text-sm text-gray-500">5-7 business days</p>
                <p className="text-xs text-gray-400 mt-2">Free on orders over €100</p>
              </div>
              <div className="p-6 border-2 border-ocean-500 rounded-2xl shadow-lg relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-ocean-500 text-white text-xs font-medium rounded-full">Popular</span>
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-medium mb-2">Express Shipping</h3>
                <p className="text-2xl font-bold text-ocean-600 mb-2">€15.99</p>
                <p className="text-sm text-gray-500">2-3 business days</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-2xl hover:border-ocean-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="font-medium mb-2">International</h3>
                <p className="text-2xl font-bold text-ocean-600 mb-2">€24.99</p>
                <p className="text-sm text-gray-500">7-14 business days</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-3 mb-6">Delivery Areas</h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Albania', 'Kosovo', 'North Macedonia', 'Montenegro', 'Greece', 'Italy', 'Germany', 'UK', 'France', 'Austria', 'Switzerland', 'USA'].map((country) => (
                  <div key={country} className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
