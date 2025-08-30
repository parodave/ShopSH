'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AccessibilityPage() {
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
          <h1 className="font-mono text-2xl mb-8 uppercase tracking-wider">ACCESSIBILITY</h1>
          <div className="space-y-6 font-mono text-sm leading-relaxed">
            <p>WE ARE COMMITTED TO ENSURING DIGITAL ACCESSIBILITY FOR ALL USERS.</p>
            <p>OUR WEBSITE FOLLOWS WCAG 2.1 GUIDELINES.</p>
            <p>KEYBOARD NAVIGATION IS SUPPORTED THROUGHOUT THE SITE.</p>
            <p>HIGH CONTRAST DESIGN FOR BETTER READABILITY.</p>
            <p>CONTACT US FOR ACCESSIBILITY ASSISTANCE.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}