"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, XCircle, Users, Trophy } from "lucide-react";
import { useState, Fragment, useEffect } from "react";

const events = [
  {
    title: "REGISTRATIONS OPEN",
    desc: "Choose a track to compete in and register your team.",
    date: "5th Dec, 2023",
    icon: Calendar,
  },
  {
    title: "IDEATION ROUND",
    desc: "Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register.",
    date: "5th Dec, 2023 - 15th Jan, 2024",
    icon: FileText,
  },
  {
    title: "SUBMISSIONS CLOSE",
    desc: "Sit back and relax while the judges go through your submissions.",
    date: "15th Jan, 2024",
    icon: XCircle,
  },
  {
    title: "SHORTLIST ANNOUNCEMENT",
    desc: "The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai.",
    date: "17th Jan, 2024",
    icon: Users,
  },
  {
    title: "INTO THE ENDGAME",
    desc: "Top teams will contend against each other in this 36-hour hack — where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck.",
    date: "22nd, 23rd & 24th Jan, 2024",
    icon: Trophy,
  },
];

export default function RadialOrbitalTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [measuredTop, setMeasuredTop] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    // measure popup element by id after it's rendered
    const id = `timeline-popup-${activeIndex}`;
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      // store the height for better clamping
      setMeasuredTop(rect.height);
    }
  }, [activeIndex]);

  return (
  <section className="relative flex flex-col items-center justify-center py-32 overflow-visible bg-background text-foreground min-h-screen">
      <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-wide text-center text-primary">
        Event Timeline
      </h2>

      {/* Desktop Radial View */}
      <div className="relative w-[800px] h-[800px] hidden md:flex items-center justify-center">
        {/* Orbital Ring - the thin circle */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/30" />

        {/* Center Circle with Gradient */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-2xl shadow-primary/50">
          <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm" />
        </div>

        {/* Event Nodes - orbiting around the ring */}
        {events.map((event, i) => {
          const totalEvents = events.length;
          const initialAngle = (i / totalEvents) * 2 * Math.PI - Math.PI / 2; // Start from top
          const ringRadius = 300; // Half of 600px ring
          
          const Icon = event.icon;
          const isActive = activeIndex === i;

          // Popup placement math (clamped inside the 800x800 container)
          const center = 400; // center point of the container
          const popupWidth = 260;
          const popupApproxHeight = 220; // used for simple vertical clamp (slightly larger)
          const gap = 12; // space between icon and popup
          const baseX = Math.cos(initialAngle) * ringRadius; // icon center x relative to center
          const baseY = Math.sin(initialAngle) * ringRadius; // icon center y relative to center

          // Prefer placing popup to the right for right-half icons and to the left for left-half.
          const rawLeft = baseX > 0
            ? baseX + 32 + gap // icon center + half icon + gap
            : baseX - popupWidth - 32 - gap; // icon center - popup width - half icon - gap

          // Clamp left so popup stays within the 0..800 container when converted to absolute coordinates
          // Increase left padding to prevent clipping and provide a fallback side-flip
          const minAbsLeft = 48; // increased padding from container left to avoid cut-off
          const maxAbsLeft = 800 - popupWidth - 48; // padding from right
          let absLeft = Math.min(Math.max(center + rawLeft, minAbsLeft), maxAbsLeft);

          // If the preferred side got clamped too close to an edge, try flipping the popup to the other side
          const wasClampedLeft = absLeft === minAbsLeft;
          const wasClampedRight = absLeft === maxAbsLeft;
          if (wasClampedLeft || wasClampedRight) {
            const altRawLeft = baseX > 0
              ? baseX - popupWidth - 32 - gap
              : baseX + 32 + gap;
            const altAbsLeft = Math.min(Math.max(center + altRawLeft, minAbsLeft), maxAbsLeft);
            // Use the alternative if it yields a position further from the nearest edge
            const distToEdge = Math.min(absLeft - minAbsLeft, maxAbsLeft - absLeft);
            const altDistToEdge = Math.min(altAbsLeft - minAbsLeft, maxAbsLeft - altAbsLeft);
            if (altDistToEdge > distToEdge) {
              absLeft = altAbsLeft;
            }
          }

          const leftRelative = absLeft - center; // convert back to left relative to the same positioned parent

          // Vertical position: prefer placing above for bottom-half icons, otherwise place below
          const prefersAbove = baseY > 0; // positive baseY = below center
          const rawTop = prefersAbove
            ? baseY - popupApproxHeight - 32 - gap // initial plan: place above the icon
            : baseY + 32 + gap; // initial plan: place below the icon

          // If we've measured a previous popup height (measuredTop), use it for better clamping
          const measuredHeightToUse = measuredTop ?? popupApproxHeight;
          const minAbsTop = 12;
          const maxAbsTop = 800 - measuredHeightToUse - 12;
          const absTop = Math.min(Math.max(center + rawTop, minAbsTop), maxAbsTop);
          const topRelative = absTop - center;

          return (
            <div key={i}>
              {/* Icon Container (static) */}
              <div
                className="absolute"
                style={{
                  left: "400px",
                  top: "400px",
                  transformOrigin: "0 0",
                }}
              >
                {/* Icon positioned at orbital distance */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="absolute cursor-pointer z-10"
                  style={{
                    left: `${Math.cos(initialAngle) * ringRadius - 32}px`,
                    top: `${Math.sin(initialAngle) * ringRadius - 32}px`,
                  }}
                >
                  <div className="w-16 h-16">
                    <div
                      className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-card border-primary shadow-xl shadow-primary/60 scale-125"
                          : "bg-[#1a1a1a] border-gray-700 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 transition-colors ${
                          isActive ? "text-primary" : "text-gray-400"
                        }`}
                      />
                    </div>

                    {/* Event Title - positioned below icon */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 text-center transition-opacity max-w-[150px] top-20 ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <p className={`text-xs font-semibold tracking-wide ${
                        isActive ? "text-foreground" : "text-gray-500"
                      }`}>
                        {event.title}
                      </p>
                    </div>
                  </div>

                  {/* Popup Card - rendered inside the same rotating parent so it orbits with the icon */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-50"
                      style={{
                        left: `${leftRelative}px`,
                        top: `${topRelative}px`,
                        width: `${popupWidth}px`,
                      }}
                      id={`timeline-popup-${i}`}>
                      <div className="bg-card border-2 border-primary/50 rounded-2xl p-6 w-full shadow-2xl shadow-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          {event.title}
                        </h3>
                        <p className="text-sm text-foreground leading-relaxed mb-3">
                          {event.desc}
                        </p>
                        <p className="text-xs text-primary/80 font-medium">
                          {event.date}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-8 md:hidden px-6 w-full max-w-lg">
        {events.map((event, i) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-2 border-primary/30 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    {event.desc}
                  </p>
                  <p className="text-xs text-primary/80 font-medium">
                    {event.date}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
