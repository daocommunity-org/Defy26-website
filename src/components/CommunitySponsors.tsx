"use client";

import Image from "next/image";

const communityLogos = [
  {
    name: "Odisha DAO",
    src: "/CommunitySponsors/odishadao.png",
  },
  {
    name: "The Phoenix Guild Chennai",
    src: "/CommunitySponsors/community.png",
  },
  {
    name: "Spider NITT",
    src: "/CommunitySponsors/logo-removebg-preview.png",
  },
];

export default function CommunitySponsors() {
  return (
    <section className="bg-background pb-16 pt-16 md:pb-32">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {communityLogos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg p-8 transition-all duration-300 hover:bg-card/50"
            >
              <Image
                className="mx-auto h-auto w-fit max-h-32 max-w-[280px] object-contain"
                src={logo.src}
                alt={logo.name}
                height={128}
                width={280}
                style={{ objectFit: "contain" }}
              />
              <span className="mt-3 text-sm font-medium text-center text-muted-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
