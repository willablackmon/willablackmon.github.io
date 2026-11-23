AtomicLP GitHub Pages — Portfolio Layout Update v6 (November 22, 2026)

CHANGES
1. index.html: AtomicLP Scan left panel restored to the same 34% width as AtomicLP Listen.
2. index.html: Scan left-panel image is replaced with the St. Vincent / Marry Me live screenshot.
3. index.html: Removed the CURRENT INDEPENDENT DEVELOPMENT strip and the full-width Atomic LP banner.
4. atomic-lp.html: Added the existing Atomic LP banner as a full-width image above the project hero.
5. atomic-lp.html: Replaced the hero's banner art with that same St. Vincent screenshot, clickable to view full size.
6. atomic-lp.html: Updated the additional live-interface screenshot to the same image.
7. Existing Listen text, gallery, other portfolio projects, and production application links preserved.

COPY INTO
  C:\dev\github-io\app\index.html
  C:\dev\github-io\app\atomic-lp.html
  C:\dev\github-io\app\atomiclp-portfolio.css
  C:\dev\github-io\app\images\atomic-lp-scan-st-vincent.webp

Keep your existing styles.css, images/atomic-lp-banner-wide.png, and all other files.
The new screenshot uses a NEW filename to avoid stale GitHub Pages image caches.

FROM GIT BASH (C:/dev/github-io/app)
  git add index.html atomic-lp.html atomiclp-portfolio.css images/atomic-lp-scan-st-vincent.webp
  git commit -m "Refine AtomicLP Scan sidebar and move banner to details page"
  git push origin main

CHECK
  https://willablackmon.github.io/
  https://willablackmon.github.io/atomic-lp.html
