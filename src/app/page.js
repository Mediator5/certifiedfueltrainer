/**
 * page.jsx  —  /src/app/page.jsx  (Homepage)
 *
 * Sections:
 *   1. Hero           — Unsplash fuel truck photo bg + overlay
 *   2. Stats Bar
 *   3. Two Paths      — For Drivers / For Trainers
 *   4. Testimonials   — avatar initials placeholders (swap when photos arrive)
 *   5. Trust Band
 *   6. Final CTA
 *
 * Styles: globals.css + @/lib/tokens — no tokens defined here.
 *
 * ── SWAP INSTRUCTIONS ────────────────────────────────────────
 *  Logo:       Replace LOGO_PLACEHOLDER div in <LogoPlaceholder>
 *              with <Image src="/logo.png" ... /> when ready.
 *  Hero photo: Replace HERO_PHOTO_URL with your own image path.
 *  Avatars:    Replace initials divs with <Image> tags when
 *              headshot photos are provided.
 * ─────────────────────────────────────────────────────────────
 */
"use client"
import T from "@/lib/tokens";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   HERO BACKGROUND PHOTO
   Free Unsplash photo — tanker truck on highway, Annie Spratt.
   To swap: replace this URL with your own image path.
   Format:  source.unsplash.com/photo-{ID}/1600x900
────────────────────────────────────────────────────────────── */
const HERO_PHOTO_URL =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80";
//  ↑ Tanker truck on road (Marius on Unsplash) — free for commercial use.
//  Swap this single constant when you have a real photo.

