/**
 * layout.js  —  /src/app/certified-to-lead-workshop/layout.js
 *
 * Server component. Exports SEO metadata for the Certified to Lead
 * workshop page (the page itself is "use client" and can't export metadata).
 *
 * Targets queries like:
 *   - "fuel driver trainer certification"
 *   - "certified fuel trainer workshop"
 *   - "how to become a fuel trainer"
 *   - "hazmat trainer certification"
 *   - "fuel hauling trainer training"
 */

const SITE_URL =
  "https://certifiedfueltrainer.com/certified-to-lead-workshop";
const REGISTER_URL =
  "https://vanguardbusinessconsultantsllc.com/product/certified-to-lead-advanced-fuel-trainer-workshop/";

export const metadata = {
  title:
    "Certified to Lead™ Workshop — Become a Certified Fuel Driver Trainer",
  description:
    "The Certified to Lead™ Workshop is a one-day live training in Oklahoma City for fuel driver trainers. Earn a 3-year DOT-recognized certification. Learn professional coaching, contamination prevention, emergency drills, and hazmat trainer compliance. Presented by Vanguard Small Business Consultants, LLC.",
  keywords: [
    "certified fuel trainer",
    "fuel driver trainer certification",
    "fuel trainer workshop",
    "hazmat trainer certification",
    "DOT hazmat trainer",
    "fuel hauling trainer training",
    "how to become a fuel trainer",
    "Certified to Lead workshop",
    "Vanguard Small Business Consultants",
    "fuel transportation training",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title:
      "Certified to Lead™ Workshop — Become a Certified Fuel Driver Trainer",
    description:
      "One-day live workshop in Oklahoma City. Earn your 3-year DOT-recognized fuel driver trainer certification. Learn coaching, contamination prevention, emergency preparedness, and hazmat compliance.",
    images: [
      {
        url: "/Certified to Lead - Truck Driver - Linkedin Featured.png",
        width: 1200,
        height: 628,
        alt: "Certified to Lead™ Workshop — Fuel Driver Trainer Certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Certified to Lead™ Workshop — Become a Certified Fuel Driver Trainer",
    description:
      "One-day live workshop. 3-year DOT-recognized certification. Oklahoma City. For fuel driver trainers and drivers stepping into training roles.",
    images: ["/Certified to Lead - Truck Driver - Linkedin Featured.png"],
  },
};

/* ── Structured data: Event + FAQPage ────────────────────────────
   Event schema tells Google this is a live, dateable, purchasable
   event — eligible for Google's event rich results.
─────────────────────────────────────────────────────────────────*/
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Certified to Lead™ — Advanced Fuel Driver Trainer Workshop",
  description:
    "A one-day live workshop that certifies fuel driver trainers. Covers professional coaching, cross-dump and contamination prevention, emergency drills, hazmat trainer compliance, and the Fuel Truck Driver Readiness Form. Includes handbook, certification exam, and lunch.",
  startDate: "2026-08-01",
  endDate: "2026-08-01",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "MetroTech",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Vanguard Small Business Consultants, LLC",
    url: "https://certifiedfueltrainer.com",
  },
  offers: {
    "@type": "Offer",
    url: REGISTER_URL,
    price: "895",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
  maximumAttendeeCapacity: 20,
  url: SITE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I become a certified fuel driver trainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The Certified to Lead™ Workshop is a one-day live training program that certifies fuel driver trainers. Attendees complete a full-day classroom session at MetroTech in Oklahoma City, then pass an online certification exam at their own pace. The resulting certificate is valid for 3 years and meets DOT 49 CFR §172.704 hazmat trainer requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Certified to Lead™ Workshop cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The workshop covers five core skills for fuel driver trainers: professional coaching techniques, cross-dump and contamination prevention, emergency drill facilitation, hazard response training strategies, and using the Fuel Truck Driver Readiness Form to make confident go/no-go decisions. All materials, the certification exam, and lunch are included.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Certified to Lead™ certification recognized by DOT?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The certification meets DOT 49 CFR §172.704 hazmat trainer requirements and qualifies as official hazmat trainer recertification. It is also recognized by most major U.S. fuel transport insurance carriers.",
      },
    },
    {
      "@type": "Question",
      name: "Who should attend the Certified to Lead™ Workshop?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The workshop is designed for newly hired fuel driver trainers, current trainers seeking recertification, experienced fuel drivers stepping into trainer roles, and driver trainers from other industries entering fuel transport. It is limited to 20 participants per session.",
      },
    },
  ],
};

export default function WorkshopLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
