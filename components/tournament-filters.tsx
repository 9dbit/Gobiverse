"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { tournaments } from "@/lib/data";
import { TournamentCard } from "./cards";

const ALL = "Semua";

export function TournamentFilters() {
  const [game, setGame] = useState(ALL);
  const [city, setCity] = useState(ALL);
  const [format, setFormat] = useState(ALL);
  const [month, setMonth] = useState(ALL);
  const [status, setStatus] = useState(ALL);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const games = [ALL, ...new Set(tournaments.map((item) => item.game))];
  const cities = [ALL, ...new Set(tournaments.map((item) => item.city))];
  const statuses = [ALL, ...new Set(tournaments.map((item) => item.status))];

  const filtered = useMemo(
    () =>
      tournaments.filter((item) => {
        const gameMatch = game === ALL || item.game === game;
        const cityMatch = city === ALL || item.city === city;
        const formatMatch = format === ALL || item.format.includes(format);
        const monthMatch = month === ALL || item.startDate.startsWith(month);
        const statusMatch = status === ALL || item.status === status;
        return gameMatch && cityMatch && formatMatch && monthMatch && statusMatch;
      }),
    [city, format, game, month, status],
  );

  const activeFilters = [
    game !== ALL
      ? { key: "game", label: `Game: ${game}`, clear: () => setGame(ALL) }
      : null,
    city !== ALL
      ? { key: "city", label: `Lokasi: ${city}`, clear: () => setCity(ALL) }
      : null,
    format !== ALL
      ? { key: "format", label: `Format: ${format}`, clear: () => setFormat(ALL) }
      : null,
    month !== ALL
      ? { key: "month", label: `Bulan: ${month}`, clear: () => setMonth(ALL) }
      : null,
    status !== ALL
      ? { key: "status", label: `Status: ${status}`, clear: () => setStatus(ALL) }
      : null,
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  const closeFilters = useCallback((restoreFocus = true) => {
    setFiltersOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    }
  }, []);

  function resetFilters() {
    setGame(ALL);
    setCity(ALL);
    setFormat(ALL);
    setMonth(ALL);
    setStatus(ALL);
  }

  useEffect(() => {
    const media = window.matchMedia("(max-width: 780px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!filtersOpen || !isMobile || !panelRef.current) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.querySelector<HTMLElement>("button, select")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeFilters();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeFilters, filtersOpen, isMobile]);

  return (
    <section className="filter-layout" aria-label="Filter listing turnamen demo">
      <button
        ref={toggleRef}
        className="mobile-filter-toggle button button-quiet"
        type="button"
        aria-expanded={filtersOpen}
        aria-haspopup="dialog"
        aria-controls="tournament-filters"
        onClick={() => setFiltersOpen(true)}
      >
        Buka filter{activeFilters.length ? ` (${activeFilters.length} aktif)` : ""}
      </button>

      {isMobile && filtersOpen ? (
        <div
          className="filter-backdrop"
          role="presentation"
          onMouseDown={() => closeFilters()}
        />
      ) : null}

      <aside
        ref={panelRef}
        id="tournament-filters"
        className={`filter-panel ${filtersOpen ? "is-open" : ""}`}
        role={isMobile ? "dialog" : undefined}
        aria-modal={isMobile ? true : undefined}
        aria-labelledby="tournament-filter-title"
      >
        <div className="filter-panel-header">
          <div>
            <p className="eyebrow">FILTER</p>
            <h2 id="tournament-filter-title">Persempit contoh</h2>
          </div>
          <button
            className="drawer-close"
            type="button"
            onClick={() => closeFilters()}
            aria-label="Tutup filter"
          >
            ×
          </button>
        </div>
        <label>
          Game
          <select value={game} onChange={(event) => setGame(event.target.value)}>
            {games.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
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
            <option>{ALL}</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </label>
        <label>
          Bulan mulai
          <select value={month} onChange={(event) => setMonth(event.target.value)}>
            <option>{ALL}</option>
            <option value="2026-10">Oktober 2026</option>
            <option value="2026-11">November 2026</option>
            <option value="2026-12">Desember 2026</option>
          </select>
        </label>
        <label>
          Status
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            {statuses.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <button className="button button-quiet" type="button" onClick={resetFilters}>
          Hapus semua filter
        </button>
        <button
          className="button button-primary mobile-filter-close"
          type="button"
          onClick={() => closeFilters()}
        >
          Terapkan filter
        </button>
      </aside>
      <div>
        <div className="result-summary">
          <strong>{filtered.length} listing DEMO</strong>
          <span>Semua data ini tidak aktif dan tidak dapat didaftarkan.</span>
        </div>
        {activeFilters.length ? (
          <div className="active-filter-list" aria-label="Filter aktif">
            {activeFilters.map((filter) => (
              <button key={filter.key} type="button" onClick={filter.clear}>
                {filter.label} <span aria-hidden="true">×</span>
                <span className="sr-only">Hapus filter</span>
              </button>
            ))}
            <button className="clear-all-filter" type="button" onClick={resetFilters}>
              Hapus semua
            </button>
          </div>
        ) : null}
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
            <button className="button button-quiet" type="button" onClick={resetFilters}>
              Reset filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
