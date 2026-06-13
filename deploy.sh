#!/usr/bin/env bash
#
# Deploy eissaalmannaei.ae — builds the static site and mirrors it into the
# web root. Run on the server that hosts the domain.
#
# Usage:
#   ./deploy.sh /path/to/webroot
#   WEBROOT=/var/www/eissaalmannaei ./deploy.sh
#
set -euo pipefail

WEBROOT="${1:-${WEBROOT:-}}"
if [ -z "$WEBROOT" ]; then
  echo "Usage: ./deploy.sh /path/to/webroot   (or set WEBROOT=...)"
  exit 1
fi
if [ ! -d "$WEBROOT" ]; then
  echo "Web root '$WEBROOT' does not exist. Create it or pass the correct path."
  exit 1
fi

echo "==> Installing dependencies"
npm ci

echo "==> Building static export -> out/"
npm run build

echo "==> Backing up current web root"
ts="$(date +%Y%m%d-%H%M%S)"
backup="${WEBROOT%/}.backup-${ts}"
cp -a "$WEBROOT" "$backup" && echo "    backup at: $backup"

echo "==> Mirroring out/ into $WEBROOT (includes .htaccess)"
rsync -a --delete out/ "${WEBROOT%/}/"

echo "==> Done. Site deployed to $WEBROOT"
echo "    Reload your web server if needed (e.g. systemctl reload nginx / apache2)."
