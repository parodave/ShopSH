'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';

export default function CartPage() {
  const router = useRouter();
  const { state, getTotalPrice } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6">
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
          
          <div className="text-center py-16">
            <h1 className="font-mono text-2xl mb-4 uppercase tracking-wider">YOUR CART IS EMPTY</h1>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-black py-3 px-8 font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                CONTINUE SHOPPING
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-mono text-2xl mb-8 uppercase tracking-wider">YOUR CART</h1>
          
          {/* Cart Items */}
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <CartItem key={`${item.product.id}-${item.size}`} item={item} index={index} />
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="mt-8 pt-8 border-t border-black">
            <div className="flex justify-between items-center mb-8">
              <span className="font-mono text-xl uppercase tracking-wider">TOTAL</span>
              <span className="font-mono text-xl">${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <Link href="/checkout">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-black py-4 font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                CHECKOUT
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}