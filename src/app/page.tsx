import SubHero from "@/components/subHero";
import { HyperText } from "@/components/ui/hyper-text";
import { tr } from "framer-motion/client";
import { Faqs } from "@/components/Faqs";
export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="font-bold text-6xl text-primary  ">Defy 26 Website</h1>
          <br />
          <h1 className="text-5xl text-accent">Note:video</h1>
        </div>
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
      <section
        id="timeline"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="font-bold text-6xl text-primary">Timeline Section</h1>
      </section>

      <section
        id="sponsors"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="font-bold text-6xl text-primary">Sponsors Section</h1>
      </section>

      <section
        id="faqs"
        className="min-h-screen flex flex-col items-center justify-center p-4"
      >
        <h1 className="font-bold text-6xl text-primary mb-10">FAQs</h1>
        <Faqs />
      </section>


    </>
  );
}
