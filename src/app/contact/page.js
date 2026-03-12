/**
 * page.jsx  —  /src/app/contact/page.jsx
 *
 * Contact Page
 *
 * Sections:
 *   1. Hero
 *   2. Contact Form + Sidebar  (split layout)
 *   3. Quick-Links Band        (drives back to key pages)
 *
 * No <Header/> or <Footer/> — handled by /src/app/layout.jsx
 * Styles: globals.css + @/lib/tokens — no tokens defined here.
 *
 * ── SWAP INSTRUCTIONS ────────────────────────────────────────
 *  Form API:  Wire handleSubmit to your preferred service —
 *             Resend, SendGrid, Formspree, or Next.js API route.
 *             See comment inside handleSubmit.
 * ─────────────────────────────────────────────────────────────
 */

"use client";

import { useState } from "react";
import T from "@/lib/tokens";

/* ════════════════════════════════════════════════════════
   CONTACT INFO — update these constants in one place
════════════════════════════════════════════════════════ */
const CONTACT_INFO = {
  phone:   "+1 (800) 555-0199",
  email:   "info@fuelhaulingtraining.com",
  hours:   "Mon – Fri · 8:00 AM – 5:00 PM CST",
};

const ENQUIRY_TYPES = [
  "General Enquiry",
];

/* ════════════════════════════════════════════════════════
   ICONS
════════════════════════════════════════════════════════ */
const PhoneIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const ArrowRight = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const CheckIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ChevronDown = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
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

/* ════════════════════════════════════════════════════════
   REUSABLE: FORM INPUT
════════════════════════════════════════════════════════ */
function Field({ label, required, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{
        fontFamily: "var(--font-body)", fontSize: 13,
        color: error ? "#f87171" : T.textMuted,
        letterSpacing: "0.03em",
        display: "flex", alignItems: "center", gap: 4,
      }}>
        {label}
        {required && <span style={{ color: T.orange }}>*</span>}
      </label>
      {children}
      {error && (
        <span style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          color: "#f87171",
        }}>
          {error}
        </span>
      )}
    </div>
  );
}

const inputStyle = (focused, error) => ({
  width: "100%", padding: "12px 16px",
  background: T.surfaceWhite,
  border: `1.5px solid ${error ? "#f87171" : focused ? T.orange : T.border}`,
  borderRadius: "var(--radius-sm)",
  fontFamily: "var(--font-body)", fontSize: 15,
  color: T.text, outline: "none",
  transition: "border-color var(--ease-fast)",
});

/* ════════════════════════════════════════════════════════
   SECTION 1 — HERO
════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      background: T.navy, position: "relative",
      overflow: "hidden", padding: "80px 0 72px",
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
      {/* Glow */}
      <div style={{
        position: "absolute", top: -60, right: "25%", zIndex: 0,
        width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,97,10,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <a href="/" style={{
            fontFamily: "var(--font-body)", fontSize: 13, color: T.textDim,
            transition: "color var(--ease-fast)",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = T.textDim}>
            Home
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>/</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: T.orange }}>
            Contact
          </span>
        </div>

        <div style={{ maxWidth: 640 }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(232,97,10,0.13)",
            border: `1px solid rgba(232,97,10,0.35)`,
            borderRadius: "var(--radius-sm)",
            padding: "6px 14px", marginBottom: 22,
          }}>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 11.5, letterSpacing: "0.16em",
              textTransform: "uppercase", color: T.orange,
            }}>
              Get in Touch
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 66px)",
            color: "#fff", lineHeight: 1.0,
            textTransform: "uppercase", letterSpacing: "0.01em",
            marginBottom: 20,
          }}>
            We'd Love to<br/>
            <span style={{ color: T.orange }}>Hear From</span>{" "}
            <span style={{ color: T.gold }}>You.</span>
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75, maxWidth: 520,
          }}>
            Whether you have a question about the workbook, want to register
            for the workshop, or need group invoicing — fill out the form and
            we'll get back to you within one business day.
          </p>
        </div>
      </div>

      {/* Diagonal bottom edge */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0, zIndex: 2,
        height: 56, background: T.surface,
        clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
      }}/>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — CONTACT FORM + SIDEBAR
