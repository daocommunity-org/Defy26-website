"use client";
import React from "react";
import DomeGallery from "./DomeGallery";

const Defy25Memories = () => {
  // Placeholder images for Defy 25 memories
  const defy25Images = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      alt: "Defy 25 Hackathon Opening Ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      alt: "Teams Coding Together",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      alt: "Mentorship Sessions",
    },
    {
      src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80",
      alt: "Project Presentations",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Team Collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1559223607-a43c990c428a?auto=format&fit=crop&w=800&q=80",
      alt: "Winners Announcement",
    },
    {
      src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80",
      alt: "Networking Sessions",
    },
    {
      src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80",
      alt: "Workshop Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      alt: "Closing Ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1499159058454-75067059248a?auto=format&fit=crop&w=800&q=80",
      alt: "Happy Participants",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/5 via-primary/5 to-secondary/5 pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight">
          Defy <span className="text-primary">25</span> Memories
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
          Relive the unforgettable moments from last year&apos;s hackathon.
          Witness the innovation, collaboration, and creativity that defined
          Defy 25.
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          <div className="h-px w-12 sm:w-16 md:w-20 bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="h-px w-12 sm:w-16 md:w-20 bg-primary"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
              500+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground text-center">
              Participants
            </div>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
              120+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground text-center">
              Projects
            </div>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
              36
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground text-center">
              Hours
            </div>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
              $50K
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground text-center">
              Prize Pool
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative z-10 w-full mx-auto">
        <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
          {/* Gallery Container - Optimized for smooth performance */}
          <DomeGallery images={defy25Images} />

          {/* Instruction overlay */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-9999 pointer-events-none">
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-background/90 backdrop-blur-md border border-primary/40 shadow-lg shadow-primary/20">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">
                Drag horizontally • Click to enlarge
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20 text-center">
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 sm:mb-8">
          Ready to create new memories at Defy 26?
        </p>
        <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold text-background bg-primary rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
          Register Now
          <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:blur-2xl transition-all duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default Defy25Memories;
