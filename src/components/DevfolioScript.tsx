"use client";

import { useEffect } from "react";

export default function DevfolioScript() {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://apply.devfolio.co/v2/sdk.js"]'
    );
    
    if (!existingScript) {
      // Load Devfolio SDK script once for the entire app
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

