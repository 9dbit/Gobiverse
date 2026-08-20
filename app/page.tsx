import Link from "next/link";
import {
  EditorialCard,
  GearCard,
  HeroCard,
  SectionHeading,
  TournamentCard,
} from "@/components/cards";
import { gearProducts, heroes, tournaments } from "@/lib/data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/",
  title: "Strategi, turnamen, dan gear gaming Indonesia",
  description:
    "Jelajahi fondasi Gobiverse dengan konten strategi, listing turnamen, dan gear yang seluruhnya diberi label DEMO.",
  robots: demoRobots,
});

export default function HomePage() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">GOBIVERSE FOUNDATION · DEMO</p>
          <h1>Main lebih cerdas, mulai dari keputusan yang jelas.</h1>
          <p>
            Temukan alur strategi, discovery turnamen, dan kerangka review gear yang
            menampilkan sumber serta batasan data dengan jujur.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/tools/counter-picker">
              Coba Counter Picker
            </Link>
            <Link className="button button-quiet" href="/games/mobile-legends">
              Lihat game hub
            </Link>
          </div>
          <div className="hero-trust">
            <span className="demo-badge">DEMO</span>
            <span>
              Belum ada statistik live, pendaftaran aktif, atau harga komersial.
            </span>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="MULAI DARI TUGAS" title="Tools populer" />
        <div className="rail">
          <Link className="content-card" href="/tools/counter-picker">
            <div className="card-body">
              <p className="eyebrow">ALAT DEMO</p>
              <h3>Counter Picker</h3>
              <p>Pilih satu hero fiktif dan lihat respons draft yang deterministik.</p>
              <span className="text-link">Mulai memilih →</span>
            </div>
          </Link>
          <Link className="content-card" href="/games/mobile-legends">
            <div className="card-body">
              <p className="eyebrow">JELAJAHI</p>
              <h3>Build Explorer</h3>
              <p>
                Telusuri tiga profil hero fiktif dengan catatan verifikasi yang terlihat.
              </p>
              <span className="text-link">Lihat hero →</span>
            </div>
          </Link>
          <Link className="content-card" href="/tournaments">
            <div className="card-body">
              <p className="eyebrow">DISCOVERY</p>
              <h3>Tournament Finder</h3>
              <p>
                Uji filter game, kota, dan tanggal melalui listing yang jelas berstatus
                DEMO.
              </p>
              <span className="text-link">Buka listing →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section-tight page-shell">
        <SectionHeading
          eyebrow="META & BUILD POPULER"
          title="Contoh kartu strategi"
          action={{ href: "/games/mobile-legends", label: "Lihat hub" }}
        />
        <div className="rail">
          {heroes.map((hero) => (
            <HeroCard key={hero.slug} hero={hero} />
          ))}
        </div>
      </section>

      <section className="section page-shell">
        <div className="feature-split">
          <div className="feature-art" />
          <div className="feature-copy">
            <p className="eyebrow">TURNAMEN · DEMO</p>
            <h2>Temukan format yang relevan tanpa menyamarkan ketersediaan.</h2>
            <p className="muted">
              Filter contoh berdasarkan kota, format, dan bulan. Tidak ada event yang
              diklaim buka atau siap didaftarkan pada fondasi ini.
            </p>
            <Link className="button button-primary" href="/tournaments">
              Buka listing demo
            </Link>
          </div>
        </div>
        <div className="rail" style={{ marginTop: "1rem" }}>
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.slug} tournament={tournament} />
          ))}
        </div>
      </section>

      <section className="section-tight page-shell">
        <div className="feature-split">
          <div className="feature-art gear" />
          <div className="feature-copy">
            <p className="eyebrow">GEAR · EDITORIAL DEMO</p>
            <h2>Kerangka rekomendasi berdasarkan kebutuhan pemakaian.</h2>
            <p className="muted">
              Tidak ada harga, stok, keranjang, atau tautan merchant sampai produk dan
              sumbernya diverifikasi.
            </p>
            <Link className="button button-quiet" href="/gear">
              Jelajahi gear demo
            </Link>
          </div>
        </div>
        <div className="rail" style={{ marginTop: "1rem" }}>
          {gearProducts.map((product) => (
            <GearCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section page-shell">
        <div className="trust-strip">
          <div>
            <h3>Sumber terlihat</h3>
            <p>Setiap contoh membawa catatan asal data dan waktu verifikasi.</p>
          </div>
          <div>
            <h3>DEMO terbaca jelas</h3>
            <p>
              Seed tidak diposisikan sebagai data publisher, statistik, atau event live.
            </p>
          </div>
          <div>
            <h3>Commerce tertunda</h3>
            <p>
              Review editorial belum berubah menjadi checkout, harga, atau affiliate CTA.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight page-shell">
        <SectionHeading
          eyebrow="PANDUAN & TRANSPARANSI"
          title="Baca sebelum mengambil keputusan"
          action={{ href: "/editorial-policy", label: "Lihat kebijakan" }}
        />
        <div className="rail editorial-rail">
          <EditorialCard
            href="/editorial-policy"
            category="KEBIJAKAN"
            title="Bagaimana Gobiverse memeriksa sumber dan status data"
            summary="Standar untuk data DEMO, verifikasi, koreksi, serta disclosure editorial."
            author="Tim Editorial Gobiverse"
            verifiedAt="20 Agu 2026"
          />
          <EditorialCard
            href="/about"
            category="TENTANG"
            title="Utility sebelum commerce"
            summary="Mengapa foundation dimulai dari alat bantu, transparansi, dan batasan produk."
            author="Tim Produk Gobiverse"
            verifiedAt="20 Agu 2026"
          />
          <EditorialCard
            href="/gear"
            category="METODOLOGI GEAR"
            title="Kerangka review yang tidak dimulai dari diskon"
            summary="Harga dan affiliate tetap ditunda sampai sumber serta metodologi tersedia."
            author="Tim Editorial Gobiverse"
            verifiedAt="20 Agu 2026"
          />
        </div>
      </section>
    </>
  );
}
