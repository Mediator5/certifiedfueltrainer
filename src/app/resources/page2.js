/**
 * page.jsx  —  /src/app/resources/page.jsx
 *
 * Page 4: Resources / Blog — Foundation for Authority
 *
 * Sections:
 *   1. Hero
 *   2. Featured Blog Posts     (2 initial posts from brief)
 *   3. Free Downloads          (2 lead magnet PDFs)
 *   4. Newsletter Sign-Up
 *   5. CTA Band                (drives to workbook / workshop)
 *
 * No <Header/> or <Footer/> — handled by /src/app/layout.jsx
 * Styles: globals.css + @/lib/tokens — no tokens defined here.
 *
 * ── CONTENT INSTRUCTIONS ─────────────────────────────────────
 *  Blog posts: Add new entries to the BLOG_POSTS array below.
 *  Downloads:  Add new entries to the DOWNLOADS array below.
 *  To turn blog posts into real routed pages, move each post's
 *  content to /src/app/resources/[slug]/page.jsx and update
 *  the href fields to match.
 * ─────────────────────────────────────────────────────────────
 */

"use client";

import { useState } from "react";
import T from "@/lib/tokens";

/* ════════════════════════════════════════════════════════
   BLOG POST DATA
   Add new posts here — the page renders them automatically.
════════════════════════════════════════════════════════ */
const BLOG_POSTS = [
  {
    slug:      "what-makes-a-great-fuel-trainer",
    tag:       "For Trainers",
    tagColor:  T.gold,
    date:      "June 2025",
    readTime:  "6 min read",
    title:     "What Makes a Great Fuel Trainer? 7 Habits from the New Handbook",
    excerpt:   "Being a great fuel trainer isn't just about knowing the procedures — it's about how you transfer that knowledge under pressure. Based on page 2 of the Certified to Lead™ Handbook, here are the seven habits that separate good trainers from great ones.",
    body: [
      {
        heading: "1. They Set the Standard Before the First Load",
        text: "Great trainers don't wait for a mistake to establish expectations. On day one, they walk the driver through every step — not because the driver can't figure it out, but because clarity upfront prevents costly assumptions later. The handbook calls this the Pre-Load Briefing Protocol, and it starts before the engine turns over.",
      },
      {
        heading: "2. They Ask Questions Instead of Giving Answers",
        text: "A trainer who spoon-feeds every answer creates a driver who can't think independently. The most effective trainers ask: 'What do you think comes next?' or 'Walk me through what you'd do here.' This builds retention and surfaces gaps you didn't know existed.",
      },
      {
        heading: "3. They Document Everything",
        text: "Verbal feedback disappears. Great trainers use the Driver Readiness Form to record observations, flag improvement areas, and track progress over time. When it's time to make a go/no-go call, the documentation makes the decision defensible.",
      },
      {
        heading: "4. They Separate the Person from the Performance",
        text: "Feedback on a procedure is not personal. The best trainers communicate this clearly and consistently: 'I'm not correcting you — I'm correcting the process.' This creates a culture where drivers feel safe asking questions and reporting issues.",
      },
      {
        heading: "5. They Run the Drills No One Wants to Run",
        text: "Spill drills. Fire response walkthroughs. Tampering scenarios. Great trainers don't skip the uncomfortable exercises because those are the exact situations their drivers will face alone on a dark highway. The handbook includes a full set of tabletop drill scenarios for each incident type.",
      },
      {
        heading: "6. They Know Their Own Gaps",
        text: "The best trainers are perpetual learners. They attend recertification. They stay current on DOT changes. They read incident reports from other carriers. They understand that what they don't know can hurt someone else.",
      },
      {
        heading: "7. They Make It Safe to Ask 'I Don't Know'",
        text: "A driver who won't admit uncertainty is a liability on the road. Great trainers model intellectual honesty — they say 'I'm not sure, let's look it up' when they need to. This gives drivers permission to do the same, which is the safest culture you can build.",
      },
    ],
    cta: {
      text: "These habits are taught in-depth at the Certified to Lead™ Workshop.",
      btnLabel: "Explore the Workshop",
      href: "/certified-to-lead-workshop",
    },
    relatedDownload: "trainer-excellence-checklist",
  },
  {
    slug:      "fuel-haulers-guide-to-preventing-cross-dumps",
    tag:       "For Drivers",
    tagColor:  T.orange,
    date:      "June 2025",
    readTime:  "8 min read",
    title:     "The Fuel Hauler's Guide to Preventing Cross-Dumps [Checklist]",
    excerpt:   "Cross-contamination is one of the most expensive and career-ending mistakes in fuel transport. Based on Chapter 9 of Fuel Hauling Made Easy, here's how to build the habits and checklists that keep it from ever happening on your runs.",
    body: [
      {
        heading: "What Is a Cross-Dump — and Why It Matters",
        text: "A cross-dump happens when fuel is delivered to the wrong tank, wrong location, or mixed with an incompatible product. The costs are severe: environmental cleanup, customer loss, regulatory fines, and termination. Chapter 9 of the workbook documents real case studies that show just how quickly a single missed step turns into a career-defining event.",
      },
      {
        heading: "The #1 Cause: Rushing the Pre-Drop Verification",
        text: "Most cross-dumps don't happen because drivers are careless — they happen because drivers are rushed. A busy terminal, a tight schedule, and a moment of assumption ('I've done this drop a hundred times') is all it takes. The fix is a non-negotiable Pre-Drop Verification habit that takes less than 90 seconds.",
      },
      {
        heading: "The 5-Point Pre-Drop Verification (from Chapter 9)",
        text: "Before connecting any hose: (1) Confirm the delivery manifest matches the tank label. (2) Read the tank gauge — does the level make sense for your load? (3) Check the product type on the riser cap. (4) Confirm with the site contact if anything looks off. (5) Document your pre-drop check on the drop site log. This process is formalized as Appendix D in the workbook.",
      },
      {
        heading: "Building the Habit: The Terminal Mindset",
        text: "The workbook's Pro Tip on Day 2 reads: 'Make it a habit to double-check everything at the first terminal of the day. If you start focused, you'll stay sharp all shift.' Cross-dump prevention isn't a one-time checklist — it's a mindset that gets trained in during the first 10 days on the job.",
      },
      {
        heading: "What to Do If You Suspect a Cross-Dump Has Occurred",
        text: "Stop the drop immediately. Do not attempt to pump product back. Notify your dispatcher and the site contact. Document the time, tank, product, and amount delivered. Your company's spill response protocol takes over from here. Chapter 9 includes a full incident response flowchart you can laminate and keep in the cab.",
      },
      {
        heading: "Download the Free Checklist",
        text: "The Fuel Drop Site Checklist from Appendix D is available as a free PDF download below. Print it, laminate it, and use it on every drop until the habit is automatic.",
      },
    ],
    cta: {
      text: "Get the complete chapter — and the full 10-day curriculum — in the workbook.",
      btnLabel: "Get the Workbook — $79",
      href: "/fuel-hauling-made-easy#buy",
    },
    relatedDownload: "fuel-drop-site-checklist",
  },
];

