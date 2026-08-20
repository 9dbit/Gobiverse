"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section page-shell">
      <div className="empty-state">
        <p className="eyebrow">TERJADI KESALAHAN</p>
        <h1>Halaman belum dapat ditampilkan.</h1>
        <p>Data demo tidak berubah. Silakan coba lagi.</p>
        <button className="button button-primary" type="button" onClick={reset}>
          Coba lagi
        </button>
      </div>
    </section>
  );
}
