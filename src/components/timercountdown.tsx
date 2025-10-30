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
      
      let targetDate = new Date(currentYear, 10, 1, 0, 0, 0, 0);
      
      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 10, 1, 0, 0, 0, 0);
      }
      
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsComplete(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
    <div className="py-24 w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
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
              <h1 className="text-6xl md:text-8xl font-bold text-[#39ff14] mb-4">
                Time's Up! 🎉
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                November 1st has arrived!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 md:space-y-12 text-center"
            >
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <TimeUnit value={timeRemaining.days} label="Days" />
                <TimeUnit value={timeRemaining.hours} label="Hours" />
                <TimeUnit value={timeRemaining.minutes} label="Minutes" />
                <TimeUnit value={timeRemaining.seconds} label="Seconds" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
