'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export const dynamic = 'force-dynamic';

interface ProductPageProps {
  params: {
    id: string;
  };
}

function SizePickerInline({
  product,
}: {
  product: { id: string; title: string; price: number; image?: string };
}) {
  const { addItem } = useCart();
  const [open, setOpen] = useState(false);

  const sizes = [
    { key: 'S', label: 'S' },
    { key: 'M', label: 'M' },
    { key: 'L', label: 'L' },
  ];

  function handleChoose(sizeKey: 'S' | 'M' | 'L') {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: sizeKey,
      quantity: 1,
    });
    setOpen(false);
  }

  return (
    <div className="w-full">
      <div className="mt-6 flex items-center justify-center">
        <button
          type="button"
          aria-label={open ? 'Fermer tailles' : 'Ouvrir tailles'}
          onClick={() => setOpen((v) => !v)}
          className="p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="mt-8 grid grid-cols-3 gap-12 max-w-3xl mx-auto text-center">
          {sizes.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => handleChoose(s.key as 'S' | 'M' | 'L')}
              className="text-2xl md:text-3xl tracking-wide py-2 hover:opacity-100 opacity-70"
              aria-label={`Taille ${s.label}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // removed old size selection and add-to-cart button per new design

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => router.back()}
            className="flex items-center hover:opacity-60 transition-opacity"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Product Image (compact) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* --- bloc image compact --- */}
            <div className="max-w-3xl mx-auto px-4">
              <div className="mt-6 mb-8 flex justify-center bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  priority
                  className="h-48 md:h-56 lg:h-64 w-auto object-contain bg-white"
                  style={{ backgroundColor: '#fff' }}
                />
              </div>
            </div>
            {/* --- fin bloc image compact --- */}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h1 className="font-mono text-2xl font-normal mb-4 tracking-wider">{product.code}</h1>
              <p className="font-mono text-xl">${product.price}</p>
            </div>
            {/* Inline size picker and immediate add-to-cart */}
            <SizePickerInline product={{ id: product.id, title: product.name, price: product.price, image: product.image }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
