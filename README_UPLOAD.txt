AtomicLP Scan · portfolio v11 (2026-11-22)

Extract this ZIP into C:\dev\github-io\app (preserve folders).
Updated:
- atomic-lp.html: removed the additional segmented-controls design study and graphic.
- Existing live Scan screenshot and other detail sections remain.
- Existing 01/02/03 inline walkthrough preview and click-to-enlarge modal are retained.
- CSS/JS cache version updated to v11.

The three GIF uploads displayed in this conversation were converted to
single-frame PNG content (even though their names end with .gif). The
actual video/animation frames were not delivered to this chat. The
website is already configured to play genuine animations at these paths:
    images/atomic-lp-scan-01.gif
    images/atomic-lp-scan-02.gif
    images/atomic-lp-scan-03.gif

To preserve original animation, put the three original GIFs into one ZIP
on your computer and upload that ZIP to the chat, OR copy the original
GIFs directly into C:\dev\github-io\app\images\ then commit/push.
Do not rename a still PNG file to .gif; it remains a single frame.

Publish:
    git add atomic-lp.html atomiclp-portfolio.css atomiclp-walkthrough.js images/
    git commit -m "Remove obsolete AtomicLP Scan UI concept section"
    git push origin main

Then check https://willablackmon.github.io/atomic-lp.html
