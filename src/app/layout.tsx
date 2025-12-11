import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartProvider from '@/components/cart/CartProvider'

export const metadata: Metadata = {
  title: 'Delphine | Rhythm of a Free Spirit',
  description: 'Delphine is a swimwear brand inspired by the enchanting beauty of the Mediterranean. Discover elegant swimwear that expresses grace, freedom, and authenticity.',
  keywords: ['swimwear', 'luxury swimwear', 'Mediterranean', 'bikini', 'one piece', 'beach', 'fashion'],
  openGraph: {
    title: 'Delphine Swimwear',
    description: 'Rhythm of a Free Spirit - Mediterranean-inspired luxury swimwear',
    type: 'website',
    locale: 'en_US',
    siteName: 'Delphine',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}
