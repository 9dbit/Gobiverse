"use client";

import { useMemo, useState } from "react";
import { getCounterRecommendations, heroes } from "@/lib/data";

export function CounterPicker() {
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [submittedSlug, setSubmittedSlug] = useState<string | null>(null);
  const options = useMemo(
    () => heroes.filter((hero) => hero.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const selectedHero = heroes.find((hero) => hero.slug === selectedSlug);
  const recommendations = submittedSlug ? getCounterRecommendations(submittedSlug) : [];

  function reset() {
    setQuery("");
    setSelectedSlug(null);
    setSubmittedSlug(null);
  }

  return (
    <section className="counter-picker" aria-labelledby="counter-picker-heading">
      <div className="stepper" aria-label="Langkah Counter Picker">
        <span className="is-active">1. Pilih lawan</span>
        <span className={submittedSlug ? "is-active" : ""}>2. Lihat opsi</span>
      </div>
      <div className="tool-panel">
        <div>
          <p className="eyebrow">ALAT DEMO</p>
          <h2 id="counter-picker-heading">
            Cari respons draft, bukan jawaban yang diklaim live.
          </h2>
          <p className="muted">
            Aturan counter pada fondasi ini sengaja statis, transparan, dan hanya memakai
            tiga hero fiktif.
          </p>
        </div>
        <label className="field-label" htmlFor="enemy-search">
          Hero lawan
          <input
            id="enemy-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ketik nama hero demo…"
          />
        </label>
        <div className="choice-grid" role="list" aria-label="Pilihan hero demo">
          {options.map((hero) => (
            <button
              key={hero.slug}
              type="button"
              className={`choice-card ${selectedSlug === hero.slug ? "is-selected" : ""}`}
              onClick={() => setSelectedSlug(hero.slug)}
              aria-pressed={selectedSlug === hero.slug}
              aria-label={`Pilih ${hero.name}`}
            >
              <span className="choice-mark">{hero.name.slice(0, 1)}</span>
              <span>
                <strong>{hero.name}</strong>
                <small>{hero.role} · DEMO</small>
              </span>
            </button>
          ))}
        </div>
        {options.length === 0 ? (
          <p className="empty-inline">
            Tidak ada hero demo yang cocok. Coba Asterion, Nyxara, atau Voltane.
          </p>
        ) : null}
        <div className="tool-actions">
          <button
            type="button"
            className="button button-primary"
            disabled={!selectedSlug}
            onClick={() => selectedSlug && setSubmittedSlug(selectedSlug)}
          >
            Lihat opsi counter
          </button>
          <button type="button" className="button button-quiet" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      {submittedSlug && selectedHero ? (
        <section
          className="counter-result"
          aria-live="polite"
          aria-label="Hasil Counter Picker"
        >
          <div>
            <p className="eyebrow">HASIL DETERMINISTIK · DEMO</p>
            <h3>Respons untuk {selectedHero.name}</h3>
            <p>
              Urutan ini berasal dari aturan seed tetap—bukan data patch, win rate, atau
              rekomendasi publisher.
            </p>
          </div>
          <div className="result-list">
            {recommendations.map((hero, index) => (
              <article key={hero.slug} className="result-item">
                <span>0{index + 1}</span>
                <div>
                  <h4>{hero.name}</h4>
                  <p>
                    {hero.role} · {hero.specialty}
                  </p>
                </div>
                <p>
                  Contoh alasan: pola {hero.specialty.toLowerCase()} dapat menguji ruang
                  gerak lawan di dataset demo.
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
