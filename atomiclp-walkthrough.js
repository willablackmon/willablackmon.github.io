// AtomicLP Scan: native animated GIF previews and accessible enlarged modal.
// Original GIFs are loaded from images/atomic-lp-scan-01.gif, 02.gif, 03.gif.
// A static PNG preview is shown only if an animated source is not yet installed.
(() => {
  "use strict";
  const dialog = document.getElementById("alpWalkthroughModal");
  const modalImage = document.getElementById("alpWalkthroughModalImage");
  const modalTitle = document.getElementById("alpWalkthroughModalTitle");
  const closeButton = document.getElementById("alpWalkthroughModalClose");
  let lastTrigger = null;
  if (!dialog || !modalImage || !modalTitle || !closeButton) return;

  const tracks = Array.from(document.querySelectorAll(".alp-walkthrough-trigger"));
  for (const trigger of tracks) {
    const preview = trigger.querySelector("img[data-animated-src]");
    if (!preview) continue;
    const staticSource = preview.getAttribute("src");
    const animatedSource = preview.dataset.animatedSrc;
    if (animatedSource) {
      preview.addEventListener("error", () => {
        if (preview.getAttribute("src") === animatedSource) {
          preview.setAttribute("src", staticSource);
        }
      });
      preview.setAttribute("src", animatedSource);
    }

    trigger.addEventListener("click", (event) => {
      if (typeof dialog.showModal !== "function") return;
      event.preventDefault();
      const title = trigger.closest(".howto-row")?.querySelector(".howto-copy h3")?.textContent?.trim() || "AtomicLP Scan Walkthrough";
      lastTrigger = trigger;
      modalTitle.textContent = title;
      modalImage.alt = preview.alt;
      // Keep the modal's source synchronized with the current inline preview.
      // A GIF keeps animating in both places; static fallbacks remain honest.
      const updateSrc = () => {
        const actual = preview.getAttribute("src");
        modalImage.setAttribute("src", actual);
      };
      updateSrc();
      if (preview.getAttribute("src") === animatedSource && !preview.complete) {
        preview.addEventListener("load", updateSrc, { once: true });
        preview.addEventListener("error", updateSrc, { once: true });
      }
      dialog.showModal();
      closeButton.focus();
    });
  }

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    modalImage.removeAttribute("src");
    if (lastTrigger) lastTrigger.focus();
    lastTrigger = null;
  });
})();
