(function () {
  "use strict";
  function applyRYZONBranding() {
    if (document.querySelector(".ryzon-unified-brand")) return;
    const candidates = Array.from(document.querySelectorAll("header h1, header h2, header .brand, header .ryzon-brand, main h1, main h2, main .brand, main .ryzon-brand, h1, h2, .brand, .ryzon-brand, .logo"))
      .filter(el => !el.closest("footer") && /RYZON/i.test((el.textContent || "").trim()));
    const target = candidates[0];
    if (!target || !target.parentElement) return;

    const scope = target.closest("header") || target.parentElement;
    const marks = Array.from(scope.querySelectorAll(".logo, .brand-mark, .ryzon-mark, .ryzon-logo-mark"))
      .filter(el => el !== target && /^R$/i.test((el.textContent || "").trim()));
    let mark = marks[0] || null;

    const oldTaglines = Array.from(scope.querySelectorAll(".tagline, .subtitle, .brand-tagline"))
      .filter(el => /One App, Endless Possibilities!?/i.test((el.textContent || "").trim()));
    oldTaglines.forEach(el => el.remove());

    const targetText = (target.textContent || "").trim();
    const label = (mark && target.contains(mark) ? targetText.replace(/^R\s*/i, "").trim() : targetText) || "RYZON";
    const parent = target.parentElement;
    const lockup = document.createElement("div");
    lockup.className = "ryzon-unified-brand";

    if (!mark) {
      mark = document.createElement("span");
      mark.textContent = "R";
    }
    mark.classList.add("ryzon-unified-mark");
    mark.setAttribute("aria-hidden", "true");

    const stack = document.createElement("span");
    stack.className = "ryzon-unified-copy";
    const name = document.createElement("span");
    name.className = "ryzon-unified-name";
    name.textContent = label.replace(/^RYZON\s*/i, "RYZON") || "RYZON";
    const tagline = document.createElement("span");
    tagline.className = "ryzon-unified-tagline";
    tagline.textContent = "One App, Endless Possibilities!";

    stack.append(name, tagline);
    lockup.append(mark, stack);
    parent.insertBefore(lockup, target);
    if (mark.parentElement !== lockup) mark.remove();
    target.remove();
  }

  function addStyles() {
    if (document.getElementById("ryzon-unified-brand-style")) return;
    const style = document.createElement("style");
    style.id = "ryzon-unified-brand-style";
    style.textContent = `
      .ryzon-unified-brand {
        display: inline-flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        max-width: 100%;
        margin: 8px auto 14px !important;
        text-align: left !important;
        vertical-align: middle;
      }
      .ryzon-unified-mark {
        flex: 0 0 48px !important;
        width: 48px !important;
        height: 48px !important;
        min-width: 48px !important;
        min-height: 48px !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 14px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: linear-gradient(145deg,#55dcff,#078bd0) !important;
        color: #fff !important;
        font: 900 34px/1 Arial,sans-serif !important;
        letter-spacing: 0 !important;
        box-shadow: 0 6px 18px #0799e544 !important;
      }
      .ryzon-unified-copy {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: center !important;
        gap: 2px !important;
        min-width: 0;
      }
      .ryzon-unified-name {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        color: #55dcff !important;
        font: 800 23px/1.05 Arial,sans-serif !important;
        letter-spacing: 2px !important;
        text-align: left !important;
        white-space: nowrap;
      }
      .ryzon-unified-tagline {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        color: #8bdfff !important;
        font: 400 10px/1.25 Arial,sans-serif !important;
        letter-spacing: .15px !important;
        text-align: left !important;
        white-space: normal;
      }
      @media (max-width: 360px) {
        .ryzon-unified-brand { gap: 8px !important; }
        .ryzon-unified-mark { flex-basis: 42px !important; width: 42px !important; height: 42px !important; min-width: 42px !important; min-height: 42px !important; font-size: 30px !important; }
        .ryzon-unified-name { font-size: 20px !important; }
        .ryzon-unified-tagline { font-size: 9px !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function start() {
    addStyles();
    applyRYZONBranding();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();