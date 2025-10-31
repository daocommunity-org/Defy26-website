"use client";
import React from "react";
import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "Tracks", ariaLabel: "Go to tracks section", link: "#tracks" },
  { label: "Timeline", ariaLabel: "Go to timeline section", link: "#timeline" },
  {
    label: "Sponsors",
    ariaLabel: "Go to sponsors section",
    link: "#current-sponsors",
  },
  { label: "FAQs", ariaLabel: "Go to FAQs section", link: "#faqs" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const Navbar = () => {
  return (
    <nav className="navbar-container ">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        isFixed={true}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </nav>
  );
};

export default Navbar;
