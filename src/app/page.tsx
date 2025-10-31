"use client";

import SubHero from "@/components/subHero";
import { HyperText } from "@/components/ui/hyper-text";
import { Faqs } from "@/components/Faqs";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import CategoryListDemo from "@/components/demo/category-list-demo";
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
        <ContainerScroll className="h-[240vh] sm:h-[300vh] md:h-[330vh] lg:h-[350vh]">
          <ContainerSticky
            style={{}}
            className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 text-foreground"
          >
            <ContainerAnimated className="space-y-4 md:space-y-6 text-center max-w-5xl mx-auto px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight">
                Defy <span className="text-primary"> The Limits </span>
              </h1>
              <p className="mx-auto max-w-[42ch] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-2">
                Code. Create. Conquer. Join the Defy 26 Hackathon and push
                innovation beyond limits.
              </p>
            </ContainerAnimated>
            <ContainerInset className="max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] w-full max-w-6xl mx-auto py-6 px-4 flex items-center justify-center">
              <HeroVideo
                src="bg-video.mp4"
                data-src="bg-video.mp4"
                className="rounded-xl border-2 border-primary/20 shadow-2xl shadow-primary/10 w-full h-full object-cover mx-auto"
              />
            </ContainerInset>
            <ContainerAnimated
              transition={{ delay: 0.4 }}
              outputRange={[-120, 0]}
              inputRange={[0, 0.7]}
              className="mx-auto mt-6 w-fit"
            >
              <GetStartedButton />
            </ContainerAnimated>
          </ContainerSticky>
        </ContainerScroll>
        <section>
          <DefyInfoSection />
        </section>

        {/* 🚀 TIMER COUNTDOWN SECTION INSERTED HERE */}
        <section id="timer-countdown" className="py-8 md:py-16">
          <CountdownTimer />
        </section>
      </section>
      <section id="sub-hero" className="min-h-screen ">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full min-h-screen bg-black p-4">
            <div className="w-full h-screen relative">
              <SubHero
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#ffffff"
                speed={3}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
              />
              <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <HyperText
                    animateOnHover={true}
                    startOnView={true}
                    className="text-6xl sm:text-8xl md:text-9xl lg:text-9xl text-foreground"
                  >
                    Defy
                  </HyperText>
                  <HyperText
                    animateOnHover={true}
                    startOnView={true}
                    className="text-6xl sm:text-8xl md:text-9xl lg:text-9xl text-primary"
                  >
                    26
                  </HyperText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tracks" className="h-full flex items-center justify-center">
        <CategoryListDemo />
      </section>
      <section
        id="timeline"
        className="h-full flex items-center justify-center"
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
