ALTER TABLE "games" ADD COLUMN "seed_key" text;--> statement-breakpoint
ALTER TABLE "gear_products" ADD COLUMN "seed_key" text;--> statement-breakpoint
ALTER TABLE "heroes" ADD COLUMN "seed_key" text;--> statement-breakpoint
ALTER TABLE "tournaments" ADD COLUMN "seed_key" text;--> statement-breakpoint
ALTER TABLE "games" ADD CONSTRAINT "games_seed_key_unique" UNIQUE("seed_key");--> statement-breakpoint
ALTER TABLE "gear_products" ADD CONSTRAINT "gear_products_seed_key_unique" UNIQUE("seed_key");--> statement-breakpoint
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_seed_key_unique" UNIQUE("seed_key");--> statement-breakpoint
ALTER TABLE "tournaments" ADD CONSTRAINT "tournaments_seed_key_unique" UNIQUE("seed_key");