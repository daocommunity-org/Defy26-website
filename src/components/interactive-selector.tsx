"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaTrophy,
  FaRocket,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const options = useMemo(
    () => [
      {
        title: "Defi",
        description: "Build decentralized financial solutions",
        image: "defy-track.png",
        icon: <FaCode size={20} className="text-primary" />,
      },
      {
        title: "Public goods",
        description: "Create solutions for the community",
        image: "publicGoods.png",
        icon: <FaUsers size={20} className="text-primary" />,
      },
      {
        title: "Open Innovation",
        description: "Innovate without boundaries",
        image: "openInnovation.png",
        icon: <FaRocket size={20} className="text-primary" />,
      },
    ],
    []
  );

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOptionClick(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 text-center">
        <h2 className="text-3xl tracking-wider sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3 sm:mb-4 tracking-tight animate-fadeInTop delay-300">
          Choose Your <span className="text-primary">Track</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-3xl mx-auto animate-fadeInTop delay-600">
          Pick a track that matches your skills and passion. Build innovative
          solutions and compete for amazing prizes.
        </p>
      </div>

      {/* Options Container - Mobile First Responsive */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Mobile: Stacked Cards */}
        <div className="flex flex-col gap-4 sm:hidden">
          {options.map((option, index) => (
            <button
              key={index}
              className={`
                relative w-full overflow-hidden rounded-xl transition-all duration-500 ease-out cursor-pointer text-left
                border-2 border-primary shadow-lg shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
              `}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: animatedOptions.includes(index) ? 1 : 0,
                transform: animatedOptions.includes(index)
                  ? "translateY(0)"
                  : "translateY(20px)",
                height: activeIndex === index ? "17rem" : "5.5rem",
                transition:
                  "height 0.5s ease, transform 0.5s ease, opacity 0.5s ease",
              }}
              type="button"
              onClick={() => handleOptionClick(index)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              aria-expanded={activeIndex === index}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/20 pointer-events-none"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-primary/30 shrink-0">
                    {option.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-foreground leading-tight">
                      {option.title}
                    </h3>
                  </div>
                  <FaChevronDown
                    size={16}
                    className={`text-primary transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={`mt-3 overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                    activeIndex === index
                      ? "max-h-32 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-tight">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Tablet & Desktop: Horizontal Expandable */}
        <div className="hidden sm:flex gap-2 md:gap-3 h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-2 md:p-3">
          {options.map((option, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl transition-all duration-700 ease-in-out cursor-pointer
                ${activeIndex === index ? "flex-6" : "flex-1"}
              `}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: animatedOptions.includes(index) ? 1 : 0,
                transform: animatedOptions.includes(index)
                  ? "translateX(0)"
                  : "translateX(-40px)",
                zIndex: activeIndex === index ? 20 : 10,
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Overlay with gradient */}
              <div
                className={`
                  absolute inset-0 transition-all duration-700 pointer-events-none
                  ${
                    activeIndex === index
                      ? "bg-linear-to-t from-background via-background/60 to-transparent"
                      : "bg-background/70"
                  }
                `}
              ></div>

              {/* Border glow for active */}
              {activeIndex === index && (
                <div className="absolute inset-0 border-2 border-primary rounded-xl shadow-lg shadow-primary/30 pointer-events-none"></div>
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-3 md:p-4 lg:p-6">
                <div className="flex items-start gap-2 md:gap-3">
                  <div
                    className={`
                      flex items-center justify-center rounded-full bg-background/90 backdrop-blur-sm border shrink-0 transition-all duration-300
                      ${
                        activeIndex === index
                          ? "w-10 h-10 md:w-12 md:h-12 border-primary/50 shadow-lg shadow-primary/20"
                          : "w-8 h-8 md:w-10 md:h-10 border-border"
                      }
                    `}
                  >
                    {option.icon}
                  </div>
                  <div
                    className={`
                      flex-1 min-w-0 transition-all duration-700
                      ${
                        activeIndex === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-6"
                      }
                    `}
                  >
                    <h3 className="font-bold text-base md:text-lg lg:text-xl text-foreground leading-tight mb-1">
                      {option.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-tight">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
