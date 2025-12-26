"use client";

import { Faqs } from "@/components/Faqs";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Timeline } from "@/components/ui/timeline";
import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroVideo,
} from "@/components/animated-video-on-scroll";
import { GetStartedButton } from "@/components/ui/get-started-button";
import CommunitySponsors from "@/components/CommunitySponsors";
// 🎯 Import the new CountdownTimer component (assuming it's in components/)
import CountdownTimer from "@/components/timercountdown";
import { DefyInfoSection } from "@/components/HackathonShowcase";
import LogoLoop from "@/components/LogoLoop";
import InteractiveSelector from "@/components/interactive-selector";
import Defy25Memories from "@/components/Defy25Memories";
import DevfolioApplyButton from "@/components/DevfolioApplyButton";
import { cn } from "@/lib/utils";

const scheduleData = [
  {
    title: "12th January 2026 - Day 1",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">9:00 AM</span>
          <span>Reporting</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">10:00 AM</span>
          <span>Closing</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">11:00 AM</span>
          <span>Speaker Session</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">11:30 AM - 12:45 PM</span>
          <span>Lunch</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">12:50 PM - 1:30 PM</span>
          <span>Speaker Session</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">1:30 PM</span>
          <span>Hackathon Commences</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">7:30 PM - 9:00 PM</span>
          <span>Dinner</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">9:00 PM - 10:30 PM</span>
          <span>Student Evaluation (Internal)</span>
        </div>
      </div>
    ),
  },
  {
    title: "13th January 2026 - Day 2",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">11:30 AM - 1:00 PM</span>
          <span>Senior Judge Evaluation</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">1:00 PM - 1:30 PM</span>
          <span>Lunch</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">1:45 PM</span>
          <span>Hackathon Ends / Results (Top 9 Teams)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">2:00 PM - 2:45 PM</span>
          <span>Pitching Round</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-semibold">3:00 PM - 3:30 PM</span>
          <span>Results</span>
        </div>
      </div>
    ),
  },
];

const currentSponsorLogosForGrid = [
  {
    src: "/Devfolio/ethindia-light.png",
    alt: "ETHINDIA LOGO",
    href: "https://ethindia.co",
    height: 80,
    noInvert: false,
  },
  {
    src: "/thinkroot.png",
    alt: "Think Root",
    href: "https://thinkroot.in",
    height: 80,
    noInvert: false,
  },
];

const previousSponsorLogos = [
  {
    src: "/Sponsors/zkwalletlogo.png",
    alt: "ZKWallet",
    href: "https://zkinnovations.com",
  },
  {
    src: "/Sponsors/gizmolablogo.png",
    alt: "Gizmolab",
    href: "https://www.gizmolab.io",
  },
  {
    src: "/Sponsors/mtutorlogo.png",
    alt: "MTutor",
    href: "https://www.m-tutor.com/",
  },
  {
    src: "/Sponsors/moilogo.png",
    alt: "MOI Technology",
    href: "https://moi.technology/",
  },
  {
    src: "/Sponsors/krypcorelogo.png",
    alt: "Krypcore",
    href: "https:krypcore.com",
  },
  {
    src: "/Sponsors/qoneqtlogo.png",
    alt: "Qoneqt",
    href: "https://qoneqt.com",
  },
  {
    src: "/Sponsors/quicknodelogo.png",
    alt: "QuickNode",
    href: "https://www.quicknode.com/",
  },
  {
    src: "/Sponsors/quilauditslogo.png",
    alt: "Quillaudits",
    href: "https://www.quillaudits.com/smart-contract-audit",
  },
];

const communitySponsorLogos = [
  {
    id: 0,
    name: "Odisha DAO",
    src: "/odishadao.png",
    alt: "Odisha DAO",
    href: "/",
  },
  {
    id: 1,
    name: "Community",
    src: "/community.png",
    alt: "Community",
    href: "/",
  },
];

