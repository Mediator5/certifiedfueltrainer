/**
 * Header.jsx  —  /components/Header.jsx
 *
 * Styles come from:
 *   - globals.css  (base styles, utility classes, CSS vars)
 *   - T from '@/lib/tokens'  (JS values for inline styles only)
 *
 * No design tokens are defined in this file.
 */
"use client"
import { useState, useEffect } from "react";
import T from "@/lib/tokens";
import Image from "next/image";

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
        }}
        onMouseEnter={e => { e.currentTarget.style.color = T.textWhite; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
        onMouseLeave={e => { e.currentTarget.style.color = active ? T.textWhite : T.textDim; e.currentTarget.style.background = active ? "rgba(232,97,10,0.18)" : "transparent"; }}
      >
        {item.label}
        {has && (
          <span style={{ opacity: 0.5, display: "inline-flex", transition: "transform 200ms", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
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
            }}
              onMouseEnter={e => { e.currentTarget.style.color = T.textWhite; e.currentTarget.style.borderLeftColor = T.orange; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = T.textDim; e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.background = "transparent"; }}>
              {child}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   HEADER (exported component)
═══════════════════════════════════════════════════════ */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOP BAR
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div style={{ background: T.navy, borderBottom: `1px solid ${T.borderDark}` }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 42, gap: 16 }}>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <SocialBtn label="Facebook"><FbIcon size={13} /></SocialBtn>
            <SocialBtn label="Twitter"><TwIcon size={13} /></SocialBtn>
            <SocialBtn label="LinkedIn"><LiIcon size={13} /></SocialBtn>
          </div>

          {/* Contact info + login */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a href="tel:+18005550199" style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim, fontSize: 12.5, fontFamily: "var(--font-body)", transition: "color var(--ease-fast)" }}
              onMouseEnter={e => e.currentTarget.style.color = T.textWhite}
              onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
              <PhoneIcon size={13} color={T.gold} />
              405.239.8853
            </a>

            <div className="divider-v" />

            <a href="mailto:info@fuelhaulingtraining.com" style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim, fontSize: 12.5, fontFamily: "var(--font-body)", transition: "color var(--ease-fast)" }}
              onMouseEnter={e => e.currentTarget.style.color = T.textWhite}
              onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
              <MailIcon size={13} color={T.gold} />
              info@fuelhaulingtraining.com
            </a>

            <div className="divider-v" />

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
      <header style={{
        background: T.navyMid,
        position: "sticky", top: 0, zIndex: 999,
        borderBottom: `1px solid ${T.borderDark}`,
        boxShadow: scrolled ? "var(--shadow-nav)" : "var(--shadow-sm)",
        transition: "box-shadow var(--ease-base)",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, gap: 20 }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
            {/* <div style={{
              width: 44, height: 44, background: T.orange, borderRadius: "var(--radius-sm)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden", flexShrink: 0,
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gold }}/>
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path d="M11 2C11 2 2 11 2 17a9 9 0 0 0 18 0C20 11 11 2 11 2z" fill="white" opacity="0.95"/>
                <path d="M11 9C11 9 6 14.5 6 17.5a5 5 0 0 0 10 0C16 14.5 11 9 11 9z" fill={T.orange} opacity="0.55"/>
              </svg>
            </div>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 21, color: T.textWhite, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.15 }}>
                Fuel Hauling
              </div>
              <div className="text-label text-gold" style={{ marginTop: 2 }}>
                Training · fuelhaulingtraining.com
              </div>
            </div> */}
            <Image
              src="/certified_to_lead_logo.png"
              alt="Profile picture"
              width={60}
              height={60}
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}
            className="fht-desktop-nav">
            {NAV_LINKS.map(item => (
              <NavItem key={item.label} item={item} active={item.label === "Home"} />
            ))}
          </nav>

          {/* Claim CTA */}
          <a href="/certified-to-lead-workshop#register"
            className="btn btn--orange btn--pulse"
            style={{ flexShrink: 0 }}>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="white">
              <path d="M6.5 0C6.5 0 1 5.5 1 10a5.5 5.5 0 0 0 11 0C12 5.5 6.5 0 6.5 0z" />
            </svg>
            Claim Your Spot
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="fht-hamburger"
            style={{ display: "none", background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-sm)", padding: "7px 9px", color: T.textWhite, flexShrink: 0 }}
            aria-label="Toggle menu">
            {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MOBILE MENU
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {mobileOpen && (
        <div style={{
          background: T.navyMid,
          borderBottom: `3px solid ${T.orange}`,
          boxShadow: "var(--shadow-lg)",
          position: "sticky", top: 68, zIndex: 998,
        }}>
          {NAV_LINKS.map(item => (
            <div key={item.label} style={{ borderBottom: `1px solid ${T.borderDark}` }}>
              <button
                onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                style={{ width: "100%", textAlign: "left", padding: "15px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textWhite }}>
                {item.label}
                {item.children && (
                  <span style={{ display: "inline-flex", transition: "transform 200ms", transform: expanded === item.label ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <ChevronDown size={14} />
                  </span>
                )}
              </button>
              {item.children && expanded === item.label && (
                <div style={{ background: "rgba(0,0,0,0.2)" }}>
                  {item.children.map(child => (
                    <a key={child} href="#" style={{ display: "block", padding: "12px 36px", fontFamily: "var(--font-body)", fontSize: 14, color: T.textDim, borderLeft: `3px solid ${T.orange}` }}>
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ padding: 18 }}>
            <a href="/certified-to-lead-workshop#register" className="btn btn--orange btn--lg btn--full">
              🔥 Claim Your Spot — Aug 2026
            </a>
          </div>
        </div>
      )}

      {/* ── Component-scoped styles (layout only, no tokens) ── */}
      <style jsx>{`
        .fht-desktop-nav { display: flex; }
        .fht-hamburger   { display: none; }

        @media (max-width: 960px) {
          .fht-desktop-nav { display: none !important; }
          .fht-hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}