# RPM Wheel, Yasser Ajana portfolio 2026

Interactive design and motion portfolio of Yasser Ajana, art director, graphic and motion designer based in Tangier, Morocco.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `rpm-wheel`).
2. Upload everything in this folder to the root of the repository: `index.html`, `assets/`, `.nojekyll` and this README.
3. Open **Settings > Pages**, set **Source** to *Deploy from a branch*, pick the `main` branch and the `/ (root)` folder, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Structure

```
index.html          the whole site (HTML, CSS and JavaScript)
assets/img/         project images
assets/video/       the four films (WebM and MP4) with their poster frames
assets/favicon.svg  RPM Wheel gauge icon
.nojekyll           tells GitHub Pages to serve files as they are
```

## Preview locally

Browsers block 3D textures when `index.html` is opened straight from the disk, so the showroom stays blank that way. Run a small local server instead:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. On GitHub Pages everything works as is.

## Editing

- Project text (problem and decisions) lives in the `GEARS` list inside `index.html`.
- Films live in `assets/video/`. Each one has a `.webm`, an `.mp4` and a `-poster.jpg` with the same name. Every file is under GitHub’s 25 MB browser upload limit.
- To swap an image, replace the file in `assets/img/` and keep the same name, or update its path in the `IMG` list.
- Three.js (r128) loads from cdnjs and the fonts (Big Shoulders Display, Archivo) from Google Fonts, so the site needs an internet connection.

## Contact

oneclick3007@gmail.com, +212 724 772 126
