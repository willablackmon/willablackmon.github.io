AtomicLP GitHub Pages — Portfolio Layout Refinements v5 (November 22, 2026)

CHANGES FROM v4
- Application names throughout visible content: AtomicLP Scan and AtomicLP Listen.
- Adjusted the Scan left column from 34% to 39%, showing the interface screenshot at a larger size.
- Reduced the Scan screenshot preview height to 395px; top portion stays visible, lower portions are available by clicking to enlarge.
- Kept the Scan description vertically centered, with less overall card height and more even whitespace.
- Preserved the Listen card layout, The Cure main image, existing banner and other portfolio projects.
- Changed the detail page section title to LIVE SCAN INTERFACE.
- Kept production buttons: Launch AtomicLP Scan and Launch AtomicLP Listen.

TO UPDATE YOUR LOCAL REPO
Copy these files into C:\dev\github-io\app, preserving the images subfolder:
  index.html
  atomic-lp.html
  atomiclp-portfolio.css
  images/atomic-lp-scanner-live.webp
  images/lp-listener-listening.webp
  images/lp-listener-recognized.webp
  images/lp-listener-the-cure-neon.webp
  images/atomic-lp-interface-concept.webp

Retain your existing styles.css and other images (they are not part of this ZIP).

GIT BASH (from C:\dev\github-io\app)
  git add index.html atomic-lp.html atomiclp-portfolio.css images/
  git commit -m "Refine AtomicLP Scan showcase layout and application names"
  git push origin main

Review https://willablackmon.github.io/ after GitHub Pages deployment completes.
