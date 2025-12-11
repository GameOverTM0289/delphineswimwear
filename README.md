# Delphine Swimwear

> **RHYTHM OF A FREE SPIRIT**

A luxury e-commerce website for Delphine, a Mediterranean-inspired swimwear brand.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Database:** Prisma + PostgreSQL (to be configured)
- **Payment:** Paysera (Albanian bank compatible)

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Delphine Red | `#E10600` | Primary accent, CTAs |
| Little Boy Blue | `#6BA4D4` | Product accent |
| Summer Sun | `#FFD700` | Product accent |
| Cream | `#F5F5F0` | Backgrounds |
| Midnight | `#1A1A1A` | Text, dark elements |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL (for production)

### Installation

```bash
# Navigate to project directory
cd delphine-swimwear

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/delphine"

# Paysera Payment Gateway
PAYSERA_PROJECT_ID="your_project_id"
PAYSERA_SIGN_PASSWORD="your_sign_password"
PAYSERA_TEST_MODE="true"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Project Structure

```
delphine-swimwear/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About/Our Story page
│   │   ├── checkout/           # Checkout flow
│   │   ├── collections/        # Collection pages
│   │   ├── contact/            # Contact page
│   │   ├── lookbook/           # Lookbook gallery
│   │   ├── products/           # Product detail pages
│   │   ├── shop/               # Shop page
│   │   ├── size-guide/         # Size guide
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── cart/               # Cart drawer & provider
│   │   ├── home/               # Homepage sections
│   │   └── layout/             # Header & Footer
│   └── lib/
│       ├── store/              # Zustand cart store
│       └── utils.ts            # Utility functions
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, intro, products, values |
| `/shop` | All products with filters |
| `/collections` | Collection overview |
| `/collections/[slug]` | Individual collection |
| `/products/[slug]` | Product detail page |
| `/about` | Brand story & philosophy |
| `/lookbook` | Visual gallery |
| `/contact` | Contact form |
| `/size-guide` | Size chart & measurement guide |
| `/checkout` | Multi-step checkout |

## Features

### Implemented ✅
- Responsive design (mobile-first)
- Homepage with 6 sections
- Product catalog with filtering
- Product detail pages
- Shopping cart with persistence
- Multi-step checkout flow
- Size guide
- Contact form
- Lookbook gallery
- Brand story pages

### To Be Configured 🔧
- Database connection (Prisma)
- Paysera payment integration
- Admin dashboard
- Customer authentication
- Order management
- Email notifications
- Inventory tracking

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Database Setup

When ready to add database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio
npx prisma studio
```

## Deployment

The site is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

## Brand Information

**Delphine** is a swimwear brand inspired by the enchanting beauty of the Mediterranean Sea. The name draws from the dolphin - a symbol of freedom, playfulness, and connection to the sea.

### Core Values
- Grace
- Class  
- Elegance
- Mediterranean Spirit
- Freedom
- Natural Beauty

### Contact
- Email: hello@delphineswimwear.com
- Instagram: @delphine
- Location: Tirana, Albania

---

Built with ❤️ for Delphine Swimwear
