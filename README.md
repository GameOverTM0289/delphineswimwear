# Delphine Swimwear 🏖️

A modern, elegant e-commerce website for swimwear built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Elegant UI with Playfair Display (titles) + Raleway (body) fonts
- **Full E-commerce**: Product catalog, cart, checkout with validation
- **Form Validation**: Email regex validation, international phone prefixes (Albania default)
- **Responsive**: Mobile-first design that looks great on all devices
- **Animations**: Smooth transitions and micro-interactions
- **SEO Ready**: Meta tags, semantic HTML, optimized images

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── public/
│   └── images/           # Your product and marketing images
│       ├── products/     # Product images
│       ├── hero/         # Hero slider images
│       ├── collections/  # Collection cover images
│       ├── about/        # About page images
│       └── instagram/    # Instagram feed images
├── src/
│   ├── app/
│   │   ├── (shop)/       # Main shop pages
│   │   └── api/          # API routes
│   ├── components/       # React components
│   └── lib/              # Utilities, data, store
```

## 🖼️ Adding Your Own Images

### Step 1: Prepare Your Images

| Location | Purpose | Recommended Size |
|----------|---------|------------------|
| `/images/hero/` | Hero slider | 1920x1080px |
| `/images/products/` | Product photos | 800x1000px |
| `/images/collections/` | Collection covers | 800x1000px |
| `/images/about/` | About page | 800x1000px |
| `/images/instagram/` | Instagram grid | 600x600px |

### Step 2: Name Your Files

Products need multiple images. Example for "Capri One-Piece":
- `capri-1.jpg`, `capri-2.jpg`, `capri-3.jpg` (gallery)
- `capri-blue.jpg`, `capri-coral.jpg` (color variants)

### Step 3: Update Product Data (Optional)

Edit `/src/lib/data/products.ts` to match your images:

```typescript
images: [
  '/images/products/your-product-1.jpg',
  '/images/products/your-product-2.jpg',
],
```

### Using External Images (Cloudinary, etc.)

1. Add your domain to `next.config.mjs`:
```javascript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'your-cdn.com' },
  ],
}
```

2. Use full URLs in product data:
```typescript
images: ['https://your-cdn.com/product-1.jpg'],
```

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables (if needed)

Set these in Vercel dashboard:
- `DATABASE_URL` - If using database
- `NEXTAUTH_SECRET` - If using authentication

## 📱 Pages Included

- **Home** - Hero slider, featured products, collections
- **Shop** - Product grid with filters
- **Product Detail** - Size/color selection, add to cart
- **Collections** - Browse by collection
- **Checkout** - Full checkout with validation
- **About, Contact, FAQ, Shipping, Returns, Size Guide**
- **Privacy, Terms, Sustainability**

## 🔧 Customization

### Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  ocean: { /* your blues */ },
  coral: { /* your oranges */ },
  sand: { /* your neutrals */ },
}
```

### Fonts

Already configured:
- **Titles**: Playfair Display (elegant serif)
- **Body**: Raleway (clean sans-serif)

To change, edit `/src/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';
```

### Phone Prefixes

Default is Albania (+355). To change default, edit:
- `/src/app/(shop)/checkout/page.tsx` - Change `defaultCountry="AL"`
- `/src/components/ui/PhoneInput.tsx` - Change default prop

## 📦 Tech Stack

- **Framework**: Next.js 14.2.18
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.15
- **State**: Zustand (cart)
- **Fonts**: Google Fonts (Playfair Display, Raleway)

## 📄 License

MIT License - Feel free to use for your projects!

---

Built with ❤️ for Delphine Swimwear
