/**
 * page.js  —  /src/app/fuel-hauling-made-easy-workbook/page.js
 *
 * "Fuel Hauling Made Easy" — Student Workbook Edition
 * Authored by Quincy Benton, prepared by Vanguard Small Business
 * Consultants, LLC. Paperback available on Amazon.
 *
 * Sections:
 *   1. Hero (front cover + headline + Amazon CTA)
 *   2. Covers Showcase (front + back side-by-side)
 *   3. About the Book (full description)
 *   4. What's Inside (modules / topics)
 *   5. Pro Tip (sample quote)
 *   6. Who Is This For
 *   7. FAQ (targets long-tail Google queries)
 *   8. Buy on Amazon
 *   9. Final CTA
 *
 * SEO metadata + JSON-LD live in the sibling layout.js (server).
 * Styles: globals.css + @/lib/tokens. No tokens defined here.
 * Header/Footer come from the root layout — do not add them.
 *
 * ── SWAP IMAGES ──────────────────────────────────────────────
 *  Front and back covers are in /public/. Replace the URLs in
 *  the IMAGES object below if filenames change.
 * ─────────────────────────────────────────────────────────────
 */

"use client";

import T from "@/lib/tokens";

/* ════════════════════════════════════════════════════════
   CONSTANTS
════════════════════════════════════════════════════════ */
const AMAZON_URL =
  "https://www.amazon.com/FUEL-HAULING-MADE-EASY-Consultants/dp/B0H1MV7DS6";

