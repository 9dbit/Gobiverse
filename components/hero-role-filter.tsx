"use client";

import { useMemo, useState } from "react";
import { heroes } from "@/lib/data";
import { HeroCard } from "./cards";

export function HeroRoleFilter() {
  const [role, setRole] = useState("Semua");
  const roles = ["Semua", ...new Set(heroes.map((hero) => hero.role))];
  const filtered = useMemo(
    () => (role === "Semua" ? heroes : heroes.filter((hero) => hero.role === role)),
    [role],
  );

  return (
    <div>
      <div
        className="filter-chips"
        role="group"
        aria-label="Filter hero berdasarkan role"
      >
        {roles.map((item) => (
          <button
            key={item}
            className={`filter-chip ${role === item ? "is-active" : ""}`}
            type="button"
            aria-pressed={role === item}
            onClick={() => setRole(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="filter-count" aria-live="polite">
        {filtered.length} hero DEMO ditampilkan
      </p>
      <div className="rail">
        {filtered.map((hero) => (
          <HeroCard key={hero.slug} hero={hero} />
        ))}
      </div>
    </div>
  );
}
