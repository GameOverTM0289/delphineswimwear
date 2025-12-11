'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore, FREE_SHIPPING_THRESHOLD, calculateShipping, TAX_RATE } from '@/lib/store/cart'

type CheckoutStep = 'information' | 'shipping' | 'payment'

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore()
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('information')
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'Albania',
    postalCode: '',
    phone: '',
    shippingMethod: 'standard',
  })

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = calculateShipping(subtotal)
  const tax = subtotal * TAX_RATE
  const total = subtotal + shipping + tax

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleContinue = () => {
    if (currentStep === 'information') setCurrentStep('shipping')
    else if (currentStep === 'shipping') setCurrentStep('payment')
  }

  const handleBack = () => {
    if (currentStep === 'shipping') setCurrentStep('information')
    else if (currentStep === 'payment') setCurrentStep('shipping')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-200 pt-32 pb-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl mb-6">Your cart is empty</h1>
          <p className="text-midnight/60 mb-8">Add some items to continue checkout.</p>
          <Link href="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-200">
      <div className="container-custom pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <h1 className="font-display text-3xl tracking-[0.2em]">Delphine</h1>
            <p className="text-[10px] tracking-[0.35em] uppercase text-midnight/50 mt-0.5">Rhythm of a Free Spirit</p>
          </Link>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-12 text-sm">
          <span className={currentStep === 'information' ? 'text-midnight font-medium' : 'text-midnight/50'}>Information</span>
          <span className="text-midnight/30">›</span>
          <span className={currentStep === 'shipping' ? 'text-midnight font-medium' : 'text-midnight/50'}>Shipping</span>
          <span className="text-midnight/30">›</span>
          <span className={currentStep === 'payment' ? 'text-midnight font-medium' : 'text-midnight/50'}>Payment</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8">
            {currentStep === 'information' && (
              <div className="space-y-6">
                <h2 className="font-display text-2xl mb-6">Contact Information</h2>
                <div>
                  <label className="input-label">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="your@email.com" required />
                </div>

                <h2 className="font-display text-2xl mt-10 mb-6">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="input-label">First Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-field" required /></div>
                  <div><label className="input-label">Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-field" required /></div>
                </div>
                <div><label className="input-label">Address</label><input type="text" name="address" value={formData.address} onChange={handleChange} className="input-field" required /></div>
                <div><label className="input-label">Apartment, suite, etc. (optional)</label><input type="text" name="apartment" value={formData.apartment} onChange={handleChange} className="input-field" /></div>
                <div className="grid grid-cols-3 gap-4">
                  <div><label className="input-label">City</label><input type="text" name="city" value={formData.city} onChange={handleChange} className="input-field" required /></div>
                  <div><label className="input-label">Country</label><select name="country" value={formData.country} onChange={handleChange} className="input-field"><option value="Albania">Albania</option><option value="Kosovo">Kosovo</option><option value="North Macedonia">North Macedonia</option><option value="Montenegro">Montenegro</option><option value="Greece">Greece</option><option value="Italy">Italy</option></select></div>
                  <div><label className="input-label">Postal Code</label><input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="input-field" /></div>
                </div>
                <div><label className="input-label">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="+355" /></div>
              </div>
            )}

            {currentStep === 'shipping' && (
              <div className="space-y-6">
                <h2 className="font-display text-2xl mb-6">Shipping Method</h2>
                <div className="space-y-3">
                  <label className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${formData.shippingMethod === 'standard' ? 'border-midnight bg-cream-100' : 'border-cream-300 hover:border-cream-400'}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="shippingMethod" value="standard" checked={formData.shippingMethod === 'standard'} onChange={handleChange} className="accent-delphine-red" />
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-midnight/60">3-5 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">{subtotal >= FREE_SHIPPING_THRESHOLD ? 'Free' : `€${STANDARD_SHIPPING_COST}`}</span>
                  </label>
                  <label className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${formData.shippingMethod === 'express' ? 'border-midnight bg-cream-100' : 'border-cream-300 hover:border-cream-400'}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="shippingMethod" value="express" checked={formData.shippingMethod === 'express'} onChange={handleChange} className="accent-delphine-red" />
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-midnight/60">1-2 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">€15.99</span>
                  </label>
                </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div className="space-y-6">
                <h2 className="font-display text-2xl mb-6">Payment</h2>
                <div className="p-6 bg-cream-100 border border-cream-300 text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-midnight/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  <p className="text-midnight/70 mb-2">Payment gateway integration pending</p>
                  <p className="text-sm text-midnight/50">Paysera integration will be configured here</p>
                </div>
                <div className="space-y-4 pt-4">
                  <p className="text-sm text-midnight/60">By completing your purchase you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-cream-300">
              {currentStep !== 'information' ? (
                <button onClick={handleBack} className="text-sm text-midnight/60 hover:text-midnight flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
              ) : (
                <Link href="/shop" className="text-sm text-midnight/60 hover:text-midnight flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Continue Shopping
                </Link>
              )}
              
              {currentStep !== 'payment' ? (
                <button onClick={handleContinue} className="btn-primary">Continue</button>
              ) : (
                <button className="btn-primary">Complete Order</button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 h-fit lg:sticky lg:top-32">
            <h2 className="font-display text-2xl mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-cream-200 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-midnight text-white text-xs flex items-center justify-center rounded-full">{item.quantity}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-midnight/60">{item.color} / {item.size}</p>
                  </div>
                  <p className="font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-300 pt-4 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-midnight/60">Subtotal</span><span>€{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-midnight/60">Shipping</span><span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between"><span className="text-midnight/60">VAT (20%)</span><span>€{tax.toFixed(2)}</span></div>
            </div>

            <div className="border-t border-cream-300 mt-4 pt-4 flex justify-between items-center">
              <span className="font-medium">Total</span>
              <span className="font-display text-2xl">€{total.toFixed(2)}</span>
            </div>

            {subtotal < FREE_SHIPPING_THRESHOLD && (
              <p className="mt-4 text-sm text-center text-midnight/60">
                Add €{(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const STANDARD_SHIPPING_COST = 8.99
