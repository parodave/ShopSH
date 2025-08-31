"use client";
import React from "react";
import { Plus, Minus, X, Home, UserRound, Venus, ChevronDown } from "lucide-react";

type Props = {
  /** id du conteneur grille qui liste les cartes produits */
  gridId?: string; // défaut: "product-grid"
};

export default function UIControls({ gridId = "product-grid" }: Props) {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [footerOpen, setFooterOpen] = React.useState(false);

  // Applique la taille des cartes via une CSS var sur la grille
  React.useEffect(() => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.style.setProperty("--card-size", isZoomed ? "300px" : "240px"); // ajuste si besoin
  }, [isZoomed, gridId]);

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          {/* + / − = zoom/dezoom */}
          <button
            aria-label={isZoomed ? "Dézoomer" : "Zoomer"}
            onClick={() => setIsZoomed((v) => !v)}
            className="p-2 rounded hover:scale-105 active:scale-95 transition"
            title={isZoomed ? "Dézoomer les cartes" : "Zoomer les cartes"}
          >
            {isZoomed ? <Minus /> : <Plus />}
          </button>

          {/* Icônes Home + Homme + Femme */}
          <nav className="flex items-center gap-5">
            <a href="/" aria-label="Home" className="p-1"><Home /></a>
            <a href="/men" aria-label="Vêtements homme" className="p-1"><UserRound /></a>
            <a href="/women" aria-label="Vêtements femme" className="p-1"><Venus /></a>
          </nav>

          {/* Réservé à d'autres actions éventuelles */}
          <div className="w-8" />
        </div>
      </div>

      {/* FOOTER pliable via la croix, fermé par défaut à chaque reload */}
      <div className="fixed left-0 right-0 bottom-0 z-40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-t-xl border bg-white/90 dark:bg-black/80 backdrop-blur">
            <div className="flex items-center justify-between px-2">
              <button
                onClick={() => setFooterOpen((v) => !v)}
                aria-expanded={footerOpen}
                aria-controls="footer-links"
                className="m-2 h-9 w-9 grid place-items-center rounded hover:scale-105 active:scale-95 transition"
                title="Ouvrir le menu pied de page"
              >
                <X />
              </button>
              <ChevronDown
                className={`mr-3 transition-transform ${footerOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </div>

            <div
              id="footer-links"
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                footerOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 flex items-center gap-6 text-sm">
                <a href="/contact">Contact</a>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
                <a href="/accessibility">Accessibility</a>
                <a href="/cookies">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

