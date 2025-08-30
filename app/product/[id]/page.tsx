'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Plus } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        size: selectedSize,
        quantity: 1,
      },
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

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
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-square bg-gray-100 relative"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
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

            {/* Size Selector */}
            <div>
              <h3 className="font-mono text-sm mb-6 uppercase tracking-wider">
                SELECT SIZE
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSizeSelect(size)}
                    className={`border border-black py-3 px-4 font-mono text-sm transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={selectedSize ? { scale: 1.02 } : {}}
              whileTap={selectedSize ? { scale: 0.98 } : {}}
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full border-2 border-black py-4 font-mono text-sm uppercase tracking-wider transition-all ${
                selectedSize
                  ? 'bg-white text-black hover:bg-black hover:text-white cursor-pointer'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>{isAdded ? 'ADDED' : 'ADD TO CART'}</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}