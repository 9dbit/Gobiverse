import Link from "next/link";
import { notFound } from "next/navigation";
import { formatVerified, gearProducts, getGearProduct } from "@/lib/data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export function generateStaticParams() {
  return gearProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getGearProduct(slug);
  if (!product) return { title: "Gear tidak ditemukan", robots: demoRobots };
  return createPageMetadata({
    path: `/gear/${product.slug}`,
    title: `${product.name} — gear demo`,
    description: product.summary,
    robots: demoRobots,
  });
}

export default async function GearDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getGearProduct(slug);
  if (!product) notFound();
  return (
    <>
      <section className="page-hero gear-art">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/gear">Gear</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
          <p className="eyebrow">GEAR PROFILE · DEMO</p>
          <h1>{product.name}</h1>
          <p className="muted">
            {product.category} · {product.useCase}
          </p>
          <div className="notice">
            Tidak ada rating, harga, ketersediaan, merchant, atau ajakan transaksi pada
            profil demo ini.
          </div>
        </div>
      </section>
      <section className="section page-shell detail-layout">
        <article className="prose">
          <h2>Tujuan penggunaan</h2>
          <p className="detail-copy">{product.summary}</p>
          <h2>Metodologi yang akan dipakai</h2>
          <p>
            Review publik hanya dapat diterbitkan ketika uji penggunaan, sumber produk,
            penulis/reviewer, tanggal verifikasi, dan disclosure relasi komersial
            tersedia. Foundation ini tidak mensimulasikan hasil uji atau membuat klaim
            performa.
          </p>
          <Link className="button button-quiet" href="/editorial-policy">
            Lihat kebijakan editorial
          </Link>
        </article>
        <aside className="meta-card">
          <p className="eyebrow">CATATAN EDITORIAL</p>
          <dl>
            <div>
              <dt>Status</dt>
              <dd>DEMO · tidak untuk indexing</dd>
            </div>
            <div>
              <dt>Review</dt>
              <dd>Belum dilakukan</dd>
            </div>
            <div>
              <dt>Harga</dt>
              <dd>Tidak ditampilkan</dd>
            </div>
            <div>
              <dt>Sumber</dt>
              <dd>{product.source.title}</dd>
            </div>
            <div>
              <dt>Diverifikasi</dt>
              <dd>{formatVerified(product.source.verifiedAt)}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
