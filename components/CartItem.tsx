'use client';

import { motion } from 'framer-motion';
import { Plus, Minus, X } from 'lucide-react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
  index: number;
}

export function CartItem({ item, index }: CartItemProps) {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        productId: item.product.id,
        size: item.size,
        quantity: newQuantity,
      },
    });
  };

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        productId: item.product.id,
        size: item.size,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center space-x-4 py-6 border-b border-gray-200"
    >
      {/* Product Image */}
      <div className="w-20 h-20 bg-gray-100 relative flex-shrink-0">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="font-mono text-sm font-medium mb-1">{item.product.code}</h3>
        <p className="font-mono text-sm text-gray-600 mb-2">SIZE: {item.size}</p>
        <p className="font-mono text-sm">${item.product.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => updateQuantity(item.quantity - 1)}
          className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <Minus className="w-4 h-4" />
        </motion.button>
        
        <span className="font-mono text-sm w-8 text-center">{item.quantity}</span>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => updateQuantity(item.quantity + 1)}
          className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <Plus className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Remove Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={removeItem}
        className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}