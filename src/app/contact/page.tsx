'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" alt="Mediterranean beach" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="tagline text-white/70 mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding bg-cream-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl mb-6">Let's Connect</h2>
              <div className="divider mb-8" />
              <p className="text-midnight/70 leading-relaxed mb-10">We'd love to hear from you. Whether you have a question about our products, sizing, orders, or anything else, our team is ready to answer all your questions.</p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-delphine-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:hello@delphineswimwear.com" className="text-midnight/70 hover:text-delphine-red transition-colors">hello@delphineswimwear.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-delphine-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-midnight/70">Tirana, Albania<br />Born in the Mediterranean</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-delphine-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Follow Us</h3>
                    <a href="https://instagram.com/delphine" target="_blank" rel="noopener noreferrer" className="text-midnight/70 hover:text-delphine-red transition-colors">@delphine</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white">
                <h3 className="font-display text-xl mb-4">Customer Service Hours</h3>
                <div className="space-y-2 text-sm text-midnight/70">
                  <div className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM CET</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>10:00 AM - 4:00 PM CET</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-delphine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-delphine-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-display text-2xl mb-4">Message Sent!</h3>
                  <p className="text-midnight/70">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl mb-2">Send a Message</h2>
                  <p className="text-midnight/60 mb-8">We typically respond within 24-48 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div><label htmlFor="name" className="input-label">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Your name" /></div>
                    <div><label htmlFor="email" className="input-label">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="your@email.com" /></div>
                    <div><label htmlFor="subject" className="input-label">Subject</label><select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="input-field"><option value="">Select a subject</option><option value="order">Order Inquiry</option><option value="product">Product Question</option><option value="sizing">Sizing Help</option><option value="returns">Returns & Exchanges</option><option value="wholesale">Wholesale Inquiry</option><option value="other">Other</option></select></div>
                    <div><label htmlFor="message" className="input-label">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-field resize-none" placeholder="How can we help you?" /></div>
                    <button type="submit" className="btn-primary w-full">Send Message</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
