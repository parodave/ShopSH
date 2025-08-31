import UIControls from '@/components/UIControls';
import { ProductGrid } from '@/components/ProductGrid';
import { products } from '@/data/products';

export default function MenPage() {
  return (
    <main className="min-h-screen pt-14 pb-20">
      <UIControls gridId="product-grid" />
      <section className="mx-auto max-w-7xl px-4">
        <ProductGrid products={products} gridId="product-grid" />
      </section>
    </main>
  );
}