/* ════════════════════════════════════════════════════════
   FREE DOWNLOADS DATA
   Add new downloads here — the section renders automatically.
════════════════════════════════════════════════════════ */
const DOWNLOADS = [
  {
    id:          "trainer-excellence-checklist",
    tag:         "For Trainers",
    tagColor:    T.gold,
    title:       "The Trainer Excellence Checklist",
    description: "The seven habits of great fuel trainers, formatted as a daily self-assessment checklist. Pull from the Certified to Lead™ Handbook.",
    bullets: [
      "Pre-Load Briefing Protocol",
      "Coaching vs. correcting framework",
      "Driver Readiness Form quick-reference",
      "Post-shift debrief checklist",
    ],
    file:        "/downloads/trainer-excellence-checklist.pdf", // update when file is ready
    cta:         "Download Free PDF",
  },
  {
    id:          "fuel-drop-site-checklist",
    tag:         "For Drivers",
    tagColor:    T.orange,
    title:       "Fuel Drop Site Checklist",
    description: "The complete pre-drop verification checklist from Appendix D of the Fuel Hauling Made Easy workbook. Print it and keep one in every cab.",
    bullets: [
      "5-Point Pre-Drop Verification",
      "Manifest vs. tank label confirmation",
      "Product type & riser cap check",
      "Drop site log template",
    ],
    file:        "/downloads/fuel-drop-site-checklist.pdf", // update when file is ready
    cta:         "Download Free PDF",
  },
];

/* ════════════════════════════════════════════════════════
   ACTIVE CATEGORIES FOR FILTER
════════════════════════════════════════════════════════ */
const CATEGORIES = ["All", "For Drivers", "For Trainers"];

