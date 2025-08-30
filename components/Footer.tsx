'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const links = [
    { href: '/contact', label: 'CONTACT' },
    { href: '/terms', label: 'TERMS' },
    { href: '/privacy', label: 'PRIVACY' },
    { href: '/accessibility', label: 'ACCESSIBILITY' },
    { href: '/cookies', label: 'COOKIES' },
  ];

  return (
    <motion.footer 
      className="border-t border-black bg-white mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="px-6 py-8">
        <div className="flex flex-wrap items-center justify-start space-x-8 font-mono text-sm">
          <span className="text-2xl mr-4 font-bold">×</span>
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={link.href} className="hover:opacity-60 transition-opacity uppercase tracking-wider">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}