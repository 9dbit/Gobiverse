import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroCard, SectionHeading } from "@/components/cards";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { formatVerified, getHero, heroes } from "@/lib/data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export function generateStaticParams() {
  return heroes.map((hero) => ({ slug: hero.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hero = getHero(slug);
  if (!hero) return { title: "Hero tidak ditemukan", robots: demoRobots };
  return createPageMetadata({
    path: `/games/mobile-legends/heroes/${hero.slug}`,
    title: `${hero.name} — profil hero demo`,
    description: hero.summary,
    robots: demoRobots,
  });
}

export default async function HeroDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hero = getHero(slug);
  if (!hero) notFound();
  const related = heroes.filter((item) => item.slug !== hero.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", path: "/" },
          { name: "Mobile Legends demo", path: "/games/mobile-legends" },
          {
            name: hero.name,
            path: `/games/mobile-legends/heroes/${hero.slug}`,
          },
        ]}
      />
      <section className="page-hero">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/games/mobile-legends">Mobile Legends demo</Link>
            <span>/</span>
            <span>{hero.name}</span>
          </nav>
          <p className="eyebrow">HERO FIKTIF · DEMO</p>
          <h1>{hero.name}</h1>
          <p className="muted">
            {hero.role} · {hero.specialty}
          </p>
          <div className="hero-trust">
            <span className="demo-badge">DEMO</span>
            <span>Terakhir dicek {formatVerified(hero.source.verifiedAt)}</span>
          </div>
        </div>
      </section>
      <section className="section page-shell detail-layout">
        <article className="prose">
          <h2>Ringkasan</h2>
          <p className="detail-copy">{hero.summary}</p>
          <h2>Catatan penggunaan</h2>
          <p>
            Profil ini dibuat untuk mendemonstrasikan arsitektur konten yang menyertakan
            status data, penjelasan, dan jalan ke alat terkait. Konten ini tidak
            merepresentasikan hero, item, kemampuan, atau strategi dari game publisher
            mana pun.
          </p>
          <Link className="button button-primary" href="/tools/counter-picker">
            Uji lewat Counter Picker
          </Link>
        </article>
        <aside className="meta-card">
          <p className="eyebrow">PROVENANCE</p>
          <dl>
            <div>
              <dt>Status</dt>
              <dd>DEMO · tidak untuk indexing</dd>
            </div>
            <div>
              <dt>Sumber</dt>
              <dd>{hero.source.title}</dd>
            </div>
            <div>
              <dt>Diambil</dt>
              <dd>{formatVerified(hero.source.retrievedAt)}</dd>
            </div>
            <div>
              <dt>Diverifikasi oleh</dt>
              <dd>{hero.source.verifiedBy}</dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section-tight page-shell">
        <SectionHeading eyebrow="LANJUTKAN EKSPLORASI" title="Hero demo lain" />
        <div className="rail">
          {related.map((item) => (
            <HeroCard key={item.slug} hero={item} />
          ))}
        </div>
      </section>
    </>
  );
}
