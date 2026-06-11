/**
 * layout.js  —  /src/app/fuel-hauling-made-easy-workbook/layout.js
 *
 * Server component. Exports SEO metadata for the workbook page
 * (the page itself is "use client" and can't export metadata).
 *
 * Injects JSON-LD structured data (Book + Reviews + Press citation + FAQPage)
 * so Google understands the entity and can show rich results for queries like:
 *   - "How do you haul fuel"
 *   - "How do you transport fuel"
 *   - "Fuel transportation"
 *   - "Hazmat transportation"
 *   - "Fuel Hauling Made Easy"
 *   - "cross-dump prevention"
 *   - "API color codes fuel"
 *   - "Scully system fuel tanker"
 *
 * Press coverage:
 *   "New training resources boost fuel-hauling safety"
 *   Jason McDaniel, Bulk Transporter, May 29 2026
 *   https://www.bulktransporter.com/21658386
 */

const AMAZON_URL =
  "https://www.amazon.com/FUEL-HAULING-MADE-EASY-Consultants/dp/B0H1MV7DS6";
const SITE_URL =
  "https://certifiedfueltrainer.com/fuel-hauling-made-easy-workbook";
const PRESS_URL = "https://www.bulktransporter.com/21658386";

export const metadata = {
  title:
    "Fuel Hauling Made Easy: The Simple Guide to Safe Fuel Transport (Student Workbook)",
  description:
    "Fuel Hauling Made Easy is a 60+ page student workbook teaching CDL drivers how to haul fuel safely — covering cross-dump prevention, API color codes, Scully system use, PPE, loading/unloading procedures, compartment loading, hazmat transportation rules, spill prevention, and DOT compliance. By Quincy Benton. Featured in Bulk Transporter.",
  keywords: [
    "Fuel Hauling Made Easy",
    "how do you haul fuel",
    "how do you transport fuel",
    "fuel transportation",
    "hazmat transportation",
    "cross-dump prevention",
    "cross drop prevention fuel",
    "API color codes fuel",
    "Scully system fuel tanker",
    "compartment loading fuel truck",
    "fuel driver PPE",
    "safe fuel transport",
    "fuel hauling workbook",
    "CDL fuel hauling",
    "fuel tanker training",
    "fuel hauler training",
    "fuel driver orientation",
    "Quincy Benton",
    "Vanguard Small Business Consultants",
    "bulk fuel transport",
  ],
  authors: [{ name: "Quincy Benton" }],
  publisher: "Vanguard Small Business Consultants, LLC",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "book",
    url: SITE_URL,
    title:
      "Fuel Hauling Made Easy — The Simple Guide to Safe Fuel Transport",
    description:
      "A 60+ page hands-on student workbook covering cross-dump prevention, API color codes, Scully system use, loading/unloading, hazmat transportation, spill prevention, and 100+ pro tips. Featured in Bulk Transporter. By Quincy Benton.",
    siteName: "Certified Fuel Trainer",
    images: [
      {
        url: "/Fuel Hauling Made Easy - Front Cover - Final Version.jpg",
        width: 800,
        height: 1200,
        alt: "Fuel Hauling Made Easy — Front Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fuel Hauling Made Easy — The Simple Guide to Safe Fuel Transport",
    description:
      "60+ page student workbook covering cross-dump prevention, API color codes, Scully system, hazmat transportation, loading, unloading, and spill prevention. Featured in Bulk Transporter.",
    images: ["/Fuel Hauling Made Easy - Front Cover - Final Version.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/* ── Structured data ──────────────────────────────────────────────
   1. Book schema  — enriched with numberOfPages, specific topics,
      three named industry reviews, and a press citation from
      Bulk Transporter (May 2026).
   2. FAQPage schema — exact question phrasing for SERP rich results.
─────────────────────────────────────────────────────────────────*/
const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Fuel Hauling Made Easy: The Simple Guide to Safe Fuel Transport",
  alternateName: "Safe Fuel Transport Student Workbook Edition",
  bookFormat: "https://schema.org/Paperback",
  numberOfPages: 60,
  inLanguage: "en",
  datePublished: "2026-05-10",
  isbn: "",
  url: SITE_URL,
  sameAs: AMAZON_URL,
  image: "/Fuel Hauling Made Easy - Front Cover - Final Version.jpg",
  author: {
    "@type": "Person",
    name: "Quincy Benton",
    url: "https://www.amazon.com/Quincy-Benton/e/B07KX52GCT/",
    sameAs: "https://www.linkedin.com/in/quincybenton/",
  },
  publisher: {
    "@type": "Organization",
    name: "Vanguard Small Business Consultants, LLC",
    url: "https://certifiedfueltrainer.com",
  },
  about: [
    "Fuel transportation",
    "Hazmat transportation",
    "Fuel hauling",
    "Cross-dump prevention",
    "Cross-contamination prevention",
    "API color codes",
    "Scully system fuel tanker",
    "Compartment loading strategies",
    "PPE for fuel drivers",
    "Loading and unloading procedures",
    "Spill prevention",
    "DOT compliance",
    "Tanker truck safety",
    "Daily driver checklists",
    "Emergency response",
  ],
  description:
    "Fuel Hauling Made Easy is a 60-plus page hands-on student workbook for CDL drivers entering fuel transport. Developed with input from veteran fuel haulers and pilot-tested at a technical school in Oklahoma City, it covers cross-dump (cross-drop) prevention, PPE, API color codes, Scully system use, compartment loading strategies, loading and unloading procedures, daily checklists, and a 100-tips section. Designed for use with an instructor-led program. Featured in Bulk Transporter, May 2026.",
  offers: {
    "@type": "Offer",
    url: AMAZON_URL,
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },

  /* ── Industry reviews (named professionals) ── */
  review: [
    {
      "@type": "Review",
      reviewBody:
        "Fuel hauling is a simple job, but it demands the same routine at every stop. This workbook gets that right. I'd hand this to any new hire before they get behind the wheel.",
      author: {
        "@type": "Person",
        name: "Robbie Crais",
        jobTitle: "Owner, Siarc Oil & Fuel",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      reviewBody:
        "No handbook existed for this job until now. This workbook teaches the fundamentals — loading, unloading, cross-dump prevention, and critical details like air pressure for internal valves. It's a solid foundation for any new driver.",
      author: {
        "@type": "Person",
        name: "Edward Hodge",
        jobTitle: "Fuel Transport Driver & Automation Specialist, 12 years hazmat experience",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      reviewBody:
        "I'd hand this workbook to any new hire. It covers the basics without cutting corners. Remember: a long, boring shift is better than an exciting one. Exciting means something went wrong.",
      author: {
        "@type": "Person",
        name: "Trudy Black",
        jobTitle: "Asphalt, Aviation & Petroleum Specialist, 2M+ accident-free miles",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],

  /* ── Press citation — Bulk Transporter, May 2026 ── */
  subjectOf: {
    "@type": "NewsArticle",
    headline: "New training resources boost fuel-hauling safety",
    url: PRESS_URL,
    datePublished: "2026-05-29",
    author: {
      "@type": "Person",
      name: "Jason McDaniel",
    },
    publisher: {
      "@type": "Organization",
      name: "Bulk Transporter",
      url: "https://www.bulktransporter.com",
    },
    description:
      "Master transportation safety with the Fuel Hauling Made Easy workbook and Certified to Lead workshop. Designed for CDL drivers and fleets, these new tools bridge the gap between holding a license and mastering hazmat-specific skills like cross-drop prevention and loading strategies.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you haul fuel safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Safely hauling fuel starts with a thorough pre-trip inspection of your tanker, confirming product compatibility using API color codes, following proper loading procedures at the terminal, using the Scully system correctly, preventing cross-dumps by following compartment loading strategies, and using the correct unloading sequence at the drop site. The Fuel Hauling Made Easy workbook breaks every one of these steps down into a checklist a driver can use on the job.",
      },
    },
    {
      "@type": "Question",
      name: "How do you transport fuel as a professional driver?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Professional fuel transport requires a CDL with HazMat and Tanker endorsements, a thorough understanding of the product being hauled, the right placards and shipping papers, an inspected and grounded tanker, and adherence to DOT and FMCSA regulations. Fuel Hauling Made Easy walks new and veteran drivers through each of these requirements with practical, field-tested guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What is cross-dump prevention in fuel hauling?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A cross-dump (also called a cross-drop) happens when the wrong fuel product is delivered to the wrong tank or compartment — for example, diesel delivered into a gasoline tank. It is one of the most costly and career-threatening mistakes in fuel hauling. Prevention requires strict use of API color codes, careful compartment loading sequencing, and pre-delivery confirmation procedures. Fuel Hauling Made Easy dedicates specific chapters to cross-dump prevention.",
      },
    },
    {
      "@type": "Question",
      name: "What are API color codes in fuel transportation?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "API color codes are a standardized color-coding system used in the fuel industry to identify different petroleum products and prevent product mixing or cross-contamination during loading and delivery. Each product type is assigned a specific color that appears on equipment, fittings, and documentation. Knowing and following API color codes is a fundamental skill covered in Fuel Hauling Made Easy.",
      },
    },
    {
      "@type": "Question",
      name: "What is hazmat transportation and how does it apply to fuel?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Hazmat (hazardous materials) transportation is the regulated movement of materials that can pose a risk to health, safety, property, or the environment. Gasoline, diesel, and other fuels are Class 3 flammable liquids and fall under HazMat rules. Drivers must follow specific placarding, documentation, routing, and emergency-response procedures — all of which are covered in Fuel Hauling Made Easy.",
      },
    },
    {
      "@type": "Question",
      name: "Who should read Fuel Hauling Made Easy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Fuel Hauling Made Easy is written for CDL drivers entering fuel hauling for the first time, experienced haulers who want to sharpen their skills, and carriers or CDL programs building driver orientation and training resources. It was developed with input from veteran fuel haulers, pilot-tested at a technical school in Oklahoma City, and is available with bulk pricing for fleets and schools.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy Fuel Hauling Made Easy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Fuel Hauling Made Easy is available in paperback on Amazon. Bulk pricing is available for carriers, fleets, and CDL programs. It was prepared by Vanguard Small Business Consultants, LLC and authored by Quincy Benton.",
      },
    },
  ],
};

export default function WorkbookLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
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
