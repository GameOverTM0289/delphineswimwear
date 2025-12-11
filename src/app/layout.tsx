import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Delphine | Mediterranean Swimwear',
    template: '%s | Delphine',
  },
  description: 'Elegant swimwear inspired by the Mediterranean coastline. Discover our collection of bikinis, one-pieces, and cover-ups.',
  keywords: ['swimwear', 'bikini', 'one-piece', 'Mediterranean', 'luxury swimwear'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
