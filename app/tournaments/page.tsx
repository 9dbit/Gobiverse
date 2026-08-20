import Link from "next/link";
import { TournamentFilters } from "@/components/tournament-filters";
import { createPageMetadata, demoRobots } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/tournaments",
  title: "Listing turnamen demo",
  description:
    "Contoh discovery turnamen dengan filter kota, format, dan tanggal tanpa klaim pendaftaran aktif.",
  robots: demoRobots,
});

export default function TournamentsPage() {
  return (
    <>
      <section className="page-hero tournaments-art">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Turnamen</span>
          </nav>
          <p className="eyebrow">TOURNAMENT DISCOVERY · DEMO</p>
          <h1>Filter untuk menemukan format yang ingin dipelajari.</h1>
          <p className="muted">
            Tidak ada listing yang dibuka, diverifikasi, atau dapat didaftarkan. Setiap
            contoh berstatus DEMO supaya status tidak menyesatkan.
          </p>
        </div>
      </section>
      <section className="section page-shell">
        <TournamentFilters />
      </section>
    </>
  );
}
