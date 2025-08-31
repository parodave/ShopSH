"use client";
import React from "react";
import { Plus, Minus, X, Home, UserRound, Venus } from "lucide-react";

type Props = { gridId?: string };
const MOUNT_ATTR = "data-ui-controls-mounted";

export default function UIControls({ gridId = "product-grid" }: Props) {
  const [canRender, setCanRender] = React.useState(false);
  const [size, setSize] = React.useState<"sm" | "md" | "lg">("md");
  const [footerOpen, setFooterOpen] = React.useState(false);

  React.useLayoutEffect(() => {
    const existing = document.body.querySelector(`[${MOUNT_ATTR}="true"]`);
    if (existing) {
      setCanRender(false);
      return;
    }
    document.body.setAttribute(MOUNT_ATTR, "true");
    setCanRender(true);
    return () => {
      // libère l’attribut si ce composant est démonté
      if (document.body.getAttribute(MOUNT_ATTR) === "true") {
        document.body.removeAttribute(MOUNT_ATTR);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!canRender) return;
    const grid =
      (document.getElementById(gridId) as HTMLElement | null) ??
      (document.querySelector("[data-product-grid]") as HTMLElement | null);
    if (!grid) return;
    grid.style.setProperty(
      "--card-size",
      size === "sm" ? "180px" : size === "md" ? "240px" : "320px"
    );
  }, [size, gridId, canRender]);

  if (!canRender) return null;

  const step = () =>
    setSize((s) => (s === "sm" ? "md" : s === "md" ? "lg" : "sm"));
  const isZoomed = size !== "md";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <button
            type="button"
            aria-label={isZoomed ? "Réinitialiser taille" : "Changer taille"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              step();
            }}
            className="p-2 rounded hover:scale-105 active:scale-95 transition"
            title={isZoomed ? "−" : "+"}
          >
            {isZoomed ? <Minus /> : <Plus />}
          </button>
          <nav className="flex items-center gap-6">
            <a href="/" aria-label="Home" className="p-1">
              <Home />
            </a>
            <a href="/men" aria-label="Vêtements homme" className="p-1">
              <UserRound />
            </a>
            <a href="/women" aria-label="Vêtements femme" className="p-1">
              <Venus />
            </a>
          </nav>
          <div className="w-8" />
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 z-40 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative pointer-events-auto rounded-t-xl border bg-white/90 dark:bg-black/80 backdrop-blur">
            <div className="h-12 flex items-center">
              <button
                type="button"
                onClick={() => setFooterOpen((v) => !v)}
                aria-expanded={footerOpen}
                aria-controls="footer-links"
                className="ml-2 h-9 w-9 grid place-items-center rounded hover:scale-105 active:scale-95 transition"
                title={footerOpen ? "Fermer" : "Ouvrir"}
              >
                <X />
              </button>
              <div className="relative flex-1">
                <div
                  id="footer-links"
                  className="absolute left-12 top-1/2 -translate-y-1/2 flex items-center gap-6 text-sm overflow-hidden transition-all duration-300"
                  style={{
                    maxWidth: footerOpen ? "640px" : "0px",
                    opacity: footerOpen ? 1 : 0,
                  }}
                >
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
      </div>
    </>
  );
}

