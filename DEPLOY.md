# Deploying to eissaalmannaei.ae (static hosting)

This site is exported as plain static files — no Node server needed. It runs on
any shared host (cPanel/Apache, Nginx, etc.).

## 1. Build

```bash
cd ~/eissa-site
npm run build
```

This regenerates the **`out/`** folder. Everything to publish is inside `out/`.

## 2. Add your headshot first (recommended)

Drop your photo at `public/images/eissa.jpg` (or `.png` — keep the name `eissa.jpg`),
then run `npm run build` again so it's included in `out/`. The hero + About swap
the placeholder for your photo automatically.

## 3. Upload

Upload the **contents of `out/`** (not the folder itself) into your hosting web
root — usually `public_html/` (cPanel) or `www/`.

- **cPanel File Manager:** open `public_html`, upload, then extract — or drag files in.
- **FTP/SFTP:** put everything from `out/` into the web root.

> Back up your current site first if you want to keep it.

The included `.htaccess` sets the 404 page and caching for Apache/cPanel. On
Nginx it's ignored harmlessly (ask your host to set `try_files` + `index index.html`).

## 4. How routing works

- Visiting `eissaalmannaei.ae/` loads a tiny redirect page that detects the
  browser language and sends visitors to `/en/` or `/ar/` (with manual toggle
  everywhere on the site). Choice is remembered.
- Direct URLs like `/ar/work/` and `/en/about/` work as static folders.
- `sitemap.xml` and `robots.txt` are at the root, pointing to the live domain.

## 5. Updating later

Edit content (text lives in `dictionaries/en.json` + `dictionaries/ar.json`),
run `npm run build`, re-upload `out/`. That's it.
