AtomicLP GitHub Pages — Portfolio Layout Fix v4 (November 22, 2026)

CHANGE SUMMARY
- Corrected both homepage showcase cards: dark left screenshot panels, clean white right text panels.
- Restored side-by-side desktop layout and stacked mobile layout; no text can overlay screenshots.
- Kept CURRENT APPLICATION / project title ABOVE the main screenshots.
- The Cure image remains the primary AtomicLP Listen screenshot.
- AtomicLP Scan uses the production Scan screenshot, with the existing record-shelf banner retained.
- Corrected public-facing project names throughout: AtomicLP Scan and AtomicLP Listen.
- Buttons: Launch AtomicLP Scan and Launch AtomicLP Listen.
- Layout rules are embedded in index.html to avoid missing / stale secondary CSS causing collapse.
- Links still point to https://scan.atomiclp.com/ and https://listen.atomiclp.com/.
- Existing images and other portfolio projects are unchanged.

UPLOAD
Copy into C:\dev\github-io\app and preserve images/ subfolder:
  index.html
  atomic-lp.html
  atomiclp-portfolio.css (kept for detail-page UI screenshots)
  images/atomic-lp-scanner-live.webp
  images/lp-listener-listening.webp
  images/lp-listener-recognized.webp
  images/lp-listener-the-cure-neon.webp
  images/atomic-lp-interface-concept.webp

Do NOT delete styles.css or other existing images.

DEPLOY (Git Bash in C:\dev\github-io\app)
  git add index.html atomic-lp.html atomiclp-portfolio.css images/
  git commit -m "Fix AtomicLP portfolio cards and project naming"
  git push origin main

Check your live homepage after GitHub Pages finishes building (hard refresh Ctrl+Shift+R).
