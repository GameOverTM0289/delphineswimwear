'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cart';
import { formatPrice, SHIPPING, TAX_RATE, getImageUrl } from '@/lib/utils';

export default function CheckoutPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  useEffect(() => {
    setMounted(true);
    useCartStore.persist.rehydrate();
    if (session?.user) {
      setFormData((prev) => ({
        ...prev,
        email: session.user.email || '',
        firstName: session.user.firstName || '',
        lastName: session.user.lastName || '',
      }));
    }
  }, [session]);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const shipping = shippingMethod === 'express' ? SHIPPING.EXPRESS : (subtotal >= SHIPPING.FREE_THRESHOLD ? 0 : SHIPPING.STANDARD);
  const tax = (subtotal + shipping) * TAX_RATE;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <section className="section pt-32">
        <div className="container-narrow text-center">
          <div className="animate-bounce-soft mb-6">
            <span className="text-8xl">🛒</span>
          </div>
          <h1 className="heading-2 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some beautiful swimwear to get started.</p>
          <Link href="/shop" className="btn-primary">Browse Collection</Link>
        </div>
      </section>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    clearCart();
    router.push('/checkout/success');
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <Link href="/shop" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Continue Shopping
          </Link>
          <Link href="/" className="font-display text-xl">Delphine</Link>
          <div className="w-24" />
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="heading-4 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-ocean-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Contact
              </h2>
              <input
                type="email"
                required
                placeholder="Email address"
                className="input-field"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="heading-4 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-ocean-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="First name" className="input-field" value={formData.firstName} onChange={(e) => updateField('firstName', e.target.value)} />
                  <input type="text" required placeholder="Last name" className="input-field" value={formData.lastName} onChange={(e) => updateField('lastName', e.target.value)} />
                </div>
                <input type="text" required placeholder="Address" className="input-field" value={formData.address} onChange={(e) => updateField('address', e.target.value)} />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="City" className="input-field" value={formData.city} onChange={(e) => updateField('city', e.target.value)} />
                  <input type="text" required placeholder="Postal code" className="input-field" value={formData.postalCode} onChange={(e) => updateField('postalCode', e.target.value)} />
                </div>
                <input type="tel" required placeholder="Phone number" className="input-field" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="heading-4 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-ocean-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                Shipping Method
              </h2>
              <div className="space-y-3">
                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${shippingMethod === 'standard' ? 'border-ocean-500 bg-ocean-50' : 'border-gray-200'}`}>
                  <input type="radio" name="shipping" value="standard" checked={shippingMethod === 'standard'} onChange={() => setShippingMethod('standard')} className="sr-only" />
                  <div className="flex-1">
                    <p className="font-medium">Standard Shipping</p>
                    <p className="text-sm text-gray-500">5-7 business days</p>
                  </div>
                  <span className="font-medium">{subtotal >= SHIPPING.FREE_THRESHOLD ? <span className="text-green-600">Free</span> : formatPrice(SHIPPING.STANDARD)}</span>
                </label>
                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${shippingMethod === 'express' ? 'border-ocean-500 bg-ocean-50' : 'border-gray-200'}`}>
                  <input type="radio" name="shipping" value="express" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} className="sr-only" />
                  <div className="flex-1">
                    <p className="font-medium">Express Shipping</p>
                    <p className="text-sm text-gray-500">2-3 business days</p>
                  </div>
                  <span className="font-medium">{formatPrice(SHIPPING.EXPRESS)}</span>
                </label>
              </div>
            </div>

            <div className="bg-ocean-50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="font-medium text-ocean-900">Demo Mode</p>
                  <p className="text-sm text-ocean-700">This is a demo store. No real payment will be processed.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
              <h2 className="heading-4 mb-6">Order Summary</h2>
              
              <ul className="divide-y divide-gray-100 mb-6 max-h-[300px] overflow-y-auto">
                {items.map((item) => (
                  <li key={item.variantId} className="py-4 flex gap-4">
                    <div className="relative w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={getImageUrl(item.productImage)} alt={item.productName} fill className="object-cover" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-ocean-500 text-white text-xs flex items-center justify-center rounded-full">{item.quantity}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.productName}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.variantName}</p>
                      <p className="text-sm font-medium mt-2">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
                <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Shipping</span><span>{shipping === 0 ? <span className="text-green-600">Free</span> : formatPrice(shipping)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Tax (20%)</span><span>{formatPrice(tax)}</span></div>
                <div className="flex justify-between text-lg font-medium pt-3 border-t border-gray-100"><span>Total</span><span>{formatPrice(total)}</span></div>
              </div>

              <button type="submit" disabled={loading} className="btn-ocean w-full mt-6 py-4 text-base">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    Processing...
                  </span>
                ) : `Pay ${formatPrice(total)}`}
              </button>

              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-400">🔒 Secure</span>
                <span className="text-xs text-gray-400">↩️ Easy Returns</span>
                <span className="text-xs text-gray-400">🚚 Fast Shipping</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
