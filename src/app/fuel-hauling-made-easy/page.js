/**
 * page.jsx  —  /src/app/fuel-hauling-made-easy/page.jsx
 *
 * Page 2: For Drivers — Fuel Hauling Made Easy
 *
 * Sections:
 *   1. Hero
 *   2. Book Showcase  (cover + key features)
 *   3. What's Inside  (curriculum breakdown)
 *   4. Pro Tip        (sample content / trust)
 *   5. Pricing & Buy
 *   6. Lead Magnet    (free checklist email capture)
 *   7. Testimonials   (reused from homepage)
 *   8. Final CTA
 *
 * Styles: globals.css + @/lib/tokens — no tokens defined here.
 *
 * ── SWAP INSTRUCTIONS ────────────────────────────────────────
 *  Book cover: Replace BOOK_COVER_PLACEHOLDER div with:
 *              <Image src="/images/book-cover.jpg" ... />
 *  Buy button: Replace href="#checkout" with your Stripe /
 *              Shopify checkout URL when ready.
 *  Email form: Wire onSubmit to your Mailchimp / Klaviyo API.
 * ─────────────────────────────────────────────────────────────
 */

"use client";

import { useState } from "react";
import T from "@/lib/tokens";
import Image from "next/image";


/* ════════════════════════════════════════════════════════
   ICONS
════════════════════════════════════════════════════════ */
const CheckIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ArrowRight = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const StarIcon = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const BookIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const ClipboardIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);
const ShieldIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const AwardIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const UsersIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const DownloadIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const LockIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const QuoteIcon = ({ size = 56, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

/* ════════════════════════════════════════════════════════
   BOOK COVER PLACEHOLDER
   Replace with:
   <Image src="/images/book-cover.jpg" alt="Fuel Hauling Made Easy"
     width={340} height={440} style={{ borderRadius:6, objectFit:"cover" }}/>
════════════════════════════════════════════════════════ */
function BookCoverPlaceholder() {
  return (
    <div style={{
      width: 300,
      aspectRatio: "3/4",
      background: `linear-gradient(160deg, ${T.navyMid} 0%, ${T.navy} 100%)`,
      borderRadius: 8,
      border: `1px solid ${T.borderDark}`,
      borderTop: `6px solid ${T.orange}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      padding: "32px 24px",
      boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {/* Decorative spine line */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0,
        width: 8, background: T.orange,
      }} />

      {/* Background fuel drop watermark */}
      <div style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.06 }}>
        <svg width="180" height="210" viewBox="0 0 22 26" fill={T.gold}>
          <path d="M11 2C11 2 2 11 2 17a9 9 0 0 0 18 0C20 11 11 2 11 2z" />
        </svg>
      </div>

      {/* Content */}
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: "rgba(232,97,10,0.15)",
        border: `2px dashed rgba(232,97,10,0.4)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <BookIcon size={26} color={T.orange} />
      </div>

      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22,
          color: "#fff", textTransform: "uppercase", lineHeight: 1.1,
          letterSpacing: "0.03em", marginBottom: 8,
        }}>
          Fuel Hauling<br />Made Easy
        </div>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          color: T.textDim, lineHeight: 1.5,
        }}>
          The Complete Training<br />& Leadership Guide
        </div>
      </div>

      <div style={{
        width: "80%", height: 1,
        background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
      }} />

      <div style={{
        fontFamily: "var(--font-body)", fontSize: 11,
        color: T.gold, letterSpacing: "0.12em",
        textTransform: "uppercase", textAlign: "center",
      }}>
        Student Workbook
      </div>

      {/* Placeholder label */}
      <div style={{
        position: "absolute", top: 12, right: 12,
        background: "rgba(232,97,10,0.2)",
        border: "1px dashed rgba(232,97,10,0.5)",
        borderRadius: "var(--radius-sm)",
        padding: "3px 8px",
        fontFamily: "var(--font-body)", fontSize: 10,
        color: T.orange, letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}>
        Cover Placeholder
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 1 — HERO
════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      background: T.navy,
      position: "relative",
      overflow: "hidden",
      padding: "88px 0 80px",
    }}>
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }} />

      {/* Orange glow */}
      <div style={{
        position: "absolute", top: -100, right: -100, zIndex: 0,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,97,10,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 64,
          alignItems: "center",
        }} className="hero-grid">

          {/* Left — text */}
          <div>
            {/* Breadcrumb */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              marginBottom: 24,
            }}>
              <a href="/" style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: T.textDim, transition: "color var(--ease-fast)",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
                Home
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>/</span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 13, color: T.orange,
              }}>
                For Drivers
              </span>
            </div>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(232,97,10,0.14)",
              border: `1px solid rgba(232,97,10,0.35)`,
              borderRadius: "var(--radius-sm)",
              padding: "6px 14px", marginBottom: 24,
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 11.5, letterSpacing: "0.16em",
                textTransform: "uppercase", color: T.orange,
              }}>
                For Drivers & New Haulers
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(38px, 5.5vw, 70px)",
              color: "#fff", lineHeight: 1.0,
              textTransform: "uppercase", letterSpacing: "0.01em",
              marginBottom: 20,
            }}>
              Fuel Hauling<br />
              Made Easy:<br />
              <span style={{ color: T.orange }}>The Complete</span>{" "}
              <span style={{ color: T.gold }}>Training &</span><br />
              <span style={{ color: T.gold }}>Leadership Guide.</span>
            </h1>

            {/* Sub-headline */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75, marginBottom: 36, maxWidth: 520,
            }}>
              Your step-by-step system for mastering safe fuel transport,
              from pre-trip to post-trip.
            </p>

            {/* Quick-win badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
              {[
                "10-Day Curriculum",
                "DOT Compliant",
                "Instant Download",
                "Print-Ready PDF",
              ].map(badge => (
                <span key={badge} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.07)",
                  border: `1px solid ${T.borderDark}`,
                  borderRadius: "var(--radius-sm)",
                  padding: "6px 12px",
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 12, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: T.textDim,
                }}>
                  <CheckIcon size={11} color={T.gold} />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#buy" className="btn btn--orange btn--lg">
                Buy Now — $79
                <ArrowRight size={16} color="#fff" />
              </a>
              <a href="#free-checklist" className="btn btn--lg btn--outline-white">
                <DownloadIcon size={15} color="#fff" />
                Get Free Sample First
              </a>
            </div>
          </div>

          {/* Right — book cover */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <BookCoverPlaceholder/> */}
            <Image
              src="/FINAL VERSION - FRONT AND BACK COVER DESIGN - Certified to Lead Handbook.png"
              alt="book cover"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Diagonal bottom edge */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0, zIndex: 2,
        height: 60, background: T.surface,
        clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
      }} />
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — WHAT'S INSIDE (Key Features)
════════════════════════════════════════════════════════ */
function WhatsInside() {
  const features = [
    {
      icon: <BookIcon size={28} color={T.orange} />,
      title: "10-Day Comprehensive Training Curriculum",
      body: "A structured, day-by-day system that takes you from the basics all the way through advanced leadership — no experience required to start.",
    },
    {
      icon: <ClipboardIcon size={28} color={T.orange} />,
      title: "Step-by-Step Loading & Unloading Procedures",
      body: "Every step documented clearly, with checklists you can use at the terminal. Never second-guess the process again.",
    },
    {
      icon: <ShieldIcon size={28} color={T.orange} />,
      title: "Cross-Contamination & Spill Prevention Strategies",
      body: "Learn the exact techniques to prevent costly cross-dumps, spills, and contamination incidents that can end careers.",
    },
    {
      icon: <UsersIcon size={28} color={T.orange} />,
      title: "Driver Trainer Excellence & Leadership Modules",
      body: "Ready to move up? This section prepares you to train others — covering coaching techniques, communication, and accountability.",
    },
    {
      icon: <AwardIcon size={28} color={T.orange} />,
      title: "Certification Readiness & Assessment Tools",
      body: "Built-in quizzes, self-assessments, and readiness checklists so you know exactly when you're prepared to certify.",
    },
  ];

  return (
    <section className="section section--surface">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Inside the Workbook
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(30px, 4vw, 50px)", color: T.navy,
            marginBottom: 16,
          }}>
            Everything You Need to Haul Safely & Professionally
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            color: T.textMuted, maxWidth: 540, margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Five core modules covering the full scope of fuel transport —
            from your first day on the job to your first day as a trainer.
          </p>
        </div>

        <div style={{
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              display: "flex", alignItems: "flex-start", gap: 24,
              background: T.surfaceWhite,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`,
              borderLeft: `4px solid ${T.orange}`,
              padding: "28px 32px",
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateX(4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Number + icon */}
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 8, flexShrink: 0,
              }}>
                <div style={{
                  width: 48, height: 48,
                  background: "rgba(232,97,10,0.08)",
                  border: `1px solid rgba(232,97,10,0.2)`,
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {f.icon}
                </div>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 11, color: T.textMuted,
                  letterSpacing: "0.1em",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 19, color: T.navy, textTransform: "uppercase",
                  letterSpacing: "0.03em", marginBottom: 8,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15,
                  color: T.textMuted, lineHeight: 1.7,
                }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — PRO TIP (Sample Content)
════════════════════════════════════════════════════════ */
function ProTip() {
  return (
    <section style={{ background: T.navyMid, padding: "80px 0" }}>
      <div className="container">
        <div style={{
          maxWidth: 780, margin: "0 auto", textAlign: "center",
        }}>
          <p className="text-label text-gold" style={{ marginBottom: 20 }}>
            Sample Content — From Inside the Workbook
          </p>

          <div style={{
            position: "relative",
            background: T.navyLight,
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.borderDark}`,
            borderTop: `4px solid ${T.gold}`,
            padding: "52px 52px 44px",
            overflow: "hidden",
          }}>
            {/* Background quote decoration */}
            <div style={{
              position: "absolute", top: 16, left: 24, opacity: 0.1,
            }}>
              <QuoteIcon size={72} color={T.gold} />
            </div>

            {/* Pro Tip label */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(200,168,75,0.12)",
              border: `1px solid rgba(200,168,75,0.3)`,
              borderRadius: "var(--radius-sm)",
              padding: "6px 16px", marginBottom: 28,
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 11.5, letterSpacing: "0.18em",
                textTransform: "uppercase", color: T.gold,
              }}>
                ⚡ Pro Tip from the Book
              </span>
            </div>

            <blockquote style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(17px, 2vw, 22px)",
              color: "#fff", lineHeight: 1.75,
              fontStyle: "italic",
              position: "relative", zIndex: 1,
              marginBottom: 32,
            }}>
              "Make it a habit to double-check everything at the first terminal
              of the day. If you start focused, you'll stay sharp all shift."
            </blockquote>

            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `linear-gradient(135deg, ${T.orange}, ${T.gold})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C12 2 2 9.5 2 15.5a10 10 0 0 0 20 0C22 9.5 12 2 12 2z" />
                </svg>
              </div>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 14, color: T.gold,
              }}>
                Fuel Hauling Made Easy — Student Workbook, Chapter 2
              </span>
            </div>
          </div>

          <p style={{
            marginTop: 28, fontFamily: "var(--font-body)", fontSize: 15,
            color: T.textDim, lineHeight: 1.7,
          }}>
            The workbook is full of insights like this — practical, field-tested,
            and written by someone who's actually done the job.
          </p>

          <div style={{ marginTop: 28 }}>
            <a href="#buy" className="btn btn--orange btn--lg">
              Get the Full Workbook — $79
              <ArrowRight size={16} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 4 — WHO IS THIS FOR
════════════════════════════════════════════════════════ */
function WhoIsThisFor() {
  const audience = [
    {
      title: "Brand-New Fuel Drivers",
      body: "Just starting out? This workbook walks you through everything from your first pre-trip to your first solo load — step by step.",
    },
    {
      title: "Experienced Drivers Formalizing Knowledge",
      body: "Been hauling for years but never had it written down? Use this to document your expertise and fill any gaps you didn't know you had.",
    },
    {
      title: "Drivers Preparing to Become Trainers",
      body: "The leadership modules in this workbook are the first step toward our Certified to Lead™ workshop. It's the perfect foundation.",
    },
    {
      title: "Carriers Building Training Programs",
      body: "Use the curriculum and checklists as the backbone of your company's onboarding program. Print it, assign it, track it.",
    },
  ];

  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Is This for Me?
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 3.5vw, 48px)", color: T.navy,
          }}>
            This Workbook Is Built for You If…
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="who-grid">
          {audience.map((item, i) => (
            <div key={item.title} style={{
              padding: "32px 32px",
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`,
              background: T.surfaceWhite,
              display: "flex", gap: 20, alignItems: "flex-start",
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = T.orange;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = T.border;
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: T.orange, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 16,
                flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div>
                <h4 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 17, color: T.navy, textTransform: "uppercase",
                  letterSpacing: "0.03em", marginBottom: 8,
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5,
                  color: T.textMuted, lineHeight: 1.7,
                }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade nudge */}
        <div style={{
          marginTop: 40, padding: "24px 32px",
          background: `rgba(200,168,75,0.06)`,
          border: `1px solid rgba(200,168,75,0.2)`,
          borderLeft: `4px solid ${T.gold}`,
          borderRadius: "var(--radius-md)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 24, flexWrap: "wrap",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 17, color: T.navy, textTransform: "uppercase",
              letterSpacing: "0.03em", marginBottom: 4,
            }}>
              Ready to Train Others?
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              color: T.textMuted, lineHeight: 1.6,
            }}>
              The Certified to Lead™ workshop is the next step. Get official DOT-compliant
              certification and the skills to lead a team.
            </p>
          </div>
          <a href="/certified-to-lead-workshop"
            className="btn btn--navy"
            style={{ flexShrink: 0 }}>
            Explore Trainer Workshop
            <ArrowRight size={14} color="#fff" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 5 — PRICING & BUY
   href="#checkout" → replace with your Stripe / Shopify URL
