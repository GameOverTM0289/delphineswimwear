'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days.' },
      { q: 'Do you offer free shipping?', a: 'Yes! Free standard shipping on all orders over €100 within Europe.' },
      { q: 'How can I track my order?', a: 'Once shipped, you\'ll receive an email with tracking information.' },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      { q: 'What is your return policy?', a: 'We accept returns within 14 days of delivery for unworn items with tags attached.' },
      { q: 'How do I exchange an item?', a: 'Start a return through your account and select "exchange" as the reason.' },
      { q: 'How long do refunds take?', a: 'Refunds are processed within 3-5 business days after we receive your return.' },
    ],
  },
  {
    category: 'Products & Sizing',
    questions: [
      { q: 'How do I find my size?', a: 'Check our Size Guide for detailed measurements. If between sizes, size up.' },
      { q: 'What materials do you use?', a: 'Premium Italian Lycra with UPF 50+ protection, chlorine-resistant and quick-drying.' },
      { q: 'How do I care for my swimwear?', a: 'Rinse in cold water after each use, hand wash with mild soap, lay flat to dry.' },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <>
      <section className="bg-gradient-to-b from-cream-50 to-white pt-32 pb-16">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1 bg-cream-200 text-gray-700 rounded-full text-sm font-medium mb-4 animate-fade-down">
            ❓ Support
          </span>
          <h1 className="heading-1 mb-4 animate-fade-up">Frequently Asked Questions</h1>
          <p className="body-text-lg text-gray-600 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Find answers to common questions about orders, shipping, and returns.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {faqs.map((category, catIndex) => (
            <div key={category.category} className="mb-12">
              <h2 className="heading-4 mb-6 text-ocean-600">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} className="border border-gray-200 rounded-xl overflow-hidden hover:border-ocean-300 transition-all">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-medium pr-4">{item.q}</span>
                        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="px-5 pb-5 text-sm text-gray-600">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="text-center p-8 bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl text-white">
            <h3 className="heading-4 mb-2">Still have questions?</h3>
            <p className="text-ocean-100 mb-6">Our team is happy to help.</p>
            <Link href="/contact" className="btn bg-white text-ocean-600 hover:bg-ocean-50">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
