import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smartphone, HeartCrack, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";

const performanceFeatures = [
  {
    icon: ZapIcon,
    title: "Lightweight",
    desc: "Minimal bundle size with zero dependencies. Each loader is optimized for performance.",
    color: "green",
    highlight: {
      text: "Bundle size: < 5KB per component",
      bg: "bg-green-900/20",
      textColor: "text-green-200",
    },
  },
  {
    icon: HeartCrack,
    title: "Tree Shakable",
    desc: "Import only what you need. Unused components are automatically excluded from your bundle.",
    color: "purple",
    highlight: {
      text: "ESM support: Full tree shaking support",
      bg: "bg-blue-900/20",
      textColor: "text-blue-200",
    },
  },
  {
    icon: Smartphone,
    title: "Optimized Animations",
    desc: "CSS-based animations for smooth performance. No heavy JavaScript computations during animation.",
    color: "pink",
    highlight: {
      text: "60 FPS: Guaranteed smooth animations",
      bg: "bg-yellow-900/20",
      textColor: "text-yellow-200",
    },
  },
];

export function PerformanceBestPracticesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Performance & Best Practices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Optimized for performance and built with best practices
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performanceFeatures.map(
            ({ icon: Icon, title, desc, color, highlight }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="relative border border-gray-800/70 bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-${color}-500/20 to-${color}-500/5 opacity-0 group-hover:opacity-100 transition-all`}
                  />
                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-7 h-7 `} color={color} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {desc}
                    </CardDescription>
                    {highlight && (
                      <div className={`mt-4 p-3 rounded-lg ${highlight.bg}`}>
                        <p
                          className={`text-sm ${highlight.textColor}`}
                          dangerouslySetInnerHTML={{ __html: highlight.text }}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>

        {/* Best Practices */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="relative border  border-gray-800/70 bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                React Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    text: "Full TypeScript definitions for all components and props",
                    bold: "TypeScript Support",
                  },
                  {
                    text: "All loaders are accessible with proper ARIA attributes",
                    bold: "Accessibility",
                  },
                  {
                    text: "Loaders automatically adapt to any screen size",
                    bold: "Responsive Design",
                  },
                  {
                    text: "Built-in performance monitoring hooks",
                    bold: "Performance Monitoring",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full text-white bg-green-900/20 flex items-center justify-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-400"
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
                    <p className="ml-3 text-gray-300">
                      <span className="font-medium ">{item.bold}:</span>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
