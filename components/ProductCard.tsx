'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
    >
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square bg-gray-100 relative mb-4 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>
        <div className="text-center">
          <h3 className="font-mono text-sm font-normal tracking-wider">{product.code}</h3>
        </div>
      </Link>
    </motion.div>
  );
}