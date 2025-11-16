"use client";

import DevfolioApplyButton from "@/components/DevfolioApplyButton";

export default function DevfolioStickyButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DevfolioApplyButton 
        hackathonSlug="defy-26" 
        buttonTheme="dark"
      />
    </div>
  );
}

