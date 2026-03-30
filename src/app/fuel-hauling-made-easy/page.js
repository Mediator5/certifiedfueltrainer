/**
 * page.jsx  —  /src/app/fuel-hauling-made-easy/page.jsx
 * Mobile-responsive rewrite (v2).
 *
 * MOBILE FIXES
 * ─────────────────────────────────────────────
 *  Hero          — book cover SHOWS on mobile (was hidden); stacks below text
 *  GalleryStrip  — 3→1 col on mobile; aspect-ratio 16/9 (less tall)
 *  WhatsInside   — card padding tightened; headline uses clamp
 *  ProTip        — quote card padding scales via CSS class
 *  WhoIsThisFor  — floating badges repositioned (no viewport bleed);
 *                  2-col grid collapses to 1-col
 *  PricingBuy    — price header stacks on mobile
 *  LeadMagnet    — card padding scales; form already 1-col on mobile
 *  Testimonials  — 2→1 col on mobile
 *  All sections  — padding 88px→52px via responsive class
 * ─────────────────────────────────────────────
 * No Header/Footer — handled by layout.jsx
 */

"use client";
import { useState } from "react";
import T from "@/lib/tokens";

const IMAGES = {
  hero:             "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  bookCover:        "/Final Version - Fuel Hauling Made Easy - Front and Back Cover - JPG-1.jpg",
  driverAtTerminal: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  proTipBg:         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  gallery1:         "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=700&q=80",
  gallery2:         "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=700&q=80",
  gallery3:         "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
  avatarLarry:  null,
  avatarAngela: null,
};

