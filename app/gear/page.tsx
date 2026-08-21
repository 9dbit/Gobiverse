import Link from "next/link";
import { SectionHeading } from "@/components/cards";
import { GearCategoryFilter } from "@/components/gear-category-filter";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/gear",
  title: "Gear guides demo",
  description:
    "Hub gear demo yang memperlihatkan review berbasis kebutuhan tanpa harga, stok, atau checkout.",
  robots: demoRobots,
});

export default function GearPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", path: "/" },
          { name: "Gear", path: "/gear" },
        ]}
      />
      <section className="page-hero gear-art">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Gear</span>
          </nav>
          <p className="eyebrow">GEAR HUB · EDITORIAL DEMO</p>
          <h1>Pilih gear dari kebutuhan, bukan klaim yang tidak dapat dibuktikan.</h1>
          <p className="muted">
            Kartu ini menunjukkan struktur review dan disclosure fondasi. Tidak ada barang
            terjual, harga, stok, atau link affiliate.
          </p>
          <Link className="button button-primary" href="/editorial-policy">
            Baca metodologi demo
          </Link>
        </div>
      </section>
      <section className="section page-shell">
        <SectionHeading
          eyebrow="KURASI BERDASARKAN PENGGUNAAN"
          title="Contoh gear fiktif"
        />
        <GearCategoryFilter />
      </section>
      <section className="section-tight page-shell">
        <div className="trust-strip">
          <div>
            <h3>Tanpa harga</h3>
            <p>
              Harga dan diskon baru tampil jika memiliki sumber serta waktu pengambilan
              yang relevan.
            </p>
          </div>
          <div>
            <h3>Tanpa checkout</h3>
            <p>Commerce, persediaan, dan pembayaran berada di luar scope foundation.</p>
          </div>
          <div>
            <h3>Disclosure terlihat</h3>
            <p>
              Setiap ekspansi affiliate harus menjaga penilaian editorial tetap
              independen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
