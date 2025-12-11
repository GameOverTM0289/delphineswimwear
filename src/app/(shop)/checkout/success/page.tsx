import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const orderNumber = `DLP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-ocean-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="heading-2 mb-4 animate-fade-up">Order Confirmed!</h1>
        
        <p className="text-gray-600 mb-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Thank you for your order.
        </p>
        <p className="text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          We&apos;ve sent a confirmation to your email.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-gray-500 mb-1">Order Number</p>
          <p className="font-mono text-lg font-medium">{orderNumber}</p>
        </div>

        <div className="text-left bg-ocean-50 p-6 rounded-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          <h3 className="font-medium mb-4">What&apos;s Next?</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-ocean-500">📧</span>
              <span>You&apos;ll receive an order confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-500">📦</span>
              <span>We&apos;ll notify you when your order ships</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-500">🚚</span>
              <span>Track your delivery with the link in your email</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Link href="/shop" className="btn-primary flex-1">Continue Shopping</Link>
          <Link href="/account" className="btn-outline flex-1">View Orders</Link>
        </div>
      </div>
    </section>
  );
}
