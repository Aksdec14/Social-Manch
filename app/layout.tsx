import type { Metadata } from "next";
import { Instrument_Serif, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const caveat = Caveat({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Social Manch — Strategy-Led Marketing Partner",
    template: "%s | Social Manch",
  },
  description:
    "Social Manch is a strategy-led marketing partner for growth-focused businesses. We go beyond campaigns — building scalable marketing engines that drive pipeline, revenue, and predictable growth.",
  keywords: [
    "Social Manch",
    "Marketing Strategy",
    "Digital Marketing",
    "Lead Generation",
    "Demand Generation",
    "Content Marketing",
    "Brand Marketing",
    "Email Marketing",
    "Public Relations",
    "Event Marketing",
    "Marketing Consulting",
    "New Delhi",
  ],
  authors: [{ name: "Social Manch", url: "https://www.linkedin.com/company/social-manch/" }],
  creator: "Social Manch",
  publisher: "Social Manch",
  metadataBase: new URL("https://socialmanch.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://socialmanch.com",
    siteName: "Social Manch",
    title: "Social Manch — Get the Social Media Attention Your Brand Deserves",
    description:
      "We help growth-focused businesses build structured, scalable marketing systems — aligned directly with sales pipeline and revenue outcomes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Manch — Strategy-Led Marketing Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Manch — Strategy-Led Marketing Partner",
    description:
      "Get the social media attention your brand deserves. Strategy, content, demand gen & more — built for growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${caveat.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}