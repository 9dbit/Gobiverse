"use client";

import { useMemo, useState } from "react";
import { tournaments } from "@/lib/data";
import { TournamentCard } from "./cards";

export function TournamentFilters() {
  const [city, setCity] = useState("Semua");
  const [format, setFormat] = useState("Semua");
  const [month, setMonth] = useState("Semua");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const cities = ["Semua", ...new Set(tournaments.map((item) => item.city))];

  const filtered = useMemo(
    () =>
      tournaments.filter((item) => {
        const cityMatch = city === "Semua" || item.city === city;
        const formatMatch = format === "Semua" || item.format.includes(format);
        const monthMatch = month === "Semua" || item.startDate.startsWith(month);
        return cityMatch && formatMatch && monthMatch;
      }),
    [city, format, month],
  );

  return (
    <section className="filter-layout" aria-label="Filter listing turnamen demo">
      <button
        className="mobile-filter-toggle button button-quiet"
        type="button"
        aria-expanded={filtersOpen}
        aria-controls="tournament-filters"
        onClick={() => setFiltersOpen((open) => !open)}
      >
        {filtersOpen ? "Tutup filter" : "Buka filter"}
      </button>
      <aside
        id="tournament-filters"
        className={`filter-panel ${filtersOpen ? "is-open" : ""}`}
      >
        <div>
          <p className="eyebrow">FILTER</p>
          <h2>Persempit contoh</h2>
        </div>
        <label>
          Lokasi
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            {cities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Format
          <select value={format} onChange={(event) => setFormat(event.target.value)}>
            <option>Semua</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </label>
        <label>
          Bulan mulai
          <select value={month} onChange={(event) => setMonth(event.target.value)}>
            <option>Semua</option>
            <option value="2026-10">Oktober 2026</option>
            <option value="2026-11">November 2026</option>
            <option value="2026-12">Desember 2026</option>
          </select>
        </label>
        <button
          className="button button-quiet"
          type="button"
          onClick={() => {
            setCity("Semua");
            setFormat("Semua");
            setMonth("Semua");
          }}
        >
          Hapus semua filter
        </button>
        <button
          className="button button-primary mobile-filter-close"
          type="button"
          onClick={() => setFiltersOpen(false)}
        >
          Terapkan filter
        </button>
      </aside>
      <div>
        <div className="result-summary">
          <strong>{filtered.length} listing DEMO</strong>
          <span>Semua data ini tidak aktif dan tidak dapat didaftarkan.</span>
        </div>
        {filtered.length ? (
          <div className="card-grid tournament-grid">
            {filtered.map((item) => (
              <TournamentCard key={item.slug} tournament={item} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Tidak ada contoh yang cocok</h2>
            <p>
              Coba hapus satu atau beberapa filter untuk melihat kembali listing DEMO.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
