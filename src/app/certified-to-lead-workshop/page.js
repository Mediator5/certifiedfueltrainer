/**
 * page.jsx  —  /src/app/certified-to-lead-workshop/page.jsx
 *
 * Page 3: For Trainers — Certified to Lead™ Workshop
 *
 * Sections:
 *   1. Hero              (above the fold, critical)
 *   2. Urgency Counter
 *   3. Value Proposition (what you'll learn)
 *   4. Who Should Attend
 *   5. What's Included   (value stack)
 *   6. Certification Details
 *   7. Pricing
 *   8. Testimonials
 *   9. FAQ
 *  10. Final CTA
 *
 * No <Header/> or <Footer/> — handled by /src/app/layout.jsx
 * Styles: globals.css + @/lib/tokens — no tokens defined here.
 */

"use client";

import { useState, useEffect } from "react";
import T from "@/lib/tokens";

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
const CalendarIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const MapPinIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const UsersIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const ShieldIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const AwardIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const BookOpenIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const ClipboardIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
const FireIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);
const AlertIcon = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const LockIcon = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const ChevronDown = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const QuoteIcon = ({ size = 56, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

/* ════════════════════════════════════════════════════════
   COUNTDOWN TIMER
════════════════════════════════════════════════════════ */
// Set your actual early bird deadline here
const EARLY_BIRD_DEADLINE = new Date("2026-07-15T23:59:59");
const WORKSHOP_DATE       = "August 2026"; // update with exact date
const EARLY_BIRD_DATE     = "July 15, 2026";
const CANCELLATION_POLICY = "Full refund up to 30 days before the event.";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calc = () => {
      const diff = EARLY_BIRD_DEADLINE - new Date();
      if (diff <= 0) return setTimeLeft(null);
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div style={{
      background: "rgba(232,97,10,0.1)",
      border: `1px solid rgba(232,97,10,0.3)`,
      borderRadius: "var(--radius-md)",
      padding: "20px 28px",
      display: "flex", alignItems: "center",
      gap: 20, flexWrap: "wrap",
      justifyContent: "center",
    }}>
      <span style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
        color: T.orange, flexShrink: 0,
      }}>
        ⏰ Early Bird Closes In:
      </span>
      <div style={{ display: "flex", gap: 10 }}>
        {units.map(u => (
          <div key={u.label} style={{ textAlign: "center" }}>
            <div style={{
              background: T.navy,
              border: `1px solid ${T.borderDark}`,
              borderRadius: "var(--radius-sm)",
              padding: "8px 14px", minWidth: 52,
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 28, color: "#fff", lineHeight: 1,
              }}>
                {String(u.value).padStart(2, "0")}
              </div>
            </div>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 10.5,
              color: T.textDim, marginTop: 4,
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              {u.label}
            </div>
          </div>
        ))}
      </div>
      <span style={{
        fontFamily: "var(--font-body)", fontSize: 13, color: T.textDim,
        flexShrink: 0,
      }}>
        Early bird rate ends <strong style={{ color: "#fff" }}>{EARLY_BIRD_DATE}</strong>
      </span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 1 — HERO (above the fold, critical)
════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      background: T.navy, position: "relative",
      overflow: "hidden", padding: "88px 0 80px",
    }}>
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}/>
      {/* Gold glow bottom right */}
      <div style={{
        position: "absolute", bottom: -120, right: -80, zIndex: 0,
        width: 560, height: 560, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,168,75,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
          <a href="/" style={{
            fontFamily: "var(--font-body)", fontSize: 13, color: T.textDim,
            transition: "color var(--ease-fast)",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
            Home
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>/</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: T.gold }}>
            For Trainers
          </span>
        </div>

        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(200,168,75,0.12)",
          border: `1px solid rgba(200,168,75,0.3)`,
          borderRadius: "var(--radius-sm)",
          padding: "6px 14px", marginBottom: 24,
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 11.5, letterSpacing: "0.16em",
            textTransform: "uppercase", color: T.gold,
          }}>
            Certified to Lead™ Workshop
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(38px, 5.5vw, 72px)",
          color: "#fff", lineHeight: 1.0,
          textTransform: "uppercase", letterSpacing: "0.01em",
          marginBottom: 24, maxWidth: 820,
        }}>
          Become a certified fuel trainer<br/>
          in just <span style={{ color: T.gold }}>one day.</span><br/>
          <span style={{ color: T.orange }}>Build confidence.</span><br/>
          Prevent mistakes. Protect lives.
        </h1>

        {/* Event details strip */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 20,
          marginBottom: 36,
        }}>
          {[
            { icon: <MapPinIcon size={15} color={T.gold}/>,     text: "MetroTech — Oklahoma City, OK" },
            { icon: <CalendarIcon size={15} color={T.gold}/>,   text: `${WORKSHOP_DATE}` },
            { icon: <ClockIcon size={15} color={T.gold}/>,      text: "8:00 AM – 5:00 PM" },
            { icon: <UsersIcon size={15} color={T.orange}/>,    text: "Limited to 20 Participants", highlight: true },
          ].map(item => (
            <span key={item.text} style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              fontFamily: "var(--font-body)", fontSize: 14,
              color: item.highlight ? T.orange : T.textDim,
              fontWeight: item.highlight ? 600 : 400,
            }}>
              {item.icon}
              {item.text}
            </span>
          ))}
        </div>

        {/* Countdown */}
        <div style={{ marginBottom: 36, maxWidth: 680 }}>
          <CountdownTimer/>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <a href="#register" className="btn btn--orange btn--lg btn--pulse">
            <svg width="14" height="17" viewBox="0 0 13 16" fill="white">
              <path d="M6.5 0C6.5 0 1 5.5 1 10a5.5 5.5 0 0 0 11 0C12 5.5 6.5 0 6.5 0z"/>
            </svg>
            Claim Your Spot Now
          </a>
          <a href="#whats-included" className="btn btn--lg btn--outline-white">
            See What's Included
            <ArrowRight size={15} color="#fff"/>
          </a>
        </div>

        {/* Scarcity note */}
        <p style={{
          marginTop: 16, fontFamily: "var(--font-body)", fontSize: 13.5,
          color: T.orange, display: "flex", alignItems: "center", gap: 6,
        }}>
          <UsersIcon size={14} color={T.orange}/>
          Limited to 20 Participants — First Come, First Serve
        </p>
      </div>

      {/* Diagonal bottom edge */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0, zIndex: 2,
        height: 60, background: T.surface,
        clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
      }}/>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — VALUE PROPOSITION (What You'll Learn)
════════════════════════════════════════════════════════ */
function ValueProps() {
  const items = [
    {
      icon: <UsersIcon size={28} color={T.gold}/>,
      problem: "Unsure how to coach without coming across as harsh?",
      solution: "Professional Coaching",
      body: "How to coach new drivers while maintaining professional standards — keeping performance high and relationships intact.",
    },
    {
      icon: <AlertIcon size={28} color={T.gold}/>,
      problem: "Worried your drivers might cross-dump a load?",
      solution: "Contamination Prevention",
      body: "Advanced strategies to prevent your drivers from cross-dumping and cross-contaminating loads — the incidents that cost careers and companies.",
    },
    {
      icon: <FireIcon size={28} color={T.gold}/>,
      problem: "Not confident running an emergency drill?",
      solution: "Emergency Preparedness",
      body: "How to run effective emergency drills for spills, fires, tampering, and fuel spray incidents so your team is never caught unprepared.",
    },
    {
      icon: <ClipboardIcon size={28} color={T.gold}/>,
      problem: "Don't know when a driver is truly ready?",
      solution: "Assessment Tools",
      body: "How to use and customize the Fuel Truck Driver Readiness Form to make confident, defensible go/no-go decisions.",
    },
    {
      icon: <ShieldIcon size={28} color={T.gold}/>,
      problem: "Dreading the day your driver faces a real hazard?",
      solution: "Hazard Response",
      body: "Advanced strategies for teaching drivers exactly how to respond to hazardous incidents — before they happen on the road.",
    },
  ];

  return (
    <section className="section section--surface">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-gold" style={{ marginBottom: 12 }}>
            What You'll Learn
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 50px)", color: T.navy,
            marginBottom: 14,
          }}>
            Five Skills That Make You a Better Trainer
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            color: T.textMuted, maxWidth: 540, margin: "0 auto", lineHeight: 1.7,
          }}>
            Every module is designed around real problems trainers face in the field —
            not theory, not textbooks.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
        }} className="value-grid">
          {items.map((item, i) => (
            <div key={item.solution} style={{
              background: T.surfaceWhite,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`,
              padding: "32px 32px",
              display: "flex", gap: 20, alignItems: "flex-start",
              transition: "transform var(--ease-base), box-shadow var(--ease-base), border-color var(--ease-base)",
              ...(i === 4 ? { gridColumn: "1 / -1", maxWidth: "calc(50% - 10px)" } : {}),
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = T.gold;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = T.border;
              }}
            >
              <div style={{
                width: 52, height: 52, flexShrink: 0,
                background: T.navy,
                borderRadius: "var(--radius-md)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {item.icon}
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 12.5,
                  color: T.textMuted, fontStyle: "italic",
                  marginBottom: 6, lineHeight: 1.5,
                }}>
                  "{item.problem}"
                </p>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 18, color: T.navy, textTransform: "uppercase",
                  letterSpacing: "0.03em", marginBottom: 8,
                }}>
                  {item.solution}
                </h3>
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
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — WHO SHOULD ATTEND
════════════════════════════════════════════════════════ */
function WhoShouldAttend() {
  const audience = [
    "Newly hired fuel driver trainers",
    "Current driver trainers seeking recertification or improvement",
    "Fuel truck drivers ready to step into trainer roles",
    "Driver trainers from other industries exploring fuel transport",
  ];

  return (
    <section style={{ background: T.navyMid, padding: "80px 0" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "center",
        }} className="who-grid">

          {/* Left */}
          <div>
            <p className="text-label text-gold" style={{ marginBottom: 12 }}>
              Who Should Attend
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 48px)", color: "#fff",
              marginBottom: 24,
            }}>
              This Workshop Was Built for You If…
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {audience.map(item => (
                <li key={item} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(200,168,75,0.15)",
                    border: `1px solid rgba(200,168,75,0.35)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <CheckIcon size={13} color={T.gold}/>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: 16,
                    color: T.textDim, lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Not for you nudge */}
            <div style={{
              marginTop: 32, padding: "18px 22px",
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${T.borderDark}`,
              borderRadius: "var(--radius-md)",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "rgba(255,255,255,0.45)", lineHeight: 1.6,
              }}>
                <strong style={{ color: T.textDim }}>New to fuel hauling?</strong> This workshop
                is designed for experienced drivers and aspiring trainers. Start with the{" "}
                <a href="/fuel-hauling-made-easy" style={{
                  color: T.orange, borderBottom: `1px solid rgba(232,97,10,0.4)`,
                  transition: "border-color var(--ease-fast)",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderBottomColor = T.orange}
                  onMouseLeave={e => e.currentTarget.style.borderBottomColor = "rgba(232,97,10,0.4)"}>
                  Fuel Hauling Made Easy workbook
                </a>{" "}first.
              </p>
            </div>
          </div>

          {/* Right — visual card */}
          <div style={{
            background: T.navyLight,
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.borderDark}`,
            borderTop: `4px solid ${T.gold}`,
            padding: "40px 36px",
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase",
              color: T.gold, marginBottom: 24,
            }}>
              Workshop At a Glance
            </div>

            {[
              { icon: <CalendarIcon size={16} color={T.gold}/>,  label: "Date",      value: WORKSHOP_DATE },
              { icon: <MapPinIcon size={16} color={T.gold}/>,    label: "Location",  value: "MetroTech, Oklahoma City, OK" },
              { icon: <ClockIcon size={16} color={T.gold}/>,     label: "Time",      value: "8:00 AM – 5:00 PM" },
              { icon: <UsersIcon size={16} color={T.orange}/>,   label: "Seats",     value: "Limited to 20 Participants" },
              { icon: <AwardIcon size={16} color={T.gold}/>,     label: "Cert",      value: "3-Year Certification" },
            ].map((row, i) => (
              <div key={row.label} style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 16,
                padding: "14px 0",
                borderBottom: i < 4 ? `1px solid ${T.borderDark}` : "none",
              }}>
                <span style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-body)", fontSize: 13,
                  color: T.textDim, letterSpacing: "0.04em",
                }}>
                  {row.icon}
                  {row.label}
                </span>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 14, color: "#fff", textAlign: "right",
                  letterSpacing: "0.02em",
                }}>
                  {row.value}
                </span>
              </div>
            ))}

            <a href="#register"
              className="btn btn--orange btn--full"
              style={{ marginTop: 28 }}>
              Claim Your Spot Now
              <ArrowRight size={14} color="#fff"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 4 — WHAT'S INCLUDED (Value Stack)
