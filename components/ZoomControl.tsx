"use client";
import React from "react";
import { Plus, Minus } from "lucide-react";

/** Paliers choisis pour coller aux captures (modifiables au besoin) */
const LEVELS = ["112px", "168px", "224px", "304px", "432px"]; // s0..s4

type Props = { gridId?: string };

export default function ZoomControl({ gridId = "product-grid" }: Props) {
  const [idx, setIdx] = React.useState(0); // démarre très petit (s0)

  React.useEffect(() => {
    const grid =
      (document.getElementById(gridId) as HTMLElement | null) ??
      (document.querySelector("[data-product-grid]") as HTMLElement | null);
    if (!grid) return;
    grid.style.setProperty("--card-size", LEVELS[idx]);
  }, [idx, gridId]);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((v) => (v + 1) % LEVELS.length);
  };

  const atMax = idx === LEVELS.length - 1;

  return (
    <button
      type="button"
      onClick={next}
      aria-label={atMax ? "Réduire / cycle zoom" : "Agrandir"}
      title={atMax ? "−" : "+"}
      className="p-2 rounded hover:scale-105 active:scale-95 transition"
    >
      {atMax ? <Minus /> : <Plus />}
    </button>
  );
}
