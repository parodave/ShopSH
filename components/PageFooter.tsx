"use client";
import React from "react";
import { ChevronRight, X } from "lucide-react";

export default function PageFooter() {
  const [open, setOpen] = React.useState(false);

  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-12 flex items-center">
          {/* Bouton: > quand fermé, X quand ouvert */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="footer-links"
            className="h-9 w-9 grid place-items-center rounded hover:scale-105 active:scale-95 transition"
            title={open ? "Fermer" : "Ouvrir"}
          >
            {open ? <X /> : <ChevronRight />}
          </button>

          {/* Liens déployés GAUCHE → DROITE, "à l'intérieur" du footer */}
          <nav
            id="footer-links"
            className="ml-3 flex items-center gap-6 text-sm overflow-hidden transition-all duration-300"
            style={{
              maxWidth: open ? "420px" : "0px",
              opacity: open ? 1 : 0,
            }}
          >
            <a href="/contact">CONTACT</a>
            <a href="/terms">TERMS</a>
            <a href="/cookies">COOKIES</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

