AtomicLP Portfolio — v8 | November 22, 2026

Updates to atomic-lp.html:
- Replaced all three Walkthrough placeholders in numerical order (01, 02, 03).
- Added images/atomic-lp-scan-01.png, -02.png, -03.png.
- Added responsive styling to atomiclp-portfolio.css.
- Retained the v7 homepage sidebar and banner fixes and all other portfolio content.

IMPORTANT MEDIA NOTE
The three uploaded files had .gif names but contain PNG image data, each
with exactly ONE frame. They are static screenshots, not animated GIFs.
The package preserves their original image data under correct .png filenames.
To publish animated walkthroughs, supply real multi-frame GIFs or MP4/WebM;
the page can then be updated without changing its layout.

INSTALL
Copy contents into C:\dev\github-io\app, preserving the images folder.
Replace index.html, atomic-lp.html, atomiclp-portfolio.css and the new images.
Keep all unrelated files, including styles.css and existing images.

Git Bash:
  git add index.html atomic-lp.html atomiclp-portfolio.css images/atomic-lp-scan-01.png images/atomic-lp-scan-02.png images/atomic-lp-scan-03.png
  git commit -m "Add AtomicLP Scan walkthrough previews in order 01-03"
  git push origin main

After GitHub Pages deployment, hard refresh:
  https://willablackmon.github.io/atomic-lp.html

Check screenshot 03 before publishing: it visibly includes account information.
