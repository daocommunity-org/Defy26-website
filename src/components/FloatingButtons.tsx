"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil, Users, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FloatingButtons() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      {/* Toggle Button */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="self-end"
      >
        {isCollapsed ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronUp className="h-4 w-4" />
        )}
      </Button>

      {/* Buttons - only show if not collapsed */}
      {!isCollapsed && (
        <>
          <Button asChild className="w-full sm:w-auto">
            <Link
              href="https://defy.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Register Now
            </Link>
          </Button>

          <Button variant="secondary" asChild className="w-full sm:w-auto">
            <Link
              href="https://discord.gg/daocommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Users className="mr-2 h-4 w-4" />
              Join Community
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
