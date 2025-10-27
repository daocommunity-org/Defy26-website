import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#111111] border-t-2 border-primary text-[#ccff99] py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          <div className="flex flex-col justify-between space-y-8 md:w-1/2">
            <p className="text-4xl md:text-5xl text-white font-medium leading-tight">
              <span className="text-primary">Building</span> the future,
              <br />
              one line at a time.
            </p>

            {/* --- FIXES APPLIED HERE --- */}
            {/* 1. Added mx-auto to center the div */}
            {/* 2. Changed w-250 to w-[250px] */}
            {/* 3. Corrected items-centre to items-center */}
            <div className="relative w-[250px] h-64 items-center mx-auto">
              <Image
                src="/clubs.svg"
                alt="BIC and Defy 26 Logo"
                fill 
                // 4. Changed objectPosition from "left" to "center"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2"> 
            
            {/* --- NEW LAYOUT FOR SOCIALS --- */}
            {/* Wrapper for the first row of socials */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
              <a
                href="https://www.linkedin.com/company/daovitcc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <Linkedin className="w-10 h-10 text-primary" />
                <span className="text-3xl">DeFy26's LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/defy.26/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <Instagram className="w-10 h-10 text-primary" />
                <span className="text-3xl">DeFy26's Instagram</span> 
              </a>
            </div>

            {/* Twitter on its own line */}
            <a
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-primary transition-colors"
            >
              <Twitter className="w-10 h-10 text-primary" /> 
              <span className="text-3xl">DeFy26's Twitter</span> 
            </a>
            {/* --- END OF SOCIALS LAYOUT --- */}

            <div className="flex items-start space-x-3 text-left max-w-4xl">
              <MapPin className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
              <span className="text-3xl"> 
                Vellore Institute of Technology, Vandalur - Kelambakkam Road,
                Chennai, Tamil Nadu - 600 127
              </span>
            </div>  

            <p className="text-base text-[#ccff99]">
              © Copyright {currentYear}. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;