════════════════════════════════════════════════════════ */
function ContactSection() {
  /* ── Form state ── */
  const [form, setForm] = useState({
    firstName: "", lastName: "",
    email: "", phone: "",
    message: "",
  });
  const [focused, setFocused]     = useState({});
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const set = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim())  e.lastName  = "Last name is required.";
    if (!form.email.trim())     e.email     = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim())   e.message   = "Message is required.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);

    /*
      ── WIRE UP YOUR FORM HANDLER HERE ────────────────────────
      Option A — Next.js API route:
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

      Option B — Formspree:
        await fetch("https://formspree.io/f/YOUR_FORM_ID", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

      Option C — Resend / SendGrid via your API route.
      ──────────────────────────────────────────────────────────
    */
    await new Promise(r => setTimeout(r, 1000)); // remove when wired
    setLoading(false);
    setSubmitted(true);
  };

  const focusProps = (field) => ({
    onFocus: () => setFocused(p => ({ ...p, [field]: true })),
    onBlur:  () => setFocused(p => ({ ...p, [field]: false })),
  });

  /* ── Sidebar contact items ── */
  const contactItems = [
    {
      icon: <PhoneIcon size={20} color={T.orange}/>,
      label: "Phone",
      value: CONTACT_INFO.phone,
      href:  `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`,
    },
    {
      icon: <MailIcon size={20} color={T.orange}/>,
      label: "Email",
      value: CONTACT_INFO.email,
      href:  `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <ClockIcon size={20} color={T.orange}/>,
      label: "Office Hours",
      value: CONTACT_INFO.hours,
      href:  null,
    },
  ];

  return (
    <section style={{ background: T.surface, padding: "88px 0" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 48,
          alignItems: "start",
        }} className="contact-grid">

          {/* ── LEFT: FORM ── */}
          <div style={{
            background: T.surfaceWhite,
            borderRadius: "var(--radius-md)",
            border: `1px solid ${T.border}`,
            borderTop: `4px solid ${T.orange}`,
            padding: "44px 44px",
            boxShadow: "var(--shadow-md)",
          }}>
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "rgba(34,197,94,0.1)",
                  border: "2px solid rgba(34,197,94,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <CheckIcon size={32} color="#22c55e"/>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 32, color: T.navy, textTransform: "uppercase",
                  letterSpacing: "0.03em", marginBottom: 12,
                }}>
                  Message Sent!
                </h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 16,
                  color: T.textMuted, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 32px",
                }}>
                  Thanks, <strong style={{ color: T.text }}>{form.firstName}</strong>. We've
                  received your message and will get back to you within one business day.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="/fuel-hauling-made-easy" className="btn btn--orange">
                    View the Workbook
                    <ArrowRight size={14} color="#fff"/>
                  </a>
                  <a href="/certified-to-lead-workshop" className="btn btn--navy">
                    Workshop Details
                    <ArrowRight size={14} color="#fff"/>
                  </a>
                </div>
              </div>
            ) : (
              /* ── FORM ── */
              <>
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 28, color: T.navy, textTransform: "uppercase",
                    letterSpacing: "0.03em", marginBottom: 6,
                  }}>
                    Send Us a Message
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14.5,
                    color: T.textMuted, lineHeight: 1.6,
                  }}>
                    Fields marked with <span style={{ color: T.orange }}>*</span> are required.
                    We respond within one business day.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                    {/* Name row */}
                    <div style={{
                      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
                    }} className="name-grid">
                      <Field label="First Name" required error={errors.firstName}>
                        <input
                          type="text" value={form.firstName} onChange={set("firstName")}
                          placeholder="Jane"
                          style={inputStyle(focused.firstName, errors.firstName)}
                          {...focusProps("firstName")}
                        />
                      </Field>
                      <Field label="Last Name" required error={errors.lastName}>
                        <input
                          type="text" value={form.lastName} onChange={set("lastName")}
                          placeholder="Smith"
                          style={inputStyle(focused.lastName, errors.lastName)}
                          {...focusProps("lastName")}
                        />
                      </Field>
                    </div>

                    {/* Email + Phone row */}
                    <div style={{
                      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
                    }} className="contact-row-grid">
                      <Field label="Email Address" required error={errors.email}>
                        <input
                          type="email" value={form.email} onChange={set("email")}
                          placeholder="jane@example.com"
                          style={inputStyle(focused.email, errors.email)}
                          {...focusProps("email")}
                        />
                      </Field>
                      <Field label="Phone Number">
                        <input
                          type="tel" value={form.phone} onChange={set("phone")}
                          placeholder="+1 (555) 000-0000"
                          style={inputStyle(focused.phone, false)}
                          {...focusProps("phone")}
                        />
                      </Field>
                    </div>

                    {/* Enquiry type — hidden, always "General Enquiry" */}
                    <input type="hidden" value="General Enquiry"/>

                    {/* Message */}
                    <Field label="Message" required error={errors.message}>
                      <textarea
                        value={form.message} onChange={set("message")}
                        placeholder="Tell us how we can help…"
                        rows={5}
                        style={{
                          ...inputStyle(focused.message, errors.message),
                          resize: "vertical", minHeight: 130,
                          lineHeight: 1.65,
                        }}
                        {...focusProps("message")}
                      />
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn--orange btn--lg btn--full"
                      style={{ marginTop: 4, opacity: loading ? 0.7 : 1, fontSize: 16 }}
                    >
                      {loading ? "Sending…" : "Send Message"}
                      {!loading && <ArrowRight size={16} color="#fff"/>}
                    </button>

                    <p style={{
                      textAlign: "center", fontFamily: "var(--font-body)",
                      fontSize: 12.5, color: T.textMuted,
                    }}>
                      We respond within one business day. Your information is never shared.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* ── RIGHT: SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Contact details card */}
            <div style={{
              background: T.navy,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.borderDark}`,
              borderTop: `4px solid ${T.gold}`,
              overflow: "hidden",
            }}>
              <div style={{ padding: "28px 28px 8px" }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: T.gold, marginBottom: 20,
                }}>
                  Contact Details
                </p>
              </div>

              {contactItems.map((item, i) => (
                <div key={item.label} style={{
                  padding: "16px 28px",
                  borderTop: `1px solid ${T.borderDark}`,
                  display: "flex", alignItems: "flex-start", gap: 14,
                }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: "rgba(232,97,10,0.1)",
                    border: `1px solid rgba(232,97,10,0.2)`,
                    borderRadius: "var(--radius-sm)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                      color: T.textDim, marginBottom: 4,
                    }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontFamily: "var(--font-body)", fontSize: 14.5,
                        color: "#fff", lineHeight: 1.5,
                        borderBottom: `1px solid rgba(255,255,255,0.15)`,
                        transition: "border-color var(--ease-fast), color var(--ease-fast)",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = T.orange; e.currentTarget.style.borderBottomColor = T.orange; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)"; }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: 14.5,
                        color: "#fff", lineHeight: 1.55,
                        whiteSpace: "pre-line",
                      }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social icons */}
              <div style={{ padding: "20px 28px 28px", borderTop: `1px solid ${T.borderDark}` }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: T.textDim, marginBottom: 12,
                }}>
                  Follow Us
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { icon: <FbIcon size={15}/>, label: "Facebook", href: "https://facebook.com" },
                    { icon: <TwIcon size={15}/>, label: "Twitter",  href: "https://twitter.com" },
                    { icon: <LiIcon size={15}/>, label: "LinkedIn", href: "https://linkedin.com" },
                  ].map(s => (
                    <a key={s.label} href={s.href}
                      target="_blank" rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        width: 36, height: 36,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(255,255,255,0.06)",
                        border: `1px solid ${T.borderDark}`,
                        borderRadius: "var(--radius-sm)",
                        color: T.textDim,
                        transition: "all var(--ease-fast)",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.borderColor = T.orange; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = T.borderDark; e.currentTarget.style.color = T.textDim; }}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick-action cards */}
            {[
              {
                label:   "Workshop Registration",
                body:    "Ready to register for Certified to Lead™? Secure your early bird seat.",
                cta:     "Register Now — $895",
                href:    "/certified-to-lead-workshop#register",
                accent:  T.orange,
              },
            ].map(card => (
              <div key={card.label} style={{
                background: T.surfaceWhite,
                borderRadius: "var(--radius-md)",
                border: `1px solid ${T.border}`,
                borderLeft: `4px solid ${card.accent}`,
                padding: "22px 24px",
              }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase",
                  color: card.accent, marginBottom: 6,
                }}>
                  {card.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: T.textMuted, lineHeight: 1.6, marginBottom: 14,
                }}>
                  {card.body}
                </p>
                <a
                  href={card.href}
                  onClick={card.onClick}
                  className="btn btn--sm"
                  style={{
                    background: card.accent,
                    color: card.accent === T.gold ? T.navy : "#fff",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {card.cta}
                  <ArrowRight size={12} color={card.accent === T.gold ? T.navy : "#fff"}/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — QUICK LINKS BAND
════════════════════════════════════════════════════════ */
function QuickLinks() {
  const links = [
    {
      eyebrow: "For Drivers",
      title:   "Fuel Hauling Made Easy",
      body:    "The complete step-by-step workbook for fuel transport professionals.",
      cta:     "Learn More",
      href:    "/fuel-hauling-made-easy",
      accent:  T.orange,
    },
    {
      eyebrow: "For Trainers",
      title:   "Certified to Lead™ Workshop",
      body:    "One-day DOT-compliant certification. August 2026 · Oklahoma City.",
      cta:     "Explore Workshop",
      href:    "/certified-to-lead-workshop",
      accent:  T.gold,
    },
    {
      eyebrow: "Free Resources",
      title:   "Checklists & Articles",
      body:    "Free downloads, field guides, and training articles — no signup needed.",
      cta:     "Browse Resources",
      href:    "/resources",
      accent:  T.orange,
    },
  ];

  return (
    <section style={{ background: T.navyMid, padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(24px, 3vw, 40px)", color: "#fff",
          }}>
            Not Sure Where to Start?
          </h2>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
        }} className="quicklinks-grid">
          {links.map(link => (
            <a
              key={link.title}
              href={link.href}
              style={{
                display: "block",
                background: T.navyLight,
                borderRadius: "var(--radius-md)",
                border: `1px solid ${T.borderDark}`,
                borderTop: `3px solid ${link.accent}`,
                padding: "28px 28px",
                textDecoration: "none",
                transition: "transform var(--ease-base), box-shadow var(--ease-base), border-color var(--ease-base)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <p style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: link.accent, marginBottom: 8,
              }}>
                {link.eyebrow}
              </p>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 20, color: "#fff", textTransform: "uppercase",
                letterSpacing: "0.03em", lineHeight: 1.2, marginBottom: 10,
              }}>
                {link.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: T.textDim, lineHeight: 1.65, marginBottom: 18,
              }}>
                {link.body}
              </p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase",
                color: link.accent,
                transition: "gap var(--ease-fast)",
              }}>
                {link.cta}
                <ArrowRight size={13} color={link.accent}/>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <main>
      <Hero/>
      <ContactSection/>
      <QuickLinks/>

      {/* Page-scoped responsive layout — no tokens */}
      <style jsx>{`
        .contact-grid      { grid-template-columns: 1fr 380px; }
        .name-grid         { grid-template-columns: 1fr 1fr; }
        .contact-row-grid  { grid-template-columns: 1fr 1fr; }
        .quicklinks-grid   { grid-template-columns: repeat(3, 1fr); }

        @media (max-width: 960px) {
          .contact-grid    { grid-template-columns: 1fr; }
          .quicklinks-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .name-grid        { grid-template-columns: 1fr; }
          .contact-row-grid { grid-template-columns: 1fr; }
          .quicklinks-grid  { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}