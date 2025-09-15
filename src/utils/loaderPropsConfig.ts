// Common controls configuration for all loaders
export const COMMON_CONTROLS = {
  size: { type: "slider", min: 20, max: 100, step: 1, unit: "px" },
  speed: { type: "slider", min: 0.1, max: 5, step: 0.1, unit: "x" },
  color: { type: "color", label: "Primary Color" },
  loadingText: { type: "text", placeholder: "Loading..." },
  secondaryColor: { type: "color", label: "Secondary Color" },
  width: { type: "text", placeholder: "Auto" },
  height: { type: "text", placeholder: "Auto" },
  showText: { type: "switch", label: "Show Text" },
  "aria-label": { type: "text", placeholder: "Loading..." },
} as const;

// Unique controls configuration for specific loader types
export const UNIQUE_CONTROLS = {
  count: { type: "slider", min: 1, max: 10, step: 1 },
  amplitude: { type: "slider", min: 0.5, max: 3, step: 0.1 },
  borderWidth: { type: "slider", min: 1, max: 10, step: 1, unit: "px" },
  fluidity: { type: "slider", min: 0.1, max: 2, step: 0.1 },
  src: { type: "text", placeholder: "Image URL", label: "Logo Source" },
  alt: { type: "text", placeholder: "Alt text" },
  animationType: {
    type: "select",
    options: ["spin", "pulse", "glow", "bounce", "flip"] as string[],
  },
  lines: { type: "slider", min: 1, max: 10, step: 1 },
  variant: {
    type: "select",
    options: ["line", "card", "avatar", "text", "wave", "custom"] as string[],
  },
  spacing: { type: "text", placeholder: "8px" },
  shimmer: { type: "switch", label: "Shimmer Effect" },
  shimmerColor: { type: "color", label: "Shimmer Color" },
  highlightColor: { type: "color", label: "Highlight Color" },
  borderRadius: { type: "text", placeholder: "4px" },
  waveWidth: { type: "text", placeholder: "100%" },
  waveDirection: {
    type: "select",
    options: [
      "left-to-right",
      "right-to-left",
      "top-to-bottom",
      "bottom-to-top",
    ] as string[],
  },
  fontFamily: { type: "text", placeholder: "Arial" },
  fontWeight: { type: "text", placeholder: "400" },
  charDelay: { type: "slider", min: 50, max: 500, step: 10, unit: "ms" },
  loop: { type: "switch", label: "Loop Animation" },
  glowIntensity: { type: "slider", min: 0, max: 1, step: 0.1 },
  children: { type: "text", placeholder: "Loading..." },
} as const;

export const DEFAULT_PROPS: Record<string, string | number | boolean> = {
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
  children: "Loading...",
};

// Type definitions for better TypeScript support
export type ControlType = "slider" | "color" | "text" | "select" | "switch";
export type PropControlConfig = {
  type: ControlType;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  label?: string;
  placeholder?: string;
  options?: string[];
};

export type PropControls = Record<string, PropControlConfig>;
