import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import type {
  ILoader,
  LoaderProps,
  BaseLoaderProps,
  CountLoaderProps,
  TextLoaderProps,
  SecondaryColorLoaderProps,
  LogoLoaderProps,
  SkeletonLoaderProps,
  ShimmerLoaderProps,
  ElementLoaderProps,
} from "@/types/ILoader";

interface LoadersShowcaseSectionProps {
  loaders: ILoader[];
  setActiveLoader: (name: string) => void;
  loaderSize: number;
  setLoaderSize: (size: number) => void;
  loaderSpeed: number;
  setLoaderSpeed: (speed: number) => void;
  loaderColor: string;
  setLoaderColor: (color: string) => void;
  loaderSecondaryColor: string;
  setLoaderSecondaryColor: (color: string) => void;
  loaderCount: number;
  setLoaderCount: (count: number) => void;
  loaderText: string;
  setLoaderText: (text: string) => void;
  activeLoader: string;
}

export function LoadersShowcaseSection({
  loaders,
  setActiveLoader,
  loaderSize,
  setLoaderSize,
  loaderSpeed,
  setLoaderSpeed,
  loaderColor,
  setLoaderColor,
  loaderSecondaryColor,
  setLoaderSecondaryColor,
  loaderCount,
  setLoaderCount,
  loaderText,
  setLoaderText,
  activeLoader,
}: LoadersShowcaseSectionProps) {
  const activeLoaderData =
    loaders.find((l) => l.name === activeLoader) || loaders[0];
  const ActiveLoaderComponent = activeLoaderData.component;

  // Helper function to generate proper props for each loader type
  const getLoaderProps = (loaderName: string): LoaderProps => {
    const baseProps: BaseLoaderProps = {
      size: loaderSize,
      color: loaderColor,
      speed: loaderSpeed,
      loadingText: loaderText,
    };

    // Loaders that support count
    if (
      ["pulse", "wave", "grid", "bounce", "bars", "dots", "rotate"].includes(
        loaderName
      )
    ) {
      return {
        ...baseProps,
        count: loaderCount,
      } as CountLoaderProps;
    }

    // Typing loader uses text prop instead of loadingText
    if (loaderName === "typing") {
      return {
        ...baseProps,
        text: loaderText,
        style: {
          fontSize: `${Math.max(16, loaderSize / 2)}px`,
          color: loaderColor,
          fontWeight: 600,
        },
      } as TextLoaderProps;
    }

    // Logo loader with special props
    if (loaderName === "logo") {
      return {
        ...baseProps,
        src: "vite.svg",
        showText: true,
        count: loaderCount,
        secondaryColor: loaderSecondaryColor,
      } as LogoLoaderProps;
    }

    // Loaders that support secondary color
    if (["liquid", "flow", "blob", "ring"].includes(loaderName)) {
      return {
        ...baseProps,
        secondaryColor: loaderSecondaryColor,
      } as SecondaryColorLoaderProps;
    }

    // Skeleton loader with specific props
    if (loaderName === "skelton") {
      return {
        width: loaderSize * 2,
        height: loaderSize,
        borderRadius: 4,
        animation: "pulse" as const,
        variant: "card",
      } as SkeletonLoaderProps;
    }

    // Shimmer loader with specific props
    if (loaderName === "shimmer") {
      return {
        width: loaderSize * 2,
        height: loaderSize,
        borderRadius: 4,
        shimmerColor: "#f00",
        variant: "card",
      } as ShimmerLoaderProps;
    }

    // Element loader with specific props
    if (loaderName === "element") {
      return {
        ...baseProps,
        element: "div",
        count: loaderCount,
        secondaryColor: loaderSecondaryColor,
      } as ElementLoaderProps;
    }

    // Default base props for other loaders
    return baseProps;
  };

  const generateCodeSnippet = () => {
    const props = getLoaderProps(activeLoader);
    const propStrings: string[] = [];

    // Add base props (skip for skeleton and shimmer as they don't use them)
    if (activeLoader !== "skelton" && activeLoader !== "shimmer") {
      if ("size" in props && props.size !== undefined)
        propStrings.push(`size={${props.size}}`);
      if ("color" in props && props.color)
        propStrings.push(`color="${props.color}"`);
      if ("speed" in props && props.speed !== undefined)
        propStrings.push(`speed={${props.speed}}`);
    }

    // Add specific props based on loader type
    if ("count" in props && props.count !== undefined) {
      propStrings.push(`count={${props.count}}`);
    }
    if ("text" in props && props.text) {
      propStrings.push(`text="${props.text}"`);
    }
    if ("loadingText" in props && props.loadingText) {
      propStrings.push(`loadingText="${props.loadingText}"`);
    }
    if ("secondaryColor" in props && props.secondaryColor) {
      propStrings.push(`secondaryColor="${props.secondaryColor}"`);
    }
    if ("src" in props && props.src) {
      propStrings.push(`src="${props.src}"`);
    }
    if ("showText" in props && props.showText) {
      propStrings.push(`showText={${props.showText}}`);
    }
    if ("width" in props && props.width !== undefined) {
      propStrings.push(
        `width={${
          typeof props.width === "string" ? `"${props.width}"` : props.width
        }}`
      );
    }
    if ("height" in props && props.height !== undefined) {
      propStrings.push(
        `height={${
          typeof props.height === "string" ? `"${props.height}"` : props.height
        }}`
      );
    }
    if ("borderRadius" in props && props.borderRadius !== undefined) {
      propStrings.push(`borderRadius={${props.borderRadius}}`);
    }
    if ("animation" in props && props.animation) {
      propStrings.push(`animation="${props.animation}"`);
    }
    if ("shimmerColor" in props && props.shimmerColor) {
      propStrings.push(`shimmerColor="${props.shimmerColor}"`);
    }
    if ("element" in props && props.element) {
      propStrings.push(`element="${props.element}"`);
    }

    const propsString = propStrings.join(" ");

    return `import { ${activeLoaderData.title.replace(
      " ",
      ""
    )} } from 'react-loadly';

function MyComponent() {
  return (
    <${activeLoaderData.title.replace(" ", "")} 
      ${propsString}
    />
  );
}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="loaders" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Loader Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of beautiful loaders. Click on any loader to
            customize it.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {loaders.map((loader) => (
            <Dialog key={loader.name}>
              <DialogTrigger asChild>
                <Card
                  className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 bg-white dark:bg-gray-800"
                  onClick={() => setActiveLoader(loader.name)}
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="flex justify-center mb-4 h-24 items-center">
                      <loader.component
                        {...getLoaderProps(loader.name)}
                        size={loader.name === "flow" ? 80 : 40}
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-center">
                      {loader.title}
                    </h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[80vw] max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{loader.title}</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Preview */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 flex items-center justify-center min-h-[300px] border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <ActiveLoaderComponent
                          {...getLoaderProps(activeLoader)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="space-y-6">
                    {/* Size Control (skip for skeleton and shimmer) */}
                    {activeLoader !== "skelton" &&
                      activeLoader !== "shimmer" && (
                        <div>
                          <div className="flex justify-between  mb-2">
                            <label className="font-medium text-gray-700 dark:text-gray-300">
                              Size
                            </label>
                            <span className="text-sm font-medium bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">
                              {loaderSize}px
                            </span>
                          </div>
                          <Slider
                            min={20}
                            max={100}
                            step={1}
                            value={[loaderSize]}
                            onValueChange={(value) => setLoaderSize(value[0])}
                            className="w-full bg-indigo-500"
                          />
                        </div>
                      )}

                    {/* Speed Control (skip for skeleton and shimmer) */}
                    {activeLoader !== "skelton" &&
                      activeLoader !== "shimmer" && (
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="font-medium text-gray-700 dark:text-gray-300">
                              Speed
                            </label>
                            <span className="text-sm font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                              {loaderSpeed}x
                            </span>
                          </div>
                          <Slider
                            min={0.1}
                            max={5}
                            step={0.1}
                            value={[loaderSpeed]}
                            onValueChange={(value) => setLoaderSpeed(value[0])}
                            className="w-full"
                          />
                        </div>
                      )}

                    {/* Color Picker (skip for skeleton and shimmer) */}
                    {activeLoader !== "skelton" &&
                      activeLoader !== "shimmer" && (
                        <div>
                          <label className="font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Primary Color
                          </label>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
                              style={{ backgroundColor: loaderColor }}
                            ></div>
                            <Input
                              type="color"
                              value={loaderColor}
                              onChange={(e) => setLoaderColor(e.target.value)}
                              className="w-16 h-10 p-1 cursor-pointer"
                            />
                            <Input
                              type="text"
                              value={loaderColor}
                              onChange={(e) => setLoaderColor(e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </div>
                      )}

                    {/* Secondary Color Picker (for specific loaders) */}
                    {(activeLoader === "logo" ||
                      activeLoader === "liquid" ||
                      activeLoader === "flow" ||
                      activeLoader === "blob" ||
                      activeLoader === "ring" ||
                      activeLoader === "element" ||
                      activeLoader === "shimmer") && (
                      <div>
                        <label className="font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Secondary Color
                        </label>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
                            style={{ backgroundColor: loaderSecondaryColor }}
                          ></div>
                          <Input
                            type="color"
                            value={loaderSecondaryColor}
                            onChange={(e) =>
                              setLoaderSecondaryColor(e.target.value)
                            }
                            className="w-16 h-10 p-1 cursor-pointer"
                          />
                          <Input
                            type="text"
                            value={loaderSecondaryColor}
                            onChange={(e) =>
                              setLoaderSecondaryColor(e.target.value)
                            }
                            className="flex-1"
                          />
                        </div>
                      </div>
                    )}

                    {/* Count Control (for loaders that support it) */}
                    {(activeLoader === "pulse" ||
                      activeLoader === "wave" ||
                      activeLoader === "grid" ||
                      activeLoader === "bounce" ||
                      activeLoader === "bars" ||
                      activeLoader === "dots" ||
                      activeLoader === "rotate" ||
                      activeLoader === "element") && (
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="font-medium text-gray-700 dark:text-gray-300">
                            Count
                          </label>
                          <span className="text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                            {loaderCount}
                          </span>
                        </div>
                        <Slider
                          min={1}
                          max={10}
                          step={1}
                          value={[loaderCount]}
                          onValueChange={(value) => setLoaderCount(value[0])}
                          className="w-full"
                        />
                      </div>
                    )}

                    {/* Text Input */}
                    <div>
                      <label className="font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Text
                      </label>
                      <Input
                        type="text"
                        value={loaderText}
                        onChange={(e) => setLoaderText(e.target.value)}
                        placeholder="Loading text..."
                      />
                    </div>

                    {/* Skeleton/Shimmer specific controls */}
                    {(activeLoader === "skelton" ||
                      activeLoader === "shimmer") && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="font-medium text-gray-700 dark:text-gray-300">
                              Width
                            </label>
                            <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                              {loaderSize * 2}px
                            </span>
                          </div>
                          <Slider
                            min={40}
                            max={200}
                            step={10}
                            value={[loaderSize * 2]}
                            onValueChange={(value) =>
                              setLoaderSize(value[0] / 2)
                            }
                            className="w-full"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="font-medium text-gray-700 dark:text-gray-300">
                              Height
                            </label>
                            <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                              {loaderSize}px
                            </span>
                          </div>
                          <Slider
                            min={20}
                            max={100}
                            step={5}
                            value={[loaderSize]}
                            onValueChange={(value) => setLoaderSize(value[0])}
                            className="w-full"
                          />
                        </div>
                      </div>
                    )}

                    {/* Code Snippet */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="font-medium text-gray-700 dark:text-gray-300">
                          Code Snippet
                        </label>
                        <Button
                          onClick={() => copyToClipboard(generateCodeSnippet())}
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 bg-white"
                        >
                          <Copy className="w-4 h-4" />
                          Copy
                        </Button>
                      </div>
                      <pre className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-100 p-4 rounded-lg text-sm overflow-x-auto min-h-[160px] max-h-40 border border-gray-700 dark:border-gray-600">
                        {generateCodeSnippet()}
                      </pre>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
