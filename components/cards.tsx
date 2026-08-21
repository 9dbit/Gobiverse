import Image from "next/image";
import Link from "next/link";
import type { GearProduct, Hero, Tournament } from "@/lib/data";
import { formatDate, formatVerified } from "@/lib/data";

export function DemoBadge() {
  return <span className="demo-badge">DEMO</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action ? (
        <Link className="text-link" href={action.href}>
          {action.label} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}

export function HeroCard({ hero }: { hero: Hero }) {
  return (
    <Link
      className="content-card hero-card"
      href={`/games/mobile-legends/heroes/${hero.slug}`}
    >
      <div className="abstract-visual" aria-hidden="true">
        <span>{hero.name.slice(0, 1)}</span>
      </div>
      <div className="card-body">
        <div className="card-topline">
          <DemoBadge />
          <span>{hero.role}</span>
        </div>
        <h3>{hero.name}</h3>
        <p>{hero.specialty} · Rekomendasi draft demo</p>
        <small>Dicek {formatVerified(hero.source.verifiedAt)}</small>
      </div>
    </Link>
  );
}

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <Link
      className="content-card tournament-card"
      href={`/tournaments/${tournament.slug}`}
    >
      <Image
        className="card-image"
        src="/assets/gobiverse/web/gobiverse-tournament-banner-desktop.webp"
        alt=""
        width={1600}
        height={900}
      />
      <div className="card-body">
        <div className="card-topline">
          <DemoBadge />
          <span>{tournament.city}</span>
        </div>
        <h3>{tournament.name}</h3>
        <p>{tournament.format}</p>
        <dl className="compact-facts">
          <div>
            <dt>Mulai</dt>
            <dd>{formatDate(tournament.startDate)}</dd>
          </div>
          <div>
            <dt>Catatan</dt>
            <dd>Bukan pendaftaran aktif</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

export function GearCard({ product }: { product: GearProduct }) {
  return (
    <Link className="content-card gear-card" href={`/gear/${product.slug}`}>
      <Image
        className="card-image"
        src="/assets/gobiverse/web/gobiverse-gear-banner-desktop.webp"
        alt=""
        width={1600}
        height={900}
      />
      <div className="card-body">
        <div className="card-topline">
          <DemoBadge />
          <span>{product.category}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.useCase}</p>
        <small>Belum ada harga, merchant, atau affiliate link.</small>
      </div>
    </Link>
  );
}

export function EditorialCard({
  href,
  category,
  title,
  summary,
  author,
  verifiedAt,
}: {
  href: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  verifiedAt: string;
}) {
  return (
    <Link className="content-card editorial-card" href={href}>
      <Image
        className="editorial-image"
        src="/assets/gobiverse/web/gobiverse-editorial-fallback-square.webp"
        alt=""
        width={1200}
        height={1200}
      />
      <div className="card-body">
        <p className="eyebrow">{category}</p>
        <h3>{title}</h3>
        <p>{summary}</p>
        <dl className="editorial-meta">
          <div>
            <dt>Penanggung jawab</dt>
            <dd>{author}</dd>
          </div>
          <div>
            <dt>Terakhir dicek</dt>
            <dd>{verifiedAt}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
