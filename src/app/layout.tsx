import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
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
  title: "Defy 26",
  description:
    "DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist.",
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
        <ReactLenis root />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
