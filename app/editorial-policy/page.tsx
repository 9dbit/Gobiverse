import Link from "next/link";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/editorial-policy",
  title: "Kebijakan editorial",
  description:
    "Standar sumber, verifikasi, demo data, disclosure, dan koreksi untuk Gobiverse.",
});

export default function EditorialPolicyPage() {
  return (
    <section className="page-hero">
      <div className="page-shell prose">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <span>Kebijakan editorial</span>
        </nav>
        <p className="eyebrow">TRUST &amp; EDITORIAL</p>
        <h1>Data harus jelas sumber dan batasannya.</h1>
        <p className="detail-copy">
          Halaman ini menetapkan aturan foundation sebelum Gobiverse menerbitkan data
          game, listing turnamen, atau ulasan gear yang dapat dipakai publik.
        </p>
        <h2>Standar verifikasi</h2>
        <ul>
          <li>
            Konten faktual menyimpan judul sumber, URL, waktu pengambilan, waktu
            verifikasi, dan penanggung jawab.
          </li>
          <li>
            Data yang belum memenuhi kontrak kualitas tetap draft, review, atau DEMO dan
            tidak diindeks.
          </li>
          <li>
            Kami tidak memakai kata “terbaru”, “aktif”, “resmi”, “termurah”, atau
            “terbaik” tanpa bukti yang sesuai.
          </li>
        </ul>
        <h2>Data demo</h2>
        <p>
          Data seed pada foundation berupa nama, profil, dan event fiktif. Label DEMO
          muncul di UI dan data storage. Data ini tidak mewakili game publisher atau
          penyelenggara turnamen.
        </p>
        <h2>Review gear &amp; affiliate</h2>
        <p>
          Review mendatang harus menjelaskan metodologi, penulis/reviewer, tanggal,
          sumber, dan disclosure. Harga, availability, atau CTA merchant hanya dapat
          tampil saat faktual dan ditelusuri. Affiliate tidak boleh menentukan kesimpulan
          editorial.
        </p>
        <h2>Koreksi, privasi, dan keamanan</h2>
        <p>
          Permintaan koreksi atau takedown dapat dikirim ke{" "}
          <a href="mailto:hello@gobiverse.com">hello@gobiverse.com</a>. Foundation tidak
          mengumpulkan akun, data pembayaran, atau data pribadi. Form publik akan
          memerlukan validasi, otorisasi, dan proteksi spam sebelum diaktifkan.
        </p>
      </div>
    </section>
  );
}
