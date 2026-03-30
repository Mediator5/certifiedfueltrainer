/**
 * Footer.jsx  —  /src/components/Footer.jsx
 *
 * Styles from:
 *   - /src/app/globals.css  →  CSS variables + utility classes
 *   - @/lib/tokens          →  JS values for inline styles
 *
 * No design tokens are defined in this file.
 */
"use client"

import T from "@/lib/tokens";

/* ═══════════════════════════════════════════════════════
   FOOTER DATA
═══════════════════════════════════════════════════════ */
const FOOTER_LINKS = [
  {
    heading: "For Drivers",
    links: [
      { label: "Fuel Hauling Made Easy",      href: "/fuel-hauling-made-easy" },
      { label: "Buy the Workbook — $79",       href: "/fuel-hauling-made-easy#buy" },
      { label: "Free Drop Site Checklist",     href: "/resources#checklist" },
      { label: "Driver Blog & Articles",       href: "/resources" },
    ],
  },
  {
    heading: "For Trainers",
    links: [
      { label: "Certified to Lead™ Workshop", href: "/certified-to-lead-workshop" },
      { label: "Certification Details",        href: "/certified-to-lead-workshop#cert" },
      { label: "Register — Aug 2026",          href: "/certified-to-lead-workshop#register" },
      { label: "Group Rates & Invoicing",      href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Articles",              href: "/resources" },
      { label: "Free Downloads",               href: "/resources#downloads" },
      { label: "Newsletter Sign-Up",           href: "/resources#newsletter" },
      { label: "Trainer Excellence Checklist", href: "/resources#trainer-checklist" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Vanguard SBC",           href: "/about" },
      { label: "Contact Us",                   href: "/contact" },
      { label: "Client Login",                 href: "/login" },
      { label: "vanguardsbconsultants.com",    href: "https://vanguardsbconsultants.com", external: true },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════ */
const FbIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.851L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LiIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const MailIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PhoneIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const ArrowRight = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const ExternalIcon = ({ size = 11, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════
   SOCIAL BUTTON
═══════════════════════════════════════════════════════ */
function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 38, height: 38,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(255,255,255,0.06)",
        border: `1px solid ${T.borderDark}`,
        borderRadius: "var(--radius-sm)",
        color: T.textDim,
        transition: "all var(--ease-fast)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = T.orange;
        e.currentTarget.style.borderColor = T.orange;
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = T.borderDark;
        e.currentTarget.style.color = T.textDim;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER LINK
═══════════════════════════════════════════════════════ */
function FooterLink({ href, label, external }) {
  return (
    <li style={{ listStyle: "none" }}>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "var(--font-body)", fontSize: 14,
          color: T.textDim, lineHeight: 1,
          transition: "all var(--ease-fast)",
          paddingBottom: 1,
          borderBottom: "1px solid transparent",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = T.gold;
          e.currentTarget.style.borderBottomColor = T.gold;
          e.currentTarget.style.gap = "10px";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = T.textDim;
          e.currentTarget.style.borderBottomColor = "transparent";
          e.currentTarget.style.gap = "6px";
        }}
      >
        {external
          ? <ExternalIcon size={10} color="currentColor"/>
          : <ArrowRight size={11} color="currentColor"/>
        }
        {label}
      </a>
    </li>
  );
}

/* ═══════════════════════════════════════════════════════
   NEWSLETTER FORM
═══════════════════════════════════════════════════════ */
function NewsletterForm() {
  return (
    <div>
      <p className="text-label text-gold" style={{ marginBottom: 10 }}>
        Free Training Resources
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: T.textDim, lineHeight: 1.6, marginBottom: 16 }}>
        Get the free <strong style={{ color: "#fff" }}>Fuel Drop Site Checklist</strong> and industry tips delivered to your inbox.
      </p>
      <form
        onSubmit={e => e.preventDefault()}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "11px 14px",
            background: "rgba(255,255,255,0.07)",
            border: `1px solid ${T.borderDark}`,
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-body)", fontSize: 13.5,
            color: "#fff",
            outline: "none",
            transition: "border-color var(--ease-fast)",
          }}
          onFocus={e => e.target.style.borderColor = T.gold}
          onBlur={e  => e.target.style.borderColor = T.borderDark}
        />
        <input
          type="email"
          placeholder="Your Email Address"
          style={{
            padding: "11px 14px",
            background: "rgba(255,255,255,0.07)",
            border: `1px solid ${T.borderDark}`,
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-body)", fontSize: 13.5,
            color: "#fff",
            outline: "none",
            transition: "border-color var(--ease-fast)",
          }}
          onFocus={e => e.target.style.borderColor = T.gold}
          onBlur={e  => e.target.style.borderColor = T.borderDark}
        />
        <button
          type="submit"
          className="btn btn--orange btn--full"
          style={{ marginTop: 2 }}
        >
          Send Me the Free Checklist
        </button>
      </form>
      <p style={{ marginTop: 10, fontSize: 11.5, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}>
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER  (exported component)
═══════════════════════════════════════════════════════ */
export default function Footer() {
  return (
    <footer style={{ background: T.navy, color: T.textWhite }}>

      {/* ── Pre-footer CTA band ── */}
      <div style={{
        background: T.orange,
        padding: "28px 0",
      }}>
        <div className="container footer-cta-band" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 24, flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Certified to Lead™ Workshop — August 2026
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>
              MetroTech · Oklahoma City, OK &nbsp;|&nbsp; Limited to 20 Participants
            </div>
          </div>
          <a
            href="/certified-to-lead-workshop#register"
            className="btn btn--lg footer-cta-btn"
            style={{ background: T.navy, color: "#fff", flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = T.navyMid; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.navy; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Register at Early Bird Rate — $895
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="container" style={{ padding: "64px 24px 48px" }}>

        {/*
          KEY FIX: Remove inline gridTemplateColumns from the div entirely.
          Let the CSS class handle ALL column layout including the default.
          Inline styles have higher specificity than class-based media queries,
          so mixing them breaks responsiveness.
        */}
        <div className="footer-grid">

          {/* Col 1 — Brand + Contact + Social */}
          <div className="footer-brand-col">
            {/* Logo */}
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 11, marginBottom: 20 }}>
              <div style={{
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
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.15 }}>
                  Fuel Hauling
                </div>
                <div className="text-label text-gold" style={{ marginTop: 2 }}>
                  Training
                </div>
              </div>
            </a>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: T.textDim, lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
              The complete training system for fuel transport professionals. Built from the field, for the field.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              <a href="tel:+18005550199" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13.5, color: T.textDim, transition: "color var(--ease-fast)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
                <PhoneIcon size={14} color={T.gold}/>
                405.239.8853
              </a>
              <a href="mailto:info@fuelhaulingtraining.com" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13.5, color: T.textDim, transition: "color var(--ease-fast)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
                <MailIcon size={14} color={T.gold}/>
                info@fuelhaulingtraining.com
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              <SocialBtn href="https://facebook.com"  label="Facebook"><FbIcon size={15}/></SocialBtn>
              <SocialBtn href="https://twitter.com"   label="Twitter"><TwIcon size={15}/></SocialBtn>
              <SocialBtn href="https://linkedin.com"  label="LinkedIn"><LiIcon size={15}/></SocialBtn>
            </div>
          </div>

          {/* Cols 2-5 — Link columns */}
          {FOOTER_LINKS.map(col => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: T.gold, marginBottom: 18,
                paddingBottom: 10,
                borderBottom: `1px solid ${T.borderDark}`,
              }}>
                {col.heading}
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {col.links.map(link => (
                  <FooterLink key={link.label} {...link}/>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter — full width row below grid */}
        <div className="footer-newsletter" style={{
          marginTop: 56,
          padding: "36px 40px",
          background: T.navyMid,
          borderRadius: "var(--radius-md)",
          border: `1px solid ${T.borderDark}`,
          borderLeft: `4px solid ${T.gold}`,
          display: "grid",
          gap: 48,
          alignItems: "center",
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 26, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 10 }}>
              Free Resources for<br/>
              <span style={{ color: T.gold }}>Fuel Professionals</span>
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Join our mailing list and get instant access to free checklists, training tips, and early-bird pricing on upcoming workshops.
            </p>
          </div>
          <NewsletterForm/>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: `1px solid ${T.borderDark}` }}>
        <div className="container footer-bottom-bar" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "20px 24px", flexWrap: "wrap",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.35)" }}>
            © 2025 Vanguard Small Business Consultants, LLC. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {[
              { label: "Contact", href: "/contact" },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.35)", transition: "color var(--ease-fast)" }}
                onMouseEnter={e => e.currentTarget.style.color = T.gold}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/*
        ── Responsive styles ──
        
        ROOT CAUSE FIX:
        The original code set gridTemplateColumns via inline `style` on the .footer-grid div.
        Inline styles have specificity 1-0-0-0, which always beats class-based media queries
        (specificity 0-1-0-0). So the breakpoint overrides never fired.

        Solution: Move ALL grid layout (including the desktop default) into CSS classes here.
        Never set gridTemplateColumns via inline style on a grid container that needs responsive overrides.

        Same fix applied to .footer-newsletter — its gridTemplateColumns moved to CSS.
      */}
      <style jsx>{`
        /* ── Main link grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        /* ── Newsletter block ── */
        .footer-newsletter {
          grid-template-columns: 1fr 1.2fr;
        }

        /* ── CTA band: stack on small screens ── */
        .footer-cta-band {
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 36px;
          }
          /* Brand col spans full width on its own row */
          .footer-brand-col {
            grid-column: 1 / -1;
          }
        }

        /* ── Large mobile ── */
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
          .footer-newsletter {
            grid-template-columns: 1fr;
            padding: 28px 20px;
          }
          .footer-cta-band {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-cta-btn {
            width: 100%;
            text-align: center;
          }
        }

        /* ── Small mobile ── */
        @media (max-width: 420px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-brand-col {
            grid-column: 1;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}