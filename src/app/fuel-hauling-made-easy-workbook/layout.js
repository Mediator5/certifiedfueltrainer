/**
 * layout.js  —  /src/app/fuel-hauling-made-easy-workbook/layout.js
 *
 * Server component. Exports SEO metadata for the workbook page
 * (the page itself is "use client" and can't export metadata).
 *
 * Also injects JSON-LD structured data (Book schema + FAQPage)
 * so Google understands the entity and can show rich results
 * for queries like:
 *   - "How do you haul fuel"
 *   - "How do you transport fuel"
 *   - "Fuel transportation"
 *   - "Hazmat transportation"
 *   - "Fuel Hauling Made Easy"
 */

const AMAZON_URL =
  "https://www.amazon.com/FUEL-HAULING-MADE-EASY-Consultants/dp/B0H1MV7DS6";
const SITE_URL =
  "https://certifiedfueltrainer.com/fuel-hauling-made-easy-workbook";

export const metadata = {
  title:
    "Fuel Hauling Made Easy: The Simple Guide to Safe Fuel Transport (Student Workbook)",
  description:
    "Fuel Hauling Made Easy is a hands-on student workbook that teaches you exactly how to haul fuel safely — covering fuel transportation, tanker setups, loading/unloading, hazmat transportation rules, spill prevention, and DOT-compliant procedures. Written by Quincy Benton and prepared by Vanguard Small Business Consultants, LLC.",
  keywords: [
    "Fuel Hauling Made Easy",
    "how do you haul fuel",
    "how do you transport fuel",
    "fuel transportation",
    "hazmat transportation",
    "safe fuel transport",
    "fuel hauling workbook",
    "fuel tanker training",
    "fuel hauler training",
    "CDL fuel hauling",
    "Quincy Benton",
    "Vanguard Small Business Consultants",
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
      "A complete, real-world student workbook that shows you how to haul fuel safely. Covers fuel transportation, hazmat transportation, tanker setups, loading & unloading, spill prevention, and emergency response. By Quincy Benton.",
    siteName: "Certified to Lead",
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
      "Learn how to haul fuel safely. Hands-on student workbook covering fuel transportation, hazmat transportation, loading, unloading, and spill prevention.",
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

/* ── Structured data: Book + FAQPage ─────────────────────────
   FAQPage uses the exact question phrasing the user wants to
   rank for, which gives Google clean text to surface in SERPs.
─────────────────────────────────────────────────────────────*/
const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Fuel Hauling Made Easy: The Simple Guide to Safe Fuel Transport",
  alternateName: "Safe Fuel Transport Student Workbook Edition",
  bookFormat: "https://schema.org/Paperback",
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
  },
  publisher: {
    "@type": "Organization",
    name: "Vanguard Small Business Consultants, LLC",
  },
  about: [
    "Fuel transportation",
    "Hazmat transportation",
    "Fuel hauling",
    "Tanker truck safety",
    "Loading and unloading procedures",
    "Spill prevention",
    "DOT compliance",
  ],
  description:
    "Fuel Hauling Made Easy is a hands-on student workbook that teaches drivers how to transport fuel safely. It covers tanker setups, safety fundamentals, loading and unloading, emergency response, and over 100 practical professional tips. Designed for new drivers and experienced haulers alike, it includes real-life scenarios, checklists, and exercises to reinforce every concept.",
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
      name: "How do you haul fuel safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Safely hauling fuel starts with a thorough pre-trip inspection of your tanker, confirming product compatibility, following proper loading procedures at the terminal, securing the load, driving defensively with extra following distance, and using the correct unloading sequence at the drop site. The Fuel Hauling Made Easy workbook breaks every one of these steps down into a checklist a driver can use on the job.",
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
          "Fuel Hauling Made Easy is written for new drivers stepping into fuel hauling for the first time, experienced haulers who want to sharpen their skills, and carriers building or improving an in-house training program. It is structured as a student workbook with chapters, scenarios, checklists, and exercises.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy Fuel Hauling Made Easy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Fuel Hauling Made Easy is available in paperback on Amazon. It was prepared by Vanguard Small Business Consultants, LLC and authored by Quincy Benton.",
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
