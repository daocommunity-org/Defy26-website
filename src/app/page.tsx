import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import CategoryListDemo from "@/components/demo/category-list-demo";
import SubHero from "@/components/subHero";
import { HyperText } from "@/components/ui/hyper-text";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className=" text-6xl text-primary  ">Defy 26 Website</h1>
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
