"use client";

import FeatureSteps from "@/components/ui/feature-section";

// Timeline events mapped to FeatureSteps format with dates as subheadings
const timelineEvents = [
  {
    step: "Step 1",
    title: "REGISTRATIONS BEGIN",
    date: "17th Nov 2025 (Mon) - 10:00 AM",
    content:
      "Choose a track to compete in and register your team on Devfolio. Teams of 4-6 members only.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "REGISTRATIONS END",
    date: "20th Dec 2025 (Sat) - 11:59 PM",
    content:
      "Submit your PPT for the ideation round before the deadline. Make sure all team members have completed their applications.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "HACKATHON STARTS",
    date: "12th Jan 2026 (Mon) - 09:00 AM",
    content:
      "Shortlisted teams arrive at VIT Chennai for the grand hackathon showdown. Let the coding begin!",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "HACKATHON ENDS",
    date: "13th Jan 2026 (Tue) - 03:30 PM",
    content:
      "Final submissions, presentations, and judging. Results will be announced with top teams presenting their prototypes and investor-ready pitch decks.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function RadialOrbitalTimeline() {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 overflow-visible bg-background text-foreground min-h-screen">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12 sm:mb-16 md:mb-20 lg:mb-24 tracking-wide text-center text-primary px-4">
        EVENT TIMELINE
      </h2>

      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <FeatureSteps
          features={timelineEvents}
          title=""
          autoPlayInterval={5000}
          className="p-0"
        />
      </div>
    </section>
  );
}
