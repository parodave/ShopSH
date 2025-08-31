'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();
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
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addItem({
                productId: product.id,
                title: product.name,
                price: product.price,
                image: product.image,
                size: product.sizes?.[0] ?? 'One Size',
                quantity: 1,
              });
            }}
            className="border border-black px-3 py-2 text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            Add to cart
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
