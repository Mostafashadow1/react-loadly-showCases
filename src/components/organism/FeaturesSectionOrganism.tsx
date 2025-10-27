import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Palette, Code, Smartphone, Accessibility } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightweight",
    desc: "Minimal bundle size with zero dependencies. Optimized for performance out of the box.",
    color: "indigo",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    desc: "Change colors, sizes, speeds, and more with simple props. Match your brand effortlessly.",
    color: "purple",
  },
  {
    icon: Code,
    title: "Easy to Use",
    desc: "Drop a loader in seconds. No complicated setup or configuration needed.",
    color: "pink",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    desc: "Looks perfect on any device. Adapts smoothly to all screen sizes.",
    color: "blue",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    desc: "Built with accessibility in mind. Semantic HTML and ARIA support included.",
    color: "green",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Why React-Loadly?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A modern collection of loaders designed for speed, flexibility, and
            accessibility helping you build smooth user experiences.
          </motion.p>
        </div>

        {/* Animated Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc, color }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "linear" }}
              viewport={{ once: true }}
            >
              <Card className="relative border border-gray-800/70 bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div
                  style={
                    {
                      ["--from" as any]: `${color}-100`,
                      ["--to" as any]: `${color}-500`,
                    } as React.CSSProperties
                  }
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent  bg-gradient-to-r from-${color}-100 to-${color}-500 opacity-0 group-hover:opacity-100 transition-all`}
                />
                <CardHeader className="relative pb-3">
                  <div
                    className={`w-14 h-14 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 text-${color}-400`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-400">
                    {desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
