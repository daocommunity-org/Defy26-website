import FeatureSteps from "@/components/ui/feature-section";

const features = [
  {
    step: "Step 1",
    title: "Learn the Basics",
    content: "Start your Web3 journey by learning the basics of blockchain.",
    image:
      "https://images.unsplash.com/photo-1526378722674-4f4d1cc0a08c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Deep Dive",
    content:
      "Dive deep into blockchain fundamentals and smart contract development.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Build Projects",
    content:
      "Graduate with hands-on Web3 experience through building decentralized applications.",
    image:
      "https://images.unsplash.com/photo-1524492510061-8d6b9e1c9b1b?q=80&w=2070&auto=format&fit=crop",
  },
];

export function FeatureStepsDemo() {
  return (
    <FeatureSteps
      features={features}
      title="Your Journey Starts Here"
      autoPlayInterval={4000}
    />
  );
}

export default FeatureStepsDemo;
