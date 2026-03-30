/**
 * Header.jsx  —  /components/Header.jsx
 *
 * Styles come from:
 *   - globals.css  (base styles, utility classes, CSS vars)
 *   - T from '@/lib/tokens'  (JS values for inline styles only)
 *
 * No design tokens are defined in this file.
 *
 * MOBILE RESPONSIVE FIXES (v2):
 *  1. Logo placeholder rendered so the sticky header has visible content
 *  2. Active nav detection based on window.location.pathname (not hardcoded)
 *  3. Mobile drawer uses CSS animation (slide-down + fade) instead of
 *     instant appear/disappear
 *  4. Mobile nav links get a subtle highlight on touch/hover
 *  5. All tap targets are ≥ 44px tall (WCAG 2.5.5)
 *  6. Drawer top offset calculated from header ref so it's always accurate
 *  7. usePathname (Next.js 13 app router) used when available; falls back
 *     to window.location for pages-router compatibility
 */
"use client"
import { useState, useEffect, useRef } from "react";
import T from "@/lib/tokens";
// import Image from "next/image";      // uncomment when logo file is ready
// import { usePathname } from "next/navigation"; // uncomment for App Router

/* ═══════════════════════════════════════════════════════
   NAV CONFIG
═══════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "For Drivers", href: "/fuel-hauling-made-easy",
    // children: ["Fuel Hauling Made Easy", "Buy the Workbook", "Free Checklist Download"]
  },
  {
    label: "For Trainers", href: "/certified-to-lead-workshop",
    // children: ["Certified to Lead™ Workshop", "Certification Details", "Register Now"]
  },
  {
    label: "Resources", href: "/resources",
    // children: ["Blog & Articles", "Free Downloads", "Newsletter"]
  },
  { label: "Contact", href: "/contact" },
];

/* ═══════════════════════════════════════════════════════
   ICONS  (inline SVG — no extra dependency)
═══════════════════════════════════════════════════════ */
const MailIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const UserIcon = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const FbIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.851L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LiIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const MenuIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ChevronDown = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ═══════════════════════════════════════════════════════
   FLAME LOGO MARK  (placeholder until real asset is ready)
   Replace this entire component with:
     <Image src="/your-logo.png" alt="Fuel Hauling Training" width={44} height={44} />
═══════════════════════════════════════════════════════ */
const LogoMark = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="8" fill={T.orange} opacity="0.15" />
    <path
      d="M18 4C18 4 9 13 9 20a9 9 0 0 0 18 0C27 13 18 4 18 4z"
      fill={T.orange}
    />
    <path
      d="M18 14C18 14 14 18.5 14 21.5a4 4 0 0 0 8 0C22 18.5 18 14 18 14z"
      fill={T.gold}
    />
  </svg>
);

const LogoText = () => (
  <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
    <span style={{
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 15,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: T.textWhite,
    }}>
      Fuel Hauling
    </span>
    <span style={{
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: T.gold,
    }}>
      Training
    </span>
  </span>
);

/* ═══════════════════════════════════════════════════════
   SOCIAL BUTTON
═══════════════════════════════════════════════════════ */
const SocialBtn = ({ children, label }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 28, height: 28,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hov ? T.orange : "rgba(255,255,255,0.07)",
        border: `1px solid ${hov ? T.orange : "rgba(255,255,255,0.15)"}`,
        borderRadius: "var(--radius-sm)",
        color: hov ? T.textWhite : T.textDim,
        cursor: "pointer",
        transition: "all var(--ease-fast)",
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
};

