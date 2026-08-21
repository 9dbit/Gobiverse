import Link from "next/link";
import { CounterPicker } from "@/components/counter-picker";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { createPageMetadata, demoRobots } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/tools/counter-picker",
  title: "Counter Picker demo",
  description: "Alat counter deterministik yang menggunakan tiga hero fiktif Gobiverse.",
  robots: demoRobots,
});

export default function CounterPickerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", path: "/" },
          { name: "Counter Picker", path: "/tools/counter-picker" },
        ]}
      />
      <section className="page-hero">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Counter Picker</span>
          </nav>
          <p className="eyebrow">STRATEGY TOOL · DEMO</p>
          <h1>Mulai dari lawan yang ingin kamu respons.</h1>
          <p className="muted">
            Foundation ini membuktikan alur interaksi yang nyata: pilih hero, proses
            aturan seed, lalu lihat hasil yang sama untuk input yang sama.
          </p>
          <div className="notice">
            Hasil bukan statistik live, saran kompetitif, atau data yang bersumber dari
            publisher.
          </div>
        </div>
      </section>
      <section className="section page-shell">
        <CounterPicker />
      </section>
    </>
  );
}
