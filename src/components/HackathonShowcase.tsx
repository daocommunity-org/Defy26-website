"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Zap, Clock } from "lucide-react";

export function DefyInfoSection() {
  const [activeTab, setActiveTab] = useState("what");

  const infoData = {
    what: {
      icon: Zap,
      title: "What is Defy 26?",
      description:
        "Defy 26 is an innovative 48-hour hackathon where creative minds come together to build, innovate, and compete. It's a platform for developers, designers, and entrepreneurs to showcase their skills, collaborate with talented individuals, and create solutions that matter.",
      highlights: [
        "48-hour intensive coding marathon",
        "Open to all skill levels",
        "Multiple challenge categories",
        "Access to mentors and resources",
      ],
    },
    who: {
      icon: Users,
      title: "Who Can Participate?",
      description:
        "Defy 26 welcomes everyone! Whether you're a seasoned developer, a creative designer, a business-minded entrepreneur, or someone just starting their tech journey, there's a place for you.",
      highlights: [
        "Students and professionals",
        "Individual participants or teams",
        "No experience requirement",
        "Diverse backgrounds encouraged",
      ],
    },
    how: {
      icon: Clock,
      title: "How Will It Happen?",
      description:
        "The hackathon follows a structured timeline to ensure everyone has the best experience. From kickoff to final presentations, every moment is designed for maximum impact and learning.",
      highlights: [
        "Day 1: Kickoff & team formation",
        "Day 2: Building & mentorship sessions",
        "Day 3: Final submissions & judging",
        "Closing ceremony & awards",
      ],
    },
  };

  const currentTab = infoData[activeTab as keyof typeof infoData];
  const CurrentIcon = currentTab.icon;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            <span className="text-balance">Everything About Defy 26</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get all the information you need to understand and join our
            hackathon
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 border border-primary/20">
            <TabsTrigger
              value="what"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Zap className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">What is it?</span>
              <span className="sm:hidden">What</span>
            </TabsTrigger>
            <TabsTrigger
              value="who"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Users className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Who Can Join?</span>
              <span className="sm:hidden">Who</span>
            </TabsTrigger>
            <TabsTrigger
              value="how"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Clock className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">How It Works</span>
              <span className="sm:hidden">How</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(infoData).map(([key, data]) => (
            <TabsContent
              key={key}
              value={key}
              className="animate-in fade-in duration-300"
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="p-8 sm:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                      <CurrentIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {data.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                    {data.description}
                  </p>

                  <div className="space-y-3">
                    <p className="font-semibold text-foreground mb-4">
                      Key Points:
                    </p>
                    {data.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
