---
name: Demo seed persistence
description: Contract for keeping fictional demo content consistent between the application and database seed workflow.
---

Every demo entity used by a user-facing route or tool must be persisted by an idempotent seed process, including its relationships and provenance. The seed must validate the exact persisted record counts after writing and use a demo-only identity separate from public slugs.

**Why:** Static fixture data can make the application appear complete while the database contains only a subset of the advertised demo content. Public slugs can also collide with later publishable records, so treating a slug as a seed identity risks overwriting real content.

**How to apply:** When adding or changing a demo record, update the schema, generated migration, seed plan, relationship records, and expected persisted-count verification together. Keep `isDemo` and provenance data on every stored demo record and relation. Run migrations plus the seed twice on a disposable PostgreSQL database and confirm a colliding non-demo slug is rejected rather than modified.