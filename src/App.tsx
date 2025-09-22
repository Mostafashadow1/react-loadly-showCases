import "react-loadly/styles.css";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { LoadersShowcaseSection } from "@/components/sections/LoadersShowcaseSection";
import { PerformanceBestPracticesSection } from "@/components/sections/PerformanceBestPracticesSection";
import { WhyUseLibrarySection } from "@/components/sections/WhyUseLibrarySection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InstallationSection } from "./components/sections";
import { AutoSkeletonLoaderExamples } from "./components/sections/AutoSkeletonLoaderExamples";

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <HeroSection />
      <InstallationSection />
      <FeaturesSection />
      <AutoSkeletonLoaderExamples />

      {/* Loaders Showcase Section */}
      <LoadersShowcaseSection />

      {/* Performance & Best Practices Section */}
      <PerformanceBestPracticesSection />

      {/* Why Use This Library Section */}
      <WhyUseLibrarySection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