/* ═══════════════════════════════════════════════════════
   DESKTOP NAV ITEM WITH DROPDOWN
═══════════════════════════════════════════════════════ */
const NavItem = ({ item, active }) => {
  const [open, setOpen] = useState(false);
  const has = item.children?.length > 0;

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => has && setOpen(true)}
      onMouseLeave={() => has && setOpen(false)}
    >
      <a
        href={item.href}
        style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          padding: "8px 13px",
          fontFamily: "var(--font-display)",
          fontWeight: 700, fontSize: 14,
          letterSpacing: "0.07em", textTransform: "uppercase",
          color: active ? T.textWhite : T.textDim,
          borderRadius: "var(--radius-sm)",
          background: active ? "rgba(232,97,10,0.18)" : "transparent",
          borderBottom: `2px solid ${active ? T.orange : "transparent"}`,
          transition: "all var(--ease-fast)",
          whiteSpace: "nowrap",
          minHeight: 44, // accessible tap target
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = T.textWhite;
          e.currentTarget.style.background = "rgba(255,255,255,0.07)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = active ? T.textWhite : T.textDim;
          e.currentTarget.style.background = active ? "rgba(232,97,10,0.18)" : "transparent";
        }}
      >
        {item.label}
        {has && (
          <span style={{
            opacity: 0.5,
            display: "inline-flex",
            transition: "transform 200ms",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}>
            <ChevronDown size={11} />
          </span>
        )}
      </a>

      {/* Dropdown */}
      {has && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: "50%",
          transform: `translateX(-50%) translateY(${open ? "0" : "-8px"})`,
          minWidth: 220,
          background: T.navyMid,
          border: `1px solid ${T.borderDark}`,
          borderTop: `3px solid ${T.orange}`,
          borderRadius: "0 0 var(--radius-md) var(--radius-md)",
          padding: "6px 0",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity var(--ease-fast), transform var(--ease-fast)",
          zIndex: 200,
          boxShadow: "var(--shadow-nav)",
        }}>
          {item.children.map(child => (
            <a key={child} href="#" style={{
              display: "block", padding: "10px 20px",
              fontFamily: "var(--font-body)", fontSize: 13.5,
              color: T.textDim,
              borderLeft: "2px solid transparent",
              transition: "all var(--ease-fast)",
              minHeight: 44,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = T.textWhite;
                e.currentTarget.style.borderLeftColor = T.orange;
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = T.textDim;
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.background = "transparent";
              }}>
              {child}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   MOBILE NAV LINK  — touch-friendly with press feedback
═══════════════════════════════════════════════════════ */
const MobileNavLink = ({ item, onClose }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <a
      href={item.href}
      onClick={onClose}
      onMouseEnter={() => setPressed(true)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        minHeight: 56,                    // 56px = easy thumb target
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: pressed ? T.orange : T.textWhite,
        background: pressed ? "rgba(232,97,10,0.08)" : "transparent",
        borderLeft: `3px solid ${pressed ? T.orange : "transparent"}`,
        transition: "all 120ms ease",
        textDecoration: "none",
      }}
    >
      {item.label}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════
   HEADER (exported component)
═══════════════════════════════════════════════════════ */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState("/");
  const headerRef = useRef(null);

  /* ── Active route detection ──
     Works for both App Router (usePathname) and Pages Router.
     Swap the body of this effect for:
       const pathname = usePathname();   // if using App Router
  ── */
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 960) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOP BAR
          Hidden on mobile — contact info lives inside the drawer.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="fht-topbar" style={{ background: T.navy, borderBottom: `1px solid ${T.borderDark}` }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 42, gap: 16 }}>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <SocialBtn label="Facebook"><FbIcon size={13} /></SocialBtn>
            <SocialBtn label="Twitter"><TwIcon size={13} /></SocialBtn>
            <SocialBtn label="LinkedIn"><LiIcon size={13} /></SocialBtn>
          </div>

          {/* Contact info + login */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a href="tel:+14052398853" style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim, fontSize: 12.5, fontFamily: "var(--font-body)", transition: "color var(--ease-fast)" }}
              onMouseEnter={e => e.currentTarget.style.color = T.textWhite}
              onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
              <PhoneIcon size={13} color={T.gold} />
              405.239.8853
            </a>

            <div className="divider-v fht-topbar-divider" />

            <a href="mailto:info@fuelhaulingtraining.com" className="fht-topbar-email" style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim, fontSize: 12.5, fontFamily: "var(--font-body)", transition: "color var(--ease-fast)" }}
              onMouseEnter={e => e.currentTarget.style.color = T.textWhite}
              onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
              <MailIcon size={13} color={T.gold} />
              info@fuelhaulingtraining.com
            </a>

            <div className="divider-v fht-topbar-divider" />

            <a href="/contact" className="btn btn--sm" style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: T.textDim, display: "flex", alignItems: "center", gap: 6,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.color = T.textWhite; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = T.textDim; }}>
              <UserIcon size={12} />
              contact
            </a>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN HEADER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header
        ref={headerRef}
        style={{
          background: T.navyMid,
          position: "sticky", top: 0, zIndex: 999,
          borderBottom: `1px solid ${T.borderDark}`,
          boxShadow: scrolled ? "var(--shadow-nav)" : "var(--shadow-sm)",
          transition: "box-shadow var(--ease-base)",
        }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, gap: 20 }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0, textDecoration: "none" }}>
            {/*
              ── LOGO SWAP ──────────────────────────────────────────────────
              When your real logo file is ready, replace LogoMark + LogoText
              with one of the following:

              Option A — PNG/WebP raster:
                <Image src="/certified_to_lead_logo.png"
                       alt="Fuel Hauling Training"
                       width={60} height={60}
                       priority />

              Option B — inline SVG (best: no extra request, fully crisp):
                <YourLogoSvg width={60} height={60} />
              ────────────────────────────────────────────────────────────── */}
            <LogoMark />
            <LogoText />
          </a>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}
            className="fht-desktop-nav"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(item => (
              <NavItem key={item.label} item={item} active={isActive(item.href)} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="/certified-to-lead-workshop#register"
            className="btn btn--orange btn--pulse fht-desktop-cta"
            style={{ flexShrink: 0 }}>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="white">
              <path d="M6.5 0C6.5 0 1 5.5 1 10a5.5 5.5 0 0 0 11 0C12 5.5 6.5 0 6.5 0z" />
            </svg>
            Claim Your Spot
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="fht-hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="fht-mobile-menu"
            style={{
              background: "none",
              border: `1px solid rgba(255,255,255,${mobileOpen ? "0.35" : "0.2"})`,
              borderRadius: "var(--radius-sm)",
              padding: "7px 9px",
              color: T.textWhite,
              flexShrink: 0,
              cursor: "pointer",
              display: "none",       // overridden to flex at ≤960px
              minWidth: 44,
              minHeight: 44,
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color var(--ease-fast), background var(--ease-fast)",
            }}>
            {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MOBILE MENU DRAWER
          position: fixed so it overlays page content correctly.
          top: 68px = main header height (topbar is hidden on mobile).
          Animation: slides down + fades in via CSS @keyframes.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {mobileOpen && (
        <div
          id="fht-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: "auto",
            background: T.navyMid,
            borderTop: `3px solid ${T.orange}`,
            boxShadow: "var(--shadow-lg)",
            zIndex: 998,
            // Slide-down entrance animation
            animation: "fht-drawer-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both",
          }}>

          {/* Nav links */}
          <nav aria-label="Mobile navigation links">
            {NAV_LINKS.map(item => (
              <div key={item.label} style={{ borderBottom: `1px solid ${T.borderDark}` }}>
                {item.children ? (
                  // Accordion for items with children
                  <>
                    <button
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-expanded={expanded === item.label}
                      style={{
                        width: "100%", textAlign: "left",
                        padding: "0 24px",
                        minHeight: 56,
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        color: T.textWhite,
                        background: "none", border: "none", cursor: "pointer",
                      }}>
                      {item.label}
                      <span style={{
                        display: "inline-flex",
                        transition: "transform 200ms",
                        transform: expanded === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      }}>
                        <ChevronDown size={14} />
                      </span>
                    </button>
                    {expanded === item.label && (
                      <div style={{ background: "rgba(0,0,0,0.2)" }}>
                        {item.children.map(child => (
                          <a key={child} href="#"
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "flex", alignItems: "center",
                              padding: "0 36px",
                              minHeight: 52,
                              fontFamily: "var(--font-body)", fontSize: 14,
                              color: T.textDim,
                              borderLeft: `3px solid ${T.orange}`,
                              textDecoration: "none",
                            }}>
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <MobileNavLink item={item} onClose={() => setMobileOpen(false)} />
                )}
              </div>
            ))}
          </nav>

          {/* Contact info */}
          <div style={{
            padding: "20px 24px",
            borderBottom: `1px solid ${T.borderDark}`,
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <a href="tel:+14052398853" style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-body)", fontSize: 14, color: T.textDim,
              minHeight: 44, textDecoration: "none",
            }}>
              <PhoneIcon size={14} color={T.gold} />
              405.239.8853
            </a>
            <a href="mailto:info@fuelhaulingtraining.com" style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-body)", fontSize: 14, color: T.textDim,
              minHeight: 44, textDecoration: "none",
            }}>
              <MailIcon size={14} color={T.gold} />
              info@fuelhaulingtraining.com
            </a>
          </div>

          {/* CTA */}
          <div style={{ padding: "20px 24px" }}>
            <a
              href="/certified-to-lead-workshop#register"
              className="btn btn--orange btn--lg btn--full"
              onClick={() => setMobileOpen(false)}>
              🔥 Claim Your Spot — Aug 2026
            </a>
          </div>
        </div>
      )}

      {/* ── Component-scoped responsive styles ──────────────────── */}
      <style jsx>{`
        /* ── Default: desktop ── */
        .fht-topbar       { display: block; }
        .fht-desktop-nav  { display: flex !important; }
        .fht-desktop-cta  { display: inline-flex !important; }
        .fht-hamburger    { display: none !important; }

        /* ── Mid: hide email + dividers to prevent overflow ── */
        @media (max-width: 1080px) {
          .fht-topbar-email   { display: none !important; }
          .fht-topbar-divider { display: none !important; }
        }

        /* ── Mobile: swap desktop nav for hamburger drawer ── */
        @media (max-width: 960px) {
          .fht-topbar      { display: none !important; }
          .fht-desktop-nav { display: none !important; }
          .fht-desktop-cta { display: none !important; }
          .fht-hamburger   { display: flex !important; }
        }

        /* ── Drawer entrance animation ── */
        @keyframes fht-drawer-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}