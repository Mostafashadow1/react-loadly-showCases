import { useState, useMemo, useCallback, type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LOADER_CONFIGS } from "@/utils/LoaderConfig";
import { LoaderPreview } from "@/components/sections/LoaderPreview";
import { LoaderControls } from "@/components/sections/LoaderControls";
import { CodeSnippet } from "@/components/sections/CodeSnippet";
import {
  COMMON_CONTROLS,
  UNIQUE_CONTROLS,
  DEFAULT_PROPS,
} from "@/utils/loaderPropsConfig";
import type { LoaderKind } from "@/types/ILoaderConfig";
import type { PropControls } from "@/utils/loaderPropsConfig";
import LoaderShowcaseHeader from "../organism/LoaderShowcaseHeader";
import LoaderShowcaseCardContent from "../organism/LoaderShowcaseCardContent";

export type PropValues = Record<string, string | number | boolean | ReactNode | undefined>;

export function LoadersShowcaseSection() {
  const [activeLoader, setActiveLoader] = useState<LoaderKind>("spin");
  const [isPlaying, setIsPlaying] = useState(true);

  const [propValues, setPropValues] = useState<PropValues>(() => {
    const initialValues: PropValues = {};
    Object.keys(DEFAULT_PROPS).forEach((prop) => {
      initialValues[prop] = DEFAULT_PROPS[prop];
    });
    return initialValues;
  });

  const activeLoaderData = useMemo(() => {
    return LOADER_CONFIGS[activeLoader] || Object.values(LOADER_CONFIGS)[0];
  }, [activeLoader]);

  const currentProps = useMemo(() => {
    const props: PropValues = {};

    // Add common props
    activeLoaderData.commonProps.forEach((prop) => {
      if (propValues[prop] !== undefined) {
        props[prop] = propValues[prop];
      }
    });

    // Add unique props
    activeLoaderData.uniqueProps.forEach((prop) => {
      if (propValues[prop] !== undefined) {
        props[prop] = propValues[prop];
      }
    });

    // Handle special cases
    if (!isPlaying) {
      props.speed = 0;
    }

    return props;
  }, [activeLoaderData, propValues, isPlaying]);

  const propControls = useMemo((): PropControls => {
    const controls: PropControls = {};

    // Add common controls
    activeLoaderData.commonProps.forEach((prop) => {
      console.log(prop);
      const controlKey = prop as keyof typeof COMMON_CONTROLS;
      if (COMMON_CONTROLS[controlKey]) {
        controls[prop] = COMMON_CONTROLS[controlKey];
      }
    });
    console.log("control props", controls)
    // Add unique controls
    activeLoaderData.uniqueProps.forEach((prop) => {
      // Handle special case for variant property in MorphLoader and SkeletonLoader
      if (prop === "variant") {
        if (activeLoaderData.interface === "IMorphLoaderProps") {
          controls[prop] = UNIQUE_CONTROLS.morphVariant;
          return;
        } else if (activeLoaderData.interface === "ISkeletonLoaderProps") {
          controls[prop] = UNIQUE_CONTROLS.skeletonVariant;
          return;
        } else {
          // Default variant control for other loaders
          const controlKey = prop as keyof typeof UNIQUE_CONTROLS;
          if (UNIQUE_CONTROLS[controlKey]) {
            controls[prop] = UNIQUE_CONTROLS[controlKey];
          }
          return;
        }
      }

      const controlKey = prop as keyof typeof UNIQUE_CONTROLS;
      if (UNIQUE_CONTROLS[controlKey]) {
        controls[prop] = UNIQUE_CONTROLS[controlKey];
      }
    });

    return controls;
  }, [activeLoaderData]);

  // Handle prop value changes
  const handlePropChange = useCallback(
    (propName: string, value: string | number | boolean | ReactNode) => {
      setPropValues((prev) => ({
        ...prev,
        [propName]: value,
      }));
    },
    []
  );

  // Reset all props to default values
  const resetProps = useCallback(() => {
    const resetValues: PropValues = {};
    Object.keys(DEFAULT_PROPS).forEach((prop) => {
      resetValues[prop] = DEFAULT_PROPS[prop];
    });
    setPropValues(resetValues);
  }, []);

  return (
    <section
      id="loaders"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <LoaderShowcaseHeader />


        {/* Enhanced Loader Grid */}
        <div className="container mx-auto  px-2 md:px-10">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(LOADER_CONFIGS).map(([key, loader]) => (
              <Dialog key={key}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setActiveLoader(key as LoaderKind);
                    }}
                  >
                    <Card
                      className=" p-2 border border-gray-800/70 bg-gray-900/40 backdrop-blur-sm 
                               rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/25 
                               hover:border-indigo-500/30 transition-all duration-500 group-hover:scale-105"
                    >
                      {loader.isNew && (
                        <Badge className="text-xs border-amber-50 p-1">
                          NEW
                        </Badge>
                      )}
                      <LoaderShowcaseCardContent loader={loader} propValues={propValues} />
                    </Card>
                  </motion.div>
                </DialogTrigger>

                {/* Enhanced Dialog */}
                <DialogContent
                  className="max-w-7xl w-[95vw] h-[80vh] overflow-hidden
                           bg-gradient-to-br from-gray-900 to-gray-950 
                           border border-gray-800 rounded-2xl shadow-2xl text-white p-3 "
                >
                  <DialogHeader className="p-6 border-b border-gray-800 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <DialogTitle className="text-2xl font-bold mb-2">
                          {loader.title}
                        </DialogTitle>
                        <Badge variant="outline" className="mr-2">
                          {loader.interface}
                        </Badge>
                        <Badge variant="secondary">
                          {loader.commonProps.length +
                            loader.uniqueProps.length}{" "}
                          Props
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setIsPlaying(!isPlaying)}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                          {isPlaying ? "Pause" : "Play"}
                        </Button>
                        <Button
                          onClick={resetProps}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Reset
                        </Button>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full min-h-0">
                    {/* Enhanced Preview */}
                    <div className="md:col-span-1 flex flex-col min-h-0">
                      <div className="flex-1 overflow-y-auto scrollbar-none">
                        <LoaderPreview
                          activeLoaderData={activeLoaderData}
                          currentProps={currentProps}
                        />
                      </div>
                    </div>

                    {/* Enhanced Controls */}
                    <div className="md:col-span-1 p-6 space-y-6 border-l border-gray-800 flex flex-col min-h-0">
                      <div className="flex-1 overflow-y-auto scrollbar-none">
                        <h4 className="font-semibold text-gray-200 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Customize Properties
                        </h4>
                        <LoaderControls
                          controls={propControls}
                          values={propValues}
                          onChange={handlePropChange}
                        />
                      </div>
                    </div>

                    {/* Enhanced Code Snippet */}
                    <div className="md:col-span-1 p-6 border-l border-gray-800 flex flex-col min-h-0">
                      <div className="flex-1 overflow-y-auto scrollbar-none">
                        <CodeSnippet
                          activeLoaderData={activeLoaderData}
                          currentProps={currentProps}
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
