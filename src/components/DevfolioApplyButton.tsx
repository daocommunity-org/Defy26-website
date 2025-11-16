"use client";

interface DevfolioApplyButtonProps {
  hackathonSlug: string;
  buttonTheme?: "light" | "dark" | "dark-inverted";
  className?: string;
}

export default function DevfolioApplyButton({
  hackathonSlug,
  buttonTheme = "light",
  className = "",
}: DevfolioApplyButtonProps) {
  // Script is loaded once in layout via DevfolioScript component

  return (
    <div
      className={`apply-button ${className}`}
      data-hackathon-slug={hackathonSlug}
      data-button-theme={buttonTheme}
      style={{ 
        height: "44px", 
        width: "312px"
      }}
    />
  );
}
