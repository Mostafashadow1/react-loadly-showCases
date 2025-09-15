import { Button } from "@/components/ui/button";
import { Github, Play, Sparkles, StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const headingClasses = "text-5xl md:text-7xl font-extrabold tracking-tight";
const buttonBase =
  "group relative px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl";

const features = [
  "100% Free & Open Source",
  "Fully Customizable",
  "Lightweight & Performant",
];

export function HeroSection() {
  return (
    <header className="relative overflow-hidden text-white  min-h-screen ">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900" />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl" />

      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Powered By Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="my-6 inline-flex items-center gap-3 rounded-full border border-white/30 
             bg-white/5 px-6 py-2 backdrop-blur-md shadow-md"
          >
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-base font-medium text-foreground/90">
              Powered by
            </span>
            <span className="bg-pink-400 bg-clip-text text-lg font-bold text-transparent tracking-wide">
              react-loadly
            </span>
          </motion.div>

          {/* Title Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="space-y-6 mb-8"
          >
            <div>
              <h1 className={headingClasses}>Beautiful React</h1>
              <h1
                className={`${headingClasses} bg-gradient-to-r from-pink-500 to-purple-300  bg-clip-text text-transparent`}
              >
                Loaders Collection
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-4xl text-xl md:text-2xl leading-relaxed text-foreground/80 mb-12"
          >
            React Loadly is a{" "}
            <strong className="text-pink-400">modern, high-performance</strong>{" "}
            library of React loaders, spinners, and loading indicators. It’s
            built with <strong className="text-green-300">TypeScript</strong>,
            optimized for{" "}
            <strong className="text-blue-400">Next.js / SSR</strong>, and
            designed with accessibility and developer experience in mind.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("loaders")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="lg"
              className={`${buttonBase} bg-gradient-to-r from-pink-300 to-pink-400 text-black`}
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Loaders
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/Mostafashadow1/react-loadly",
                  "_blank"
                )
              }
              size="lg"
              className={`${buttonBase} bg-gradient-to-r from-gray-900 to-gray-700 text-white`}
            >
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </motion.div>
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className=" grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto"
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md px-5 py-4 text-lg font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex h-5 w-5 p-1 items-center justify-center rounded-full bg-green-500/90 shadow-inner">
                  <StarIcon />
                </div>
                <span className="text-base">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
