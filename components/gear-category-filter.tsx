"use client";

import { useMemo, useState } from "react";
import { gearProducts } from "@/lib/data";
import { GearCard } from "./cards";

export function GearCategoryFilter() {
  const [category, setCategory] = useState("Semua");
  const categories = [
    "Semua",
    ...new Set(gearProducts.map((product) => product.category)),
  ];
  const filtered = useMemo(
    () =>
      category === "Semua"
        ? gearProducts
        : gearProducts.filter((product) => product.category === category),
    [category],
  );

  return (
    <div>
      <div
        className="filter-chips"
        role="group"
        aria-label="Filter gear berdasarkan kategori"
      >
        {categories.map((item) => (
          <button
            key={item}
            className={`filter-chip ${category === item ? "is-active" : ""}`}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="filter-count" aria-live="polite">
        {filtered.length} gear DEMO ditampilkan
      </p>
      <div className="card-grid">
        {filtered.map((product) => (
          <GearCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
