AtomicLP Scan — GitHub Pages v10 (2026-11-22)

Update atomic-lp.html on the willablackmon.github.io GitHub Pages repository:
1. Extract ZIP into C:\dev\github-io\app, preserving paths.
2. This update changes atomic-lp.html and atomiclp-portfolio.css and
   includes atomiclp-walkthrough.js and static fallback images.
3. Do not delete your existing image assets, other website files, or index.html.
4. git add atomic-lp.html atomiclp-portfolio.css atomiclp-walkthrough.js images/atomic-lp-scan-01.png images/atomic-lp-scan-02.png images/atomic-lp-scan-03.png
5. git commit -m "Reorganize AtomicLP Scan overview and walkthroughs"
6. git push origin main
7. Confirm GitHub Pages deployment; refresh https://willablackmon.github.io/atomic-lp.html with Ctrl+Shift+R.

Changes
- Moves project overview heading and both paragraphs into the introductory
  two-column card, under the general description and above Launch AtomicLP Scan.
- Removes the now-redundant standalone PROJECT OVERVIEW card.
- Moves walkthrough rows 01, 02, 03 directly below the introductory card.
- Removes the WALKTHROUGHS / How To Use AtomicLP Scan heading card.
- Keeps the click-to-enlarge modal and its Escape / outside-click / Close controls.
- Retains remaining page sections and existing layout.

ANIMATION LIMITATION
The user-uploaded files atomic-lp-scan-01(1).gif through -03(1).gif
contain single-frame PNGs, not GIF animation. This package keeps the
static PNG fallbacks and looks for genuine animated GIFs at:
  images/atomic-lp-scan-01.gif
  images/atomic-lp-scan-02.gif
  images/atomic-lp-scan-03.gif
To animate in the inline panels AND the modal, install real animated GIFs
at those paths (each must contain multiple frames). No recorded motion can
be restored from the supplied single-frame files.