/* ════════════════════════════════════════════════════════
   ICONS
════════════════════════════════════════════════════════ */
const ArrowRight = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const DownloadIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const ClockIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CalendarIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const CheckIcon = ({ size = 14, color = "currentColor" }) => (
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
const MailIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const FileIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

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
        position: "absolute", top: -80, left: "40%", zIndex: 0,
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 70%)",
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
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: T.gold }}>
            Resources
          </span>
        </div>

        <div style={{ maxWidth: 700 }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(200,168,75,0.12)",
            border: `1px solid rgba(200,168,75,0.3)`,
            borderRadius: "var(--radius-sm)",
            padding: "6px 14px", marginBottom: 22,
          }}>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 11.5, letterSpacing: "0.16em",
              textTransform: "uppercase", color: T.gold,
            }}>
              Free Training Resources
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 66px)",
            color: "#fff", lineHeight: 1.0,
            textTransform: "uppercase", letterSpacing: "0.01em",
            marginBottom: 20,
          }}>
            Articles, Checklists &<br/>
            <span style={{ color: T.gold }}>Free Downloads</span><br/>
            for Fuel Professionals.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75, maxWidth: 560,
          }}>
            Field-tested knowledge, practical checklists, and industry insights —
            all free. Sign up below to get new resources delivered to your inbox.
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
   BLOG POST CARD (used in listing)
════════════════════════════════════════════════════════ */
function BlogCard({ post, featured = false }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article style={{
      background: T.surfaceWhite,
      borderRadius: "var(--radius-md)",
      border: `1px solid ${T.border}`,
      borderTop: `4px solid ${post.tagColor}`,
      overflow: "hidden",
      display: "flex", flexDirection: "column",
      boxShadow: featured ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "transform var(--ease-base), box-shadow var(--ease-base)",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = featured ? "var(--shadow-md)" : "var(--shadow-sm)";
      }}
    >
      {/* Card header */}
      <div style={{ padding: "32px 32px 24px" }}>
        {/* Meta row */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 12,
          marginBottom: 16, flexWrap: "wrap",
        }}>
          <span style={{
            display: "inline-block",
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
            color: post.tagColor,
            background: `${post.tagColor}15`,
            border: `1px solid ${post.tagColor}40`,
            borderRadius: "var(--radius-sm)",
            padding: "4px 10px",
          }}>
            {post.tag}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{
              display: "flex", alignItems: "center", gap: 5,
              fontFamily: "var(--font-body)", fontSize: 12.5, color: T.textMuted,
            }}>
              <CalendarIcon size={12} color={T.textMuted}/>
              {post.date}
            </span>
            <span style={{
              display: "flex", alignItems: "center", gap: 5,
              fontFamily: "var(--font-body)", fontSize: 12.5, color: T.textMuted,
            }}>
              <ClockIcon size={12} color={T.textMuted}/>
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: featured ? 26 : 22,
          color: T.navy, textTransform: "uppercase",
          letterSpacing: "0.02em", lineHeight: 1.2,
          marginBottom: 12,
        }}>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 15,
          color: T.textMuted, lineHeight: 1.75,
        }}>
          {post.excerpt}
        </p>
      </div>

      {/* Expandable full body */}
      {expanded && (
        <div style={{
          padding: "0 32px",
          borderTop: `1px solid ${T.border}`,
        }}>
          {post.body.map((section, i) => (
            <div key={i} style={{ padding: "24px 0", borderBottom: i < post.body.length - 1 ? `1px solid ${T.border}` : "none" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 17, color: T.navy, textTransform: "uppercase",
                letterSpacing: "0.03em", marginBottom: 10,
              }}>
                {section.heading}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15,
                color: T.text, lineHeight: 1.8,
              }}>
                {section.text}
              </p>
            </div>
          ))}

          {/* In-article CTA */}
          <div style={{
            margin: "24px 0",
            padding: "24px 28px",
            background: T.navy,
            borderRadius: "var(--radius-md)",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: 20, flexWrap: "wrap",
          }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14.5,
              color: T.textDim, lineHeight: 1.6, flex: 1,
            }}>
              {post.cta.text}
            </p>
            <a href={post.cta.href}
              className="btn btn--orange"
              style={{ flexShrink: 0 }}>
              {post.cta.btnLabel}
              <ArrowRight size={14} color="#fff"/>
            </a>
          </div>

          {/* Related download nudge */}
          {post.relatedDownload && (
            <div style={{
              marginBottom: 24, padding: "16px 20px",
              background: `rgba(200,168,75,0.06)`,
              border: `1px solid rgba(200,168,75,0.2)`,
              borderLeft: `3px solid ${T.gold}`,
              borderRadius: "var(--radius-sm)",
              display: "flex", alignItems: "center",
              justifyContent: "space-between", gap: 16, flexWrap: "wrap",
            }}>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 14, color: T.textMuted,
              }}>
                📎 Related download:{" "}
                <strong style={{ color: T.text }}>
                  {DOWNLOADS.find(d => d.id === post.relatedDownload)?.title}
                </strong>
              </span>
              <a href="#downloads" style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
                color: T.gold,
                display: "flex", alignItems: "center", gap: 5,
              }}>
                <DownloadIcon size={12} color={T.gold}/>
                Get Free PDF
              </a>
            </div>
          )}
        </div>
      )}

      {/* Card footer — read more toggle */}
      <div style={{
        padding: "20px 32px",
        borderTop: `1px solid ${T.border}`,
        marginTop: "auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
            color: post.tagColor, background: "none", border: "none",
            cursor: "pointer", transition: "gap var(--ease-fast)",
          }}
          onMouseEnter={e => e.currentTarget.style.gap = "12px"}
          onMouseLeave={e => e.currentTarget.style.gap = "8px"}
        >
          {expanded ? "Show Less" : "Read Full Article"}
          <span style={{
            transition: "transform 200ms ease",
            transform: expanded ? "rotate(180deg)" : "rotate(-90deg)",
            display: "inline-flex",
          }}>
            <ChevronDown size={14} color={post.tagColor}/>
          </span>
        </button>

        <span style={{
          fontFamily: "var(--font-body)", fontSize: 12.5,
          color: T.textMuted,
        }}>
          {post.readTime}
        </span>
      </div>
    </article>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — BLOG POSTS
