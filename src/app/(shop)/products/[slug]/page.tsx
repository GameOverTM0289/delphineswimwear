'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart';
import { formatPrice, cn, getImageUrl } from '@/lib/utils';

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetch(`/api/products/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data?.variants?.length > 0) {
          setSelectedColor(data.variants[0].color);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin w-8 h-8 border-2 border-ocean-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="section text-center pt-32">
        <h1 className="heading-2 mb-4">Product Not Found</h1>
        <Link href="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  // Get unique colors and sizes
  const colors = [...new Map(product.variants?.map((v: any) => [v.color, { color: v.color, hex: v.colorHex }])).values()] as any[];
  const sizes = [...new Set(product.variants?.map((v: any) => v.size))] as string[];

  const selectedVariant = product.variants?.find(
    (v: any) => v.size === selectedSize && v.color === selectedColor
  );

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    if (!selectedVariant) return;

    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      productName: product.name,
      productSlug: product.slug,
      productImage: getImageUrl(product.images?.[0]?.url || ''),
      variantName: `${selectedSize} / ${selectedColor}`,
      size: selectedSize,
      color: selectedColor,
      colorHex: selectedVariant.colorHex || '#000',
      price: selectedVariant.price || product.price,
    });
  };

  return (
    <section className="section-sm pt-28">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-gray-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
              <Image
                src={getImageUrl(product.images?.[selectedImage]?.url || '')}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 badge-ocean">New</span>
              )}
              {product.isBestseller && (
                <span className="absolute top-4 left-4 badge-coral">Bestseller</span>
              )}
            </div>
            
            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image: any, index: number) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'relative w-20 h-24 flex-shrink-0 bg-gray-100 overflow-hidden transition-all',
                      selectedImage === index ? 'ring-2 ring-gray-900' : 'ring-1 ring-gray-200'
                    )}
                  >
                    <Image
                      src={getImageUrl(image.url)}
                      alt={image.alt || product.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <h1 className="heading-2 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            {colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  Color: <span className="font-normal text-gray-500">{selectedColor}</span>
                </label>
                <div className="flex gap-3">
                  {colors.map((c: any) => (
                    <button
                      key={c.color}
                      onClick={() => setSelectedColor(c.color)}
                      className={cn(
                        'w-10 h-10 rounded-full border-2 transition-all',
                        selectedColor === c.color ? 'border-gray-900 scale-110' : 'border-gray-200 hover:scale-105'
                      )}
                      style={{ backgroundColor: c.hex }}
                      title={c.color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium">
                    Size: {selectedSize && <span className="font-normal text-gray-500">{selectedSize}</span>}
                  </label>
                  <Link href="/size-guide" className="text-sm text-ocean-600 hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex gap-3">
                  {sizes.map((size) => {
                    const variant = product.variants?.find(
                      (v: any) => v.size === size && v.color === selectedColor
                    );
                    const inStock = variant?.stockQuantity > 0;
                    
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        disabled={!inStock}
                        className={cn(
                          'w-14 h-14 border text-sm font-medium transition-all',
                          selectedSize === size
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : inStock
                            ? 'border-gray-200 hover:border-gray-900'
                            : 'border-gray-100 text-gray-300 cursor-not-allowed line-through'
                        )}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className="btn-primary w-full text-base py-4 mb-6"
            >
              Add to Bag
            </button>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <span>🚚</span>
                <span>Free shipping on orders over €100</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span>↩️</span>
                <span>14-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span>🌿</span>
                <span>Sustainable materials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
