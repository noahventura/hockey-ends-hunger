# Deploying hockeyendshunger.com (original site + /v2 preview)

Live site: `/var/www/hockeyendshunger.com` on the Linode (logged in as root).

## 1. Build (on the Mac, in this project)

```bash
npm install
npm run build
```

This deletes and rewrites `hockeyendshunger.com/`, the whole deploy:

```
hockeyendshunger.com/
  index.html       original site: /, /about, /previous-events, /upcoming-events, /sponsors
  v2/index.html    v2 preview:    /v2, /v2/about, /v2/previous-events, /v2/upcoming-events, /v2/sponsors
  assets/          JS, CSS and images for both (fingerprinted names, no clashes)
  og.jpg  favicon.png  apple-touch-icon.png  hockey-ends-hunger-2026.ics  vite.svg
```

## 2. Back up (on the server)

```bash
cp -a /var/www/hockeyendshunger.com /root/heh-backup-$(date +%F)
```

## 3. Upload (on the Mac)

```bash
rsync -rtvz hockeyendshunger.com/ root@<linode-ip>:/var/www/hockeyendshunger.com/
```

No `--delete`: the old `assets/index-B30Ge4hX.js` and `assets/index-B8TFmbBc.css` stay, so visitors who still have the old page cached don't get a blank screen. Delete those two a couple of weeks after the event.

## 4. Fix permissions (on the server)

The folder and `assets/` are world-writable (green in `ls`). Make everything readable by nginx and writable only by root:

```bash
chown -R root:root /var/www/hockeyendshunger.com
chmod -R u=rwX,go=rX /var/www/hockeyendshunger.com
```

## 5. nginx (on the server) — required

The site's config is `/etc/nginx/sites-enabled/hockeyendshunger.com` (a symlink). Its content block (`server_name www.hockeyendshunger.com`) had `try_files $uri $uri/ =404;`, which 404s every route that is not a real file: `/v2/about`, and refreshing on `/about`. Upload first (step 3), then:

```bash
cp /etc/nginx/sites-enabled/hockeyendshunger.com /root/heh-nginx-backup.conf
nano /etc/nginx/sites-enabled/hockeyendshunger.com
```

In the third `server { }` block (the one with `root /var/www/hockeyendshunger.com;`), replace the `location / { try_files $uri $uri/ =404; }` block with:

```nginx
    # v2 preview: every /v2/... route gets v2's page
    location /v2/ {
        try_files $uri $uri/ /v2/index.html;
        add_header Cache-Control "no-cache";
    }

    # build files have fingerprinted names and never change
    location /assets/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # original site: every other route gets its page (also fixes refresh on /about)
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache";
    }
```

Leave the two redirect `server` blocks above it as they are.

Check two file types with `grep -E "avif|calendar" /etc/nginx/mime.types`. If either is missing, add it inside the `types { }` block of that file:

```
    image/avif    avif;
    text/calendar ics;
```

Apply: `nginx -t && systemctl reload nginx`

## 6. Check

```bash
for p in / /about /v2 /v2/about /v2/sponsors /hockey-ends-hunger-2026.ics; do
  curl -s -o /dev/null -w "%{http_code} %{content_type}  $p\n" "https://www.hockeyendshunger.com$p"
done
```

Every line should be `200` (`/v2` may be `301`, landing on `/v2/`). Then open `/v2/about` on a phone.

## Undo

```bash
rsync -a --delete /root/heh-backup-<date>/ /var/www/hockeyendshunger.com/
cp /root/heh-nginx-backup.conf /etc/nginx/sites-enabled/hockeyendshunger.com && nginx -t && systemctl reload nginx
```

## Later: when v2 replaces the original

Move `src/v2/*` into `src/` and `v2/index.html` to `index.html` (dropping the `/v2` basename, the `?p=` hand-off and v2's `noindex` tag), remove the `v2` input from `vite.config.js`, and redirect `/v2/*` to `/*` in nginx.
