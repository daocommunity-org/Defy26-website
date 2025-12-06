"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const tape = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="95"
    height="80"
    viewBox="0 0 95 80"
    fill="none"
  >
    <path d="M1 45L70.282 5L88.282 36.1769L19 76.1769L1 45Z" fill="#39ff14" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-8 px-4 max-w-6xl mx-auto">
      <div className="relative bg-black/80 backdrop-blur-sm text-white rounded-3xl px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 border border-primary/20 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
        {/* Tape Decorations */}
        <div className="hidden md:block absolute -top-4 -left-8 w-[80px] h-[36px] scale-75 opacity-60">
          {tape}
        </div>
        <div className="hidden md:block absolute -top-4 -right-8 rotate-90 w-[80px] h-[36px] scale-75 opacity-60">
          {tape}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6 md:gap-16">
          {/* Logo + Description */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-primary hover:opacity-80 transition-opacity duration-200"
            >
              DEFY 26
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Innovate. Code. Collaborate. Join the Defy 26 Hackathon and shape
              the future—one idea at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="uppercase text-sm font-semibold text-primary">
                Explore
              </h4>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <Link
                  href="#tracks"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Tracks
                </Link>
                <Link
                  href="#current-sponsors"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Sponsors
                </Link>
                <Link
                  href="#timeline"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Timeline
                </Link>
                <Link
                  href="#faqs"
                  className="hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="uppercase text-sm font-semibold text-primary">
                Get Involved
              </h4>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <Link
                  href="https://defy-26.devfolio.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Register
                </Link>
                <Link
                  href="https://chat.whatsapp.com/LwsmHH7dfzN0FwPdknMyBV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors duration-200"
                >
                  WhatsApp Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Devfolio & ETHIndia */}
      <div className="mt-6 flex justify-center items-center gap-3 text-sm text-muted-foreground">
        <span className="hover:text-foreground transition-colors duration-200">
          Powered by
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-70 transition-opacity duration-200"
            aria-label="Devfolio"
          >
            <Image
              src="/Devfolio/Devfolio_Logo-White@2x.png"
              alt="DEVFOLIO LOGO"
              width={100}
              height={30}
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <Link
            href="https://ethindia.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-70 transition-opacity duration-200"
            aria-label="ETHIndia"
          >
            <Image
              src="/Devfolio/ethindia-light.png"
              alt="ETHINDIA LOGO"
              width={100}
              height={30}
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p className="hover:text-foreground transition-colors duration-200">
          © {currentYear} Defy 26 Hackathon. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Link
            href="https://www.linkedin.com/company/daovitcc/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-[#0077b5] transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/daocommunity_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-[#E4405F] transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/daocommunity_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-muted-foreground hover:text-white transition-colors duration-200"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