════════════════════════════════════════════════════════ */
function PricingBuy() {
  return (
    <section id="buy" style={{ background: T.surface, padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Get Your Copy Today
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(30px, 4vw, 50px)", color: T.navy,
          }}>
            One Workbook. Everything You Need.
          </h2>
        </div>

        <div style={{
          maxWidth: 640, margin: "0 auto",
          background: T.surfaceWhite,
          borderRadius: "var(--radius-md)",
          border: `1px solid ${T.border}`,
          borderTop: `5px solid ${T.orange}`,
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
        }}>
          {/* Price header */}
          <div style={{
            background: T.navy,
            padding: "36px 40px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: 20, flexWrap: "wrap",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 64, color: "#fff", lineHeight: 1,
              }}>
                $79
              </div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: T.textDim, marginTop: 4,
              }}>
                One-time purchase · Instant PDF download
              </div>
            </div>
            <div style={{
              background: "rgba(232,97,10,0.15)",
              border: `1px solid rgba(232,97,10,0.3)`,
              borderRadius: "var(--radius-sm)",
              padding: "12px 20px", textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 15, color: T.orange,
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>
                Student Workbook
              </div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 12.5,
                color: T.textDim, marginTop: 4,
              }}>
                Fuel Hauling Made Easy
              </div>
            </div>
          </div>

          {/* What's included list */}
          <div style={{ padding: "32px 40px" }}>
            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
              color: T.textMuted, marginBottom: 20,
            }}>
              Everything included:
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                "Full 10-Day Curriculum — printable PDF workbook",
                "Step-by-Step Loading & Unloading Procedures",
                "Cross-Contamination & Spill Prevention Strategies",
                "Driver Trainer Excellence & Leadership Modules",
                "Certification Readiness & Assessment Tools",
                "Fuel Drop Site Checklist (Appendix D)",
              ].map(item => (
                <li key={item} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}>
                  <span style={{ marginTop: 2, flexShrink: 0 }}>
                    <CheckIcon size={15} color={T.orange} />
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: 15,
                    color: T.text, lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buy button */}
          <div style={{ padding: "0 40px 40px" }}>
            {/*
              ── CHECKOUT LINK ────────────────────────────────────
              Replace href="#checkout" with your Stripe / Shopify URL:
              href="https://buy.stripe.com/your-link"
              ─────────────────────────────────────────────────────
            */}
            <a href="https://vanguardbusinessconsultantsllc.com/product/fuel-hauling-made-easy-the-complete-training-leadership-guide/"
              className="btn btn--orange btn--lg btn--full btn--pulse"
              style={{ fontSize: 18 }}>
              <LockIcon size={16} color="#fff" />
              Buy Now — $79
            </a>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 20, marginTop: 16, flexWrap: "wrap",
            }}>
              {["Secure Checkout", "PDF Instant Download", "Money-Back Guarantee"].map(t => (
                <span key={t} style={{
                  display: "flex", alignItems: "center", gap: 5,
                  fontFamily: "var(--font-body)", fontSize: 12.5,
                  color: T.textMuted,
                }}>
                  <CheckIcon size={11} color={T.orange} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 6 — LEAD MAGNET (Free Checklist)
   Wire the form onSubmit to Mailchimp / Klaviyo / your API
════════════════════════════════════════════════════════ */
function LeadMagnet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);

    /*
      ── EMAIL SERVICE INTEGRATION ──────────────────────────────
      Replace the setTimeout below with your actual API call:

      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tag: "fuel-drop-checklist" }),
      });

      Or use a Mailchimp / Klaviyo embed form action URL.
      ──────────────────────────────────────────────────────────
    */
    await new Promise(r => setTimeout(r, 900)); // remove when wired up
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="free-checklist" style={{ background: T.navyMid, padding: "88px 0" }}>
      <div className="container">
        <div style={{
          maxWidth: 680, margin: "0 auto",
        }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="text-label text-gold" style={{ marginBottom: 12 }}>
              Free Download
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 46px)", color: "#fff",
              marginBottom: 16,
            }}>
              Want a Free Sample First?
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16,
              color: T.textDim, lineHeight: 1.7,
            }}>
              Download the <strong style={{ color: "#fff" }}>Fuel Drop Site Checklist</strong> PDF —
              one of the key tools from the workbook — completely free. No credit card required.
            </p>
          </div>

          {/* Card */}
          <div style={{
            background: T.navyLight,
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.borderDark}`,
            borderTop: `4px solid ${T.gold}`,
            overflow: "hidden",
          }}>
            {/* What you get */}
            <div style={{
              padding: "28px 36px",
              borderBottom: `1px solid ${T.borderDark}`,
              display: "flex", alignItems: "center", gap: 20,
              flexWrap: "wrap",
            }}>
              <div style={{
                width: 52, height: 52,
                background: "rgba(200,168,75,0.12)",
                border: `1px solid rgba(200,168,75,0.25)`,
                borderRadius: "var(--radius-md)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <DownloadIcon size={24} color={T.gold} />
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 17, color: "#fff", textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>
                  Fuel Drop Site Checklist — PDF
                </div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 13.5,
                  color: T.textDim, marginTop: 4,
                }}>
                  From Appendix D of the Fuel Hauling Made Easy workbook
                </div>
              </div>
              <div style={{
                marginLeft: "auto",
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 22, color: T.gold,
              }}>
                FREE
              </div>
            </div>

            {/* Form */}
            <div style={{ padding: "32px 36px" }}>
              {submitted ? (
                <div style={{
                  textAlign: "center", padding: "20px 0",
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "rgba(34,197,94,0.12)",
                    border: "2px solid rgba(34,197,94,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <CheckIcon size={24} color="#22c55e" />
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 22, color: "#fff", textTransform: "uppercase",
                    marginBottom: 8,
                  }}>
                    Check Your Inbox!
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 15,
                    color: T.textDim, lineHeight: 1.6,
                  }}>
                    The Fuel Drop Site Checklist is on its way to <strong style={{ color: "#fff" }}>{email}</strong>.
                    While you're at it — get the full workbook for $79 and complete your training.
                  </p>
                  <div style={{ marginTop: 24 }}>
                    <a href="#buy" className="btn btn--orange">
                      Get the Full Workbook — $79
                      <ArrowRight size={14} color="#fff" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 14, marginBottom: 14,
                  }} className="form-grid">
                    <div>
                      <label style={{
                        display: "block", fontFamily: "var(--font-body)",
                        fontSize: 12.5, color: T.textDim, marginBottom: 6,
                        letterSpacing: "0.04em",
                      }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        style={{
                          width: "100%", padding: "12px 14px",
                          background: "rgba(255,255,255,0.06)",
                          border: `1px solid ${T.borderDark}`,
                          borderRadius: "var(--radius-sm)",
                          fontFamily: "var(--font-body)", fontSize: 14.5,
                          color: "#fff", outline: "none",
                          transition: "border-color var(--ease-fast)",
                        }}
                        onFocus={e => e.target.style.borderColor = T.gold}
                        onBlur={e => e.target.style.borderColor = T.borderDark}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: "block", fontFamily: "var(--font-body)",
                        fontSize: 12.5, color: T.textDim, marginBottom: 6,
                        letterSpacing: "0.04em",
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        style={{
                          width: "100%", padding: "12px 14px",
                          background: "rgba(255,255,255,0.06)",
                          border: `1px solid ${T.borderDark}`,
                          borderRadius: "var(--radius-sm)",
                          fontFamily: "var(--font-body)", fontSize: 14.5,
                          color: "#fff", outline: "none",
                          transition: "border-color var(--ease-fast)",
                        }}
                        onFocus={e => e.target.style.borderColor = T.gold}
                        onBlur={e => e.target.style.borderColor = T.borderDark}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn--gold btn--full btn--lg"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    <DownloadIcon size={16} color={T.navy} />
                    {loading ? "Sending…" : "Send Me the Free Checklist"}
                  </button>

                  <p style={{
                    marginTop: 12, textAlign: "center",
                    fontFamily: "var(--font-body)", fontSize: 12,
                    color: "rgba(255,255,255,0.28)",
                  }}>
                    No spam. Unsubscribe any time. Your email is used to send
                    the checklist and occasional training tips.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 7 — TESTIMONIALS
════════════════════════════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    {
      quote: "The tabletop drills and case studies were better than anything I've seen in my 20 years in the field.",
      name: "Larry M.",
      role: "Lead Trainer, Texas",
      initials: "LM",
    },
    {
      quote: "Finally a training that actually shows you how to teach — not just what to say. I feel confident now to train anyone.",
      name: "Angela D.",
      role: "CDL Fuel Driver, Missouri",
      initials: "AD",
    },
  ];

  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            What Professionals Are Saying
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(26px, 3vw, 42px)", color: T.navy,
          }}>
            Trusted by Drivers & Trainers Across the Country
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: T.surface,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`,
              borderLeft: `4px solid ${T.orange}`,
              padding: "36px 36px 32px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 12, right: 20, opacity: 0.1 }}>
                <QuoteIcon size={56} color={T.orange} />
              </div>
              <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} color={T.orange} />)}
              </div>
              <blockquote style={{
                fontFamily: "var(--font-body)", fontSize: 16,
                color: T.text, lineHeight: 1.75,
                fontStyle: "italic", marginBottom: 24,
              }}>
                "{t.quote}"
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${T.orange}, ${T.gold})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 14, color: "#fff",
                  }}>{t.initials}</span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 14, color: T.navy, textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: T.textMuted, marginTop: 2,
                  }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 8 — FINAL CTA