════════════════════════════════════════════════════════ */
function WhatsIncluded() {
  const included = [
    {
      icon: <BookOpenIcon size={26} color={T.orange}/>,
      title: "Full-Day Live Workshop",
      body: "Classroom-style instruction at MetroTech, Oklahoma City. Hands-on, interactive — not a lecture.",
    },
    {
      icon: <ClipboardIcon size={26} color={T.orange}/>,
      title: "Certified to Lead™ Handbook",
      body: "Printed handbook and evaluation checklists included. Yours to keep and use on the job.",
    },
    {
      icon: <AlertIcon size={26} color={T.orange}/>,
      title: "Case Studies & Tabletop Drills",
      body: "Real-world coaching scenarios you work through as a group. The most valuable part of the day.",
    },
    {
      icon: <AwardIcon size={26} color={T.orange}/>,
      title: "Online Certification Exam",
      body: "Complete the exam after the workshop at your own pace. Pass and earn your official certificate.",
    },
    {
      icon: <ShieldIcon size={26} color={T.orange}/>,
      title: "Official Certificate of Completion",
      body: "3-year certification that meets DOT requirements and is recognized by major U.S. fuel transport insurers.",
    },
  ];

  return (
    <section id="whats-included" className="section section--white">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            The Value Stack
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 50px)", color: T.navy,
          }}>
            Everything That Comes With Your Registration
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22,
        }} className="included-grid">
          {included.map((item, i) => (
            <div key={item.title} style={{
              padding: "32px 28px",
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.border}`,
              borderTop: `4px solid ${T.orange}`,
              background: T.surfaceWhite,
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
              ...(i === 3 ? { gridColumn: "1 / 2" } : {}),
              ...(i === 4 ? { gridColumn: "2 / 3" } : {}),
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
              <div style={{
                width: 52, height: 52,
                background: "rgba(232,97,10,0.08)",
                border: `1px solid rgba(232,97,10,0.18)`,
                borderRadius: "var(--radius-md)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 18, color: T.navy, textTransform: "uppercase",
                letterSpacing: "0.03em", marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5,
                color: T.textMuted, lineHeight: 1.7,
              }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center", marginTop: 32,
          fontFamily: "var(--font-body)", fontSize: 14,
          color: T.textMuted,
        }}>
          Price includes all materials, lunch, and certification exam.
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 5 — CERTIFICATION DETAILS
════════════════════════════════════════════════════════ */
function CertDetails() {
  return (
    <section style={{ background: T.navy, padding: "80px 0" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "center",
        }} className="cert-grid">

          {/* Left — text */}
          <div>
            <p className="text-label text-gold" style={{ marginBottom: 12 }}>
              Certification Details
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 48px)", color: "#fff",
              marginBottom: 20,
            }}>
              Earn Your Official Fuel Driver Trainer Certificate.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16,
              color: T.textDim, lineHeight: 1.75, marginBottom: 28,
            }}>
              After completing the workshop and passing the online exam, you'll receive
              a 3-year certification that carries real weight with employers and insurers.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Meets DOT 49 CFR §172.704 hazmat trainer requirements",
                "Qualifies as official hazmat trainer recertification",
                "Recognized by most major U.S. fuel transport insurance carriers",
                "Valid for 3 years — renewable through recertification workshop",
              ].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: "rgba(200,168,75,0.15)",
                    border: `1px solid ${T.gold}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <CheckIcon size={12} color={T.gold}/>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: 15.5,
                    color: T.textDim, lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — certificate mockup */}
          <div style={{
            background: `linear-gradient(145deg, ${T.navyMid}, ${T.navyLight})`,
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.borderDark}`,
            padding: "44px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Corner ornaments */}
            {["top-left","top-right","bottom-left","bottom-right"].map(pos => (
              <div key={pos} style={{
                position: "absolute",
                top: pos.includes("top") ? 12 : "auto",
                bottom: pos.includes("bottom") ? 12 : "auto",
                left: pos.includes("left") ? 12 : "auto",
                right: pos.includes("right") ? 12 : "auto",
                width: 20, height: 20,
                borderTop: pos.includes("top") ? `2px solid ${T.gold}` : "none",
                borderBottom: pos.includes("bottom") ? `2px solid ${T.gold}` : "none",
                borderLeft: pos.includes("left") ? `2px solid ${T.gold}` : "none",
                borderRight: pos.includes("right") ? `2px solid ${T.gold}` : "none",
                opacity: 0.5,
              }}/>
            ))}

            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "rgba(200,168,75,0.12)",
              border: `2px solid ${T.gold}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <AwardIcon size={30} color={T.gold}/>
            </div>

            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: T.gold, marginBottom: 10,
            }}>
              Certificate of Completion
            </div>

            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: 26, color: "#fff", textTransform: "uppercase",
              letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: 10,
            }}>
              Certified to Lead™
            </div>

            <div style={{
              fontFamily: "var(--font-body)", fontSize: 13.5,
              color: T.textDim, marginBottom: 24, lineHeight: 1.5,
            }}>
              Fuel Driver Trainer Certification<br/>
              Vanguard Business Consultants, LLC
            </div>

            <div style={{
              width: "60%", height: 1, margin: "0 auto 20px",
              background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
            }}/>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(200,168,75,0.1)",
              border: `1px solid rgba(200,168,75,0.3)`,
              borderRadius: "var(--radius-sm)",
              padding: "6px 16px",
            }}>
              <ShieldIcon size={14} color={T.gold}/>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 11, letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.gold,
              }}>
                Valid 3 Years · DOT Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 6 — PRICING
