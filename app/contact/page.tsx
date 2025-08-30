'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
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
          className="text-center py-16"
        >
          <h1 className="font-mono text-2xl mb-8 uppercase tracking-wider">CONTACT</h1>
          <div className="space-y-4 font-mono text-sm">
            <p>CUSTOMER SERVICE: SUPPORT@YZY-STORE.COM</p>
            <p>PHONE: +1 (555) 123-4567</p>
            <p>HOURS: MON-FRI 9AM-6PM PST</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}