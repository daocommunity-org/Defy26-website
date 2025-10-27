"use client";

import { useEffect, useState } from "react";

interface TimerComponentProps {
  targetDate?: Date;
  onRegisterClick?: () => void;
}

export function TimerComponent({
  targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  onRegisterClick,
}: TimerComponentProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent via-accent/50 to-transparent opacity-20 blur-xl" />

        {/* Main timer box */}
        <div className="absolute inset-0 rounded-lg border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm flex items-center justify-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent font-mono">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative  w-full overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">The countdown to</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                Innovation Starts
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for an extraordinary 48-hour hackathon where creativity
              meets technology. Build, innovate, and compete for amazing prizes.
            </p>
          </div>

          {/* Timer */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 py-12">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={onRegisterClick}
              className="group relative px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 overflow-hidden"
            >
              {/* Button background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 rounded-full" />

              {/* Animated shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              {/* Button text */}
              <span className="relative flex items-center justify-center gap-2 text-primary">
                Register Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button className="px-8 py-4 rounded-full font-semibold text-base sm:text-lg border border-accent/30 text-primary hover:bg-accent/10 transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-accent/10">
            {[
              { label: "Participants", value: "500+" },
              { label: "Prize Pool", value: "$50K" },
              { label: "Hours", value: "48" },
              { label: "Workshops", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
