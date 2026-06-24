/* ==========================================================================
   Glenhold Bookkeeping — Design Tokens
   Source: https://breakgroundbooks.com/
   Inferred where the source CSS could not be inspected.
   ========================================================================== */

/* ---------- Web fonts (Google Fonts) ----------
   Geist  — primary sans (UI, headlines, body)
   Newsreader Italic — italic-emphasis phrases only
   Substitution flag: real site's font stack not confirmed.
   ---------------------------------------------- */
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,16,400;1,16,500&display=swap');

:root {
  /* ---------- Friendly aliases (preferred names) ----------
     Palette renamed from forest-green to dark-navy + powder-blue.
     The original token names (--forest, --moss, --gold, --bg-forest…)
     are kept below as compatibility aliases so existing references
     keep working — but new code should use these:                 */
  --navy:        #1A3A6B;
  --navy-deep:   #0F2347;
  --bg-navy:     #0E1F3A;
  --bg-navy-soft:#1A2E54;
  --powder:      #6FA8D6;
  --powder-soft: #A8C8E8;
  --mist:        #F4F6FA;
  --mist-soft:   #F8FAFD;

  /* ---------- Colors: surfaces ---------- */
  --bg-cream:        #F4F6FA;
  --bg-cream-soft:   #F8FAFD;
  --bg-white:        #FFFFFF;
  --bg-forest:       #0E1F3A;
  --bg-forest-soft:  #1A2E54;

  /* ---------- Colors: ink ---------- */
  --ink:        #0F1B2C;
  --ink-soft:   #44546B;
  --ink-mute:   #8C95A5;
  --ink-invert: #F4F6FA;

  /* ---------- Colors: brand ---------- */
  --forest:      #1A3A6B;
  --forest-deep: #0F2347;
  --moss:        #A8C8E8;
  --gold:        #6FA8D6;
  --gold-soft:   #D8E5F2;

  /* ---------- Colors: hairlines ---------- */
  --border:        #DCE3ED;
  --border-white:  #E4EAF2;
  --border-strong: #0F1B2C;

  /* ---------- Semantic colors ---------- */
  --color-fg:           var(--ink);
  --color-fg-soft:      var(--ink-soft);
  --color-fg-mute:      var(--ink-mute);
  --color-bg:           var(--bg-cream);
  --color-surface:      var(--bg-white);
  --color-link:         var(--forest);
  --color-link-hover:   var(--forest-deep);
  --color-primary:      var(--forest);
  --color-primary-hover:var(--forest-deep);
  --color-accent:       var(--gold);
  --color-success:      var(--forest);
  --color-divider:      var(--border);

  /* ---------- Type: families ---------- */
  --font-sans:   "Geist", ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
  --font-italic: "Newsreader", ui-serif, Georgia, "Times New Roman", serif;
  --font-mono:   ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  /* ---------- Type: scale ---------- */
  --fz-display:    56px;   --lh-display:    60px;
  --fz-h1:         48px;   --lh-h1:         54px;
  --fz-h2:         40px;   --lh-h2:         46px;
  --fz-h3:         22px;   --lh-h3:         30px;
  --fz-h4:         18px;   --lh-h4:         26px;
  --fz-body-lg:    19px;   --lh-body-lg:    30px;
  --fz-body:       17px;   --lh-body:       28px;
  --fz-small:      14px;   --lh-small:      22px;
  --fz-eyebrow:    13px;   --lh-eyebrow:    16px;

  /* ---------- Type: weights & misc ---------- */
  --fw-regular:  400;
  --fw-medium:   500;
  --fw-semibold: 600;
  --fw-bold:     700;
  --tracking-eyebrow: 0.14em;
  --tracking-tight:   -0.01em;
  --tracking-display: -0.02em;

  /* ---------- Spacing (8px base) ---------- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 80px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 160px;

  /* ---------- Radius ---------- */
  --radius-xs:   4px;
  --radius-sm:   8px;
  --radius-md:  12px;
  --radius-lg:  20px;
  --radius-pill: 999px;

  /* ---------- Shadows ---------- */
  --shadow-sm: 0 1px 2px rgba(15, 27, 44, 0.04), 0 1px 3px rgba(15, 27, 44, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 27, 44, 0.06), 0 12px 32px rgba(15, 27, 44, 0.08);
  --shadow-lg: 0 8px 24px rgba(15, 27, 44, 0.08), 0 24px 56px rgba(15, 27, 44, 0.12);
  --shadow-focus: 0 0 0 2px rgba(26, 58, 107, 0.25);

  /* ---------- Layout ---------- */
  --container-max: 1120px;
  --container-pad: 24px;
  --section-py:    160px;
  --section-py-md: 96px;

  /* ---------- Motion ---------- */
  --ease:        cubic-bezier(0.2, 0.7, 0.2, 1);
  --dur-fast:    150ms;
  --dur:         250ms;
  --dur-slow:    600ms;
}

/* ==========================================================================
   Semantic typography helpers
   ========================================================================== */

.eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fz-eyebrow);
  line-height: var(--lh-eyebrow);
  font-weight: var(--fw-medium);
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: var(--ink-mute);
}

.display {
  font-family: var(--font-sans);
  font-size: var(--fz-display);
  line-height: var(--lh-display);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--tracking-display);
  color: var(--ink);
}

.h2 {
  font-family: var(--font-sans);
  font-size: var(--fz-h2);
  line-height: var(--lh-h2);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--ink);
}

.h3 {
  font-family: var(--font-sans);
  font-size: var(--fz-h3);
  line-height: var(--lh-h3);
  font-weight: var(--fw-semibold);
  color: var(--ink);
}

.body-lg {
  font-family: var(--font-sans);
  font-size: var(--fz-body-lg);
  line-height: var(--lh-body-lg);
  color: var(--ink-soft);
}

.body {
  font-family: var(--font-sans);
  font-size: var(--fz-body);
  line-height: var(--lh-body);
  color: var(--ink);
}

.small {
  font-family: var(--font-sans);
  font-size: var(--fz-small);
  line-height: var(--lh-small);
  color: var(--ink-soft);
}

/* The signature italic-emphasis phrase. Wrap a span in headlines:
     <h2 class="h2">Three ways I help small businesses <em class="punch">stay clean</em>.</h2>
*/
.punch,
em.punch {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 500;
  font-optical-sizing: auto;
  color: var(--ink); /* swap to var(--gold) for accent treatment */
  letter-spacing: 0;
}

/* ==========================================================================
   Base reset (light)
   ========================================================================== */

html, body {
  background: var(--bg-cream);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: var(--fz-body);
  line-height: var(--lh-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
