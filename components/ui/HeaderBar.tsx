"use client";
import Link from "next/link";
import { Mars, Venus, ShoppingBag } from "lucide-react";
import ZoomControl from "@/components/ZoomControl";
import { useCart } from "@/context/CartContext";

export default function HeaderBar() {
  const { count } = useCart();

  return (
    <header className="h-12 border-b bg-white dark:bg-black backdrop-blur">
      <div className="mx-auto max-w-[1200px] h-full px-4 flex items-center justify-between">
        
        {/* Gauche : +/− zoom */}
        <div className="flex items-center">
          <ZoomControl gridId="product-grid" />
        </div>

        {/* Centre : Homme | Femme */}
        <nav className="flex items-center gap-6">
          <Link href="/men" aria-label="Homme" className="p-1 opacity-70 hover:opacity-100">
            <Mars className="w-5 h-5" />
          </Link>
          <Link href="/women" aria-label="Femme" className="p-1 opacity-70 hover:opacity-100">
            <Venus className="w-5 h-5" />
          </Link>
        </nav>

        {/* Droite : compteur + panier */}
        <Link href="/cart" aria-label="Panier" className="p-1 flex items-center gap-2">
          <span className="font-mono text-base font-bold select-none">{count}</span>
          <ShoppingBag className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
}
"use client";
import Link from "next/link";
import { Mars, Venus, ShoppingBag } from "lucide-react";
import ZoomControl from "@/components/ZoomControl";
import { useCart } from "@/context/CartContext";

export default function HeaderBar() {
  const { count } = useCart();

  return (
    <header className="h-14 border-b bg-white/90 dark:bg-black/80 backdrop-blur">
      {/* Conteneur: 3 zones fixes -> [gauche | centre | droite] */}
      <div className="mx-auto max-w-[1200px] h-full px-4 grid grid-cols-[auto,1fr,auto] items-center">
        {/* Gauche : + (ZoomControl) */}
        <div className="justify-self-start">
          <ZoomControl gridId="product-grid" />
        </div>

        {/* Centre : Homme | Femme (parfaitement centré) */}
        <nav className="justify-self-center flex items-center gap-6">
          <Link href="/men" aria-label="Homme" className="p-1 opacity-70 hover:opacity-100">
            <Mars className="w-6 h-6" />
          </Link>
          <Link href="/women" aria-label="Femme" className="p-1 opacity-70 hover:opacity-100">
            <Venus className="w-6 h-6" />
          </Link>
        </nav>

        {/* Droite : compteur + icône panier */}
        <div className="justify-self-end">
          <Link href="/cart" aria-label="Panier" className="p-2 flex items-center gap-2">
            <span className="font-mono text-lg font-bold select-none">{count}</span>
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
"use client";
import Link from "next/link";
import { Mars, Venus, ShoppingBag } from "lucide-react";
import ZoomControl from "@/components/ZoomControl";
import { useCart } from "@/context/CartContext";

export default function HeaderBar() {
  const { count } = useCart();

  return (
    <header className="h-14 border-b bg-white/90 dark:bg-black/80 backdrop-blur">
      {/* Utilise une classe dédiée 'sh-header' pour neutraliser tout style précédent */}
      <div className="sh-header mx-auto max-w-[1200px] h-full px-4">
        <div className="sh-header-left">
          <ZoomControl gridId="product-grid" />
        </div>

        <nav className="sh-header-center flex items-center gap-6">
          <Link href="/men" aria-label="Homme" className="p-1 opacity-70 hover:opacity-100">
            <Mars className="w-6 h-6" />
          </Link>
          <Link href="/women" aria-label="Femme" className="p-1 opacity-70 hover:opacity-100">
            <Venus className="w-6 h-6" />
          </Link>
        </nav>

        <div className="sh-header-right">
          <Link href="/cart" aria-label="Panier" className="p-2 flex items-center gap-2">
            <span className="font-mono text-lg font-bold select-none">{count}</span>
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
