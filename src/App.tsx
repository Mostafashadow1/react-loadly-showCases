import "react-loadly/styles.css";
import { Suspense, lazy } from 'react';
import { HeroSection } from "@/components/organism/HeroSectionOrganism";
import { PerformanceBestPracticesSection } from "@/components/organism/PerformanceBestPracticesSectionOrganism";
import { WhyUseLibrarySection } from "@/components/organism/WhyUseLibrarySectionOrganism";
import { FooterSection } from "@/components/organism/FooterSectionOrganism";
import { GridLoader } from "react-loadly";
const LoadersShowcaseSection = lazy(() => import('@/components/organism/LoadersShowcaseSectionOrganism').then(module => ({ default: module.LoadersShowcaseSection })));
const AutoSkeletonLoaderExamples = lazy(() => import('@/components/organism/AutoSkeletonLoaderExamplesOrganism').then(module => ({ default: module.AutoSkeletonLoaderExamples })));
const InstallationSection = lazy(() => import('@/components/sections').then(module => ({ default: module.InstallationSection })));
const FeaturesSection = lazy(() => import('@/components/organism/FeaturesSectionOrganism').then(module => ({ default: module.FeaturesSection })));
export default function App() {
  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <HeroSection />
      <Suspense fallback={<GridLoader loaderCenter={true} />}>

        <InstallationSection />
        <FeaturesSection />

        <AutoSkeletonLoaderExamples />

        {/* Loaders Showcase Section */}
        <LoadersShowcaseSection />
      </Suspense>
      {/* Performance & Best Practices Section */}
      <PerformanceBestPracticesSection />

      {/* Why Use This Library Section */}
      <WhyUseLibrarySection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
