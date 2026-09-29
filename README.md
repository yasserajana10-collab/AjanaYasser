# RPM Wheel (Yasser Ajana) portfolio: how to publish

Upload the contents of this folder (index.html must sit at the top level).

```
index.html          the page
404.html            shown for broken links
favicon.svg         browser tab icon
.htaccess           server settings for Apache hosts (hidden file, keep it)
css/style.css       all styles
js/main.js          all interactions + the WORK content list
assets/fonts/       Big Shoulders Display + Archivo
assets/img/         your photos, share-card.jpg (link preview), home-screen icon
assets/video/       .mp4 (main) + .webm (backup) + poster .jpg + preview .webp
```

## Recommended host: GitHub Pages (free)
This site keeps your videos at full quality, so some files are large
(Belocum 42 MB, Solar 46 MB). GitHub Pages accepts files up to 100 MB each.
Netlify and Cloudflare Pages do not handle files this size reliably.

1. Create a free account at github.com and install GitHub Desktop
   (desktop.github.com). The GitHub website only accepts uploads up to
   25 MB per file, so use GitHub Desktop for the upload.
2. In GitHub Desktop: File > New repository, name it for example
   `rpm-wheel`, then open that folder and copy everything from this zip into it.
3. Commit, then click Publish repository and untick "Keep this code private".
4. On github.com open the repository > Settings > Pages > Source:
   "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
5. After a minute your site is live at `https://YOUR-USERNAME.github.io/rpm-wheel/`
   Anyone can open that link from Google, WhatsApp, LinkedIn or any browser.

To update later: change the files in that folder, Commit, then Push.

## After it's live (2 minutes)
Open index.html and replace `YOUR-SITE-ADDRESS` (2 places, near the top) with your
real address, e.g. `yourname.github.io/rpm-wheel`, then upload again. This makes the
link show your photo and name when shared on WhatsApp, LinkedIn or Instagram DMs.
Check it at https://www.opengraph.xyz

## Adding work
Every image project has two parts:
1. Its case study (title, client, the problem, the decisions, images) in the
   PROJECTS list at the top of js/main.js.
2. A card in index.html with data-p="project-id" pointing to it.
   Copy an existing card in the same section and change data-p and the image.

Images go in assets/work/. Export them at 1600 to 2000 px on the long side,
JPG quality 80 to 85. The case study viewer never enlarges an image past its
real size, so bigger files look sharper.

Videos: export H.264 .mp4 (1080p, 4 to 8 Mbps is plenty), put it in assets/video/,
and copy one of the existing <figure class="vcard"> blocks in index.html.
Keep each file under 10 MB if you use InfinityFree (its per-file limit).
Optional backup copy: ffmpeg -i clip.mp4 -c:v libvpx-vp9 -crf 34 -b:v 0 -c:a libopus clip.webm