════════════════════════════════════════════════════════ */
function Pricing() {
  return (
    <section id="register" style={{ background: T.surface, padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Pricing & Registration
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 50px)", color: T.navy,
          }}>
            Secure Your Seat Before Prices Go Up
          </h2>
        </div>

        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <div style={{
            background: T.surfaceWhite,
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.border}`,
            borderTop: `5px solid ${T.orange}`,
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
          }}>
            {/* Price header */}
            <div style={{
              background: T.navy, padding: "36px 44px",
            }}>
              {/* Early bird banner */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: T.orange, borderRadius: "var(--radius-sm)",
                padding: "5px 14px", marginBottom: 20,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 11.5, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#fff",
                }}>
                  🔥 Early Bird Rate — Save $100
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 72, color: "#fff", lineHeight: 1,
                  }}>
                    $895
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: T.textDim, marginTop: 4,
                  }}>
                    Until {EARLY_BIRD_DATE}
                  </div>
                </div>
                <div style={{ paddingBottom: 8 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 28, color: "rgba(255,255,255,0.3)",
                    textDecoration: "line-through",
                  }}>
                    $995
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 12,
                    color: "rgba(255,255,255,0.3)",
                  }}>
                    Standard Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Included items */}
            <div style={{ padding: "28px 44px" }}>
              <p style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase",
                color: T.textMuted, marginBottom: 18,
              }}>
                Everything included in your registration:
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Full-day live workshop at MetroTech, Oklahoma City",
                  "Printed Certified to Lead™ Handbook & evaluation checklists",
                  "Case studies and real-world tabletop drilling scenarios",
                  "Online certification exam (take after the workshop)",
                  "Official Certificate of Completion — 3-year certification",
                  "Lunch and all materials included",
                ].map(item => (
                  <li key={item} style={{ display: "flex", gap: 10 }}>
                    <span style={{ marginTop: 2, flexShrink: 0 }}>
                      <CheckIcon size={14} color={T.orange}/>
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

            {/* CTA */}
            <div style={{ padding: "0 44px 40px" }}>
              {/*
                ── REGISTRATION LINK ───────────────────────────────
                Replace href="#" with your registration / payment URL:
                href="https://buy.stripe.com/your-workshop-link"
                ────────────────────────────────────────────────────
              */}
              <a href="#"
                className="btn btn--orange btn--lg btn--full btn--pulse"
                style={{ fontSize: 18, marginBottom: 12 }}>
                <LockIcon size={16} color="#fff"/>
                Register Now at Early Bird Rate — $895
              </a>
              <p style={{
                textAlign: "center", fontFamily: "var(--font-body)",
                fontSize: 12.5, color: T.textMuted,
              }}>
                Price includes all materials, lunch, and certification.
                Group rates available for 3+ registrants —&nbsp;
                <a href="/contact" style={{ color: T.orange }}>contact us</a>.
              </p>
            </div>
          </div>

          {/* Countdown below card */}
          <div style={{ marginTop: 24 }}>
            <CountdownTimer/>
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
      quote:    "The tabletop drills and case studies were better than anything I've seen in my 20 years in the field.",
      name:     "Larry M.",
      role:     "Lead Trainer, Texas",
      initials: "LM",
    },
    {
      quote:    "Finally a training that actually shows you how to teach — not just what to say. I feel confident now to train anyone.",
      name:     "Angela D.",
      role:     "CDL Fuel Driver, Missouri",
      initials: "AD",
    },
  ];

  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="text-label text-gold" style={{ marginBottom: 12 }}>
            What Attendees Are Saying
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(26px, 3vw, 42px)", color: T.navy,
          }}>
            Real Results from Real Professionals
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
              borderLeft: `4px solid ${T.gold}`,
              padding: "36px 36px 32px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 12, right: 20, opacity: 0.1 }}>
                <QuoteIcon size={56} color={T.gold}/>
              </div>
              <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} color={T.gold}/>)}
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
   SECTION 8 — FAQ
════════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "Is this workshop for me if I'm a new driver?",
    a: "This workshop is designed for experienced drivers and aspiring trainers. If you're new to fuel hauling, check out our Fuel Hauling Made Easy workbook for drivers first — it's the perfect foundation before taking this step.",
  },
  {
    q: "What if I need to cancel?",
    a: CANCELLATION_POLICY,
  },
  {
    q: "Do you offer group rates?",
    a: "Yes — please contact us for custom invoicing for groups of 3 or more. We make it easy to register your whole team.",
  },
  {
    q: "What do I need to bring on the day?",
    a: "Just yourself and a willingness to learn. All materials including the handbook, checklists, and lunch are provided as part of your registration.",
  },
  {
    q: "When will I receive my certificate?",
    a: "You'll complete the online certification exam after the workshop at your own pace. Once you pass, your Official Certificate of Completion will be issued digitally and by mail.",
  },
  {
    q: "Is the certification accepted by my employer or insurer?",
    a: "The certification meets DOT 49 CFR §172.704 hazmat trainer requirements and is recognized by most major U.S. fuel transport insurance carriers. We recommend confirming with your specific employer or insurer.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ background: T.surface, padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="text-label text-orange" style={{ marginBottom: 12 }}>
            Frequently Asked Questions
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(28px, 3.5vw, 48px)", color: T.navy,
          }}>
            Got Questions? We've Got Answers.
          </h2>
        </div>

        <div style={{
          maxWidth: 760, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: T.surfaceWhite,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${open === i ? T.orange : T.border}`,
              overflow: "hidden",
              transition: "border-color var(--ease-fast)",
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left",
                  padding: "20px 24px",
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: 16,
                  background: "none", border: "none", cursor: "pointer",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 17, color: T.navy,
                  textTransform: "uppercase", letterSpacing: "0.02em",
                  lineHeight: 1.3,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  flexShrink: 0,
                  transition: "transform 220ms ease",
                  transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-flex",
                  color: open === i ? T.orange : T.textMuted,
                }}>
                  <ChevronDown size={20}/>
                </span>
              </button>

              {open === i && (
                <div style={{
                  padding: "0 24px 22px",
                  borderTop: `1px solid ${T.border}`,
                }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 15.5,
                    color: T.textMuted, lineHeight: 1.75,
                    paddingTop: 16,
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center", marginTop: 32,
          fontFamily: "var(--font-body)", fontSize: 14.5,
          color: T.textMuted,
        }}>
          Still have questions?{" "}
          <a href="/contact" style={{
            color: T.orange,
            borderBottom: `1px solid rgba(232,97,10,0.35)`,
            transition: "border-color var(--ease-fast)",
          }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = T.orange}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = "rgba(232,97,10,0.35)"}>
            Contact us directly
          </a>{" "}and we'll get back to you quickly.
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 9 — FINAL CTA (repeated)
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
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}/>

      <div className="container" style={{
        position: "relative", zIndex: 1, textAlign: "center",
      }}>
        <p className="text-label text-gold" style={{ marginBottom: 16 }}>
          Don't Miss Your Spot
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(32px, 4.5vw, 62px)", color: "#fff",
          textTransform: "uppercase", lineHeight: 1.05, marginBottom: 20,
        }}>
          20 Seats. One Day.<br/>
          <span style={{ color: T.orange }}>A Career-Changing Certification.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 17,
          color: T.textDim, lineHeight: 1.7,
          maxWidth: 500, margin: "0 auto 32px",
        }}>
          The early bird rate of <strong style={{ color: "#fff" }}>$895</strong> won't
          last. Register now before seats fill and prices go up to $995.
        </p>

        <div style={{ maxWidth: 480, margin: "0 auto 24px" }}>
          <CountdownTimer/>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {/*
            Replace href="#" with your registration URL when ready.
          */}
          <a href="#" className="btn btn--orange btn--lg btn--pulse">
            <LockIcon size={15} color="#fff"/>
            Register Now at Early Bird Rate — $895
          </a>
          <a href="/contact" className="btn btn--lg btn--outline-white">
            Questions? Contact Us
          </a>
        </div>

        <p style={{
          marginTop: 20, fontFamily: "var(--font-body)", fontSize: 13,
          color: "rgba(255,255,255,0.28)",
        }}>
          Limited to 20 participants · MetroTech, Oklahoma City ·{" "}
          {WORKSHOP_DATE} · 8:00 AM – 5:00 PM
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════════ */
export default function ForTrainersPage() {
  return (
    <main>
      <Hero/>
      <ValueProps/>
      <WhoShouldAttend/>
      <WhatsIncluded/>
      <CertDetails/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>

      {/* Page-scoped responsive layout — no tokens */}
      <style jsx>{`
        .value-grid        { grid-template-columns: 1fr 1fr; }
        .who-grid          { grid-template-columns: 1fr 1fr; }
        .included-grid     { grid-template-columns: repeat(3,1fr); }
        .cert-grid         { grid-template-columns: 1fr 1fr; }
        .testimonials-grid { grid-template-columns: 1fr 1fr; }

        @media (max-width: 900px) {
          .value-grid    { grid-template-columns: 1fr; }
          .value-grid > div:nth-child(5) { grid-column: 1; max-width: 100%; }
          .who-grid      { grid-template-columns: 1fr; }
          .included-grid { grid-template-columns: 1fr 1fr; }
          .cert-grid     { grid-template-columns: 1fr; }
          .included-grid > div:nth-child(4),
          .included-grid > div:nth-child(5) { grid-column: auto; }
        }
        @media (max-width: 600px) {
          .included-grid     { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}