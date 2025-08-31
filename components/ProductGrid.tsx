'use client';

import { ProductCard } from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  gridId?: string;
}

export function ProductGrid({ products, gridId = "product-grid" }: ProductGridProps) {
  return (
    <div
      id={gridId}
      className="grid gap-4 md:gap-6"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(var(--card-size, 240px), 1fr))",
      }}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