export default function Home() {
  return (
    <>
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        <PromptingIsAllYouNeed />
      </section> */}
      <section id="home">
        <ContainerScroll className="h-[200vh] sm:h-[220vh] md:h-[240vh] lg:h-[250vh]">
          <ContainerSticky
            style={{}}
            className="bg-background px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 text-foreground min-h-screen flex flex-col justify-center"
          >
            <ContainerAnimated className="space-y-4 md:space-y-6 text-center max-w-5xl mx-auto px-4 flex-1 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl font-bold  leading-tight">
                Defy <span className="text-primary"> The Limits </span>
              </h1>
              <p className="mx-auto max-w-[42ch] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8">
                Code. Create. Conquer. Join the Defy 26 Hackathon and push
                innovation beyond limits.
              </p>
            </ContainerAnimated>

            <ContainerInset className="max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
              <HeroVideo
                src="defy26trailer.mp4"
                data-src="defy26trailer.mp4"
                className="rounded-xl border-2 border-primary/20 shadow-2xl shadow-primary/10 w-full h-full object-cover"
              />
            </ContainerInset>

            <ContainerAnimated
              transition={{ delay: 0.4 }}
              outputRange={[-120, 0]}
              inputRange={[0, 0.7]}
              className="mx-auto w-fit flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <GetStartedButton />
            </ContainerAnimated>
          </ContainerSticky>
        </ContainerScroll>

        {/* Transition section with smooth flow */}
        <section className="relative -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
          <DefyInfoSection />
        </section>

        {/* 🚀 TIMER COUNTDOWN SECTION INSERTED HERE */}
        <section
          id="timer-countdown"
          className="py-8 sm:py-12 md:py-16 lg:py-20"
        >
          <CountdownTimer />
        </section>

        {/* Interactive Selector Section */}
        <section id="tracks" className="relative">
          <InteractiveSelector />
        </section>
      </section>

      {/* Defy 25 Memories Section */}
      <section id="defy25-memories" className="relative">
        <Defy25Memories />
      </section>

      <section
        id="timeline"
        className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center py-8 sm:py-12 md:py-16"
      >
        <RadialOrbitalTimeline />
      </section>

      {/* Detailed Event Schedule */}
      <section
        id="detailed-schedule"
        className="py-16 md:py-24 bg-gradient-to-b from-background to-card/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center text-primary">
            DETAILED SCHEDULE
          </h2>
          <Timeline data={scheduleData} />
        </div>
      </section>

      <section id="current-sponsors" className="py-12 md:py-16 px-4">
        <h2 className="relative mb-12 md:mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary">
          Current Sponsors
          <span className="absolute -bottom-3 md:-bottom-4 left-1/2 h-1 w-16 md:w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"></span>
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {currentSponsorLogosForGrid.map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                className="block p-8 md:p-10 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-center h-20 md:h-24">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={cn(
                      "h-full w-auto object-contain transition-all duration-300",
                      logo.noInvert
                        ? ""
                        : "filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                    )}
                    style={{ height: logo.height || 80 }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="community-sponsors" className="py-5 md:py- px-4">
        <h2 className="relative mb-12 md:mb-20 text-center text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-primary">
          Community Sponsors
          <span className="absolute -bottom-3 md:-bottom-4 left-1/2 h-1 w-16 md:w-24 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <CommunitySponsors logos={communitySponsorLogos} columns={1} />
      </section>

      <section id="previous-sponsors" className="py-12 md:py-20 px-4">
        <h2 className="relative mb-6 md:mb-10 text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary">
          Previous Year Sponsors
          <span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <div className="mx-auto max-w-6xl mt-30">
          <LogoLoop
            className="rounded-lg bg-background/60"
            logos={previousSponsorLogos.map((l) => ({
              src: l.src,
              alt: l.alt,
              href: l.href,
              height: 80,
            }))}
            speed={120}
            gap={40}
            logoHeight={80}
            fadeOut
            fadeOutColor="var(--background)"
            scaleOnHover
            ariaLabel="Previous sponsors"
          />
        </div>
      </section>

      <section
        id="faqs"
        className="flex flex-col items-center justify-center p-4 py-12 md:py-20"
      >
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-primary mb-6 md:mb-10 text-center">
          FAQs
        </h1>
        <Faqs />
      </section>
    </>
  );
}