════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section style={{
      background: T.navy, padding: "88px 0",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(232,97,10,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,97,10,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />
      <div className="container" style={{
        position: "relative", zIndex: 1, textAlign: "center",
      }}>
        <p className="text-label text-gold" style={{ marginBottom: 16 }}>
          Don't Wait
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(32px, 4.5vw, 60px)", color: "#fff",
          textTransform: "uppercase", lineHeight: 1.05, marginBottom: 20,
        }}>
          The Knowledge That Keeps You<br />
          <span style={{ color: T.orange }}>Safe on Every Run.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 17,
          color: T.textDim, lineHeight: 1.7,
          maxWidth: 500, margin: "0 auto 40px",
        }}>
          One workbook. $79. A career's worth of practical,
          field-tested knowledge delivered straight to your inbox.
        </p>
        <div style={{
          display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
        }}>
          <a href="#checkout" className="btn btn--orange btn--lg btn--pulse">
            <LockIcon size={15} color="#fff" />
            Buy Now — $79
          </a>
          <a href="#free-checklist" className="btn btn--lg btn--outline-white">
            <DownloadIcon size={15} color="#fff" />
            Get Free Checklist First
          </a>
        </div>
        <p style={{
          marginTop: 20, fontFamily: "var(--font-body)", fontSize: 13,
          color: "rgba(255,255,255,0.28)",
        }}>
          Instant PDF download · Secure checkout · Money-back guarantee
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════════ */
export default function ForDriversPage() {
  return (
    <>

      <main>
        <Hero />
        <WhatsInside />
        <ProTip />
        <WhoIsThisFor />
        <PricingBuy />
        <LeadMagnet />
        <Testimonials />
        <FinalCTA />
      </main>


      {/* Page-scoped responsive layout — no tokens */}
      <style jsx>{`
        .hero-grid         { grid-template-columns: 1fr auto; }
        .who-grid          { grid-template-columns: 1fr 1fr; }
        .testimonials-grid { grid-template-columns: 1fr 1fr; }
        .form-grid         { grid-template-columns: 1fr 1fr; }

        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-grid > div:last-child { display: none; }
        }
        @media (max-width: 640px) {
          .who-grid          { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .form-grid         { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}