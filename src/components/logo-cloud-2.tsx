import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
  noInvert?: boolean;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos?: Logo[];
};

export function LogoCloud({ className, logos = [], ...props }: LogoCloudProps) {
  // Default pattern: alternate between dark green (secondary) and black backgrounds
  // Pattern for 2x4 grid: [green, black, green, black], [black, green, black, green]
  const backgroundPattern = [
    "bg-secondary", // 0: green
    "bg-background", // 1: black
    "bg-secondary", // 2: green
    "bg-background", // 3: black
    "bg-background", // 4: black
    "bg-secondary", // 5: green
    "bg-background", // 6: black
    "bg-secondary", // 7: green
  ];

  // Plus icon positions based on grid position
  const getPlusIcons = (index: number) => {
    const icons: React.ReactElement[] = [];

    // Bottom-right plus for positions 0, 1, 2, 4, 5, 6
    if ([0, 1, 2, 4, 5, 6].includes(index)) {
      icons.push(
        <PlusIcon
          key="br"
          className="text-primary -right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1.5}
        />
      );
    }

    // Bottom-left plus for positions 1, 2, 3, 5, 6 (md only)
    if ([2, 5, 6].includes(index)) {
      icons.push(
        <PlusIcon
          key="bl"
          className="text-primary -bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1.5}
        />
      );
    }

    // Mobile bottom-left for position 4
    if (index === 4) {
      icons.push(
        <PlusIcon
          key="bl-mobile"
          className="text-primary -bottom-[12.5px] -left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1.5}
        />
      );
    }

    return icons;
  };

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-primary/30 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-primary/30" />

      {logos.slice(0, 8).map((logo, index) => {
        const bgClass = backgroundPattern[index] || "bg-background";
        // Mobile: 2 columns (0,1 | 2,3 | 4,5 | 6,7)
        // Desktop: 4 columns (0,1,2,3 | 4,5,6,7)
        const isMobileLastInCol = (index + 1) % 2 === 0;
        const isDesktopLastInCol = (index + 1) % 4 === 0;
        const isMobileLastRow = index >= 6; // Last row on mobile (2 cols)
        const isDesktopLastRow = index >= 4; // Last row on desktop (4 cols)

        return (
          <LogoCard
            key={index}
            className={cn(
              "relative border-primary/30",
              // Bottom borders: all except last row
              !isMobileLastRow && "border-b",
              isDesktopLastRow && "md:border-b-0",
              // Right borders: not last in column
              !isMobileLastInCol && "border-r",
              !isDesktopLastInCol && "md:border-r",
              bgClass
            )}
            logo={logo}
          >
            {getPlusIcons(index)}
          </LogoCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-primary/30" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  const content = (
    <>
      <Image
        alt={logo.alt}
        src={logo.src}
        width={logo.width || 120}
        height={logo.height || 60}
        className={cn(
          "pointer-events-none select-none object-contain",
          logo.noInvert
            ? "brightness-100"
            : "brightness-0 invert md:brightness-100 md:invert-0",
          "h-10 w-auto md:h-14"
        )}
      />
      {children}
    </>
  );

  const baseClassName = cn(
    "flex items-center justify-center px-4 py-8 md:p-10",
    className
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClassName,
          "transition-all duration-300 hover:opacity-80 hover:scale-105"
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={baseClassName}
      {...(props as Omit<React.ComponentProps<"div">, "className">)}
    >
      {content}
    </div>
  );
}
