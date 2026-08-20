import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, formatVerified, getTournament, tournaments } from "@/lib/data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export function generateStaticParams() {
  return tournaments.map((tournament) => ({ slug: tournament.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getTournament(slug);
  if (!tournament) return { title: "Turnamen tidak ditemukan", robots: demoRobots };
  return createPageMetadata({
    path: `/tournaments/${tournament.slug}`,
    title: `${tournament.name} — listing demo`,
    description: tournament.summary,
    robots: demoRobots,
  });
}

export default async function TournamentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getTournament(slug);
  if (!tournament) notFound();
  return (
    <>
      <section className="page-hero tournaments-art">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/tournaments">Turnamen</Link>
            <span>/</span>
            <span>{tournament.name}</span>
          </nav>
          <p className="eyebrow">LISTING TURNAMEN · DEMO</p>
          <h1>{tournament.name}</h1>
          <p className="muted">
            {tournament.game} · {tournament.city} · {tournament.format}
          </p>
          <div className="notice">
            Tidak tersedia tombol pendaftaran karena ini adalah contoh data, bukan event
            aktif.
          </div>
        </div>
      </section>
      <section className="section page-shell detail-layout">
        <article className="prose">
          <h2>Ringkasan listing</h2>
          <p className="detail-copy">{tournament.summary}</p>
          <h2>Transparansi status</h2>
          <p>
            Halaman ini menyimpan struktur yang dibutuhkan untuk listing terverifikasi:
            sumber, tanggal ambil, tanggal verifikasi, dan status editorial. Sebelum fase
            moderasi, semua listing tetap non-indexable dan berlabel DEMO.
          </p>
        </article>
        <aside className="meta-card">
          <p className="eyebrow">DETAIL DEMO</p>
          <dl>
            <div>
              <dt>Status</dt>
              <dd>DEMO · bukan pendaftaran aktif</dd>
            </div>
            <div>
              <dt>Mulai</dt>
              <dd>{formatDate(tournament.startDate)}</dd>
            </div>
            <div>
              <dt>Deadline contoh</dt>
              <dd>{formatDate(tournament.deadline)}</dd>
            </div>
            <div>
              <dt>Diverifikasi</dt>
              <dd>{formatVerified(tournament.source.verifiedAt)}</dd>
            </div>
            <div>
              <dt>Sumber</dt>
              <dd>{tournament.source.title}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
