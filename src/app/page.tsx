"use client";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import CategoryListDemo from "@/components/demo/category-list-demo";
import SubHero from "@/components/subHero";
import { HyperText } from "@/components/ui/hyper-text";

import PromptingIsAllYouNeed from "@/components/animated-hero-section";
import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo,
} from "@/components/animated-video-on-scroll";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        <PromptingIsAllYouNeed />
      </section>
      <section>
        <ContainerScroll className="h-[350vh]">
          <ContainerSticky
            style={{}}
            className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 text-foreground"
          >
            <ContainerAnimated className="space-y-6 text-center max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Defy the Ordinary
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
              <HeroButton className="bg-primary text-background hover:bg-primary/90 font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
                Join Now
              </HeroButton>
            </ContainerAnimated>
          </ContainerSticky>
        </ContainerScroll>
      </section>

      <section id="sub-hero" className="min-h-screen ">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-black p-4">
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
        {/* <h1 className="font-bold text-6xl text-primary">Sub Section</h1> */}
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

      <section
        id="sponsors"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="font-bold text-6xl text-primary">Sponsors Section</h1>
      </section>

      <section
        id="faqs"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="font-bold text-6xl text-primary">FAQs Section</h1>
      </section>

      <section
        id="footer"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="font-bold text-6xl text-primary">Footer Section</h1>
      </section>
    </>
  );
}
