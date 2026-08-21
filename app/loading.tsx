export default function Loading() {
  return (
    <section className="section page-shell" aria-live="polite" aria-busy="true">
      <p className="eyebrow">MEMUAT</p>
      <div className="empty-state">
        <h1>Menyiapkan halaman…</h1>
        <p>Konten foundation sedang dimuat.</p>
      </div>
    </section>
  );
}
