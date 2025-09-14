import { Button } from "@/components/ui/button";
import { InstallationSection } from "./InstallationSection";
import type { ILoader } from "@/types/ILoader";
import { Github, Play } from "lucide-react";

interface HeroSectionProps {
  activeLoaderData: ILoader;
}

export function HeroSection({ activeLoaderData }: HeroSectionProps) {
  const ActiveLoaderComponent = activeLoaderData.component;

  return (
    <header className="py-20 md:py-32 text-white relative overflow-hidden">
      {/* Liquid glass background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="block">Beautiful React</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 mt-2">
                Loaders Collection
              </span>
            </h1>

            <p className="text-xl max-w-2xl mx-auto lg:mx-0 mb-10 opacity-90">
              A collection of beautiful, customizable loading components for
              React applications. Fully accessible, lightweight, and easy to
              implement.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Button
                onClick={() =>
                  document
                    .getElementById("loaders")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 rounded-xl shadow-elegant transition-smooth transform hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Loaders
              </Button>

              <Button
                onClick={() => window.open("https://github.com", "_blank")}
                variant="outline"
                className="px-8 py-6 text-lg  text-white border-white/20 hover:bg-white/20 rounded-xl shadow-lg transition-smooth transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5 mr-2" />
                Star on GitHub
              </Button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span>100% Free & Open Source</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span>Fully Customizable</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span>Lightweight & Performant</span>
              </div>
            </div>
          </div>

          <div className=" flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <ActiveLoaderComponent
                    size={80}
                    speed={1}
                    color="#ffffff"
                    count={3}
                    loadingText="Loading..."
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">
                    {activeLoaderData.title}
                  </h3>
                  <p className="text-indigo-100">Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Commands */}
        <InstallationSection />
      </div>
    </header>
  );
}
