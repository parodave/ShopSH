'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export function OrderSummary() {
  const { state, getTotalPrice } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="font-mono text-xl uppercase tracking-wider mb-8">ORDER SUMMARY</h2>
      
      {/* Cart Items */}
      <div className="space-y-6">
        {state.items.map((item) => (
          <div key={`${item.product.id}-${item.size}`} className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-mono text-sm font-medium">{item.product.code}</h3>
                  <p className="font-mono text-xs text-gray-600 uppercase">SIZE</p>
                  <p className="font-mono text-xs text-gray-600 uppercase">QTY</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm">${item.product.price}</p>
                  <p className="font-mono text-sm">{item.size}</p>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-sm">+</span>
                    <span className="font-mono text-sm">{item.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-4 pt-6 border-t border-gray-200">
        <div className="flex justify-between">
          <span className="font-mono text-sm uppercase">SUBTOTAL</span>
          <span className="font-mono text-sm">${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-mono text-sm uppercase">SHIPPING</span>
          <span className="font-mono text-sm">CALCULATED AT NEXT STEP</span>
        </div>
        <div className="flex justify-between">
          <span className="font-mono text-sm uppercase">TAXES</span>
          <span className="font-mono text-sm">$0.00</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <span className="font-mono text-lg uppercase tracking-wider">TOTAL</span>
          <span className="font-mono text-lg">${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
}