════════════════════════════════════════════════════════ */
function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.tag === activeCategory);

  return (
    <section className="section section--surface" id="articles">
      <div className="container">

        {/* Section header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", gap: 20,
          marginBottom: 36, flexWrap: "wrap",
        }}>
          <div>
            <p className="text-label text-orange" style={{ marginBottom: 10 }}>
              Articles & Guides
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(26px, 3.5vw, 44px)", color: T.navy,
            }}>
              Field Knowledge, Written Down.
            </h2>
          </div>

          {/* Category filter */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase",
                  border: `1px solid ${activeCategory === cat ? T.orange : T.border}`,
                  background: activeCategory === cat ? T.orange : "transparent",
                  color: activeCategory === cat ? "#fff" : T.textMuted,
                  cursor: "pointer",
                  transition: "all var(--ease-fast)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Post grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
          }} className="blog-grid">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} featured={i === 0}/>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: "center", padding: "64px 0",
            fontFamily: "var(--font-body)", color: T.textMuted, fontSize: 15,
          }}>
            No posts in this category yet — check back soon.
          </div>
        )}

        {/* Coming soon note */}
        <div style={{
          marginTop: 36, padding: "20px 28px",
          background: T.surfaceWhite,
          border: `1px dashed ${T.border}`,
          borderRadius: "var(--radius-md)",
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ fontSize: 20 }}>✍️</span>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14,
            color: T.textMuted, lineHeight: 1.6,
          }}>
            <strong style={{ color: T.text }}>More articles coming soon.</strong>{" "}
            Sign up for the newsletter below to get notified when new posts,
            checklists, and training resources are published.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — FREE DOWNLOADS
