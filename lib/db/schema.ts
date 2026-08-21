import {
  boolean,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const contentStatus = pgEnum("content_status", [
  "draft",
  "review",
  "published",
  "archived",
  "demo",
]);

const provenanceColumns = {
  sourceUrl: text("source_url").notNull(),
  sourceTitle: text("source_title").notNull(),
  retrievedAt: timestamp("retrieved_at", { withTimezone: true }).notNull(),
  verifiedAt: timestamp("verified_at", { withTimezone: true }).notNull(),
  verifiedBy: text("verified_by").notNull(),
  isDemo: boolean("is_demo").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
};

export const games = pgTable("games", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  seedKey: text("seed_key").unique(),
  status: contentStatus("status").notNull().default("draft"),
  ...provenanceColumns,
});

export const heroesTable = pgTable("heroes", {
  id: uuid("id").defaultRandom().primaryKey(),
  gameId: uuid("game_id")
    .notNull()
    .references(() => games.id),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  seedKey: text("seed_key").unique(),
  role: text("role").notNull(),
  specialty: text("specialty").notNull(),
  summary: text("summary").notNull(),
  status: contentStatus("status").notNull().default("draft"),
  ...provenanceColumns,
});

export const heroCountersTable = pgTable(
  "hero_counters",
  {
    heroId: uuid("hero_id")
      .notNull()
      .references(() => heroesTable.id),
    counterHeroId: uuid("counter_hero_id")
      .notNull()
      .references(() => heroesTable.id),
    ...provenanceColumns,
  },
  (table) => [primaryKey({ columns: [table.heroId, table.counterHeroId] })],
);

export const tournamentsTable = pgTable("tournaments", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  seedKey: text("seed_key").unique(),
  game: text("game").notNull(),
  city: text("city").notNull(),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  registrationDeadline: timestamp("registration_deadline", {
    withTimezone: true,
  }).notNull(),
  format: text("format").notNull(),
  summary: text("summary").notNull(),
  status: contentStatus("status").notNull().default("review"),
  ...provenanceColumns,
});

export const gearProductsTable = pgTable("gear_products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  seedKey: text("seed_key").unique(),
  category: text("category").notNull(),
  useCase: text("use_case").notNull(),
  summary: text("summary").notNull(),
  status: contentStatus("status").notNull().default("draft"),
  ...provenanceColumns,
});
