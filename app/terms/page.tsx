'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
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
          <h1 className="font-mono text-2xl mb-8 uppercase tracking-wider">TERMS OF SERVICE</h1>
          <div className="space-y-6 font-mono text-sm leading-relaxed">
            <p>LAST UPDATED: JANUARY 2025</p>
            <p>BY ACCESSING AND USING THIS WEBSITE, YOU AGREE TO BE BOUND BY THESE TERMS.</p>
            <p>ALL SALES ARE FINAL. NO RETURNS OR EXCHANGES.</p>
            <p>SHIPPING TIMES MAY VARY. WE ARE NOT RESPONSIBLE FOR DELAYS.</p>
            <p>PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}