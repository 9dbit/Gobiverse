import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section page-shell">
      <div className="empty-state">
        <p className="eyebrow">404</p>
        <h1>Halaman tidak ditemukan.</h1>
        <p>Rute ini belum ada atau contoh kontennya tidak tersedia.</p>
        <Link className="button button-primary" href="/">
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
