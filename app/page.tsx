'use client';

import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/ProductGrid';
import UIControls from '@/components/UIControls';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-14 pb-20">
      <UIControls gridId="product-grid" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProductGrid products={products} gridId="product-grid" />
        </motion.div>
      </div>
    </main>
  );
}