const IMAGES = {
  frontCover: "/Fuel Hauling Made Easy - Front Cover - Final Version.jpg",
  backCover:  "/Fuel Hauling Made Easy - Back Cover - Final Version.jpg",
  // Hero background — tanker / fuel-transport scene
  hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
};

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
const BookIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const ClipboardIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="13" y2="16"/>
  </svg>
);
const ShieldIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const AwardIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const TruckIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1"/>
    <path d="M15 9h4l3 4v4h-7"/>
    <circle cx="6" cy="19" r="2"/>
    <circle cx="18" cy="19" r="2"/>
  </svg>
);
const QuoteIcon = ({ size = 56, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);
const AmazonIcon = ({ size = 18, color = "currentColor" }) => (
  // Simple bag-style mark; brand-safe (not the Amazon smile logo)
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7h12l-1 13H7L6 7z"/>
    <path d="M9 7V5a3 3 0 0 1 6 0v2"/>
  </svg>
);

/* ════════════════════════════════════════════════════════
   SECTION 1 — HERO
════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 640 }}>
      {/* Background photo */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `url('${IMAGES.hero}')`,
        backgroundSize: "cover", backgroundPosition: "center 40%",
      }}/>
      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(105deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 50%, rgba(10,22,40,0.55) 100%)",
      }}/>
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 3, padding: "100px 24px 96px" }}>
        <div style={{ gap: 48, alignItems: "center" }} className="hero-grid">

          {/* Left — text */}
          <div>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: T.textDim }}>Home</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>/</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: T.orange }}>For Drivers · New Release</span>
            </div>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(232,97,10,0.14)", border: `1px solid rgba(232,97,10,0.35)`,
              borderRadius: "var(--radius-sm)", padding: "6px 14px", marginBottom: 24,
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5, letterSpacing: "0.16em", textTransform: "uppercase", color: T.orange }}>
                New Book · Now on Amazon
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(38px, 5.5vw, 70px)",
              color: "#fff", lineHeight: 1.0,
              textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 20,
            }}>
              Fuel Hauling<br/>
              Made Easy:<br/>
              <span style={{ color: T.orange }}>The Simple Guide</span><br/>
              <span style={{ color: T.gold }}>to Safe Fuel Transport.</span>
            </h1>

            {/* Sub-headline */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: 20, maxWidth: 560,
            }}>
              A hands-on student workbook that shows you exactly how to haul fuel,
              transport hazmat safely, and perform with confidence on every run.
            </p>

            {/* Byline */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              color: T.textDim, lineHeight: 1.6, marginBottom: 36,
            }}>
              By <strong style={{ color: "#fff" }}>Quincy Benton</strong> · Prepared by Vanguard Small Business Consultants, LLC · Paperback, May 10, 2026
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
              {[
                "100+ Pro Tips",
                "Hazmat-Ready",
                "Real-Life Scenarios",
                "Checklists & Exercises",
              ].map(badge => (
                <span key={badge} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.07)", border: `1px solid ${T.borderDark}`,
                  borderRadius: "var(--radius-sm)", padding: "6px 12px",
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textDim,
                }}>
                  <CheckIcon size={11} color={T.gold}/>
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href={AMAZON_URL}
                 target="_blank" rel="noopener noreferrer"
                 className="btn btn--orange btn--lg">
                <AmazonIcon size={16} color="#fff"/>
                Buy on Amazon
                <ArrowRight size={16} color="#fff"/>
              </a>
              <a href="#about" className="btn btn--lg btn--outline-white">
                Read More About the Book
              </a>
            </div>
          </div>

          {/* Right — front cover */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
            <img
              src={IMAGES.frontCover}
              alt="Fuel Hauling Made Easy — Front Cover (Student Workbook Edition by Quincy Benton)"
              style={{
                maxWidth: 420, width: "100%", height: "auto",
                borderRadius: 8, display: "block", flexShrink: 0,
                boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Diagonal bottom edge */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0, zIndex: 4,
        height: 60, background: T.surface,
        clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
      }}/>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — COVERS SHOWCASE  (front + back side by side)
════════════════════════════════════════════════════════ */
function CoversShowcase() {
  const covers = [
    { src: IMAGES.frontCover, label: "Front Cover" },
    { src: IMAGES.backCover,  label: "Back Cover"  },
  ];
  return (
    <section className="section section--surface" style={{ padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>The Book</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(26px, 3.4vw, 42px)", color: T.navy }}>
            See the Workbook — Front &amp; Back
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center", justifyItems: "center" }} className="covers-grid">
          {covers.map(c => (
            <figure key={c.label} style={{ margin: 0, width: "100%", maxWidth: 420 }}>
              <img
                src={c.src}
                alt={`Fuel Hauling Made Easy — ${c.label} (Student Workbook Edition)`}
                style={{
                  width: "100%", height: "auto", display: "block",
                  borderRadius: 8,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25), 0 4px 14px rgba(0,0,0,0.15)",
                }}
              />
              <figcaption style={{
                marginTop: 14, textAlign: "center",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12,
                letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted,
              }}>
                {c.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — ABOUT THE BOOK  (full description)
════════════════════════════════════════════════════════ */
function AboutBook() {
  return (
    <section id="about" className="section section--white">
      <div className="container">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p className="text-label text-orange" style={{ marginBottom: 12, textAlign: "center" }}>
            About the Book
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 3.6vw, 46px)", color: T.navy,
            marginBottom: 28, textAlign: "center",
          }}>
            Your Complete Roadmap to Mastering Safe Fuel Transport
          </h2>

          <div style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.85, color: T.text }}>
            <p style={{ marginBottom: 20 }}>
              <strong>Fuel Hauling Made Easy: The Simple Guide to Safe Fuel Transport</strong> is your
              complete, real-world roadmap to mastering one of the most demanding and
              high-responsibility roles in the trucking industry. Whether you're a new driver
              stepping into fuel hauling for the first time or an experienced professional looking
              to sharpen your skills, this practical workbook breaks down complex procedures
              into clear, step-by-step guidance you can actually use on the job.
            </p>
            <p style={{ marginBottom: 20 }}>
              From understanding tanker setups and safety fundamentals to learning proper
              loading, unloading, and emergency response techniques, this book transforms
              industry knowledge into simple, actionable training you can trust.
            </p>
            <p style={{ marginBottom: 20 }}>
              Designed as a hands-on learning experience, this student workbook goes far beyond
              theory. Inside, you'll find structured chapters, real-life scenarios, professional
              tips, checklists, and exercises that reinforce every key concept. You'll learn how
              to prevent costly mistakes like cross-dumps and spills, properly use terminal
              systems, handle equipment with confidence, and follow industry-standard safety
              practices every single day. Each section is built to help you think like a
              professional fuel hauler — focused, precise, and always safety-first — so you can
              perform with confidence in high-pressure environments.
            </p>
            <p style={{ marginBottom: 0 }}>
              More than just a guide, this book is a complete training companion for building a
              successful and safe fuel hauling career. With expert-backed insights,
              certification-focused content, and over 100 practical tips used by professionals
              in the field, it prepares you for real-world challenges while helping you stand
              out as a skilled and reliable driver. If you're serious about entering or
              advancing in fuel transport, <em>Fuel Hauling Made Easy</em> gives you the
              knowledge, structure, and confidence to do the job right — every time.
            </p>
          </div>

          {/* Quick facts strip */}
          <div style={{
            marginTop: 40, display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
          }} className="facts-grid">
            {[
              { k: "Author",    v: "Quincy Benton" },
              { k: "Publisher", v: "Vanguard SBC, LLC" },
              { k: "Format",    v: "Paperback" },
              { k: "Released",  v: "May 10, 2026" },
            ].map(item => (
              <div key={item.k} style={{
                background: T.surface, border: `1px solid ${T.border}`,
                borderTop: `3px solid ${T.orange}`,
                borderRadius: "var(--radius-md)", padding: "18px 18px",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 6 }}>
                  {item.k}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: T.navy }}>
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 4 — WHAT'S INSIDE
════════════════════════════════════════════════════════ */
function WhatsInside() {
  const features = [
    { icon: <TruckIcon    size={28} color={T.orange}/>, title: "Tanker Setups & Safety Fundamentals",                 body: "Understand the equipment, valves, vents, and grounding systems that make safe fuel transport possible — explained in plain English." },
    { icon: <ClipboardIcon size={28} color={T.orange}/>, title: "Step-by-Step Loading & Unloading Procedures",         body: "Documented procedures for terminal systems, gantries, and drop sites — including the small steps that prevent the biggest mistakes." },
    { icon: <ShieldIcon   size={28} color={T.orange}/>, title: "Spill, Cross-Dump & Contamination Prevention",          body: "Learn the techniques professionals use every day to prevent the costliest and most career-ending errors in fuel hauling." },
    { icon: <BookIcon     size={28} color={T.orange}/>, title: "Hazmat Transportation & DOT-Aligned Best Practices",   body: "Placarding, paperwork, routing, and emergency response — practical guidance that aligns with the rules you're expected to follow." },
    { icon: <AwardIcon    size={28} color={T.orange}/>, title: "100+ Pro Tips, Scenarios, Checklists & Exercises",     body: "Real-life scenarios, end-of-chapter exercises, and over 100 professional tips that turn knowledge into on-the-job confidence." },
  ];

  return (
    <section className="section section--surface">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>What You'll Learn</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(30px, 4vw, 50px)", color: T.navy, marginBottom: 16 }}>
            Everything You Need to Haul Fuel Professionally
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: T.textMuted, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Built for drivers who want practical answers to real questions —
            from "how do you haul fuel" on day one to advanced hazmat
            transportation procedures.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              display: "flex", alignItems: "flex-start", gap: 24,
              background: T.surfaceWhite, borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`, borderLeft: `4px solid ${T.orange}`,
              padding: "28px 32px",
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <div style={{ width: 48, height: 48, background: "rgba(232,97,10,0.08)", border: `1px solid rgba(232,97,10,0.2)`, borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {f.icon}
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 11, color: T.textMuted, letterSpacing: "0.1em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, color: T.navy, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: T.textMuted, lineHeight: 1.7 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 5 — PRO TIP  (sample quote from the book)
════════════════════════════════════════════════════════ */
function ProTip() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}/>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(10,22,40,0.93)" }}/>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p className="text-label text-gold" style={{ marginBottom: 20 }}>
            Sample Tip — From Inside the Book
          </p>

          <div style={{
            position: "relative",
            background: "rgba(28,48,80,0.7)",
            backdropFilter: "blur(8px)",
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.borderDark}`,
            borderTop: `4px solid ${T.gold}`,
            padding: "52px 52px 44px", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 16, left: 24, opacity: 0.12 }}>
              <QuoteIcon size={72} color={T.gold}/>
            </div>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(200,168,75,0.12)", border: `1px solid rgba(200,168,75,0.3)`,
              borderRadius: "var(--radius-sm)", padding: "6px 16px", marginBottom: 28,
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: T.gold }}>
                Pro Tip from the Book
              </span>
            </div>

            <blockquote style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(17px, 2vw, 22px)",
              color: "#fff", lineHeight: 1.75, fontStyle: "italic",
              position: "relative", zIndex: 1, marginBottom: 32,
            }}>
              "Think like a professional fuel hauler — focused, precise, and always safety-first.
              Confidence in high-pressure environments comes from doing the small things
              right, every single time."
            </blockquote>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: T.gold }}>
                Fuel Hauling Made Easy — Student Workbook Edition
              </span>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn btn--orange btn--lg">
              <AmazonIcon size={16} color="#fff"/>
              Get the Book on Amazon
              <ArrowRight size={16} color="#fff"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 6 — WHO IS THIS FOR
