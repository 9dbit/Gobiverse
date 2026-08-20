export type DemoStatus = "DEMO";

export type SourceRecord = {
  title: string;
  url: string;
  retrievedAt: string;
  verifiedAt: string;
  verifiedBy: string;
};

export type Hero = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  summary: string;
  counters: string[];
  source: SourceRecord;
  status: DemoStatus;
};

export type Tournament = {
  slug: string;
  name: string;
  game: string;
  city: string;
  startDate: string;
  deadline: string;
  format: string;
  summary: string;
  status: DemoStatus;
  source: SourceRecord;
};

export type GearProduct = {
  slug: string;
  name: string;
  category: string;
  useCase: string;
  summary: string;
  status: DemoStatus;
  source: SourceRecord;
};

const demoSource = (title: string): SourceRecord => ({
  title,
  url: "https://example.com/gobiverse-demo-source",
  retrievedAt: "2026-08-20T00:00:00.000Z",
  verifiedAt: "2026-08-20T00:00:00.000Z",
  verifiedBy: "Tim Editorial Gobiverse",
});

export const heroes: Hero[] = [
  {
    slug: "asterion",
    name: "Asterion",
    role: "Fighter",
    specialty: "Initiator",
    summary:
      "Demo hero dengan kontrol area untuk menjelaskan cara membaca komposisi draft tanpa menggunakan data game berlisensi.",
    counters: ["nyxara", "voltane"],
    source: demoSource("Dataset strategi demo Gobiverse"),
    status: "DEMO",
  },
  {
    slug: "nyxara",
    name: "Nyxara",
    role: "Mage",
    specialty: "Burst",
    summary:
      "Demo hero jarak jauh dengan burst terukur; digunakan untuk menguji alur rekomendasi counter deterministik.",
    counters: ["voltane", "asterion"],
    source: demoSource("Dataset strategi demo Gobiverse"),
    status: "DEMO",
  },
  {
    slug: "voltane",
    name: "Voltane",
    role: "Marksman",
    specialty: "Kiting",
    summary:
      "Demo hero dengan mobilitas tinggi yang memperlihatkan pertukaran antara jangkauan, kontrol, dan posisi.",
    counters: ["asterion", "nyxara"],
    source: demoSource("Dataset strategi demo Gobiverse"),
    status: "DEMO",
  },
];

export const tournaments: Tournament[] = [
  {
    slug: "nexushub-campus-cup",
    name: "NexusHub Campus Cup",
    game: "Mobile Legends (demo)",
    city: "Bandung",
    startDate: "2026-10-11",
    deadline: "2026-10-03",
    format: "Tim kampus · Offline",
    summary:
      "Contoh listing turnamen untuk menguji filter kota, tanggal, dan status. Ini bukan pendaftaran aktif.",
    status: "DEMO",
    source: demoSource("Catatan listing demo Gobiverse"),
  },
  {
    slug: "arcadia-weekend-series",
    name: "Arcadia Weekend Series",
    game: "Mobile Legends (demo)",
    city: "Online",
    startDate: "2026-11-08",
    deadline: "2026-10-31",
    format: "Komunitas · Online",
    summary:
      "Contoh event online untuk menguji pencarian dan klasifikasi format, tanpa klaim ketersediaan.",
    status: "DEMO",
    source: demoSource("Catatan listing demo Gobiverse"),
  },
  {
    slug: "orbit-youth-invitational",
    name: "Orbit Youth Invitational",
    game: "Mobile Legends (demo)",
    city: "Jakarta",
    startDate: "2026-12-05",
    deadline: "2026-11-26",
    format: "Pelajar · Offline",
    summary:
      "Contoh listing berstatus DEMO untuk memastikan antarmuka tidak menyamarkan data uji sebagai event terverifikasi.",
    status: "DEMO",
    source: demoSource("Catatan listing demo Gobiverse"),
  },
];

export const gearProducts: GearProduct[] = [
  {
    slug: "aurora-cooler-clip",
    name: "Aurora Cooler Clip",
    category: "Phone cooler",
    useCase: "Sesi gaming mobile panjang",
    summary:
      "Produk fiktif untuk prototipe kartu editorial. Belum direview, dijual, atau ditautkan ke merchant.",
    status: "DEMO",
    source: demoSource("Metodologi review demo Gobiverse"),
  },
  {
    slug: "vector-65-keyboard",
    name: "Vector 65 Keyboard",
    category: "Keyboard",
    useCase: "Setup ringkas untuk bermain dan belajar",
    summary:
      "Contoh produk fiktif yang menguji pola editorial dan disclosure tanpa harga atau klaim performa.",
    status: "DEMO",
    source: demoSource("Metodologi review demo Gobiverse"),
  },
  {
    slug: "pulse-wireless-mouse",
    name: "Pulse Wireless Mouse",
    category: "Mouse",
    useCase: "Aim konsisten di meja kecil",
    summary:
      "Placeholder produk fiktif untuk menampilkan struktur review berbasis kebutuhan pemakaian.",
    status: "DEMO",
    source: demoSource("Metodologi review demo Gobiverse"),
  },
];

export function getHero(slug: string) {
  return heroes.find((hero) => hero.slug === slug);
}

export function getTournament(slug: string) {
  return tournaments.find((tournament) => tournament.slug === slug);
}

export function getGearProduct(slug: string) {
  return gearProducts.find((product) => product.slug === slug);
}

export function getCounterRecommendations(enemySlug: string): Hero[] {
  const enemy = getHero(enemySlug);
  if (!enemy) return [];

  return enemy.counters
    .map((slug) => getHero(slug))
    .filter((hero): hero is Hero => Boolean(hero));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeZone: "Asia/Jakarta",
  }).format(new Date(`${date}T00:00:00+07:00`));
}

export function formatVerified(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeZone: "Asia/Jakarta",
  }).format(new Date(date));
}
