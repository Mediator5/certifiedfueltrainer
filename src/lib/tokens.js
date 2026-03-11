/**
 * tokens.js  —  /lib/tokens.js
 *
 * Single source of truth for design tokens in JavaScript.
 * These values MIRROR the CSS custom properties in globals.css.
 *
 * Usage in any component:
 *   import T from '@/lib/tokens'
 *   <div style={{ background: T.navy, fontFamily: T.fontDisplay }}>
 *
 * When you need to change a color or font:
 *   1. Update it here
 *   2. Update the matching variable in globals.css
 *   That's it — the whole site updates.
 */

const T = {
  /* ── Brand ─────────────────────── */
  navy:          "#0A1628",
  navyMid:       "#122040",
  navyLight:     "#1C3050",
  orange:        "#E8610A",
  orangeHover:   "#CF540A",
  gold:          "#C8A84B",

  /* ── Surfaces ───────────────────── */
  surface:       "#F4F1EB",
  surfaceWhite:  "#FFFFFF",
  surfaceDark:   "#060E1A",

  /* ── Text ───────────────────────── */
  text:          "#1A1A1A",
  textMuted:     "#6B7280",
  textWhite:     "#FFFFFF",
  textDim:       "rgba(255, 255, 255, 0.65)",

  /* ── Borders ────────────────────── */
  border:        "#E2DDD6",
  borderDark:    "rgba(255, 255, 255, 0.08)",

  /* ── Typography ─────────────────── */
  fontDisplay:   "'Barlow Condensed', Impact, sans-serif",
  fontBody:      "'Barlow', Helvetica, sans-serif",
};

export default T;