════════════════════════════════════════════════════════ */
function WhoIsThisFor() {
  const audience = [
    { title: "New Fuel Drivers",                       body: "Step into fuel hauling for the first time with the confidence of someone who's been on the job for years." },
    { title: "Experienced Haulers Sharpening Skills",  body: "Formalize what you know, fill the gaps you didn't know you had, and lock in best practices." },
    { title: "Drivers Pursuing Certification",         body: "The book's certification-focused content prepares you for the standards expected in the field." },
    { title: "Carriers & Trainers",                    body: "Use the workbook as the backbone of an onboarding or refresher program. Assign it, work through it, and track it." },
  ];

  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>Who It's For</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 46px)", color: T.navy }}>
            Built for Everyone in Fuel Transportation
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 960, margin: "0 auto" }} className="audience-grid">
          {audience.map((item, i) => (
            <div key={item.title} style={{
              display: "flex", gap: 16, alignItems: "flex-start",
              padding: "22px 24px",
              borderRadius: "var(--radius-md)", border: `1px solid ${T.border}`,
              transition: "border-color var(--ease-base), box-shadow var(--ease-base), transform var(--ease-base)",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.orange; e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: T.orange, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15 }}>
                {i + 1}
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: T.navy, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 5 }}>{item.title}</h4>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 7 — FAQ
   Mirrors the FAQPage JSON-LD in layout.js. Question wording
   targets the exact long-tail queries the user wants to rank
   for in Google.
════════════════════════════════════════════════════════ */
function FAQ() {
  const items = [
    {
      q: "How do you haul fuel safely?",
      a: "Safely hauling fuel starts with a thorough pre-trip inspection of your tanker, confirming product compatibility, following proper loading procedures at the terminal, securing the load, driving defensively with extra following distance, and using the correct unloading sequence at the drop site. Fuel Hauling Made Easy breaks every one of these steps down into a checklist you can use on the job."
    },
    {
      q: "How do you transport fuel as a professional driver?",
      a: "Professional fuel transport requires a CDL with HazMat and Tanker endorsements, a clear understanding of the product being hauled, the right placards and shipping papers, an inspected and grounded tanker, and adherence to DOT and FMCSA regulations. The workbook walks new and veteran drivers through each of these requirements with practical, field-tested guidance."
    },
    {
      q: "What is hazmat transportation and how does it apply to fuel?",
      a: "Hazmat (hazardous materials) transportation is the regulated movement of materials that can pose a risk to health, safety, property, or the environment. Gasoline, diesel, and other fuels are Class 3 flammable liquids and fall under HazMat rules. Drivers must follow specific placarding, documentation, routing, and emergency-response procedures — all covered in Fuel Hauling Made Easy."
    },
    {
      q: "Is Fuel Hauling Made Easy good for new drivers?",
      a: "Yes — it is written specifically as a student workbook so a brand-new driver can read it cover to cover. It assumes no prior fuel-hauling experience and explains terminology, equipment, and procedures from the ground up, with exercises that reinforce each concept."
    },
    {
      q: "Where can I buy Fuel Hauling Made Easy?",
      a: "The paperback is available on Amazon. Use the Buy on Amazon button on this page to go directly to the listing."
    },
  ];

  return (
    <section className="section section--surface" style={{ padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>Questions Drivers Ask</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 44px)", color: T.navy }}>
            Fuel Hauling & Hazmat Transportation FAQ
          </h2>
        </div>

        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
          {items.map(item => (
            <details key={item.q} style={{
              background: T.surfaceWhite, border: `1px solid ${T.border}`,
              borderLeft: `4px solid ${T.orange}`,
              borderRadius: "var(--radius-md)", padding: "18px 22px",
            }}>
              <summary style={{
                cursor: "pointer", listStyle: "none",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17,
                color: T.navy, lineHeight: 1.4,
              }}>
                {item.q}
              </summary>
              <p style={{
                marginTop: 12,
                fontFamily: "var(--font-body)", fontSize: 15,
                color: T.textMuted, lineHeight: 1.75,
              }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 8 — BUY ON AMAZON
════════════════════════════════════════════════════════ */
function BuyOnAmazon() {
  return (
    <section id="buy" style={{ background: T.surface, padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>Get Your Copy</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(30px, 4vw, 50px)", color: T.navy }}>
            Now Available on Amazon
          </h2>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", background: T.surfaceWhite, borderRadius: "var(--radius-md)", border: `1px solid ${T.border}`, borderTop: `5px solid ${T.orange}`, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <div style={{ background: T.navy, padding: "36px 40px", display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
            <img
              src={IMAGES.frontCover}
              alt="Fuel Hauling Made Easy — Front Cover thumbnail"
              style={{ width: 110, height: "auto", borderRadius: 4, flexShrink: 0, boxShadow: "0 12px 30px rgba(0,0,0,0.4)" }}
            />
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>
                Fuel Hauling Made Easy
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: T.textDim, lineHeight: 1.5 }}>
                The Simple Guide to Safe Fuel Transport · Student Workbook Edition
              </div>
              <div style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: 13, color: T.gold }}>
                By Quincy Benton · Paperback
              </div>
            </div>
          </div>

          <div style={{ padding: "32px 40px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 20 }}>What you get:</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                "Structured chapters built for self-study or instructor-led training",
                "Real-life scenarios and end-of-chapter exercises",
                "Step-by-step loading, unloading, and emergency-response procedures",
                "Spill, cross-dump, and contamination prevention strategies",
                "100+ practical, field-tested professional tips",
              ].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ marginTop: 2, flexShrink: 0 }}><CheckIcon size={15} color={T.orange}/></span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: T.text, lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: "0 40px 40px" }}>
            <a href={AMAZON_URL}
               target="_blank" rel="noopener noreferrer"
               className="btn btn--orange btn--lg btn--full btn--pulse"
               style={{ fontSize: 18 }}>
              <AmazonIcon size={18} color="#fff"/>
              Buy on Amazon
              <ArrowRight size={16} color="#fff"/>
            </a>
            <p style={{ marginTop: 14, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12.5, color: T.textMuted }}>
              You'll be taken to the product page on Amazon.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 9 — FINAL CTA
════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section style={{ background: T.navy, padding: "88px 0", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(232,97,10,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,97,10,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}/>
      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <p className="text-label text-gold" style={{ marginBottom: 16 }}>Ready to Ride With Confidence?</p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(32px, 4.5vw, 60px)", color: "#fff",
          textTransform: "uppercase", lineHeight: 1.05, marginBottom: 20,
        }}>
          The Knowledge That Keeps You<br/>
          <span style={{ color: T.orange }}>Safe on Every Run.</span>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: T.textDim, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
          A complete, real-world training companion for safe fuel transport —
          built for new drivers and veterans alike. Pick up your copy today.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn btn--orange btn--lg btn--pulse">
            <AmazonIcon size={16} color="#fff"/>
            Buy on Amazon
            <ArrowRight size={16} color="#fff"/>
          </a>
          <a href="/certified-to-lead-workshop" className="btn btn--lg btn--outline-white">
            Explore the Trainer Workshop
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════════ */
export default function FuelHaulingWorkbookPage() {
  return (
    <main>
      <Hero/>
      <CoversShowcase/>
      <AboutBook/>
      <WhatsInside/>
      <ProTip/>
      <WhoIsThisFor/>
      <FAQ/>
      <BuyOnAmazon/>
      <FinalCTA/>

      <style jsx>{`
        .hero-grid       { grid-template-columns: 1fr auto; }
        .covers-grid     { grid-template-columns: 1fr 1fr; }
        .audience-grid   { grid-template-columns: 1fr 1fr; }
        .facts-grid      { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 860px) {
          .hero-grid     { grid-template-columns: 1fr; }
          .covers-grid   { grid-template-columns: 1fr; }
          .audience-grid { grid-template-columns: 1fr; }
          .facts-grid    { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .facts-grid    { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
