Atomic LP GitHub Pages — Portfolio Update v3 (November 22, 2026)

Copy these files into C:\dev\github-io\app, preserving the images/ folder:

  index.html
  atomic-lp.html
  atomiclp-portfolio.css
  images/atomic-lp-scanner-live.webp          (NEW)
  images/lp-listener-listening.webp
  images/lp-listener-recognized.webp
  images/lp-listener-the-cure-neon.webp
  images/atomic-lp-interface-concept.webp

Changes:
- Scanner now has a left-side live screenshot panel below the existing banner.
- Both panels put CURRENT APPLICATION and the project title ABOVE the image.
- Listener uses the new The Cure screenshot as its primary image.
- Removed the large blank black Listener side-panel area.
- Enlarged the three Listener gallery previews.
- Deduplicated PostgreSQL in Scanner technology descriptions.
- Changed link text to Launch AtomicLP Scan and Launch AtomicLP Listen.
- Updated the Scanner interface link to point to a live interface preview in the detail page.

No changes to existing styles.css or site banner images are required.

From Git Bash in C:\dev\github-io\app:
  git add index.html atomic-lp.html atomiclp-portfolio.css images/atomic-lp-scanner-live.webp
  git commit -m "Refresh Atomic LP portfolio card layouts and screenshots"
  git push origin main

Refresh https://willablackmon.github.io/ once GitHub Pages finishes building.
