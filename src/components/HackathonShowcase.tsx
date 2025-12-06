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
      title: "What is DeFy'26?",
      description:
        "DeFy'26 is the third installment of an exhilarating 36-hour hackathon that brings together Web3 enthusiasts and aspiring entrepreneurs from colleges, all united in a quest for genuine innovation. Distinct from conventional collegiate hackathons that focus solely on coding technical solutions, DeFy'26 challenges participants to rethink the very concept of a hackathon. Here, the goal transcends mere programming; it is about disrupting norms and reimagining the future. DeFy'26 seeks to break down barriers by integrating technology with business insights, fostering the creation of Web3-powered startups that herald a new era where 'Decentralization' and 'Future Yield' coexist harmoniously.",
      highlights: [
        "36-hour intensive hackathon",
        "Web3 & entrepreneurship focused",
        "Teams of 4-6 members only",
        "Integrates technology with business insights",
      ],
    },
    who: {
      icon: Users,
      title: "Who Can Participate?",
      description:
        "DeFy'26 welcomes Web3 enthusiasts and aspiring entrepreneurs from colleges! Whether you're a developer, designer, or business-minded individual, come together in teams to create groundbreaking ideas that advance technology and reshape the landscape of entrepreneurship in the Web3 space.",
      highlights: [
        "College students and enthusiasts",
        "Teams of 4-6 members required",
        "Web3 enthusiasts & entrepreneurs",
        "Diverse skill sets encouraged",
      ],
    },
    how: {
      icon: Clock,
      title: "How It Works",
      description:
        "The hackathon follows a two-round structure. Round 1 involves PPT selection where you choose a track, finalize your project idea, and submit your PPT on Devfolio. Shortlisted teams advance to Round 2 - the grand showdown at VIT Chennai on 11th, 12th and 13th January 2026.",
      highlights: [
        "Round 1: PPT submission on Devfolio",
        "Round 2: 36-hour hackathon at VIT Chennai",
        "Dates: 11th, 12th & 13th January 2026",
        "Create team → Join members → Submit docs → Apply",
      ],
    },
  };

  const currentTab = infoData[activeTab as keyof typeof infoData];
  const CurrentIcon = currentTab.icon;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-wider">
            <span className="text-balance">
              Defy<span className="text-primary"> The Limits</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get all the information you need to understand and join DeFy&apos;26
          </p>
        </div>

        {/* Tabs for All Screen Sizes */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full isolate"
        >
          <TabsList className="relative z-50 grid w-full grid-cols-3 mb-8 bg-card border border-primary/20 h-auto p-2 gap-2 isolate shadow-lg">
            <TabsTrigger
              value="what"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-3 text-xs sm:text-sm min-h-11 touch-manipulation cursor-pointer"
            >
              <Zap className="mr-1 sm:mr-2 h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">What is it?</span>
              <span className="sm:hidden">What</span>
            </TabsTrigger>
            <TabsTrigger
              value="who"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-3 text-xs sm:text-sm min-h-11 touch-manipulation cursor-pointer"
            >
              <Users className="mr-1 sm:mr-2 h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Who Can Join?</span>
              <span className="sm:hidden">Who</span>
            </TabsTrigger>
            <TabsTrigger
              value="how"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-3 text-xs sm:text-sm min-h-11 touch-manipulation cursor-pointer"
            >
              <Clock className="mr-1 sm:mr-2 h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">How It Works</span>
              <span className="sm:hidden">How</span>
            </TabsTrigger>
          </TabsList>

          <div className="relative z-0 overflow-hidden mt-4">
            {Object.entries(infoData).map(([key, data]) => (
              <TabsContent
                key={key}
                value={key}
                className="animate-in fade-in duration-300"
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="p-6 sm:p-8 md:p-12">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="rounded-lg bg-primary/10 p-2 sm:p-3 shrink-0">
                        <CurrentIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        {data.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                      {data.description}
                    </p>

                    <div className="space-y-3">
                      <p className="font-semibold text-foreground mb-3 sm:mb-4">
                        Key Points:
                      </p>
                      {data.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2.5 sm:gap-3 group"
                        >
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                          <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
