ALTER TYPE "public"."content_status" ADD VALUE 'demo';--> statement-breakpoint
CREATE TABLE "hero_counters" (
	"hero_id" uuid NOT NULL,
	"counter_hero_id" uuid NOT NULL,
	"source_url" text NOT NULL,
	"source_title" text NOT NULL,
	"retrieved_at" timestamp with time zone NOT NULL,
	"verified_at" timestamp with time zone NOT NULL,
	"verified_by" text NOT NULL,
	"is_demo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "hero_counters_hero_id_counter_hero_id_pk" PRIMARY KEY("hero_id","counter_hero_id")
);
--> statement-breakpoint
ALTER TABLE "heroes" ADD COLUMN "specialty" text NOT NULL;--> statement-breakpoint
ALTER TABLE "tournaments" ADD COLUMN "format" text NOT NULL;--> statement-breakpoint
ALTER TABLE "tournaments" ADD COLUMN "summary" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hero_counters" ADD CONSTRAINT "hero_counters_hero_id_heroes_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hero_counters" ADD CONSTRAINT "hero_counters_counter_hero_id_heroes_id_fk" FOREIGN KEY ("counter_hero_id") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;