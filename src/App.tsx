import { useState } from "react";
import {
  SpinLoader,
  PulseLoader,
  WaveLoader,
  GridLoader,
  TypingLoader,
  LogoSpinLoader,
  LiquidLoader,
  FlowLoader,
  BounceLoader,
  RingLoader,
  BarsLoader,
  DotsLoader,
  RotateLoader,
  ElementLoader,
  SkeletonLoader,
  ShimmerLoader,
} from "react-loadly";
import "react-loadly/styles.css";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { LoadersShowcaseSection } from "@/components/sections/LoadersShowcaseSection";
import { PropsApiSection } from "@/components/sections/PropsApiSection";
import { PerformanceBestPracticesSection } from "@/components/sections/PerformanceBestPracticesSection";
import { WhyUseLibrarySection } from "@/components/sections/WhyUseLibrarySection";
import { FooterSection } from "@/components/sections/FooterSection";
import type { ILoader } from "./types/ILoader";
import { InstallationSection } from "./components/sections";

export default function App() {
  const [activeLoader, setActiveLoader] = useState<string>("spin");
  const [loaderSize, setLoaderSize] = useState<number>(50);
  const [loaderSpeed, setLoaderSpeed] = useState<number>(1);
  const [loaderColor, setLoaderColor] = useState<string>("#6366f1");
  const [loaderSecondaryColor, setLoaderSecondaryColor] =
    useState<string>("#e0e7ff");

  const [loaderCount, setLoaderCount] = useState<number>(3);
  const [loaderText, setLoaderText] = useState<string>("Loading...");

  const loaders: ILoader[] = [
    { name: "spin", component: SpinLoader, title: "Spin Loader" },
    { name: "pulse", component: PulseLoader, title: "Pulse Loader" },
    { name: "wave", component: WaveLoader, title: "Wave Loader" },
    { name: "grid", component: GridLoader, title: "Grid Loader" },
    { name: "typing", component: TypingLoader, title: "Typing Loader" },
    { name: "logo", component: LogoSpinLoader, title: "Logo Loader" },
    { name: "liquid", component: LiquidLoader, title: "Liquid Loader" },
    { name: "flow", component: FlowLoader, title: "Flow Loader" },
    { name: "bounce", component: BounceLoader, title: "Bounce Loader" },
    { name: "ring", component: RingLoader, title: "Ring Loader" },
    { name: "bars", component: BarsLoader, title: "Bars Loader" },
    { name: "dots", component: DotsLoader, title: "Dots Loader" },
    { name: "rotate", component: RotateLoader, title: "Rotate Loader" },
    { name: "shimmer", component: ShimmerLoader, title: "shimmer Loader" },
    { name: "skelton", component: SkeletonLoader, title: "skelton Loader" },
    { name: "element", component: ElementLoader, title: "element Loader" },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <HeroSection />

      <InstallationSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Loaders Showcase Section */}
      <LoadersShowcaseSection
        loaders={loaders}
        setActiveLoader={setActiveLoader}
        loaderSize={loaderSize}
        setLoaderSize={setLoaderSize}
        loaderSpeed={loaderSpeed}
        setLoaderSpeed={setLoaderSpeed}
        loaderColor={loaderColor}
        setLoaderColor={setLoaderColor}
        loaderSecondaryColor={loaderSecondaryColor}
        setLoaderSecondaryColor={setLoaderSecondaryColor}
        loaderCount={loaderCount}
        setLoaderCount={setLoaderCount}
        loaderText={loaderText}
        setLoaderText={setLoaderText}
        activeLoader={activeLoader}
      />

      {/* Props & API Section */}
      <PropsApiSection />

      {/* Performance & Best Practices Section */}
      <PerformanceBestPracticesSection />

      {/* Why Use This Library Section */}
      <WhyUseLibrarySection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
