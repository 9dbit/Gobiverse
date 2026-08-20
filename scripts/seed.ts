import { Pool, type PoolClient } from "pg";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEMO_SEED_KEY_PREFIX,
  demoSeedExpectedCounts,
  demoSeedPlan,
} from "../lib/demo-seed";

type SeedVerification = {
  games: number;
  heroes: number;
  counters: number;
  tournaments: number;
  gearProducts: number;
};

type SeedStatement = {
  text: string;
  values: unknown[];
};

const statement = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): SeedStatement => ({
  text: strings.reduce(
    (query, string, index) =>
      `${query}${string}${index < values.length ? `$${index + 1}` : ""}`,
    "",
  ),
  values,
});

export function assertDemoSeedVerification(verification: SeedVerification) {
  const missing = Object.entries(demoSeedExpectedCounts).filter(
    ([key, expected]) => verification[key as keyof SeedVerification] !== expected,
  );

  if (missing.length > 0) {
    throw new Error(
      `Demo seed verification failed: ${missing
        .map(
          ([key, expected]) =>
            `${key} expected ${expected}, received ${verification[key as keyof SeedVerification]}`,
        )
        .join("; ")}`,
    );
  }
}

export async function seedDemoData(client: PoolClient) {
  const statements = [
    statement`
      insert into games (id, name, slug, seed_key, status, source_url, source_title, retrieved_at, verified_at, verified_by, is_demo)
      values (${demoSeedPlan.game.id}, ${demoSeedPlan.game.name}, ${demoSeedPlan.game.slug}, ${demoSeedPlan.game.seedKey}, ${demoSeedPlan.game.status}, ${demoSeedPlan.game.url}, ${demoSeedPlan.game.title}, ${demoSeedPlan.game.retrievedAt}, ${demoSeedPlan.game.verifiedAt}, ${demoSeedPlan.game.verifiedBy}, ${demoSeedPlan.game.isDemo})
      on conflict (seed_key) do update set
        name = excluded.name,
        status = excluded.status,
        source_url = excluded.source_url,
        source_title = excluded.source_title,
        retrieved_at = excluded.retrieved_at,
        verified_at = excluded.verified_at,
        verified_by = excluded.verified_by,
        is_demo = excluded.is_demo,
        updated_at = now()
      where games.is_demo = true and games.id = excluded.id
    `,
    ...demoSeedPlan.heroes.map(
      (hero) => statement`
        insert into heroes (id, game_id, name, slug, seed_key, role, specialty, summary, status, source_url, source_title, retrieved_at, verified_at, verified_by, is_demo)
        values (${hero.id}, ${demoSeedPlan.game.id}, ${hero.name}, ${hero.slug}, ${hero.seedKey}, ${hero.role}, ${hero.specialty}, ${hero.summary}, ${hero.status}, ${hero.url}, ${hero.title}, ${hero.retrievedAt}, ${hero.verifiedAt}, ${hero.verifiedBy}, ${hero.isDemo})
        on conflict (seed_key) do update set
          game_id = excluded.game_id,
          name = excluded.name,
          role = excluded.role,
          specialty = excluded.specialty,
          summary = excluded.summary,
          status = excluded.status,
          source_url = excluded.source_url,
          source_title = excluded.source_title,
          retrieved_at = excluded.retrieved_at,
          verified_at = excluded.verified_at,
          verified_by = excluded.verified_by,
          is_demo = excluded.is_demo,
          updated_at = now()
        where heroes.is_demo = true and heroes.id = excluded.id
      `,
    ),
    ...demoSeedPlan.counters.map(
      (counter) => statement`
        insert into hero_counters (hero_id, counter_hero_id, source_url, source_title, retrieved_at, verified_at, verified_by, is_demo)
        values (${counter.heroId}, ${counter.counterHeroId}, ${counter.url}, ${counter.title}, ${counter.retrievedAt}, ${counter.verifiedAt}, ${counter.verifiedBy}, ${counter.isDemo})
        on conflict (hero_id, counter_hero_id) do update set
          source_url = excluded.source_url,
          source_title = excluded.source_title,
          retrieved_at = excluded.retrieved_at,
          verified_at = excluded.verified_at,
          verified_by = excluded.verified_by,
          is_demo = excluded.is_demo,
          updated_at = now()
      `,
    ),
    ...demoSeedPlan.tournaments.map(
      (tournament) => statement`
        insert into tournaments (name, slug, seed_key, game, city, start_date, registration_deadline, format, summary, status, source_url, source_title, retrieved_at, verified_at, verified_by, is_demo)
        values (${tournament.name}, ${tournament.slug}, ${tournament.seedKey}, ${tournament.game}, ${tournament.city}, ${tournament.startDate}, ${tournament.deadline}, ${tournament.format}, ${tournament.summary}, ${tournament.status}, ${tournament.url}, ${tournament.title}, ${tournament.retrievedAt}, ${tournament.verifiedAt}, ${tournament.verifiedBy}, ${tournament.isDemo})
        on conflict (seed_key) do update set
          name = excluded.name,
          game = excluded.game,
          city = excluded.city,
          start_date = excluded.start_date,
          registration_deadline = excluded.registration_deadline,
          format = excluded.format,
          summary = excluded.summary,
          status = excluded.status,
          source_url = excluded.source_url,
          source_title = excluded.source_title,
          retrieved_at = excluded.retrieved_at,
          verified_at = excluded.verified_at,
          verified_by = excluded.verified_by,
          is_demo = excluded.is_demo,
          updated_at = now()
        where tournaments.is_demo = true
      `,
    ),
    ...demoSeedPlan.gearProducts.map(
      (product) => statement`
        insert into gear_products (name, slug, seed_key, category, use_case, summary, status, source_url, source_title, retrieved_at, verified_at, verified_by, is_demo)
        values (${product.name}, ${product.slug}, ${product.seedKey}, ${product.category}, ${product.useCase}, ${product.summary}, ${product.status}, ${product.url}, ${product.title}, ${product.retrievedAt}, ${product.verifiedAt}, ${product.verifiedBy}, ${product.isDemo})
        on conflict (seed_key) do update set
          name = excluded.name,
          category = excluded.category,
          use_case = excluded.use_case,
          summary = excluded.summary,
          status = excluded.status,
          source_url = excluded.source_url,
          source_title = excluded.source_title,
          retrieved_at = excluded.retrieved_at,
          verified_at = excluded.verified_at,
          verified_by = excluded.verified_by,
          is_demo = excluded.is_demo,
          updated_at = now()
        where gear_products.is_demo = true
      `,
    ),
  ];

  await client.query("begin");
  try {
    for (const query of statements) {
      await client.query(query);
    }

    const verification = await client.query<SeedVerification>(
      `
        select
          (select count(*)::int from games where id = $1 and seed_key = $2 and is_demo = true and status = 'demo') as games,
          (select count(*)::int from heroes where game_id = $1 and seed_key like $3 and is_demo = true and status = 'demo') as heroes,
          (select count(*)::int from hero_counters where hero_id in ($4, $5, $6) and counter_hero_id in ($4, $5, $6) and is_demo = true) as counters,
          (select count(*)::int from tournaments where seed_key like $7 and is_demo = true and status = 'demo') as tournaments,
          (select count(*)::int from gear_products where seed_key like $8 and is_demo = true and status = 'demo') as "gearProducts"
      `,
      [
        demoSeedPlan.game.id,
        demoSeedPlan.game.seedKey,
        `${DEMO_SEED_KEY_PREFIX}:hero:%`,
        demoSeedPlan.heroes[0].id,
        demoSeedPlan.heroes[1].id,
        demoSeedPlan.heroes[2].id,
        `${DEMO_SEED_KEY_PREFIX}:tournament:%`,
        `${DEMO_SEED_KEY_PREFIX}:gear:%`,
      ],
    );

    const [result] = verification.rows;
    assertDemoSeedVerification(result);
    await client.query("commit");
    return result;
  } catch (error) {
    await client.query("rollback");
    throw error;
  }
}

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL is required for db:seed. Add it through Replit Secrets; do not use a committed value.",
    );
  }

  const pool = new Pool({ connectionString: databaseUrl });
  const client = await pool.connect();
  try {
    const verification = await seedDemoData(client);
    console.info(`Seeded and verified DEMO records: ${JSON.stringify(verification)}.`);
  } finally {
    client.release();
    await pool.end();
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((error: unknown) => {
    console.error("Demo seed failed.", error);
    process.exitCode = 1;
  });
}
