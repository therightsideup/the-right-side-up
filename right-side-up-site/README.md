# The Right Side Up — Static PWA Site

This is a zero-build static site. It can be deployed to GitHub Pages, Cloudflare Pages, or Vercel.

## Files

- `index.html` — public library front door
- `publications/teach-us-to-pray.html` — first publication
- `manifest.webmanifest` — PWA metadata
- `service-worker.js` — offline cache layer
- `icons/` — install icons

## Recommended launch path

1. Create a GitHub repository named `the-right-side-up`.
2. Upload everything in this folder.
3. Connect the repo to Cloudflare Pages.
4. Build command: leave blank.
5. Output directory: `/`
6. Deploy.
7. Later: attach a custom domain.

## Editing workflow

Ask ChatGPT to revise the site or publication.
Replace the changed files.
Commit/push to GitHub.
Cloudflare Pages redeploys automatically.
