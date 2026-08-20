"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const searchSuggestions = [
  {
    href: "/tools/counter-picker",
    label: "Counter Picker",
    detail: "Cari respons draft demo",
  },
  {
    href: "/games/mobile-legends",
    label: "Build Explorer",
    detail: "Lihat contoh hero demo",
  },
  { href: "/tournaments", label: "Tournament Finder", detail: "Temukan listing demo" },
  { href: "/gear", label: "Gear Guides", detail: "Baca kerangka review demo" },
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten
      </a>
      <header className="site-header">
        <div className="header-main page-shell">
          <Link className="brand" href="/" aria-label="Gobiverse beranda">
            <Image
              src="/assets/gobiverse/icons/gobiverse-emblem-64.png"
              alt=""
              width={36}
              height={36}
            />
            <span>Gobiverse</span>
          </Link>
          <button
            className="desktop-search"
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={searchOpen}
          >
            <span aria-hidden="true">⌕</span>
            Cari hero, build, counter, turnamen, atau gear…
          </button>
          <div className="header-actions">
            <Link className="header-link" href="/editorial-policy">
              Trust &amp; editorial
            </Link>
            <button
              className="icon-button mobile-only"
              type="button"
              aria-label="Buka pencarian"
              onClick={() => setSearchOpen(true)}
            >
              ⌕
            </button>
            <button
              className="icon-button mobile-only"
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
        <nav
          className={`category-nav page-shell ${menuOpen ? "is-open" : ""}`}
          aria-label="Kategori"
        >
          <Link href="/games/mobile-legends">Meta</Link>
          <Link href="/games/mobile-legends">Build</Link>
          <Link href="/tools/counter-picker">Counter</Link>
          <Link href="/tournaments">Turnamen</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/editorial-policy">Artikel</Link>
        </nav>
      </header>
      {searchOpen ? (
        <div
          className="search-dialog-backdrop"
          role="presentation"
          onMouseDown={() => setSearchOpen(false)}
        >
          <section
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Pencarian Gobiverse"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-dialog-header">
              <label htmlFor="site-search">Cari di Gobiverse</label>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Tutup pencarian"
              >
                Tutup
              </button>
            </div>
            <input
              id="site-search"
              autoFocus
              placeholder="Coba: counter, hero, turnamen, atau gear"
              aria-describedby="search-help"
            />
            <p id="search-help" className="muted">
              Pencarian foundation menampilkan tujuan demo yang tersedia.
            </p>
            <div className="search-suggestions">
              {searchSuggestions.map((suggestion) => (
                <Link
                  key={suggestion.href}
                  href={suggestion.href}
                  onClick={() => setSearchOpen(false)}
                >
                  <strong>{suggestion.label}</strong>
                  <span>{suggestion.detail}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      ) : null}
      <main id="main-content">{children}</main>
      <nav className="mobile-bottom-nav" aria-label="Navigasi utama mobile">
        <Link href="/">Beranda</Link>
        <Link href="/games/mobile-legends">Build</Link>
        <Link href="/tools/counter-picker">Counter</Link>
        <Link href="/tournaments">Turnamen</Link>
        <Link href="/gear">Gear</Link>
      </nav>
      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div>
            <p className="eyebrow">GOBIVERSE</p>
            <h2>Main Lebih Cerdas.</h2>
            <p>
              Platform fondasi untuk strategi, discovery turnamen, dan gear. Seluruh
              konten operasional saat ini berlabel DEMO.
            </p>
          </div>
          <div>
            <h3>Kepercayaan</h3>
            <Link href="/editorial-policy">Kebijakan editorial</Link>
            <Link href="/about">Tentang Gobiverse</Link>
            <a href="mailto:hello@gobiverse.com">Kontak &amp; takedown</a>
          </div>
          <div>
            <h3>Ruang lingkup</h3>
            <p>
              Tidak ada checkout, akun, dompet, taruhan, atau jual beli akun game pada
              fondasi ini.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
