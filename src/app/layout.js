import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Certified Fuel Trainer — Fuel Hauling Training & Certification",
    template: "%s | Certified Fuel Trainer",
  },
  description:
    "Certified Fuel Trainer offers professional fuel hauling training — including the Fuel Hauling Made Easy student workbook and the Certified to Lead™ trainer workshop. Learn safe fuel transport, hazmat transportation, and DOT-compliant best practices.",
  metadataBase: new URL("https://certifiedfueltrainer.com"),
  openGraph: {
    siteName: "Certified Fuel Trainer",
    locale: "en_US",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
