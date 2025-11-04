"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");
  const [isMobile, setIsMobile] = useState(false);

  const sectionItems = useMemo(
    () => items.filter((item) => item.url.startsWith("#")),
    [items]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = useCallback(
    (hash: string) => {
      const targetId = hash.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const offset = isMobile ? 96 : 120;
      const top = rect.top + scrollTop - offset;

      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    [isMobile]
  );

  useEffect(() => {
    if (!items.length) return;
    if (!items.some((item) => item.name === activeTab)) {
      setActiveTab(items[0].name);
    }
  }, [items, activeTab]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && sectionItems.length) {
      const matched = sectionItems.find((item) => item.url === hash);
      if (matched) {
        setActiveTab(matched.name);
        scrollToSection(hash);
      }
    }
  }, [sectionItems, scrollToSection]);

  useEffect(() => {
    if (!sectionItems.length) return;

    const handleScroll = () => {
      let nextActive = items[0]?.name ?? "";
      const offset = isMobile ? 120 : 160;

      for (const item of sectionItems) {
        const target = document.getElementById(item.url.substring(1));
        if (!target) continue;
        const { top } = target.getBoundingClientRect();
        if (top - offset <= 0) {
          nextActive = item.name;
        }
      }

      if (nextActive && nextActive !== activeTab) {
        setActiveTab(nextActive);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionItems, isMobile, items, activeTab]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: NavItem) => {
      if (item.url.startsWith("#")) {
        event.preventDefault();
        setActiveTab(item.name);
        scrollToSection(item.url);
        window.history.replaceState(null, "", item.url);
      }
    },
    [scrollToSection]
  );

  return (
    <div
      className={cn(
        "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(event) => handleNavClick(event, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.3} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
