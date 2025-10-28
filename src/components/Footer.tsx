"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary text-foreground py-16 px-6 md:px-12 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* --- Left Section --- */}
          <div className="flex flex-col justify-between space-y-8 md:w-1/2 text-center md:text-left">
            <p className="text-4xl md:text-5xl font-semibold leading-tight">
              <span className="text-primary">Building</span> the future,
              <br />
              one line at a time.
            </p>

            <div className="relative w-[250px] h-64 mx-auto md:mx-0">
              <Image
                src="/clubs.svg"
                alt="BIC and Defy 26 Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
              />
            </div>
          </div>

          {/* --- Right Section --- */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
              <a
                href="https://www.linkedin.com/company/daovitcc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6 text-primary" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/defy.26/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6 text-primary" />
                <span>Instagram</span>
              </a>
            </div>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6 text-primary" />
              <span>Twitter</span>
            </a>

            {/* Address */}
            <div className="flex items-start space-x-3 text-left max-w-4xl">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span className="text-muted-foreground">
                Vellore Institute of Technology, Vandalur - Kelambakkam Road,
                Chennai, Tamil Nadu - 600 127
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} Defy 26. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
