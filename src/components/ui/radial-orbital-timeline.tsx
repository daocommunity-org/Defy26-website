"use client";

import FeatureSteps from "@/components/ui/feature-section";

// Timeline events mapped to FeatureSteps format with dates as subheadings
const timelineEvents = [
  {
    step: "Step 1",
    title: "REGISTRATIONS OPEN",
    date: "5th Dec, 2023",
    content: "Choose a track to compete in and register your team.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "IDEATION ROUND",
    date: "5th Dec, 2023 - 15th Jan, 2024",
    content: "Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "SUBMISSIONS CLOSE",
    date: "15th Jan, 2024",
    content: "Sit back and relax while the judges go through your submissions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "SHORTLIST ANNOUNCEMENT",
    date: "17th Jan, 2024",
    content: "The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 5",
    title: "INTO THE ENDGAME",
    date: "22nd, 23rd & 24th Jan, 2024",
    content: "Top teams will contend against each other in this 36-hour hack — where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function RadialOrbitalTimeline() {
  return (
    <section className="relative flex flex-col items-center justify-center py-32 overflow-visible bg-background text-foreground min-h-screen">
      <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-wide text-center text-primary">
        EVENT TIMELINE
      </h2>
      
      <div className="w-full max-w-7xl px-4">
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
