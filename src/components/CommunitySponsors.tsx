"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  id: number;
  name: string;
  src: string;
  href?: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 5000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-40 w-[320px] overflow-hidden md:h-[200px] md:w-[400px] lg:h-60 lg:w-[480px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          {currentLogo.href ? (
            <a
              href={currentLogo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center h-full w-full p-2 rounded-lg transition-all duration-300 hover:outline-2 hover:outline-offset-40 hover:outline-primary/70"
            >
              <Image
                className={`mx-auto h-auto w-fit max-h-20 max-w-[200px] object-contain sm:max-h-[100px] sm:max-w-60 transition-transform duration-300 group-hover:scale-105`}
                src={currentLogo.src}
                alt={currentLogo.name}
                height={80}
                width={240}
                style={{ objectFit: "contain" }}
              />
              <span className="text-lg font-semibold text-center text-foreground px-2">
                {currentLogo.name}
              </span>
            </a>
          ) : (
            <div className="group flex flex-col items-center justify-center h-full w-full p-2 rounded-lg transition-all duration-300 hover:outline-2 hover:outline-offset-40 hover:outline-primary/70">
              <Image
                className={`mx-auto h-auto w-fit max-h-20 max-w-[200px] object-contain sm:max-h-[100px] sm:max-w-60 transition-transform duration-300 group-hover:scale-105`}
                src={currentLogo.src}
                alt={currentLogo.name}
                height={80}
                width={240}
                style={{ objectFit: "contain" }}
              />
              <span className="text-lg font-semibold text-center text-foreground px-2">
                {currentLogo.name}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

interface LogoCarouselProps {
  columns?: number;
  logos: Logo[];
}

function CommunitySponsors({ columns = 2, logos }: LogoCarouselProps) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(2);

  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [columns]
  );

  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 py-4">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}
export default CommunitySponsors;
