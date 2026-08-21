import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/about",
  title: "Tentang Gobiverse",
  description:
    "Tujuan, batasan, dan posisi Gobiverse sebagai platform gaming intelligence Indonesia.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", path: "/" },
          { name: "Tentang Gobiverse", path: "/about" },
        ]}
      />
      <section className="page-hero">
        <div className="page-shell prose">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Tentang</span>
          </nav>
          <p className="eyebrow">TENTANG GOBIVERSE</p>
          <h1>Utility sebelum commerce.</h1>
          <p className="detail-copy">
            Gobiverse dirancang untuk membantu gamer Indonesia mengambil keputusan yang
            lebih jelas: memahami strategi, menemukan turnamen, dan membandingkan gear
            sesuai kebutuhan.
          </p>
          <h2>Yang sedang dibangun</h2>
          <p>
            Foundation ini menguji satu perjalanan yang koheren melalui data DEMO: dari
            discovery, ke alat strategi, ke konten turnamen dan gear yang transparan soal
            statusnya.
          </p>
          <h2>Yang tidak kami lakukan di foundation</h2>
          <ul>
            <li>Tidak ada betting, gambling, atau mekanisme hadiah berbasis taruhan.</li>
            <li>Tidak ada checkout, top-up, marketplace akun, atau dompet.</li>
            <li>Tidak ada klaim data live, ranking, kode, harga, atau event aktif.</li>
            <li>
              Tidak menggunakan ilustrasi, screenshot, atau aset game berlisensi tanpa
              izin.
            </li>
          </ul>
          <h2>Kontak dan takedown</h2>
          <p>
            Untuk pertanyaan editorial atau permintaan takedown, hubungi{" "}
            <a href="mailto:hello@gobiverse.com">hello@gobiverse.com</a>. Detail kontak
            ini adalah jalur foundation dan akan diverifikasi sebelum produksi.
          </p>
        </div>
      </section>
    </>
  );
}
