import ProductCard from '@/components/product/ProductCard';
import prisma from '@/lib/db/prisma';

async function getProducts() {
  return prisma.product.findMany({
    where: { isActive: true },
    include: {
      images: true,
      variants: true,
      category: true,
    },
    orderBy: [
      { featured: 'desc' },
      { createdAt: 'desc' },
    ],
  });
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-50 pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">Shop</h1>
          <p className="body-text-lg text-gray-600 max-w-xl mx-auto">
            Discover our collection of Mediterranean-inspired swimwear.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-custom">
          <p className="text-sm text-gray-500 mb-8">
            {products.length} product{products.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No products found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
