/**
 * layout.js  —  /src/app/fuel-hauling-made-easy/layout.js
 *
 * Server component. Exports SEO metadata for the For Drivers page
 * (the page itself is "use client" and can't export metadata).
 *
 * Targets queries like:
 *   - "How do you haul fuel"
 *   - "How do you transport fuel"
 *   - "Fuel transportation"
 *   - "Fuel hauling training"
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

const SITE_URL = "https://certifiedfueltrainer.com/fuel-hauling-made-easy";
const WORKBOOK_URL =
  "https://certifiedfueltrainer.com/fuel-hauling-made-easy-workbook";
const AMAZON_URL =
  "https://www.amazon.com/FUEL-HAULING-MADE-EASY-Consultants/dp/B0H1MV7DS6";

export const metadata = {
  title:
    "Fuel Hauling Made Easy — Training & Resources for Fuel Drivers",
  description:
    "Learn how to haul fuel and transport hazardous materials safely. Fuel Hauling Made Easy is a 60+ page student workbook by Quincy Benton covering cross-dump prevention, API color codes, Scully system use, PPE, compartment loading, loading/unloading procedures, hazmat transportation rules, spill prevention, and DOT compliance. Featured in Bulk Transporter.",
  keywords: [
    "how do you haul fuel",
    "how do you transport fuel",
    "fuel transportation",
    "fuel hauling",
    "hazmat transportation",
    "cross-dump prevention",
    "cross drop prevention fuel",
    "API color codes fuel",
    "Scully system fuel tanker",
    "compartment loading fuel truck",
    "fuel driver PPE",
    "fuel hauling training",
    "fuel driver training",
    "CDL fuel hauling",
    "fuel driver orientation",
    "safe fuel transport",
    "bulk fuel transport",
    "Fuel Hauling Made Easy",
    "Quincy Benton",
  ],
  authors: [{ name: "Quincy Benton" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Fuel Hauling Made Easy — Training & Resources for Fuel Drivers",
    description:
      "Learn how to haul fuel safely. 60+ page workbook covering cross-dump prevention, API color codes, Scully system, loading & unloading, hazmat transportation, spill prevention, and emergency response. By Quincy Benton. Featured in Bulk Transporter.",
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
    title: "Fuel Hauling Made Easy — Training & Resources for Fuel Drivers",
    description:
      "Learn how to haul fuel safely. Cross-dump prevention, API color codes, Scully system, hazmat rules, loading & unloading, spill prevention, and DOT compliance — all in one 60+ page workbook. Featured in Bulk Transporter.",
    images: ["/Fuel Hauling Made Easy - Front Cover - Final Version.jpg"],
  },
};

/* ── Structured data: Course + FAQPage ───────────────────────────
   Course schema signals to Google that this is a training resource.
   FAQPage mirrors the exact question phrasing people search for.
─────────────────────────────────────────────────────────────────*/
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Fuel Hauling Made Easy — Fuel Driver Training",
  description:
    "A 60-plus page hands-on training resource for CDL fuel drivers. Developed with input from veteran fuel haulers and pilot-tested at a technical school in Oklahoma City. Covers cross-dump prevention, API color codes, Scully system use, PPE, compartment loading strategies, loading and unloading procedures, daily checklists, hazmat transportation regulations, spill prevention, and emergency response. Featured in Bulk Transporter, May 2026.",
  provider: {
    "@type": "Organization",
    name: "Vanguard Small Business Consultants, LLC",
    url: "https://certifiedfueltrainer.com",
  },
  url: SITE_URL,
  educationalLevel: "Beginner to Advanced",
  teaches: [
    "Safe fuel transportation",
    "Cross-dump and cross-drop prevention",
    "API color codes for fuel identification",
    "Scully system operation",
    "Compartment loading strategies",
    "PPE requirements for fuel drivers",
    "Hazmat transportation regulations",
    "Tanker setup and inspection",
    "Loading and unloading procedures",
    "Daily driver checklists",
    "Spill prevention",
    "DOT compliance",
    "Emergency response",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "self-paced",
    instructor: {
      "@type": "Person",
      name: "Quincy Benton",
    },
  },
  offers: {
    "@type": "Offer",
    url: AMAZON_URL,
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you haul fuel?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Hauling fuel safely requires a CDL with HazMat and Tanker endorsements, a pre-trip inspection of the tanker, proper loading procedures at the terminal, correct placarding and shipping papers, and adherence to DOT regulations. Fuel Hauling Made Easy walks drivers through every step with practical checklists and real-world scenarios.",
      },
    },
    {
      "@type": "Question",
      name: "How do you transport fuel as a professional driver?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Professional fuel transport starts with understanding the product you're hauling, securing the required endorsements, inspecting and grounding the tanker, following terminal loading procedures, and using the correct unloading sequence at the drop site. The Fuel Hauling Made Easy workbook covers all of this step by step.",
      },
    },
    {
      "@type": "Question",
      name: "What training do you need to haul fuel?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "At minimum you need a CDL Class A or B with a HazMat (H) endorsement and a Tanker (N) endorsement. Beyond licensing, practical training on tanker operations, loading and unloading, spill prevention, and emergency response is essential. Fuel Hauling Made Easy provides that hands-on training in workbook form.",
      },
    },
    {
      "@type": "Question",
      name: "What are the rules for hazmat transportation of fuel?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Gasoline and diesel are Class 3 flammable liquids under the HazMat regulations in 49 CFR. Drivers must display correct placards, carry proper shipping papers, follow restricted routing rules, and be trained in emergency response procedures. Fuel Hauling Made Easy covers these rules in plain language that drivers can actually use on the job.",
      },
    },
    {
      "@type": "Question",
      name: "What is cross-dump prevention and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A cross-dump (or cross-drop) happens when the wrong fuel product is delivered into the wrong storage tank — for example, diesel pumped into a gasoline tank. It is one of the most costly errors in fuel transport, potentially damaging equipment, contaminating product, and creating serious liability. Prevention relies on strict use of API color codes, compartment loading sequences, and pre-delivery confirmation steps. Fuel Hauling Made Easy covers cross-dump prevention in dedicated chapters.",
      },
    },
    {
      "@type": "Question",
      name: "What are API color codes used for in fuel hauling?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "API color codes are a standardized system that assigns specific colors to different petroleum products to prevent misidentification and cross-contamination during loading and delivery. Every fuel driver needs to know these codes before making a single delivery. They are covered in detail in Fuel Hauling Made Easy.",
      },
    },
  ],
};

export default function FuelHaulingEasyLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
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
