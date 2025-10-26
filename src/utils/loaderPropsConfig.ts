import { transformJSXToNode } from "@/lib/transformToNode";
import { type ReactNode } from "react";

// Common controls configuration for all loaders
export const COMMON_CONTROLS = {
  size: { type: "slider", min: 20, max: 100, step: 1, unit: "px", group: "general" },
  speed: { type: "slider", min: 0.1, max: 5, step: 0.1, unit: "x", group: "general" },
  color: { type: "color", label: "Primary Color", group: "general" },
  secondaryColor: { type: "color", label: "Secondary Color", group: "general" },

  width: { type: "text", placeholder: "Auto", group: "general" },
  height: { type: "text", placeholder: "Auto", group: "general" },
  loaderCenter: { type: "switch", label: "Center Loader", group: "general" },
  fullscreen: { type: "switch", label: "Fullscreen", group: "general" },

  showText: { type: "switch", label: "Show Text", group: "general" },
  loadingText: { type: "text", placeholder: "Loading...", group: "genenral" },

  "aria-label": { type: "text", placeholder: "Loading...", group: "general" },
} as const;
export const UNIQUE_CONTROLS = {
  // 🎨 Style
  borderWidth: { type: "slider", min: 1, max: 10, step: 1, unit: "px", group: "Specific" },
  borderRadius: { type: "text", placeholder: "4px", group: "Specific" },
  glowIntensity: { type: "slider", min: 0, max: 1, step: 0.1, group: "Specific" },
  shimmerColor: { type: "color", label: "Shimmer Color", group: "Specific" },
  highlightColor: { type: "color", label: "Highlight Color", group: "Specific" },

  // 🧩 Behavior
  animationType: {
    type: "select",
    options: ["spin", "pulse", "glow", "bounce", "flip"] as string[],
    group: "Specific",
  },
  loop: { type: "switch", label: "Loop Animation", group: "Specific" },
  charDelay: { type: "slider", min: 50, max: 500, step: 10, unit: "ms", group: "Specific" },
  progress: { type: "slider", min: 0, max: 100, step: 1, unit: "%", group: "Specific" },
  shimmer: { type: "switch", label: "Shimmer Effect", group: "Specific" },

  // 📏 Layout
  spacing: { type: "text", placeholder: "8px", group: "Specific" },
  gap: { type: "slider", min: 1, max: 20, step: 1, unit: "px", group: "Specific" },
  rows: { type: "slider", min: 1, max: 20, step: 1, group: "Specific" },
  cols: { type: "slider", min: 1, max: 20, step: 1, group: "Specific" },
  thickness: { type: "slider", min: 1, max: 20, step: 1, unit: "px", group: "Specific" },
  waveWidth: { type: "text", placeholder: "100%", group: "Specific" },

  // 🪄 Animation/Wave
  amplitude: { type: "slider", min: 0.5, max: 3, step: 0.1, group: "Wave" },
  fluidity: { type: "slider", min: 0.1, max: 2, step: 0.1, group: "Wave" },
  waveDirection: {
    type: "select",
    options: ["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"] as string[],
    group: "Specific",
  },

  // 🔤 Typography
  fontFamily: { type: "text", placeholder: "Arial", group: "Specific" },
  fontWeight: { type: "text", placeholder: "400", group: "Specific" },
  children: { type: "node", placeholder: '<p>Loading...</p>', group: "Specific" },

  // 🔢 Count / repetition
  count: { type: "slider", min: 1, max: 10, step: 1, group: "Specific" },
  dots: { type: "slider", min: 1, max: 20, step: 1, group: "Specific" },
  lines: { type: "slider", min: 1, max: 10, step: 1, group: "Specific" },

  // 🖼️ Image
  src: { type: "text", placeholder: "Image URL", label: "Logo Source", group: "Specific" },
  alt: { type: "text", placeholder: "Alt text", group: "Specific" },

  // 🧬 Variants
  variant: {
    type: "select",
    options: ["line", "card", "avatar", "text", "wave", "custom"] as string[],
    group: "Specific",
  },
  skeletonVariant: {
    type: "select",
    options: ["line", "card", "avatar", "text", "wave", "custom"] as string[],
    group: "Specific",
  },
  morphVariant: {
    type: "select",
    options: ["sharp", "soft", "blob"] as string[],
    group: "Specific",
  },
} as const;

export const DEFAULT_PROPS: Record<string, string | number | boolean | ReactNode> = {
  size: 50,
  speed: 1,
  color: "#ff8080",
  secondaryColor: "#e0e7ff",
  loadingText: "Loading...",
  showText: true,
  "aria-label": "Loading",
  count: 3,
  amplitude: 1,
  borderWidth: 4,
  fluidity: 1,
  src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_Palestine.png",
  alt: "Logo",
  animationType: "spin",
  lines: 1,
  variant: "avatar",
  spacing: "8px",
  shimmer: true,
  shimmerColor: "#ffffff",
  highlightColor: "#f0f0f0",
  borderRadius: "4px",
  waveWidth: "100%",
  waveDirection: "left-to-right",
  fontFamily: "Arial",
  fontWeight: "400",
  charDelay: 100,
  loop: true,
  glowIntensity: 0.5,
  children: transformJSXToNode('<p>Loading...</p>'),
  // children: '<p>...loader</p>',
  dots: 8,
  gap: 4,
  rows: 5,
  cols: 5,
  thickness: 8,
  progress: 50,
  morphVariant: "sharp",
  loaderCenter: true
};

// Type definitions for better TypeScript support
export type ControlType = "slider" | "color" | "text" | "select" | "switch" | "node";
export type PropControlConfig = {
  type: ControlType;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  label?: string;
  placeholder?: string;
  options?: string[];
  group?: string;
};

export type PropControls = Record<string, PropControlConfig>;