/* ════════════════════════════════════════════════════════
   LOGO PLACEHOLDER
   Remove this component and replace with your real <Image>
   once the logo file is ready.
════════════════════════════════════════════════════════ */
function LogoPlaceholder({ size = 44 }) {
  return (
    <div style={{
      width: size, height: size,
      background: "rgba(255,255,255,0.12)",
      border: "2px dashed rgba(255,255,255,0.3)",
      borderRadius: "var(--radius-sm)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{
        fontSize: 7, color: "rgba(255,255,255,0.35)",
        fontFamily: "var(--font-body)", marginTop: 3,
        letterSpacing: "0.05em",
      }}>LOGO</span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   ICONS
════════════════════════════════════════════════════════ */
const CheckIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowRight = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const StarIcon = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ShieldIcon = ({ size = 34, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const CertIcon = ({ size = 34, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const TruckIcon = ({ size = 34, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 3v5h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const UsersIcon = ({ size = 34, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const QuoteIcon = ({ size = 64, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

/* ════════════════════════════════════════════════════════
   SECTION 1 — HERO
════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 620 }}>

      {/* ── Background photo layer ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `url('${HERO_PHOTO_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
      }}/>

      {/* ── Dark gradient overlay — ensures text is always readable ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: `
          linear-gradient(
            105deg,
            rgba(10,22,40,0.96) 0%,
            rgba(10,22,40,0.88) 45%,
            rgba(10,22,40,0.60) 75%,
            rgba(10,22,40,0.40) 100%
          )
        `,
      }}/>

      {/* ── Subtle grid texture over overlay ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
        pointerEvents: "none",
      }}/>

      {/* ── Content ── */}
      <div className="container" style={{
        position: "relative", zIndex: 3,
        padding: "110px 24px 100px",
      }}>
        <div style={{ maxWidth: 760 }}>

          {/* Eyebrow badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(232,97,10,0.15)",
            border: `1px solid rgba(232,97,10,0.4)`,
            borderRadius: "var(--radius-sm)",
            padding: "6px 14px", marginBottom: 28,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: T.orange, display: "inline-block",
              flexShrink: 0,
            }}/>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 11.5, letterSpacing: "0.16em",
              textTransform: "uppercase", color: T.gold,
            }}>
              fuelhaulingtraining.com
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(44px, 6.5vw, 82px)",
            color: "#fff", lineHeight: 1.0,
            textTransform: "uppercase", letterSpacing: "0.01em",
            marginBottom: 24,
          }}>
            The Complete<br/>
            Training System for<br/>
            <span style={{ color: T.gold }}>Fuel Transport</span>{" "}
            <span style={{ color: T.gold }}>Professionals.</span>
          </h1>

          {/* Sub-headline */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.75, marginBottom: 44, maxWidth: 600,
          }}>
            From first-time drivers to master trainers — get the real-world
            skills and certification you need to lead safely.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <a href="/fuel-hauling-made-easy" className="btn btn--orange btn--lg">
              Start as a Driver
              <ArrowRight size={16} color="#fff"/>
            </a>
            <a href="/certified-to-lead-workshop" className="btn btn--lg btn--outline-white">
              Become a Certified Trainer
            </a>
          </div>

          {/* Trust micro-badges */}
          <div style={{
            display: "flex", alignItems: "center", gap: 22,
            flexWrap: "wrap", marginTop: 40,
          }}>
            {[
              "DOT 49 CFR §172.704 Compliant",
              "Insurance-Recognized Certification",
              "Built from the Field",
            ].map(item => (
              <span key={item} style={{
                display: "flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-body)", fontSize: 12.5,
                color: "rgba(255,255,255,0.45)",
              }}>
                <CheckIcon size={12} color={T.gold}/>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal bottom edge into surface color */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0, zIndex: 4,
        height: 64,
        background: T.surface,
        clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
      }}/>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — STATS BAR
════════════════════════════════════════════════════════ */
function StatsBar() {
  const stats = [
    { value: "10-Day",  label: "Training Curriculum" },
    { value: "1-Day",   label: "Certification Workshop" },
    { value: "3-Year",  label: "Official Certification" },
    { value: "20",      label: "Participants Max — Limited Seats" },
  ];
  return (
    <div style={{ background: T.orange }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "28px 20px", textAlign: "center",
              borderRight: i < stats.length - 1
                ? "1px solid rgba(255,255,255,0.22)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 40, color: "#fff", lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "rgba(255,255,255,0.82)", marginTop: 4,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — TWO PATHS
════════════════════════════════════════════════════════ */
function TwoPaths() {
  const paths = [
    {
      tag:         "For Drivers & New Haulers",
      headline:    "Master the Basics.",
      sub:         "Fuel Hauling Made Easy.",
      description: "Your complete guide to loading, unloading, and staying safe. Perfect for career starters or experienced drivers wanting to formalize their knowledge.",
      price:       "$79",
      priceNote:   "Student Workbook",
      features: [
        "10-Day Comprehensive Training Curriculum",
        "Step-by-Step Loading & Unloading Procedures",
        "Cross-Contamination & Spill Prevention",
        "Driver Trainer Excellence & Leadership Modules",
        "Certification Readiness & Assessment Tools",
      ],
      cta:    "Learn More & Buy Workbook",
      href:   "/fuel-hauling-made-easy",
      accent: T.orange,
      dark:   false,
    },
    {
      tag:         "For Trainers & Industry Leaders",
      headline:    "Become a Certified Trainer.",
      sub:         "Lead with Confidence.",
      description: "The ultimate one-day workshop for professionals ready to step into leadership. Get DOT-compliant, insurance-recognized certification.",
      price:       "$895",
      priceNote:   "Early Bird Rate",
      features: [
        "Professional Coaching Techniques",
        "Advanced Contamination Prevention Strategies",
        "Emergency Drill & Hazard Response Training",
        "Driver Readiness Assessment Tools",
        "Official 3-Year Certification",
      ],
      cta:    "Explore Trainer Workshop",
      href:   "/certified-to-lead-workshop",
      accent: T.gold,
      dark:   true,
    },
  ];

  return (
    <section className="section section--surface">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Choose Your Path
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(30px, 4vw, 50px)", color: T.navy,
          }}>
            Where Do You Want to Go?
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          className="paths-grid">
          {paths.map(path => (
            <div key={path.tag} style={{
              background: path.dark ? T.navy : T.surfaceWhite,
              borderRadius: "var(--radius-md)",
              border: path.dark ? `1px solid ${T.borderDark}` : `1px solid ${T.border}`,
              borderTop: `4px solid ${path.accent}`,
              display: "flex", flexDirection: "column",
              boxShadow: path.dark
                ? "0 8px 40px rgba(0,0,0,0.25)"
                : "var(--shadow-md)",
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = path.dark
                  ? "0 8px 40px rgba(0,0,0,0.25)"
                  : "var(--shadow-md)";
              }}
            >
              {/* Card header */}
              <div style={{ padding: "36px 36px 24px" }}>
                <span style={{
                  display: "inline-block",
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: path.accent,
                  background: path.dark
                    ? "rgba(255,255,255,0.06)"
                    : `${path.accent}18`,
                  border: `1px solid ${path.accent}40`,
                  borderRadius: "var(--radius-sm)",
                  padding: "5px 12px", marginBottom: 20,
                }}>
                  {path.tag}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 34, lineHeight: 1.05, textTransform: "uppercase",
                  color: path.dark ? "#fff" : T.navy, marginBottom: 4,
                }}>
                  {path.headline}
                </h3>
                <h4 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 20, textTransform: "uppercase",
                  color: path.accent, marginBottom: 16,
                }}>
                  {path.sub}
                </h4>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15,
                  color: path.dark ? T.textDim : T.textMuted,
                  lineHeight: 1.7,
                }}>
                  {path.description}
                </p>
              </div>

              {/* Features */}
              <div style={{ padding: "0 36px 24px", flex: 1 }}>
                <div style={{
                  borderTop: `1px solid ${path.dark ? T.borderDark : T.border}`,
                  paddingTop: 24, marginBottom: 8,
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                    color: path.dark ? "rgba(255,255,255,0.35)" : T.textMuted,
                    marginBottom: 16,
                  }}>
                    What's Included
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                    {path.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ marginTop: 2, flexShrink: 0 }}>
                          <CheckIcon size={14} color={path.accent}/>
                        </span>
                        <span style={{
                          fontFamily: "var(--font-body)", fontSize: 14,
                          color: path.dark ? T.textDim : T.text,
                          lineHeight: 1.5,
                        }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price + CTA */}
              <div style={{
                padding: "24px 36px 36px",
                borderTop: `1px solid ${path.dark ? T.borderDark : T.border}`,
                display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 16, flexWrap: "wrap",
              }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 42, color: path.accent, lineHeight: 1,
                  }}>
                    {path.price}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 11.5,
                    color: path.dark ? "rgba(255,255,255,0.3)" : T.textMuted,
                    textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2,
                  }}>
                    {path.priceNote}
                  </div>
                </div>
                <a href={path.href}
                  className="btn btn--lg"
                  style={{
                    background: path.accent,
                    color: path.accent === T.gold ? T.navy : "#fff",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {path.cta}
                  <ArrowRight size={15} color={path.accent === T.gold ? T.navy : "#fff"}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 4 — TESTIMONIALS
   Avatar placeholders: gradient initials circles.
   Swap with <Image> when headshot photos are provided.
════════════════════════════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    {
      quote:    "The tabletop drills and case studies were better than anything I've seen in my 20 years in the field.",
      name:     "Larry M.",
      role:     "Lead Trainer, Texas",
      initials: "LM",
      /* swap: headshot: "/headshots/larry-m.jpg" */
    },
    {
      quote:    "Finally a training that actually shows you how to teach — not just what to say. I feel confident now to train anyone.",
      name:     "Angela D.",
      role:     "CDL Fuel Driver, Missouri",
      initials: "AD",
      /* swap: headshot: "/headshots/angela-d.jpg" */
    },
  ];

  return (
    <section style={{ background: T.navyMid, padding: "88px 0" }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-gold" style={{ marginBottom: 12 }}>
            What Professionals Are Saying
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 3.5vw, 46px)", color: "#fff",
          }}>
            Trusted by Drivers & Trainers Across the Country
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: T.navyLight,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.borderDark}`,
              borderLeft: `4px solid ${T.gold}`,
              padding: "40px 40px 36px",
              position: "relative", overflow: "hidden",
            }}>
              {/* Decorative quote mark */}
              <div style={{ position: "absolute", top: 16, right: 24, opacity: 0.12 }}>
                <QuoteIcon size={64} color={T.gold}/>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={15} color={T.gold}/>
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontFamily: "var(--font-body)", fontSize: 17,
                color: "#fff", lineHeight: 1.75,
                fontStyle: "italic", marginBottom: 28,
                position: "relative", zIndex: 1,
              }}>
                "{t.quote}"
              </blockquote>

              {/* Author — avatar placeholder */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {/*
                  ── AVATAR PLACEHOLDER ──────────────────────────────
                  When headshot photos are ready, replace this div with:
                  <Image
                    src={t.headshot}
                    alt={t.name}
                    width={48} height={48}
                    style={{ borderRadius:"50%", objectFit:"cover" }}
                  />
                  ───────────────────────────────────────────────────
                */}
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${T.gold}, ${T.gold})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 15, color: "#fff", letterSpacing: "0.05em",
                  }}>
                    {t.initials}
                  </span>
                </div>

                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 15, color: "#fff",
                    letterSpacing: "0.04em", textTransform: "uppercase",
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: T.gold, marginTop: 2,
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip callout */}
        <div style={{
          marginTop: 44,
          background: "rgba(200,168,75,0.07)",
          border: `1px solid rgba(200,168,75,0.22)`,
          borderLeft: `4px solid ${T.gold}`,
          borderRadius: "var(--radius-md)",
          padding: "26px 36px",
          display: "flex", alignItems: "flex-start",
          gap: 20, flexWrap: "wrap",
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase",
            color: T.gold, flexShrink: 0, paddingTop: 3,
          }}>
            Pro Tip
          </span>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15.5,
            color: "rgba(255,255,255,0.72)", lineHeight: 1.7,
            fontStyle: "italic",
          }}>
            "Make it a habit to double-check everything at the first terminal of the day.
            If you start focused, you'll stay sharp all shift."
            <span style={{
              color: T.gold, fontStyle: "normal",
              fontSize: 13, marginLeft: 12,
            }}>
              — Fuel Hauling Made Easy, Workbook
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 5 — TRUST BAND
════════════════════════════════════════════════════════ */
function TrustBand() {
  const items = [
    { icon: <ShieldIcon size={34} color={T.orange}/>, title: "DOT Compliant",       body: "Meets DOT 49 CFR §172.704 hazmat trainer requirements." },
    { icon: <CertIcon  size={34} color={T.orange}/>, title: "3-Year Certification", body: "Insurance-recognized by most major U.S. fuel transport carriers." },
    { icon: <TruckIcon size={34} color={T.orange}/>, title: "Built from the Field", body: "Curriculum developed by working fuel transport professionals." },
    { icon: <UsersIcon size={34} color={T.orange}/>, title: "Small Class Sizes",    body: "Limited to 20 participants — every trainer gets real attention." },
  ];

  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Why Fuel Hauling Training
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 3.5vw, 46px)", color: T.navy,
          }}>
            Training You Can Actually Use on the Job
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}
          className="trust-grid">
          {items.map(item => (
            <div key={item.title} style={{
              padding: "36px 26px",
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`,
              borderTop: `4px solid ${T.orange}`,
              textAlign: "center",
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                {item.icon}
              </div>
              <h4 style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17,
                color: T.navy, textTransform: "uppercase",
                letterSpacing: "0.04em", marginBottom: 10,
              }}>
                {item.title}
              </h4>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: T.textMuted, lineHeight: 1.7,
              }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 6 — FINAL CTA
════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section style={{
      background: T.navy, padding: "96px 0",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(232,97,10,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,97,10,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}/>
      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <p className="text-label text-gold" style={{ marginBottom: 16 }}>
          Ready to Get Started?
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(34px, 5vw, 66px)", color: "#fff",
          textTransform: "uppercase", lineHeight: 1.05, marginBottom: 20,
        }}>
          Your Career in Fuel Transport<br/>
          <span style={{ color: T.orange }}>Starts Here.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 17,
          color: T.textDim, lineHeight: 1.7,
          maxWidth: 520, margin: "0 auto 44px",
        }}>
          Whether you're just starting out or ready to lead — we have the
          training system built specifically for you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/fuel-hauling-made-easy" className="btn btn--orange btn--lg">
            Get the Driver Workbook — $79
          </a>
          <a href="/certified-to-lead-workshop" className="btn btn--lg btn--outline-white">
            Claim Your Trainer Spot — $895
          </a>
        </div>
        <p style={{
          marginTop: 24, fontFamily: "var(--font-body)", fontSize: 13,
          color: "rgba(255,255,255,0.28)",
        }}>
          Workshop limited to 20 participants &nbsp;·&nbsp;
          MetroTech, Oklahoma City &nbsp;·&nbsp; August 2026
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
     
      <main>
        <Hero/>
        <StatsBar/>
        <TwoPaths/>
        <Testimonials/>
        <TrustBand/>
        <FinalCTA/>
      </main>
    

      {/* Page-scoped responsive layout — no tokens */}
      <style jsx>{`
        .stats-grid        { grid-template-columns: repeat(4,1fr); }
        .paths-grid        { grid-template-columns: 1fr 1fr; }
        .testimonials-grid { grid-template-columns: 1fr 1fr; }
        .trust-grid        { grid-template-columns: repeat(4,1fr); }

        @media (max-width: 900px) {
          .stats-grid        { grid-template-columns: repeat(2,1fr); }
          .paths-grid        { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .trust-grid        { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 520px) {
          .stats-grid { grid-template-columns: repeat(2,1fr); }
          .trust-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}