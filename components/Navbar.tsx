'use client';

import { motion } from 'framer-motion';
import { Home, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-mono cursor-pointer font-bold"
          >
            +
          </motion.div>
        </Link>

        {/* Center icons */}
        <div className="flex items-center space-x-8">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-6 h-6" />
            </motion.div>
          </Link>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <User className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Right side - Cart */}
        <Link href="/cart">
          <motion.div 
            className="relative cursor-pointer flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-mono text-lg font-bold">{totalItems}</span>
            <ShoppingBag className="w-6 h-6" />
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
}