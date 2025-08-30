'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
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
          <h1 className="font-mono text-2xl mb-8 uppercase tracking-wider">PRIVACY POLICY</h1>
          <div className="space-y-6 font-mono text-sm leading-relaxed">
            <p>LAST UPDATED: JANUARY 2025</p>
            <p>WE COLLECT PERSONAL INFORMATION TO PROCESS ORDERS AND IMPROVE OUR SERVICE.</p>
            <p>YOUR DATA IS SECURE AND NEVER SOLD TO THIRD PARTIES.</p>
            <p>COOKIES ARE USED FOR WEBSITE FUNCTIONALITY AND ANALYTICS.</p>
            <p>CONTACT US FOR DATA DELETION REQUESTS.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}