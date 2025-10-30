"use client";

import SubHero from "@/components/subHero";
import { HyperText } from "@/components/ui/hyper-text";
import { Faqs } from "@/components/Faqs";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import CategoryListDemo from "@/components/demo/category-list-demo";
import PromptingIsAllYouNeed from "@/components/animated-hero-section";
import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroVideo,
} from "@/components/animated-video-on-scroll";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { CurrentSponsors } from "@/components/CurrentSponsors";
import CommunitySponsors from "@/components/CommunitySponsors";
import Image from "next/image";
// 🎯 Import the new CountdownTimer component (assuming it's in components/)
import CountdownTimer from "@/components/timercountdown"; 

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
      <section>
        <ContainerScroll className="h-[350vh]">
          <ContainerSticky
            style={{}}
            className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 text-foreground"
          >
            <ContainerAnimated className="space-y-6 text-center max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter gap-3">
                Defy <span className="text-primary"> The Limits </span>
              </h1>
              <p className="mx-auto max-w-[42ch] text-base sm:text-lg md:text-xl text-muted-foreground mb-2">
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

        {/* 🚀 TIMER COUNTDOWN SECTION INSERTED HERE */}
        <section id="timer-countdown" className="pt-0 md:pt-10">
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
              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="flex justify-between w-xl">
                  <HyperText
                    animateOnHover={true}
                    startOnView={true}
                    className="text-9xl text-foreground mr-4"
                  >
                    Defy
                  </HyperText>
                  <HyperText
                    animateOnHover={true}
                    startOnView={true}
                    className="text-9xl text-primary "
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

      <section id="current-sponsors" className="py-20">
        <h2 className="relative mb-16 text-center text-4xl font-bold uppercase tracking-wider text-primary md:text-5xl">
          Current Sponsors
          <span className="absolute -bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <CurrentSponsors sponsors={currentSponsorLogosForGrid} />
      </section>

      <section id="community-sponsors" className="py-20">
        <h2 className="relative mb-16 text-center text-4xl font-bold uppercase tracking-wider text-primary md:text-5xl">
          Community Sponsors
          <span className="absolute -bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <CommunitySponsors logos={communitySponsorLogos} columns={4} />
      </section>

      <section id="previous-sponsors" className="py-20">
        <h2 className="relative mb-16 text-center text-4xl font-bold uppercase tracking-wider text-primary md:text-5xl">
          Previous Year Sponsors
          <span className="absolute -bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-primary"></span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {previousSponsorLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-20 w-32 items-center justify-center rounded-lg bg-card p-4 transition-transform hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </a>
          ))}
        </div>
      </section>

      <section
        id="faqs"
        className=" flex flex-col items-center justify-center p-4"
      >
        <h1 className="font-bold text-6xl text-primary mb-10">FAQs</h1>
        <Faqs />
      </section>
    </>
  );
}