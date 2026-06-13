# Deploy notes — eissaalmannaei.ae (static site)

Hi! This is a **fully static site** (plain HTML/CSS/JS). No Node, PHP, or database.
The build is in **`eissaalmannaei-site.zip`**. Deploying = drop its contents into the
web root that currently serves `eissaalmannaei.ae`.

## Steps
1. **Back up** the current site (rename the current docroot, or copy it elsewhere).
2. **Extract `eissaalmannaei-site.zip`** so its files land directly in the web root
   (e.g. `/var/www/eissaalmannaei` or wherever the current site lives).
   - The zip's top level must map to the web root: `index.html`, `en/`, `ar/`,
     `logos/`, `images/`, `.htaccess`, `404.html`, `sitemap.xml`, `robots.txt`.
   - **Include the hidden `.htaccess`** (use `unzip` / show hidden files).
3. Reload the web server. Done.

## What the server must do (both are standard)
- Serve `index.html` for directory requests (`/en/` → `/en/index.html`).
- `/` serves `index.html`, a tiny JS redirect to `/en/` or `/ar/` by browser language.
- Serve `404.html` for not-found.

### Apache
The included **`.htaccess`** already sets the 404 page + caching. Just make sure
`AllowOverride All` is on for the docroot so `.htaccess` is honored. mod_dir handles
the directory-index behavior automatically.

### Nginx
`.htaccess` is ignored — add this to the server block instead:

```nginx
server {
    server_name eissaalmannaei.ae www.eissaalmannaei.ae;
    root /path/to/webroot;      # the extracted folder
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
    error_page 404 /404.html;

    # optional: long-cache static assets
    location ~* \.(jpg|jpeg|png|svg|woff2|css|js)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
}
```
Then: `nginx -t && systemctl reload nginx`.

## TLS / HTTPS
Keep the existing certificate for the domain — no change needed. If you want to
force HTTPS on Apache, uncomment the rewrite block in `.htaccess`.

## Updating later
The site owner rebuilds and produces a new zip; replace the web-root contents again.

Questions? The whole thing is static files — nothing to install.
