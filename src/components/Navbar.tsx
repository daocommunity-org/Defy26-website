"use client";

import React from "react";
import { Home, Sparkles, Clock3, Handshake, HelpCircle } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Tracks", url: "#tracks", icon: Sparkles },
  { name: "Timeline", url: "#timeline", icon: Clock3 },
  { name: "Sponsors", url: "#current-sponsors", icon: Handshake },
  { name: "FAQs", url: "#faqs", icon: HelpCircle },
];

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavBar items={navItems} />
    </nav>
  );
};

export default Navbar;
