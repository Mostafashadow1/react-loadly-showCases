"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Heart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Boost Development Speed",
    desc: "Implement beautiful loading states in minutes, not hours. No more wrestling with CSS animations.",
    color: "indigo",
  },
  {
    icon: Palette,
    title: "Consistent Design",
    desc: "All loaders follow the same design principles, ensuring a cohesive experience across your application.",
    color: "purple",
  },
  {
    icon: Heart,
    title: "Delight Users",
    desc: "Beautiful loaders reduce perceived loading times and create a premium experience for your users.",
    color: "pink",
  },
];

export function WhyUseLibrarySection() {
  return (
    <section className="py-20 bg-gradient-to-t from-gray-950 to-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white  "
          >
            Use React Loadly
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Save time and enhance user experience with our beautifully crafted
            loading components
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(({ icon: Icon, title, desc, color }, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="p-6 text-center"
            >
              <div
                className={`w-16 h-16 rounded-full bg-${color}-100 dark:bg-${color}-900/20 flex items-center justify-center mx-auto mb-6`}
              >
                <Icon className={`w-8 h-8 `} color={color} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
