# 06 — GitHub–Replit Workflow

## Branch policy

- `main` is the review-approved source of truth.
- Replit Agent works on `agent/<milestone>` branches.
- One milestone per branch and pull request.
- Never force-push shared branches.
- Never merge automatically.

## Milestone sequence

1. Pull the latest `main`.
2. Create a new feature branch.
3. Restate scope and assumptions.
4. Implement only the approved milestone.
5. Run validation.
6. Capture screenshots.
7. Add the milestone report.
8. Review the complete diff.
9. Commit and push the named files.
10. Open a draft pull request for review.
11. Wait for explicit approval before merge or next milestone.

## Commit discipline

- Use focused commits with descriptive messages.
- Do not mix unrelated refactors with milestone delivery.
- Do not commit generated build output, local databases, secrets, logs, or dependency folders.
- Lockfiles, migrations, tests, screenshots, and validation reports belong in the milestone commit when relevant.

## Pull request contract

Every PR description must include:

- what and why;
- in-scope and explicitly out-of-scope work;
- assumptions and important decisions;
- route inventory;
- data marked demo/mock/unverified;
- validation commands and results;
- screenshot links for desktop and mobile;
- schema/migration impact;
- security, privacy, copyright, and SEO checks;
- known limitations;
- rollback approach;
- approval checkbox.

## Screenshot archive

Use:

```text
screenshots/<milestone>/desktop/<route-name>.png
screenshots/<milestone>/mobile/<route-name>.png
```

Screenshots must reflect the exact commit under review. If the UI changes, replace the milestone screenshots or create a new milestone folder; never present stale screenshots as current.

To keep Git history reviewable:

- replace screenshots inside the same unapproved milestone instead of appending dated duplicates;
- use full-page captures for route inventory and viewport captures for overlays, drawers, and interaction states;
- strip unnecessary image metadata and review the total milestone size before commit;
- retain the final approved set in Git; use short-lived CI artifacts for intermediate failures and diagnostics.

## Replit checkpoints

Replit checkpoints are useful recovery points but do not replace GitHub review. A milestone is not accepted until its branch, tests, screenshots, report, and diff have been reviewed.

## Production rule

- Deployment is a separate authorized action.
- Connect `gobiverse.com` only after the approved production build is deployed.
- Verify HTTPS, apex/`www` redirect, canonical output, robots, sitemap, and non-indexing of preview/Replit hosts before launch.
