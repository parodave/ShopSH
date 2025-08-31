"use client";
import Link from "next/link";
import { Mars, Venus, ShoppingBag } from "lucide-react";
import ZoomControl from "@/components/ZoomControl";
import { useCart } from "@/context/CartContext";

export default function HeaderBar() {
  const { count } = useCart();

  return (
    <header className="h-14 border-b bg-white/90 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-[1200px] h-full px-4 flex items-center justify-between">
        {/* Gauche: +/− zoom */}
        <div className="shrink-0">
          <ZoomControl gridId="product-grid" />
        </div>

        {/* Centre: Homme | Femme */}
        <nav className="flex items-center gap-6">
          <Link href="/men" aria-label="Homme" className="p-1 opacity-70 hover:opacity-100">
            <Mars className="w-6 h-6" />
          </Link>
          <Link href="/women" aria-label="Femme" className="p-1 opacity-70 hover:opacity-100">
            <Venus className="w-6 h-6" />
          </Link>
        </nav>

        {/* Droite: compteur + icône Panier (restaurée) */}
        <Link href="/cart" aria-label="Panier" className="p-2 flex items-center gap-2">
          <span className="font-mono text-lg font-bold select-none">{count}</span>
          <ShoppingBag className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
}
