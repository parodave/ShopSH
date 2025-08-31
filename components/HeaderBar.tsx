"use client";
import React from "react";
import { Home, UserRound } from "lucide-react";
import ZoomControl from "@/components/ZoomControl";

export default function HeaderBar() {
  return (
    <header className="h-14 border-b bg-white/90 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
        {/* Gauche: bouton +/− */}
        <div className="shrink-0">
          <ZoomControl gridId="product-grid" />
        </div>

        {/* Centre: Home + Femme + Homme (ordre visuel comme sur captures) */}
        <nav className="flex items-center gap-6">
          <a href="/" aria-label="Home" className="p-1"><Home /></a>
          <a href="/women" aria-label="Vêtements femme" className="p-1 opacity-60 hover:opacity-100">
            <UserRound />
          </a>
          <a href="/men" aria-label="Vêtements homme" className="p-1 opacity-60 hover:opacity-100">
            <UserRound />
          </a>
        </nav>

        {/* Droite: réserve (ne rien retirer ailleurs) */}
        <div className="w-8" />
      </div>
    </header>
  );
}