════════════════════════════════════════════════════════ */
function Downloads() {
  return (
    <section id="downloads" style={{ background: T.navyMid, padding: "88px 0" }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="text-label text-gold" style={{ marginBottom: 12 }}>
            Free Downloads
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(26px, 3.5vw, 46px)", color: "#fff",
            marginBottom: 14,
          }}>
            Free Tools You Can Use Today
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15.5,
            color: T.textDim, maxWidth: 500, margin: "0 auto", lineHeight: 1.7,
          }}>
            Print them. Laminate them. Put them in your cab or training binder.
            No signup required.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="downloads-grid">
          {DOWNLOADS.map(dl => (
            <div key={dl.id} style={{
              background: T.navyLight,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${T.borderDark}`,
              borderTop: `4px solid ${dl.tagColor}`,
              padding: "36px 32px",
              display: "flex", flexDirection: "column", gap: 0,
              transition: "transform var(--ease-base), box-shadow var(--ease-base)",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon + tag row */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", marginBottom: 20,
              }}>
                <div style={{
                  width: 52, height: 52,
                  background: `${dl.tagColor}15`,
                  border: `1px solid ${dl.tagColor}40`,
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <FileIcon size={26} color={dl.tagColor}/>
                </div>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                  color: dl.tagColor,
                  background: `${dl.tagColor}12`,
                  border: `1px solid ${dl.tagColor}35`,
                  borderRadius: "var(--radius-sm)",
                  padding: "4px 10px",
                }}>
                  {dl.tag}
                </span>
              </div>

              {/* Title + description */}
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 22, color: "#fff", textTransform: "uppercase",
                letterSpacing: "0.03em", lineHeight: 1.15, marginBottom: 12,
              }}>
                {dl.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5,
                color: T.textDim, lineHeight: 1.7, marginBottom: 20,
              }}>
                {dl.description}
              </p>

              {/* Bullet list */}
              <ul style={{
                listStyle: "none", display: "flex", flexDirection: "column",
                gap: 9, marginBottom: 28, flex: 1,
              }}>
                {dl.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                    <span style={{ marginTop: 2, flexShrink: 0 }}>
                      <CheckIcon size={13} color={dl.tagColor}/>
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 14,
                      color: T.textDim, lineHeight: 1.5,
                    }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Free badge + download button */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 12,
                paddingTop: 20, borderTop: `1px solid ${T.borderDark}`,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 28, color: dl.tagColor, lineHeight: 1,
                }}>
                  FREE
                </span>
                {/*
                  Update dl.file paths to real PDF URLs when files are ready.
                  E.g. /downloads/trainer-excellence-checklist.pdf
                */}
                <a
                  href={dl.file}
                  download
                  className="btn btn--lg"
                  style={{
                    background: dl.tagColor,
                    color: dl.tagColor === T.gold ? T.navy : "#fff",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <DownloadIcon size={15} color={dl.tagColor === T.gold ? T.navy : "#fff"}/>
                  {dl.cta}
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
   SECTION 4 — NEWSLETTER SIGN-UP
════════════════════════════════════════════════════════ */
function Newsletter() {
  const [name, setName]           = useState("");
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);

    /*
      ── WIRE UP YOUR EMAIL SERVICE HERE ───────────────────────
      Replace the timeout with your actual API call:

      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tag: "resources-newsletter" }),
      });
      ──────────────────────────────────────────────────────────
    */
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="newsletter" style={{ background: T.surface, padding: "88px 0" }}>
      <div className="container">
        <div style={{
          maxWidth: 780, margin: "0 auto",
          background: T.navy,
          borderRadius: "var(--radius-md)",
          border: `1px solid rgba(200,168,75,0.2)`,
          borderLeft: `5px solid ${T.gold}`,
          overflow: "hidden",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.1fr",
            gap: 0,
          }} className="newsletter-grid">

            {/* Left — copy */}
            <div style={{
              padding: "48px 40px",
              borderRight: `1px solid ${T.borderDark}`,
            }}>
              <div style={{
                width: 48, height: 48,
                background: "rgba(200,168,75,0.12)",
                border: `1px solid rgba(200,168,75,0.3)`,
                borderRadius: "var(--radius-md)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <MailIcon size={22} color={T.gold}/>
              </div>

              <p className="text-label text-gold" style={{ marginBottom: 12 }}>
                Newsletter
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: "clamp(24px, 3vw, 36px)", color: "#fff",
                textTransform: "uppercase", lineHeight: 1.1, marginBottom: 16,
              }}>
                Stay Sharp.<br/>
                <span style={{ color: T.gold }}>Stay Certified.</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15,
                color: T.textDim, lineHeight: 1.75, marginBottom: 24,
              }}>
                Join fuel transport professionals who get our free resources,
                training tips, DOT update summaries, and early-bird workshop
                notifications delivered to their inbox.
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "New articles & field guides",
                  "Free checklist downloads",
                  "Workshop early-bird pricing",
                  "DOT compliance updates",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <CheckIcon size={13} color={T.gold}/>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 14,
                      color: T.textDim,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div style={{ padding: "48px 40px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", paddingTop: 40 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "rgba(34,197,94,0.12)",
                    border: "2px solid rgba(34,197,94,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <CheckIcon size={26} color="#22c55e"/>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: 24, color: "#fff", textTransform: "uppercase",
                    marginBottom: 10,
                  }}>
                    You're In!
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 15,
                    color: T.textDim, lineHeight: 1.65,
                  }}>
                    Welcome to the list,{" "}
                    <strong style={{ color: "#fff" }}>{name}</strong>.
                    Check your inbox — your free Fuel Drop Site Checklist is on its way.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 18, color: "#fff", textTransform: "uppercase",
                    letterSpacing: "0.04em", marginBottom: 24,
                  }}>
                    Sign Up — It's Free
                  </p>

                  {[
                    { label: "First Name", type: "text",  value: name,  setter: setName,  placeholder: "Your name" },
                    { label: "Email Address", type: "email", value: email, setter: setEmail, placeholder: "your@email.com" },
                  ].map(field => (
                    <div key={field.label} style={{ marginBottom: 14 }}>
                      <label style={{
                        display: "block", fontFamily: "var(--font-body)",
                        fontSize: 12.5, color: T.textDim, marginBottom: 6,
                        letterSpacing: "0.04em",
                      }}>
                        {field.label} *
                      </label>
                      <input
                        type={field.type}
                        value={field.value}
                        onChange={e => field.setter(e.target.value)}
                        placeholder={field.placeholder}
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
                        onBlur={e  => e.target.style.borderColor = T.borderDark}
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn--gold btn--full btn--lg"
                    style={{ marginTop: 8, opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Subscribing…" : "Sign Up for Free Resources"}
                  </button>

                  <p style={{
                    marginTop: 12, textAlign: "center",
                    fontFamily: "var(--font-body)", fontSize: 12,
                    color: "rgba(255,255,255,0.28)",
                  }}>
                    No spam. Unsubscribe any time.
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
   SECTION 5 — CTA BAND
════════════════════════════════════════════════════════ */
function CTABand() {
  const options = [
    {
      eyebrow: "For Drivers",
      title:   "Get the Complete Workbook",
      body:    "The full 10-day curriculum, procedures, and checklists in one print-ready PDF.",
      price:   "$79",
      cta:     "Buy the Workbook",
      href:    "/fuel-hauling-made-easy#buy",
      accent:  T.orange,
      dark:    false,
    },
    {
      eyebrow: "For Trainers",
      title:   "Earn Your Certification",
      body:    "One-day workshop. DOT-compliant. Insurance-recognized. 20 seats only.",
      price:   "$895",
      cta:     "Claim Your Spot",
      href:    "/certified-to-lead-workshop#register",
      accent:  T.gold,
      dark:    true,
    },
  ];

  return (
    <section style={{ background: T.navyMid, padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(26px, 3.5vw, 44px)", color: "#fff",
          }}>
            Ready to Go Beyond the Free Resources?
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="cta-grid">
          {options.map(opt => (
            <div key={opt.title} style={{
              background: opt.dark ? T.navy : T.surfaceWhite,
              borderRadius: "var(--radius-md)",
              border: opt.dark ? `1px solid ${T.borderDark}` : `1px solid ${T.border}`,
              borderTop: `4px solid ${opt.accent}`,
              padding: "36px 32px",
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              gap: 20, flexWrap: "wrap",
            }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: opt.accent,
                }}>
                  {opt.eyebrow}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 22, color: opt.dark ? "#fff" : T.navy,
                  textTransform: "uppercase", marginTop: 6, marginBottom: 8,
                }}>
                  {opt.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5,
                  color: opt.dark ? T.textDim : T.textMuted, lineHeight: 1.6,
                }}>
                  {opt.body}
                </p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 38, color: opt.accent, lineHeight: 1, marginBottom: 12,
                }}>
                  {opt.price}
                </div>
                <a href={opt.href}
                  className="btn btn--lg"
                  style={{
                    background: opt.accent,
                    color: opt.accent === T.gold ? T.navy : "#fff",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {opt.cta}
                  <ArrowRight size={14} color={opt.accent === T.gold ? T.navy : "#fff"}/>
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
   PAGE EXPORT
════════════════════════════════════════════════════════ */
export default function ResourcesPage() {
  return (
    <main>
      <Hero/>
      <BlogSection/>
      <Downloads/>
      <Newsletter/>
      <CTABand/>

      {/* Page-scoped responsive layout — no tokens */}
      <style jsx>{`
        .blog-grid       { grid-template-columns: 1fr 1fr; }
        .downloads-grid  { grid-template-columns: 1fr 1fr; }
        .newsletter-grid { grid-template-columns: 1fr 1.1fr; }
        .cta-grid        { grid-template-columns: 1fr 1fr; }

        @media (max-width: 820px) {
          .blog-grid       { grid-template-columns: 1fr; }
          .newsletter-grid { grid-template-columns: 1fr; }
          .cta-grid        { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .downloads-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}