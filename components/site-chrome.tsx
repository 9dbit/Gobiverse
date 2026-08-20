"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

const searchSuggestions = [
  {
    href: "/tools/counter-picker",
    label: "Counter Picker",
    detail: "Cari respons draft hero demo",
    keywords: "counter strategi draft hero lawan",
  },
  {
    href: "/games/mobile-legends",
    label: "Build Explorer",
    detail: "Jelajahi hero, role, dan profil demo",
    keywords: "build meta hero mobile legends role",
  },
  {
    href: "/tournaments",
    label: "Tournament Finder",
    detail: "Filter listing turnamen demo",
    keywords: "turnamen tournament kota online offline event",
  },
  {
    href: "/gear",
    label: "Gear Guides",
    detail: "Baca kerangka review gear demo",
    keywords: "gear cooler keyboard mouse review",
  },
  {
    href: "/editorial-policy",
    label: "Kebijakan Editorial",
    detail: "Pelajari sumber, verifikasi, dan disclosure",
    keywords: "artikel editorial sumber verifikasi kebijakan",
  },
  {
    href: "/about",
    label: "Tentang Gobiverse",
    detail: "Lihat tujuan dan batasan foundation",
    keywords: "tentang about gobiverse kontak takedown",
  },
];

const categoryItems = [
  { key: "meta", href: "/games/mobile-legends", label: "Meta" },
  { key: "build", href: "/games/mobile-legends#hero-demo", label: "Build" },
  { key: "counter", href: "/tools/counter-picker", label: "Counter" },
  { key: "tournaments", href: "/tournaments", label: "Turnamen" },
  { key: "gear", href: "/gear", label: "Gear" },
  { key: "editorial", href: "/editorial-policy", label: "Artikel" },
];

const bottomItems = [
  { key: "home", href: "/", label: "Beranda" },
  { key: "build", href: "/games/mobile-legends", label: "Build" },
  { key: "counter", href: "/tools/counter-picker", label: "Counter" },
  { key: "tournaments", href: "/tournaments", label: "Turnamen" },
  { key: "gear", href: "/gear", label: "Gear" },
];

function getActiveSection(pathname: string) {
  if (pathname.startsWith("/games/")) return "meta";
  if (pathname.startsWith("/tools/counter-picker")) return "counter";
  if (pathname.startsWith("/tournaments")) return "tournaments";
  if (pathname.startsWith("/gear")) return "gear";
  if (pathname === "/editorial-policy" || pathname === "/about") return "editorial";
  return "home";
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredSuggestions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchSuggestions;
    return searchSuggestions.filter((suggestion) =>
      `${suggestion.label} ${suggestion.detail} ${suggestion.keywords}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const closeSearch = useCallback((restoreFocus = true) => {
    setSearchOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => searchTriggerRef.current?.focus());
    }
  }, []);

  function openSearch(trigger: HTMLButtonElement) {
    searchTriggerRef.current = trigger;
    setQuery("");
    setSearchOpen(true);
  }

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    searchInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  }, [closeSearch, searchOpen]);

  function closeMenuOnEscape(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten
      </a>
      <header className="site-header" onKeyDown={closeMenuOnEscape}>
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
            onClick={(event) => openSearch(event.currentTarget)}
            aria-haspopup="dialog"
            aria-expanded={searchOpen}
            aria-controls="site-search-dialog"
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
              aria-haspopup="dialog"
              aria-expanded={searchOpen}
              aria-controls="site-search-dialog"
              onClick={(event) => openSearch(event.currentTarget)}
            >
              ⌕
            </button>
            <button
              className="icon-button mobile-only"
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="category-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
        <nav
          id="category-navigation"
          className={`category-nav page-shell ${menuOpen ? "is-open" : ""}`}
          aria-label="Kategori"
        >
          {categoryItems.map((item) => {
            const active = activeSection === item.key;
            return (
              <Link
                key={item.key}
                className={active ? "is-active" : undefined}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      {searchOpen ? (
        <div
          className="search-dialog-backdrop"
          role="presentation"
          onMouseDown={() => closeSearch()}
        >
          <section
            id="site-search-dialog"
            ref={dialogRef}
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-search-title"
            aria-describedby="search-help"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-dialog-header">
              <h2 id="site-search-title">Cari di Gobiverse</h2>
              <button
                className="dialog-close"
                type="button"
                onClick={() => closeSearch()}
                aria-label="Tutup pencarian"
              >
                Tutup
              </button>
            </div>
            <label className="sr-only" htmlFor="site-search">
              Kata kunci pencarian
            </label>
            <input
              ref={searchInputRef}
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Coba: counter, hero, turnamen, atau gear"
              autoComplete="off"
            />
            <p id="search-help" className="muted">
              Ketik untuk menyaring tujuan foundation yang tersedia.
            </p>
            <div className="search-suggestions" aria-live="polite">
              {filteredSuggestions.length ? (
                filteredSuggestions.map((suggestion) => (
                  <Link
                    key={suggestion.href}
                    href={suggestion.href}
                    onClick={() => closeSearch(false)}
                  >
                    <strong>{suggestion.label}</strong>
                    <span>{suggestion.detail}</span>
                  </Link>
                ))
              ) : (
                <div className="search-empty">
                  <strong>Belum ada tujuan yang cocok</strong>
                  <span>Coba kata “counter”, “turnamen”, “gear”, atau “editorial”.</span>
                </div>
              )}
            </div>
          </section>
        </div>
      ) : null}
      <main id="main-content">{children}</main>
      <nav className="mobile-bottom-nav" aria-label="Navigasi utama mobile">
        {bottomItems.map((item) => {
          const active =
            item.key === "build" ? activeSection === "meta" : activeSection === item.key;
          return (
            <Link
              key={item.key}
              className={active ? "is-active" : undefined}
              href={item.href}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
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