// ── Icons ──────────────────────────────────────────────────────────────
const CheckIcon    = ({ size=16, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const ArrowRight   = ({ size=15, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const StarIcon     = ({ size=15, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const BookIcon     = ({ size=28, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>);
const ClipboardIcon= ({ size=28, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>);
const ShieldIcon   = ({ size=28, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const AwardIcon    = ({ size=28, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>);
const UsersIcon    = ({ size=28, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const DownloadIcon = ({ size=16, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>);
const LockIcon     = ({ size=14, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const QuoteIcon    = ({ size=56, color="currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>);

// ── Book Cover ─────────────────────────────────────────────────────────
function BookCover() {
  if (IMAGES.bookCover) {
    return (
      <img src={IMAGES.bookCover} alt="Fuel Hauling Made Easy — Student Workbook cover"
        style={{ maxWidth: 440, width: "100%", height: "auto", borderRadius: 8, display: "block",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)" }} />
    );
  }
  return (
    <div style={{ width:"100%", maxWidth:300, aspectRatio:"3/4", background:`linear-gradient(160deg,${T.navyMid},${T.navy})`,
      borderRadius:8, border:`1px solid ${T.borderDark}`, borderTop:`6px solid ${T.orange}`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      gap:16, padding:"32px 24px", boxShadow:"0 32px 80px rgba(0,0,0,0.45)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:8, background:T.orange }}/>
      <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(232,97,10,0.15)", border:`2px dashed rgba(232,97,10,0.4)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <BookIcon size={26} color={T.orange}/>
      </div>
      <div style={{ textAlign:"center", zIndex:1 }}>
        <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:22, color:"#fff", textTransform:"uppercase", lineHeight:1.1, letterSpacing:"0.03em", marginBottom:8 }}>Fuel Hauling<br/>Made Easy</div>
        <div style={{ fontFamily:"var(--font-body)", fontSize:12, color:T.textDim, lineHeight:1.5 }}>The Complete Training<br/>&amp; Leadership Guide</div>
      </div>
      <div style={{ width:"80%", height:1, background:`linear-gradient(90deg,transparent,${T.gold},transparent)` }}/>
      <div style={{ fontFamily:"var(--font-body)", fontSize:11, color:T.gold, letterSpacing:"0.12em", textTransform:"uppercase" }}>Student Workbook</div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position:"relative", overflow:"hidden", minHeight:520 }}>
      <div style={{ position:"absolute", inset:0, zIndex:0, backgroundImage:`url('${IMAGES.hero}')`, backgroundSize:"cover", backgroundPosition:"center 40%" }}/>
      <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(105deg,rgba(10,22,40,0.97) 0%,rgba(10,22,40,0.88) 50%,rgba(10,22,40,0.55) 100%)" }}/>
      <div style={{ position:"absolute", inset:0, zIndex:2, pointerEvents:"none", backgroundImage:`linear-gradient(rgba(200,168,75,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,168,75,0.04) 1px,transparent 1px)`, backgroundSize:"64px 64px" }}/>
      <div className="container" style={{ position:"relative", zIndex:3, padding:"72px 24px 88px" }}>
        <div className="hero-grid">
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:24 }}>
              <a href="/" style={{ fontFamily:"var(--font-body)", fontSize:13, color:T.textDim, transition:"color var(--ease-fast)" }}
                onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color=T.textDim}>Home</a>
              <span style={{ color:"rgba(255,255,255,0.2)", fontSize:13 }}>/</span>
              <span style={{ fontFamily:"var(--font-body)", fontSize:13, color:T.orange }}>For Drivers</span>
            </div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(232,97,10,0.14)", border:`1px solid rgba(232,97,10,0.35)`, borderRadius:"var(--radius-sm)", padding:"6px 14px", marginBottom:24 }}>
              <span style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:11.5, letterSpacing:"0.16em", textTransform:"uppercase", color:T.orange }}>For Drivers &amp; New Haulers</span>
            </div>
            <h1 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(32px,5.5vw,70px)", color:"#fff", lineHeight:1.0, textTransform:"uppercase", letterSpacing:"0.01em", marginBottom:20 }}>
              Fuel Hauling<br/>Made Easy:<br/>
              <span style={{ color:T.orange }}>The Complete</span>{" "}
              <span style={{ color:T.gold }}>Training &amp;</span><br/>
              <span style={{ color:T.gold }}>Leadership Guide.</span>
            </h1>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"clamp(15px,1.8vw,18px)", color:"rgba(255,255,255,0.75)", lineHeight:1.75, marginBottom:28, maxWidth:520 }}>
              Your step-by-step system for mastering safe fuel transport, from pre-trip to post-trip.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:32 }}>
              {["10-Day Curriculum","DOT Compliant","Instant Download","Print-Ready PDF"].map(badge=>(
                <span key={badge} style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.07)", border:`1px solid ${T.borderDark}`, borderRadius:"var(--radius-sm)", padding:"6px 12px", fontFamily:"var(--font-display)", fontWeight:700, fontSize:12, letterSpacing:"0.08em", textTransform:"uppercase", color:T.textDim, whiteSpace:"nowrap" }}>
                  <CheckIcon size={11} color={T.gold}/>{badge}
                </span>
              ))}
            </div>
            <div className="cta-row">
              <a href="#buy" className="btn btn--orange btn--lg">Buy Now — $79<ArrowRight size={16} color="#fff"/></a>
              <a href="#free-checklist" className="btn btn--lg btn--outline-white"><DownloadIcon size={15} color="#fff"/>Get Free Sample First</a>
            </div>
          </div>
          {/* Book cover — always shown; centres on mobile */}
          <div className="hero-book-col"><BookCover/></div>
        </div>
      </div>
      <div style={{ position:"absolute", bottom:-2, left:0, right:0, zIndex:4, height:60, background:T.surface, clipPath:"polygon(0 100%, 100% 0, 100% 100%)" }}/>
    </section>
  );
}

// ── Gallery Strip ──────────────────────────────────────────────────────
function GalleryStrip() {
  const photos = [
    { src:IMAGES.gallery1, caption:"Pre-trip inspections — every run, every time" },
    { src:IMAGES.gallery2, caption:"Safe loading & unloading procedures" },
    { src:IMAGES.gallery3, caption:"Spill prevention & contamination control" },
  ];
  return (
    <div className="gallery-grid">
      {photos.map((photo,i)=>(
        <div key={i} style={{ position:"relative", aspectRatio:"16/9", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:`url('${photo.src}')`, backgroundSize:"cover", backgroundPosition:"center", transition:"transform 500ms ease" }}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.06)"}
            onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}/>
          <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(to top,rgba(10,22,40,0.88) 0%,transparent 100%)", padding:"32px 20px 16px", pointerEvents:"none" }}>
            <p style={{ fontFamily:"var(--font-body)", fontSize:13, color:"rgba(255,255,255,0.72)", fontStyle:"italic" }}>{photo.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── What's Inside ──────────────────────────────────────────────────────
function WhatsInside() {
  const features = [
    { icon:<BookIcon size={24} color={T.orange}/>,      title:"10-Day Comprehensive Training Curriculum",          body:"A structured, day-by-day system that takes you from the basics all the way through advanced leadership — no experience required to start." },
    { icon:<ClipboardIcon size={24} color={T.orange}/>, title:"Step-by-Step Loading & Unloading Procedures",       body:"Every step documented clearly, with checklists you can use at the terminal. Never second-guess the process again." },
    { icon:<ShieldIcon size={24} color={T.orange}/>,    title:"Cross-Contamination & Spill Prevention Strategies", body:"Learn the exact techniques to prevent costly cross-dumps, spills, and contamination incidents that can end careers." },
    { icon:<UsersIcon size={24} color={T.orange}/>,     title:"Driver Trainer Excellence & Leadership Modules",    body:"Ready to move up? This section prepares you to train others — covering coaching techniques, communication, and accountability." },
    { icon:<AwardIcon size={24} color={T.orange}/>,     title:"Certification Readiness & Assessment Tools",        body:"Built-in quizzes, self-assessments, and readiness checklists so you know exactly when you're prepared to certify." },
  ];
  return (
    <section className="section section--surface">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:44 }}>
          <p className="text-label text-orange" style={{ marginBottom:12 }}>Inside the Workbook</p>
          <h2 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(24px,4vw,50px)", color:T.navy, marginBottom:16 }}>Everything You Need to Haul Safely &amp; Professionally</h2>
          <p style={{ fontFamily:"var(--font-body)", fontSize:16, color:T.textMuted, maxWidth:540, margin:"0 auto", lineHeight:1.7 }}>Five core modules covering the full scope of fuel transport — from your first day on the job to your first day as a trainer.</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {features.map((f,i)=>(
            <div key={f.title} className="feature-card"
              onMouseEnter={e=>{e.currentTarget.style.transform="translateX(4px)";e.currentTarget.style.boxShadow="var(--shadow-md)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateX(0)";e.currentTarget.style.boxShadow="none"}}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, flexShrink:0 }}>
                <div style={{ width:44, height:44, background:"rgba(232,97,10,0.08)", border:`1px solid rgba(232,97,10,0.2)`, borderRadius:"var(--radius-md)", display:"flex", alignItems:"center", justifyContent:"center" }}>{f.icon}</div>
                <span style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:11, color:T.textMuted, letterSpacing:"0.1em" }}>{String(i+1).padStart(2,"0")}</span>
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <h3 style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(13px,2vw,19px)", color:T.navy, textTransform:"uppercase", letterSpacing:"0.03em", marginBottom:6 }}>{f.title}</h3>
                <p style={{ fontFamily:"var(--font-body)", fontSize:14.5, color:T.textMuted, lineHeight:1.7 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pro Tip ────────────────────────────────────────────────────────────
function ProTip() {
  return (
    <section className="section-protip">
      <div style={{ position:"absolute", inset:0, zIndex:0, backgroundImage:`url('${IMAGES.proTipBg}')`, backgroundSize:"cover", backgroundPosition:"center" }}/>
      <div style={{ position:"absolute", inset:0, zIndex:1, background:"rgba(10,22,40,0.93)" }}/>
      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div style={{ maxWidth:780, margin:"0 auto", textAlign:"center" }}>
          <p className="text-label text-gold" style={{ marginBottom:20 }}>Sample Content — From Inside the Workbook</p>
          <div className="protip-card">
            <div style={{ position:"absolute", top:16, left:24, opacity:0.12 }}><QuoteIcon size={72} color={T.gold}/></div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(200,168,75,0.12)", border:`1px solid rgba(200,168,75,0.3)`, borderRadius:"var(--radius-sm)", padding:"6px 16px", marginBottom:24 }}>
              <span style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:11.5, letterSpacing:"0.18em", textTransform:"uppercase", color:T.gold }}>⚡ Pro Tip from the Book</span>
            </div>
            <blockquote style={{ fontFamily:"var(--font-body)", fontSize:"clamp(15px,2vw,22px)", color:"#fff", lineHeight:1.75, fontStyle:"italic", position:"relative", zIndex:1, marginBottom:28 }}>
              "Make it a habit to double-check everything at the first terminal of the day. If you start focused, you'll stay sharp all shift."
            </blockquote>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:`linear-gradient(135deg,${T.orange},${T.gold})`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C12 2 2 9.5 2 15.5a10 10 0 0 0 20 0C22 9.5 12 2 12 2z"/></svg>
              </div>
              <span style={{ fontFamily:"var(--font-body)", fontSize:13, color:T.gold }}>Fuel Hauling Made Easy — Student Workbook, Chapter 2</span>
            </div>
          </div>
          <p style={{ marginTop:24, fontFamily:"var(--font-body)", fontSize:15, color:T.textDim, lineHeight:1.7 }}>The workbook is full of insights like this — practical, field-tested, and written by someone who's actually done the job.</p>
          <div style={{ marginTop:24 }}>
            <a href="#buy" className="btn btn--orange btn--lg">Get the Full Workbook — $79<ArrowRight size={16} color="#fff"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Who Is This For ────────────────────────────────────────────────────
function WhoIsThisFor() {
  const audience = [
    { title:"Brand-New Fuel Drivers",                    body:"Just starting out? This workbook walks you through everything from your first pre-trip to your first solo load — step by step." },
    { title:"Experienced Drivers Formalizing Knowledge", body:"Been hauling for years but never had it written down? Use this to document your expertise and fill any gaps you didn't know you had." },
    { title:"Drivers Preparing to Become Trainers",      body:"The leadership modules in this workbook are the first step toward our Certified to Lead™ workshop. It's the perfect foundation." },
    { title:"Carriers Building Training Programs",       body:"Use the curriculum and checklists as the backbone of your company's onboarding program. Print it, assign it, track it." },
  ];
  return (
    <section className="section section--white">
      <div className="container">
        <div className="who-grid">
          <div className="who-photo-wrap">
            <div style={{ borderRadius:"var(--radius-md)", overflow:"hidden", aspectRatio:"4/5", backgroundImage:`url('${IMAGES.driverAtTerminal}')`, backgroundSize:"cover", backgroundPosition:"center", boxShadow:"0 32px 80px rgba(0,0,0,0.18)" }}/>
            <div className="badge badge--curriculum">
              <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:36, color:"#fff", lineHeight:1 }}>10</div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:12, color:"rgba(255,255,255,0.85)", marginTop:2 }}>Day Curriculum</div>
            </div>
            <div className="badge badge--price">
              <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:24, color:T.gold, lineHeight:1 }}>$79</div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:11, color:T.textDim, marginTop:2 }}>One-time</div>
            </div>
          </div>
          <div>
            <p className="text-label text-orange" style={{ marginBottom:12 }}>Is This for Me?</p>
            <h2 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(24px,3.5vw,48px)", color:T.navy, marginBottom:24 }}>This Workbook Is Built for You If…</h2>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {audience.map((item,i)=>(
                <div key={item.title} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"16px 18px", borderRadius:"var(--radius-md)", border:`1px solid ${T.border}`, transition:"border-color var(--ease-base),box-shadow var(--ease-base),transform var(--ease-base)" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.orange;e.currentTarget.style.boxShadow="var(--shadow-md)";e.currentTarget.style.transform="translateX(4px)"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateX(0)"}}>
                  <div style={{ width:34, height:34, borderRadius:"50%", flexShrink:0, minWidth:34, background:T.orange, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontWeight:900, fontSize:14 }}>{i+1}</div>
                  <div style={{ minWidth:0 }}>
                    <h4 style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(12px,1.8vw,16px)", color:T.navy, textTransform:"uppercase", letterSpacing:"0.03em", marginBottom:5 }}>{item.title}</h4>
                    <p style={{ fontFamily:"var(--font-body)", fontSize:14, color:T.textMuted, lineHeight:1.65 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:20, padding:"18px 20px", background:"rgba(200,168,75,0.06)", border:`1px solid rgba(200,168,75,0.2)`, borderLeft:`4px solid ${T.gold}`, borderRadius:"var(--radius-md)", display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, flexWrap:"wrap" }}>
              <div>
                <p style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, color:T.navy, textTransform:"uppercase", letterSpacing:"0.03em", marginBottom:4 }}>Ready to Train Others?</p>
                <p style={{ fontFamily:"var(--font-body)", fontSize:13, color:T.textMuted, lineHeight:1.5 }}>The Certified to Lead™ workshop is the next step.</p>
              </div>
              <a href="/certified-to-lead-workshop" className="btn btn--navy" style={{ flexShrink:0 }}>Explore Workshop<ArrowRight size={13} color="#fff"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing & Buy ──────────────────────────────────────────────────────
function PricingBuy() {
  return (
    <section id="buy" className="section-padding" style={{ background:T.surface }}>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:40 }}>
          <p className="text-label text-orange" style={{ marginBottom:12 }}>Get Your Copy Today</p>
          <h2 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(24px,4vw,50px)", color:T.navy }}>One Workbook. Everything You Need.</h2>
        </div>
        <div style={{ maxWidth:640, margin:"0 auto", background:T.surfaceWhite, borderRadius:"var(--radius-md)", border:`1px solid ${T.border}`, borderTop:`5px solid ${T.orange}`, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
          <div className="pricing-header">
            <div>
              <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(44px,8vw,64px)", color:"#fff", lineHeight:1 }}>$79</div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:14, color:T.textDim, marginTop:4 }}>One-time purchase · Instant PDF download</div>
            </div>
            <div style={{ background:"rgba(232,97,10,0.15)", border:`1px solid rgba(232,97,10,0.3)`, borderRadius:"var(--radius-sm)", padding:"12px 20px", textAlign:"center", flexShrink:0 }}>
              <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:15, color:T.orange, textTransform:"uppercase", letterSpacing:"0.06em" }}>Student Workbook</div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:12.5, color:T.textDim, marginTop:4 }}>Fuel Hauling Made Easy</div>
            </div>
          </div>
          <div className="pricing-body">
            <p style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase", color:T.textMuted, marginBottom:18 }}>Everything included:</p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
              {["Full 10-Day Curriculum — printable PDF workbook","Step-by-Step Loading & Unloading Procedures","Cross-Contamination & Spill Prevention Strategies","Driver Trainer Excellence & Leadership Modules","Certification Readiness & Assessment Tools","Fuel Drop Site Checklist (Appendix D)"].map(item=>(
                <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                  <span style={{ marginTop:2, flexShrink:0 }}><CheckIcon size={15} color={T.orange}/></span>
                  <span style={{ fontFamily:"var(--font-body)", fontSize:15, color:T.text, lineHeight:1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pricing-cta">
            <a href="https://vanguardbusinessconsultantsllc.com/product/fuel-hauling-made-easy-the-complete-training-leadership-guide/" className="btn btn--orange btn--lg btn--full btn--pulse" style={{ fontSize:17 }}>
              <LockIcon size={16} color="#fff"/>Buy Now — $79
            </a>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginTop:14, flexWrap:"wrap" }}>
              {["Secure Checkout","PDF Instant Download","Money-Back Guarantee"].map(t=>(
                <span key={t} style={{ display:"flex", alignItems:"center", gap:5, fontFamily:"var(--font-body)", fontSize:12.5, color:T.textMuted }}>
                  <CheckIcon size={11} color={T.orange}/>{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Lead Magnet ────────────────────────────────────────────────────────
function LeadMagnet() {
  const [name,setName]       = useState("");
  const [email,setEmail]     = useState("");
  const [submitted,setSub]   = useState(false);
  const [loading,setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name||!email) return;
    setLoading(true);
    await new Promise(r=>setTimeout(r,900));
    setLoading(false); setSub(true);
  };
  return (
    <section id="free-checklist" className="section-padding" style={{ background:T.navyMid }}>
      <div className="container">
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:36 }}>
            <p className="text-label text-gold" style={{ marginBottom:12 }}>Free Download</p>
            <h2 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(22px,3.5vw,46px)", color:"#fff", marginBottom:16 }}>Want a Free Sample First?</h2>
            <p style={{ fontFamily:"var(--font-body)", fontSize:16, color:T.textDim, lineHeight:1.7 }}>Download the <strong style={{ color:"#fff" }}>Fuel Drop Site Checklist</strong> PDF — one of the key tools from the workbook — completely free.</p>
          </div>
          <div style={{ background:T.navyLight, borderRadius:"var(--radius-md)", border:`1px solid ${T.borderDark}`, borderTop:`4px solid ${T.gold}`, overflow:"hidden" }}>
            <div className="leadmag-header">
              <div style={{ width:46, height:46, background:"rgba(200,168,75,0.12)", border:`1px solid rgba(200,168,75,0.25)`, borderRadius:"var(--radius-md)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <DownloadIcon size={20} color={T.gold}/>
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(12px,2vw,17px)", color:"#fff", textTransform:"uppercase", letterSpacing:"0.04em" }}>Fuel Drop Site Checklist — PDF</div>
                <div style={{ fontFamily:"var(--font-body)", fontSize:13, color:T.textDim, marginTop:4 }}>From Appendix D of the workbook</div>
              </div>
              <div style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:22, color:T.gold, flexShrink:0 }}>FREE</div>
            </div>
            <div className="leadmag-body">
              {submitted ? (
                <div style={{ textAlign:"center", padding:"16px 0" }}>
                  <div style={{ width:52, height:52, borderRadius:"50%", background:"rgba(34,197,94,0.12)", border:"2px solid rgba(34,197,94,0.4)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                    <CheckIcon size={22} color="#22c55e"/>
                  </div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:22, color:"#fff", textTransform:"uppercase", marginBottom:8 }}>Check Your Inbox!</h3>
                  <p style={{ fontFamily:"var(--font-body)", fontSize:15, color:T.textDim, lineHeight:1.6 }}>The checklist is on its way to <strong style={{ color:"#fff" }}>{email}</strong>.</p>
                  <div style={{ marginTop:20 }}>
                    <a href="#buy" className="btn btn--orange">Get the Full Workbook — $79<ArrowRight size={14} color="#fff"/></a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid" style={{ marginBottom:14 }}>
                    {[{label:"First Name",type:"text",value:name,setter:setName,placeholder:"Your name"},{label:"Email",type:"email",value:email,setter:setEmail,placeholder:"your@email.com"}].map(field=>(
                      <div key={field.label}>
                        <label style={{ display:"block", fontFamily:"var(--font-body)", fontSize:12.5, color:T.textDim, marginBottom:6, letterSpacing:"0.04em" }}>{field.label} *</label>
                        <input type={field.type} value={field.value} onChange={e=>field.setter(e.target.value)} placeholder={field.placeholder} required
                          style={{ width:"100%", padding:"12px 14px", background:"rgba(255,255,255,0.06)", border:`1px solid ${T.borderDark}`, borderRadius:"var(--radius-sm)", fontFamily:"var(--font-body)", fontSize:14.5, color:"#fff", outline:"none", transition:"border-color var(--ease-fast)", boxSizing:"border-box" }}
                          onFocus={e=>e.target.style.borderColor=T.gold}
                          onBlur={e=>e.target.style.borderColor=T.borderDark}
                        />
                      </div>
                    ))}
                  </div>
                  <button type="submit" disabled={loading} className="btn btn--gold btn--full btn--lg" style={{ opacity:loading?0.7:1 }}>
                    <DownloadIcon size={16} color={T.navy}/>{loading?"Sending…":"Send Me the Free Checklist"}
                  </button>
                  <p style={{ marginTop:12, textAlign:"center", fontFamily:"var(--font-body)", fontSize:12, color:"rgba(255,255,255,0.28)" }}>No spam. Unsubscribe any time.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    { quote:"The tabletop drills and case studies were better than anything I've seen in my 20 years in the field.", name:"Larry M.",   role:"Lead Trainer, Texas",       initials:"LM", photo:IMAGES.avatarLarry  },
    { quote:"Finally a training that actually shows you how to teach — not just what to say. I feel confident now to train anyone.",    name:"Angela D.", role:"CDL Fuel Driver, Missouri", initials:"AD", photo:IMAGES.avatarAngela },
  ];
  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:44 }}>
          <p className="text-label text-orange" style={{ marginBottom:12 }}>What Professionals Are Saying</p>
          <h2 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(22px,3vw,42px)", color:T.navy }}>Trusted by Drivers &amp; Trainers Across the Country</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t=>(
            <div key={t.name} style={{ background:T.surface, borderRadius:"var(--radius-md)", border:`1px solid ${T.border}`, borderLeft:`4px solid ${T.orange}`, padding:"28px 24px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:12, right:20, opacity:0.1 }}><QuoteIcon size={48} color={T.orange}/></div>
              <div style={{ display:"flex", gap:3, marginBottom:16 }}>{[...Array(5)].map((_,i)=><StarIcon key={i} size={14} color={T.orange}/>)}</div>
              <blockquote style={{ fontFamily:"var(--font-body)", fontSize:15.5, color:T.text, lineHeight:1.75, fontStyle:"italic", marginBottom:20 }}>"{t.quote}"</blockquote>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                {t.photo
                  ? <div style={{ width:44, height:44, borderRadius:"50%", backgroundImage:`url('${t.photo}')`, backgroundSize:"cover", backgroundPosition:"center", flexShrink:0, border:`2px solid ${T.orange}` }}/>
                  : <div style={{ width:44, height:44, borderRadius:"50%", background:`linear-gradient(135deg,${T.orange},${T.gold})`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:14, color:"#fff" }}>{t.initials}</span></div>
                }
                <div>
                  <div style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, color:T.navy, textTransform:"uppercase", letterSpacing:"0.04em" }}>{t.name}</div>
                  <div style={{ fontFamily:"var(--font-body)", fontSize:13, color:T.textMuted, marginTop:2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="section-padding" style={{ background:T.navy, position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:`linear-gradient(rgba(232,97,10,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(232,97,10,0.05) 1px,transparent 1px)`, backgroundSize:"48px 48px" }}/>
      <div className="container" style={{ position:"relative", zIndex:1, textAlign:"center" }}>
        <p className="text-label text-gold" style={{ marginBottom:16 }}>Don't Wait</p>
        <h2 style={{ fontFamily:"var(--font-display)", fontWeight:900, fontSize:"clamp(26px,4.5vw,60px)", color:"#fff", textTransform:"uppercase", lineHeight:1.05, marginBottom:20 }}>
          The Knowledge That Keeps You<br/><span style={{ color:T.orange }}>Safe on Every Run.</span>
        </h2>
        <p style={{ fontFamily:"var(--font-body)", fontSize:17, color:T.textDim, lineHeight:1.7, maxWidth:500, margin:"0 auto 36px" }}>
          One workbook. $79. A career's worth of practical, field-tested knowledge delivered straight to your inbox.
        </p>
        <div className="cta-row" style={{ justifyContent:"center" }}>
          <a href="https://vanguardbusinessconsultantsllc.com/product/fuel-hauling-made-easy-the-complete-training-leadership-guide/" className="btn btn--orange btn--lg btn--pulse">
            <LockIcon size={15} color="#fff"/>Buy Now — $79
          </a>
          <a href="#free-checklist" className="btn btn--lg btn--outline-white">
            <DownloadIcon size={15} color="#fff"/>Get Free Checklist First
          </a>
        </div>
        <p style={{ marginTop:20, fontFamily:"var(--font-body)", fontSize:13, color:"rgba(255,255,255,0.28)" }}>Instant PDF download · Secure checkout · Money-back guarantee</p>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────
export default function ForDriversPage() {
  return (
    <main>
      <Hero/>
      <GalleryStrip/>
      <WhatsInside/>
      <ProTip/>
      <WhoIsThisFor/>
      <PricingBuy/>
      <LeadMagnet/>
      <Testimonials/>
      <FinalCTA/>

      <style jsx>{`
        /* ── Base (desktop) ─────────────────────────── */
        .section-padding { padding: 88px 0; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 48px;
          align-items: center;
        }
        .hero-book-col {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: #fff;
          border-radius: var(--radius-md);
          border: 1px solid #e2e8f0;
          border-left: 4px solid #e8610a;
          padding: 22px 26px;
          transition: transform var(--ease-base), box-shadow var(--ease-base);
        }

        .section-protip {
          position: relative;
          overflow: hidden;
          padding: 88px 0;
        }
        .protip-card {
          position: relative;
          background: rgba(28,48,80,0.7);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.1);
          border-top: 4px solid #c8a84b;
          padding: 48px 48px 40px;
          overflow: hidden;
        }

        .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .who-photo-wrap { position: relative; }
        .badge {
          position: absolute;
          border-radius: var(--radius-md);
        }
        .badge--curriculum {
          bottom: -16px;
          right: -16px;
          background: #e8610a;
          padding: 16px 20px;
          box-shadow: 0 12px 40px rgba(232,97,10,0.4);
        }
        .badge--price {
          top: -12px;
          left: -12px;
          background: #0a1628;
          border: 2px solid #c8a84b;
          padding: 12px 16px;
          text-align: center;
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
        }

        .pricing-header {
          background: #0a1628;
          padding: 32px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .pricing-body { padding: 28px 36px; }
        .pricing-cta  { padding: 0 36px 36px; }

        .leadmag-header {
          padding: 24px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .leadmag-body { padding: 28px; }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* ── Tablet ≤ 860px ─────────────────────────── */
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-book-col { display: flex; justify-content: center; }

          .who-grid { grid-template-columns: 1fr; gap: 48px; }
          .badge--curriculum { bottom: -12px; right: 0; }
          .badge--price      { top: -12px;  left: 0; }

          .pricing-header { padding: 24px; }
          .pricing-body   { padding: 24px; }
          .pricing-cta    { padding: 0 24px 28px; }

          .leadmag-header { padding: 20px; }
          .leadmag-body   { padding: 20px; }

          .section-padding { padding: 64px 0; }
          .section-protip  { padding: 64px 0; }
          .protip-card     { padding: 36px 28px; }
        }

        /* ── Mobile ≤ 640px ─────────────────────────── */
        @media (max-width: 640px) {
          .gallery-grid      { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .form-grid         { grid-template-columns: 1fr; }

          .feature-card { padding: 16px 14px; gap: 12px; }

          .cta-row { flex-direction: column; align-items: stretch; }
          .cta-row .btn { text-align: center; justify-content: center; }

          .protip-card { padding: 24px 18px; }

          .section-padding { padding: 52px 0; }
          .section-protip  { padding: 52px 0; }

          .pricing-header { padding: 20px 16px; }
          .pricing-body   { padding: 20px 16px; }
          .pricing-cta    { padding: 0 16px 24px; }

          .leadmag-header { padding: 16px; gap: 12px; }
          .leadmag-body   { padding: 18px 16px; }
        }
      `}</style>
    </main>
  );
}