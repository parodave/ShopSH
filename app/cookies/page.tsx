'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CookiesPage() {
  const router = useRouter();

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="py-8"
        >
          <h1 className="font-mono text-2xl mb-8 uppercase tracking-wider">COOKIES POLICY</h1>
          <div className="space-y-6 font-mono text-sm leading-relaxed">
            <p>WE USE COOKIES TO ENHANCE YOUR BROWSING EXPERIENCE.</p>
            <p>ESSENTIAL COOKIES: REQUIRED FOR BASIC SITE FUNCTIONALITY.</p>
            <p>ANALYTICS COOKIES: HELP US UNDERSTAND HOW YOU USE OUR SITE.</p>
            <p>YOU CAN MANAGE COOKIE PREFERENCES IN YOUR BROWSER SETTINGS.</p>
            <p>CONTINUING TO USE OUR SITE INDICATES ACCEPTANCE OF OUR COOKIE POLICY.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}