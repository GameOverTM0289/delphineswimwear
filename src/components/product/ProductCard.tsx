"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { cn, formatCurrency, calculateDiscount } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercentage = hasDiscount
    ? calculateDiscount(product.compareAtPrice!, product.price)
    : 0;

  const primaryImage = product.images?.[0]?.url;
  const secondaryImage = product.images?.[1]?.url;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-sand-100 mb-4"
      >
        {primaryImage && (
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-all duration-700 ease-out",
              isHovered && secondaryImage ? "opacity-0 scale-105" : "opacity-100 scale-100"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}

        {secondaryImage && (
          <Image
            src={secondaryImage}
            alt={`${product.name} - alternate view`}
            fill
            className={cn(
              "object-cover transition-all duration-700 ease-out absolute inset-0",
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <span className="badge-new">New</span>}
          {hasDiscount && <span className="badge-sale">-{discountPercentage}%</span>}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className={cn(
            "absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300",
            "hover:bg-white hover:scale-110",
            isWishlisted ? "text-coral-500" : "text-midnight-600"
          )}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
        </button>

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <button
            onClick={(e) => e.preventDefault()}
            className="flex-1 py-3 bg-midnight-900 text-white text-sm font-medium tracking-wide hover:bg-midnight-800 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
          <span className="w-12 flex items-center justify-center bg-white text-midnight-900">
            <Eye className="w-4 h-4" />
          </span>
        </div>

        {product.colors && product.colors.length > 1 && (
          <div className={cn(
            "absolute bottom-4 left-4 flex gap-1 transition-all duration-300",
            isHovered ? "opacity-0" : "opacity-100"
          )}>
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.id}
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </Link>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-midnight-500">
          {product.category?.name}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-midnight-900 group-hover:text-ocean-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className={cn("font-medium", hasDiscount ? "text-coral-600" : "text-midnight-900")}>
            {formatCurrency(product.price, product.currency)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-midnight-400 line-through">
              {formatCurrency(product.compareAtPrice!, product.currency)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
