import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import CategoryListDemo from "@/components/demo/category-list-demo";

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
