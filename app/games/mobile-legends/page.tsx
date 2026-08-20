import Link from "next/link";
import { HeroCard, SectionHeading } from "@/components/cards";
import { heroes } from "@/lib/data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/games/mobile-legends",
  title: "Mobile Legends demo hub",
  description: "Hub fondasi untuk tiga hero fiktif, alat counter, dan catatan data demo.",
  robots: demoRobots,
});

export default function GameHubPage() {
  return (
    <>
      <section className="page-hero with-art">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Mobile Legends demo</span>
          </nav>
          <p className="eyebrow">GAME HUB · DEMO DATA</p>
          <h1>Ruang latihan untuk keputusan draft yang lebih terstruktur.</h1>
          <p className="muted">
            Nama, peran, dan counter di halaman ini adalah data fiktif Gobiverse—bukan
            informasi Mobile Legends, publisher, atau patch aktif.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/tools/counter-picker">
              Buka Counter Picker
            </Link>
            <a className="button button-quiet" href="#hero-demo">
              Lihat hero demo
            </a>
          </div>
        </div>
      </section>
      <section id="hero-demo" className="section page-shell">
        <SectionHeading eyebrow="PROFIL FIKTIF" title="Hero demo &amp; shortcut role" />
        <div className="rail">
          {heroes.map((hero) => (
            <HeroCard key={hero.slug} hero={hero} />
          ))}
        </div>
      </section>
      <section className="section-tight page-shell">
        <div className="trust-strip">
          <div>
            <h3>Dataset statis</h3>
            <p>Aturan untuk alat counter tidak berubah sendiri dan dapat diuji ulang.</p>
          </div>
          <div>
            <h3>Jangan gunakan sebagai patch note</h3>
            <p>Tidak ada klaim meta terbaru, win rate, atau rekomendasi kompetitif.</p>
          </div>
          <div>
            <h3>Jejak sumber</h3>
            <p>Setiap halaman detail mencantumkan sumber dan tanggal verifikasi demo.</p>
          </div>
        </div>
      </section>
    </>
  );
}
