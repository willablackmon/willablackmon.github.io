AtomicLP Portfolio Update v7 — November 22, 2026

Repository: willablackmon/willablackmon.github.io
Local working tree: C:\dev\github-io\app

Files to replace in your existing repository:
  index.html
  atomic-lp.html
  atomiclp-portfolio.css
  images/atomic-lp-scan-st-vincent.webp (same supplied artwork; included to be safe)

IMPORTANT: Preserve the rest of your repo, particularly styles.css and your other images.
The existing images/atomic-lp-banner-wide.png remains in the repo for atomic-lp.html.

Corrections:
  1. index.html: no AtomicLP banner and no CURRENT INDEPENDENT DEVELOPMENT heading.
  2. index.html: AtomicLP Scan and AtomicLP Listen sidebars both exactly 34% of card width.
  3. atomic-lp.html: banner constrained to the same main content width as all sections;
     shallow 5:1 crop (4:1 on phones), image scales without distortion.
  4. Stylesheet URL is versioned ?v=20261122-v7 to avoid old CSS from cache.
  5. Other portfolio cards and Listen gallery are unchanged.

After copying, commit and push from Git Bash:
  git add index.html atomic-lp.html atomiclp-portfolio.css images/atomic-lp-scan-st-vincent.webp
  git commit -m "Fix AtomicLP portfolio banner and matching sidebars"
  git push origin main

Wait for GitHub Pages build to complete successfully, then use Ctrl+Shift+R or
open the page in a private window. Verify both URLs:
  https://willablackmon.github.io/
  https://willablackmon.github.io/atomic-lp.html

Note: The page shown in prior screenshots may reflect cached HTML/CSS. The
v6 GitHub main HTML already had the index banner/heading removed, but v7
explicitly busts the CSS cache and keeps them absent.
