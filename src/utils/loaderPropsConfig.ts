import { transformJSXToNode } from "@/lib/transformToNode";
import { type ReactNode } from "react";

// Common controls configuration for all loaders
export const COMMON_CONTROLS = {
  size: { type: "slider", min: 20, max: 100, step: 1, unit: "px", group: "Style" },
  speed: { type: "slider", min: 0.1, max: 5, step: 0.1, unit: "x", group: "Behavior" },
  color: { type: "color", label: "Primary Color", group: "Style" },
  secondaryColor: { type: "color", label: "Secondary Color", group: "Style" },

  width: { type: "text", placeholder: "Auto", group: "Layout" },
  height: { type: "text", placeholder: "Auto", group: "Layout" },
  loaderCenter: { type: "switch", label: "Center Loader", group: "Layout" },
  fullscreen: { type: "switch", label: "Fullscreen", group: "Layout" },

  showText: { type: "switch", label: "Show Text", group: "Text" },
  loadingText: { type: "text", placeholder: "Loading...", group: "Text" },

  "aria-label": { type: "text", placeholder: "Loading...", group: "Accessibility" },
} as const;
export const UNIQUE_CONTROLS = {
  // 🎨 Style
  borderWidth: { type: "slider", min: 1, max: 10, step: 1, unit: "px", group: "Style" },
  borderRadius: { type: "text", placeholder: "4px", group: "Style" },
  glowIntensity: { type: "slider", min: 0, max: 1, step: 0.1, group: "Style" },
  shimmerColor: { type: "color", label: "Shimmer Color", group: "Style" },
  highlightColor: { type: "color", label: "Highlight Color", group: "Style" },

  // 🧩 Behavior
  animationType: {
    type: "select",
    options: ["spin", "pulse", "glow", "bounce", "flip"] as string[],
    group: "Behavior",
  },
  loop: { type: "switch", label: "Loop Animation", group: "Behavior" },
  charDelay: { type: "slider", min: 50, max: 500, step: 10, unit: "ms", group: "Behavior" },
  progress: { type: "slider", min: 0, max: 100, step: 1, unit: "%", group: "Behavior" },
  shimmer: { type: "switch", label: "Shimmer Effect", group: "Behavior" },

  // 📏 Layout
  spacing: { type: "text", placeholder: "8px", group: "Layout" },
  gap: { type: "slider", min: 1, max: 20, step: 1, unit: "px", group: "Layout" },
  rows: { type: "slider", min: 1, max: 20, step: 1, group: "Layout" },
  cols: { type: "slider", min: 1, max: 20, step: 1, group: "Layout" },
  thickness: { type: "slider", min: 1, max: 20, step: 1, unit: "px", group: "Layout" },
  waveWidth: { type: "text", placeholder: "100%", group: "Layout" },

  // 🪄 Animation/Wave
  amplitude: { type: "slider", min: 0.5, max: 3, step: 0.1, group: "Wave" },
  fluidity: { type: "slider", min: 0.1, max: 2, step: 0.1, group: "Wave" },
  waveDirection: {
    type: "select",
    options: ["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"] as string[],
    group: "Wave",
  },

  // 🔤 Typography
  fontFamily: { type: "text", placeholder: "Arial", group: "Typography" },
  fontWeight: { type: "text", placeholder: "400", group: "Typography" },
  children: { type: "node", placeholder: '<p>Loading...</p>', group: "Typography" },

  // 🔢 Count / repetition
  count: { type: "slider", min: 1, max: 10, step: 1, group: "Count" },
  dots: { type: "slider", min: 1, max: 20, step: 1, group: "Count" },
  lines: { type: "slider", min: 1, max: 10, step: 1, group: "Count" },

  // 🖼️ Image
  src: { type: "text", placeholder: "Image URL", label: "Logo Source", group: "Image" },
  alt: { type: "text", placeholder: "Alt text", group: "Image" },

  // 🧬 Variants
  variant: {
    type: "select",
    options: ["line", "card", "avatar", "text", "wave", "custom"] as string[],
    group: "Variant",
  },
  skeletonVariant: {
    type: "select",
    options: ["line", "card", "avatar", "text", "wave", "custom"] as string[],
    group: "Variant",
  },
  morphVariant: {
    type: "select",
    options: ["sharp", "soft", "blob"] as string[],
    group: "Variant",
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
