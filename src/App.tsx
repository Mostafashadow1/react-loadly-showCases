import "react-loadly/styles.css";
import { HeroSection } from "@/components/organism/HeroSectionOrganism";
import { FeaturesSection } from "@/components/organism/FeaturesSectionOrganism";
import { LoadersShowcaseSection } from "@/components/organism/LoadersShowcaseSectionOrganism";
import { PerformanceBestPracticesSection } from "@/components/organism/PerformanceBestPracticesSectionOrganism";
import { WhyUseLibrarySection } from "@/components/organism/WhyUseLibrarySectionOrganism";
import { FooterSection } from "@/components/organism/FooterSectionOrganism";
import { InstallationSection } from "./components/sections";
import { AutoSkeletonLoaderExamples } from "./components/organism/AutoSkeletonLoaderExamplesOrganism";

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
