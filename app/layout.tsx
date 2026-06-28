import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Caveat, DM_Sans, Playfair_Display, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// --- Font Configs ---
const instrumentSerif = Instrument_Serif({ weight: ["400"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-instrument-serif" });
const caveat = Caveat({ weight: ["500", "600"], subsets: ["latin"], variable: "--font-caveat" });
const dmSans = DM_Sans({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-dm-sans" });
const playfairDisplay = Playfair_Display({ weight: ["600", "700"], subsets: ["latin"], variable: "--font-playfair-display" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz"] });
const plusJakartaSans = Plus_Jakarta_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-plus-jakarta-sans" });

// --- Viewport for Mobile SEO ---
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thesocialmanch.com"),
  title: {
    default: "Social Manch — Strategy-Led Marketing Partner for Growth",
    template: "%s | Social Manch",
  },
  description: "Social Manch is a strategy-led marketing partner for growth-focused businesses. We build scalable marketing engines that drive pipeline, revenue, and predictable growth.",
  alternates: {
    canonical: "https://www.thesocialmanch.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thesocialmanch.com",
    siteName: "Social Manch",
    title: "Social Manch — Strategy-Led Marketing Partner",
    description: "We help growth-focused businesses build structured, scalable marketing systems.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Social Manch Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Manch — Strategy-Led Marketing Partner",
    description: "Marketing engines that drive pipeline and revenue. Scalable, predictable growth.",
  },
  keywords: ["Marketing Strategy Agency", "Demand Generation New Delhi", "B2B Marketing Services", "Social Manch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- JSON-LD Schema for Google Search Consolidation ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Social Manch",
    url: "https://www.thesocialmanch.com",
    logo: "https://www.thesocialmanch.com/logo.png",
    description: "Strategy-led marketing partner for growth-focused businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${caveat.variable} ${dmSans.variable} ${playfairDisplay.variable} ${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}