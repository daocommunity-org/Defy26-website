"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedGroup } from "@/components/ui/animated-group";

export interface SponsorLogo {
  src: string;
  alt: string;
  height: number;
  href: string;
  noInvert?: boolean;
}

interface CurrentSponsorsProps {
  sponsors: SponsorLogo[];
  className?: string;
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function CurrentSponsors({ sponsors = [], className }: CurrentSponsorsProps) {
  return (
    <section className={`bg-background pb-16 pt-16 md:pb-32 ${className ?? ""}`}>
      <div className="group relative m-auto max-w-5xl px-6">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-x-24 gap-y-20 sm:grid-cols-4 transition-all duration-500"
        >
          {sponsors.map((logo, index) => (
            <Link
              href={logo.href}
              key={index}
              className="group flex h-[100px] items-center justify-center rounded-lg p-4 transition-all duration-300 hover:outline hover:outline-2 hover:outline-offset-40 hover:outline-primary/70" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={`mx-auto h-auto w-fit max-h-[80px] max-w-[200px] object-contain sm:max-h-[100px] sm:max-w-[240px] ${logo.noInvert ? '' : 'dark:invert'} transition-transform duration-300 group-hover:scale-105`}
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width={240}
                style={{ objectFit: "contain" }}
              />
            </Link>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}