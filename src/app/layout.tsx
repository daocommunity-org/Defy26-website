import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import ReactLenis from "lenis/react";
import { Footer } from "@/components/footer-taped-design";

import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeFy'26 - Web3 Hackathon | Defy The Limits | VIT Chennai",
  description:
    "Join DeFy'26, India's premier Web3 hackathon at VIT Chennai. Build innovative Web3 startups, compete for prizes, and network with industry experts. January 12-13, 2026.",
  keywords: [
    "hackathon",
    "Web3",
    "blockchain",
    "DeFi",
    "cryptocurrency",
    "startup",
    "VIT Chennai",
    "DeFy 26",
    "Web3 hackathon",
    "blockchain hackathon",
    "tech competition",
    "innovation",
    "entrepreneurship",
    "coding competition",
  ],
  authors: [{ name: "DeFy'26 Team" }],
  creator: "DeFy'26",
  publisher: "DeFy'26",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dey26.daocommunity.in"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DeFy'26 - Web3 Hackathon | Defy The Limits",
    description:
      "Join India's premier Web3 hackathon at VIT Chennai. Build innovative Web3 startups and compete for exciting prizes. January 12-13, 2026.",
    url: "https://dey26.daocommunity.in", // Replace with actual domain
    siteName: "DeFy'26",
    images: [
      {
        url: "/defy26.png", // Main logo/hero image
        width: 1200,
        height: 630,
        alt: "DeFy'26 Web3 Hackathon Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFy'26 - Web3 Hackathon | Defy The Limits",
    description:
      "Join India's premier Web3 hackathon at VIT Chennai. Build innovative Web3 startups and compete for prizes.",
    images: ["/defy26.png"], // Same hero image
    creator: "@defy_2026", // Replace with actual Twitter handle
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
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bungee.variable} ${bebasNeue.variable} antialiased`}
      >
        <Analytics />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "DeFy'26 Web3 Hackathon",
              description:
                "India's premier Web3 hackathon bringing together developers, entrepreneurs, and innovators to build the future of decentralized technology.",
              startDate: "2026-01-12T09:00:00+05:30",
              endDate: "2026-01-13T15:30:00+05:30",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "VIT Chennai",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Chennai",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "DeFy'26 Team",
                url: "https://dey26.daocommunity.in",
              },
              offers: {
                "@type": "Offer",
                url: "https://defy-26.devfolio.co/",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                validFrom: "2025-12-01",
              },
              keywords:
                "hackathon, Web3, blockchain, DeFi, startup, VIT Chennai, innovation",
              image: "https://dey26.daocommunity.in/defy26.png",
            }),
          }}
        />

        <ReactLenis root />
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
