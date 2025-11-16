"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

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
    <footer className="my-8 px-4 max-w-6xl mx-auto text-gray-900">
      <div className="relative bg-black text-white rounded-3xl px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
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
              className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              DEFY 26
            </Link>
            <p className="text-gray-400 max-w-sm">
              Innovate. Code. Collaborate. Join the Defy 26 Hackathon and shape
              the future—one idea at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="uppercase text-sm font-semibold text-gray-400">
                Explore
              </h4>
              <div className="flex flex-col gap-2 text-gray-300">
                <Link href="/about">About</Link>
                <Link href="/schedule">Schedule</Link>
                <Link href="/tracks">Tracks</Link>
                <Link href="/sponsors">Sponsors</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="uppercase text-sm font-semibold text-gray-400">
                Get Involved
              </h4>
              <div className="flex flex-col gap-2 text-gray-300">
                <Link href="/register">Register</Link>
                <Link href="/volunteer">Volunteer</Link>
                <Link href="/mentor">Become a Mentor</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Devfolio & ETHIndia */}
      <div className="mt-6 flex justify-center items-center gap-3 text-sm text-gray-500">
        <span className="text-gray-600">Powered by</span>
        <div className="flex items-center gap-4">
          <Link
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
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
            className="flex items-center hover:opacity-80 transition-opacity"
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
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {currentYear} Defy 26 Hackathon. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-purple-400"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-pink-400"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
