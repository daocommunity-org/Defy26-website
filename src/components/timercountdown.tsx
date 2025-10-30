import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimeUnit from "./TimeUnit";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Target: November 1st at midnight
      let targetDate = new Date(currentYear, 10, 1, 0, 0, 0, 0);

      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 10, 1, 0, 0, 0, 0);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsComplete(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeRemaining(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 w-full bg-background flex flex-col items-center justify-center p-4 text-center">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-3">
          DEFY <span className="text-primary">26</span> HACKATHON
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground uppercase tracking-wide mb-6">
          <span className="text-primary font-semibold">Defy the Limits</span>
        </p>

        {/* Unique Timer Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
          System Override Begins In ⚡
        </h2>
      </motion.div>

      {/* Countdown Section */}
      <AnimatePresence mode="wait">
        {isComplete ? (
          <motion.div
            key="complete"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-2">
              Time's Up! 🎉
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              November 1st has arrived!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // ✅ Responsive 2×2 grid on mobile, 4-column row on larger screens
            className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6 justify-center"
          >
            <TimeUnit value={timeRemaining.days} label="Days" />
            <TimeUnit value={timeRemaining.hours} label="Hours" />
            <TimeUnit value={timeRemaining.minutes} label="Minutes" />
            <TimeUnit value={timeRemaining.seconds} label="Seconds" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
