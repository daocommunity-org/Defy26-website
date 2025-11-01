"use client";

import { Faqs } from "@/components/Faqs";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
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
import { LogoCloud } from "@/components/logo-cloud-2";
import LogoLoop from "@/components/LogoLoop";
import InteractiveSelector from "@/components/interactive-selector";
import Defy25Memories from "@/components/Defy25Memories";

const currentSponsorLogosForGrid = [
  {
    src: "/CurrentSponsors/zkwalletlogo.png",
    alt: "ZKWallet",
    href: "https://zkinnovations.com",
    height: 80,
    noInvert: false,
  },
  {
    src: "/CurrentSponsors/gizmolablogo.png",
    alt: "Gizmolab",
    href: "https://www.gizmolab.io",
    height: 80,
    noInvert: false,
  },
  {
    src: "/CurrentSponsors/mtutorlogo.png",
    alt: "MTutor",
    href: "https://www.m-tutor.com/",
    height: 90,
    noInvert: false,
  },
  {
    src: "/CurrentSponsors/moilogo.png",
    alt: "MOI Technology",
    href: "https://moi.technology/",
    height: 80,
    noInvert: true,
  },
  {
    src: "/CurrentSponsors/krypcorelogo.png",
    alt: "Krypcore",
    href: "https:krypcore.com",
    height: 80,
    noInvert: false,
  },
  {
    src: "/CurrentSponsors/qoneqtlogo.png",
    alt: "Qoneqt",
    href: "https://qoneqt.com",
    height: 80,
    noInvert: false,
  },
  {
    src: "/CurrentSponsors/quicknodelogo.png",
    alt: "QuickNode",
    href: "https://www.quicknode.com/",
    height: 80,
    noInvert: false,
  },
  {
    src: "/CurrentSponsors/quilauditslogo.png",
    alt: "Quillaudits",
    href: "https://www.quillaudits.com/smart-contract-audit",
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
    id: 1,
    name: "ZKWallet",
    src: "/Sponsors/zkwalletlogo.png",
    alt: "ZKWallet",
    href: "https://zkinnovations.com",
  },
  {
    id: 2,
    name: "Gizmolab",
    src: "/Sponsors/gizmolablogo.png",
    alt: "Gizmolab",
    href: "https://www.gizmolab.io",
  },
  {
    id: 3,
    name: "MTutor",
    src: "/Sponsors/mtutorlogo.png",
    alt: "MTutor",
    href: "https://www.m-tutor.com/",
  },
  {
    id: 4,
    name: "MOI Technology",
    src: "/Sponsors/moilogo.png",
    alt: "MOI Technology",
    href: "https://moi.technology/",
  },
  {
    id: 5,
    name: "Krypcore",
    src: "/Sponsors/krypcorelogo.png",
    alt: "Krypcore",
    href: "https:krypcore.com",
  },
  {
    id: 6,
    name: "Qoneqt",
    src: "/Sponsors/qoneqtlogo.png",
    alt: "Qoneqt",
    href: "https://qoneqt.com",
  },
  {
    id: 7,
    name: "QuickNode",
    src: "/Sponsors/quicknodelogo.png",
    alt: "QuickNode",
    href: "https://www.quicknode.com/",
  },
  {
    id: 8,
    name: "Quillaudits",
    src: "/Sponsors/quilauditslogo.png",
    alt: "Quillaudits",
    href: "https://www.quillaudits.com/smart-contract-audit",
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight">
                Defy <span className="text-primary"> The Limits </span>
              </h1>
              <p className="mx-auto max-w-[42ch] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8">
                Code. Create. Conquer. Join the Defy 26 Hackathon and push
                innovation beyond limits.
              </p>
            </ContainerAnimated>

            <ContainerInset className="max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
              <HeroVideo
                src="bg-video.mp4"
                data-src="bg-video.mp4"
                className="rounded-xl border-2 border-primary/20 shadow-2xl shadow-primary/10 w-full h-full object-cover"
              />
            </ContainerInset>

            <ContainerAnimated
              transition={{ delay: 0.4 }}
              outputRange={[-120, 0]}
              inputRange={[0, 0.7]}
              className="mx-auto w-fit"
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
        <section className="relative">
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

      <section id="current-sponsors" className="py-12 md:py-20 px-4">
        <h2 className="relative mb-8 md:mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary">
          Current Sponsors
          <span className="absolute -bottom-2 md:-bottom-4 left-1/2 h-1 w-12 md:w-20 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <div className="mx-auto max-w-6xl">
          <LogoCloud
            className="rounded-lg overflow-hidden border border-primary/30 mb-10"
            logos={currentSponsorLogosForGrid.map((logo) => ({
              src: logo.src,
              alt: logo.alt,
              href: logo.href,
              height: logo.height,
              noInvert: logo.noInvert,
            }))}
          />
        </div>
      </section>

      <section id="community-sponsors" className="py-12 md:py-20 px-4">
        <h2 className="relative mb-8 md:mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-primary">
          Community Sponsors
          <span className="absolute -bottom-2 md:-bottom-4 left-1/2 h-1 w-12 md:w-20 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <CommunitySponsors logos={communitySponsorLogos} columns={4} />
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
