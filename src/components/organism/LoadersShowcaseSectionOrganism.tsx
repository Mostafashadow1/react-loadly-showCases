import { useState, useMemo, useCallback, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LOADER_CONFIGS } from "@/utils/LoaderConfig";
import { LoaderPreview } from "@/components/organism/LoaderPreviewOrganism";
import { LoaderControls } from "@/components/organism/LoaderControlsOrganism";
import { CodeSnippet } from "@/components/organism/CodeSnippetOrganism";
import {
  COMMON_CONTROLS,
  UNIQUE_CONTROLS,
  DEFAULT_PROPS,
} from "@/utils/loaderPropsConfig";
import type { LoaderKind } from "@/types/ILoaderConfig";
import type { PropControls } from "@/utils/loaderPropsConfig";
import LoaderShowcaseHeader from "./LoaderShowcaseHeaderOrganism";
import LoaderShowcaseCardContent from "./LoaderShowcaseCardContentOrganism";
import SwitchTabs from "./SwitchTabsOrganism";
import { LoaderDialogHeader } from "./LoaderDialogHeaderOrganism";
export type PropValues = Record<
  string,
  string | number | boolean | ReactNode | undefined
>;

export function LoadersShowcaseSection() {
  const [activeLoader, setActiveLoader] = useState<LoaderKind>("spin");
  const [isPlaying, setIsPlaying] = useState(true);
  //creating props for each loader
  const [loaderConfigs, setLoaderConfigs] = useState<
    Record<LoaderKind, PropValues>
  >(() => {
    const initial: Record<LoaderKind, PropValues> = {} as any;

    Object.keys(LOADER_CONFIGS).forEach((loaderKey) => {
      const loader = LOADER_CONFIGS[loaderKey as LoaderKind];
      const props: PropValues = {};

      // combine default + unique + common props for this loader
      [...loader.commonProps, ...loader.uniqueProps].forEach((prop) => {
        if (prop in DEFAULT_PROPS) {
          // Special case: squares loader should have count: 1
          if (loaderKey === "squares" && prop === "count") {
            props[prop] = 1;
          } else {
            props[prop] = DEFAULT_PROPS[prop];
          }
        }
      });
      initial[loaderKey as LoaderKind] = props;
    });

    return initial;
  });

  // active loader data created when loader chosen
  const activeLoaderData = useMemo(() => {
    return LOADER_CONFIGS[activeLoader] || Object.values(LOADER_CONFIGS)[0];
  }, [activeLoader]);

  //current props to pass to preview and code snippet
  const currentProps = useMemo(() => {
    const props = loaderConfigs[activeLoader] || {};
    return isPlaying ? props : { ...props, speed: 0 };
  }, [activeLoader, loaderConfigs, isPlaying]);

  const propControls = useMemo((): PropControls => {
    const controls: PropControls = {};
    const { commonProps, uniqueProps, interface: iface } = activeLoaderData;
    [...commonProps, ...uniqueProps].forEach((prop) => {
      if (prop in DEFAULT_PROPS) {
        if (prop === "variant") {
          controls[prop] =
            iface === "IMorphLoaderProps"
              ? UNIQUE_CONTROLS.morphVariant
              : iface === "ISkeletonLoaderProps"
              ? UNIQUE_CONTROLS.skeletonVariant
              : UNIQUE_CONTROLS.variant;
          return;
        }

        controls[prop] =
          COMMON_CONTROLS[prop as keyof typeof COMMON_CONTROLS] ??
          UNIQUE_CONTROLS[prop as keyof typeof UNIQUE_CONTROLS];
      }
    });
    // Add unique controls
    return controls;
  }, [activeLoaderData]);

  // Handle prop value changes
  const handlePropChange = useCallback(
    (propName: string, value: string | number | boolean | ReactNode) => {
      setLoaderConfigs((prev) => ({
        ...prev,
        [activeLoader]: {
          ...prev[activeLoader],
          [propName]: value,
        },
      }));
    },
    [activeLoader]
  );

  // Reset all props to default values
  const resetProps = useCallback(() => {
    const resetValues: PropValues = {};
    const activeConfig = LOADER_CONFIGS[activeLoader];
    [...activeConfig.commonProps, ...activeConfig.uniqueProps].forEach(
      (prop) => {
        if (prop in DEFAULT_PROPS) {
          // Special case: squares loader should have count: 1
          if (activeLoader === "squares" && prop === "count") {
            resetValues[prop] = 1;
          } else {
            resetValues[prop] = DEFAULT_PROPS[prop];
          }
        }
      }
    );

    setLoaderConfigs((prev) => ({
      ...prev,
      [activeLoader]: resetValues,
    }));
  }, [activeLoader]);

  return (
    <section
      id="loaders"
      className="py-10 sm:py-16 md:py-20 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Enhanced Header */}
        <LoaderShowcaseHeader />
        {/* Enhanced Loader Grid */}
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-hidden">
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
                               hover:border-indigo-500/30 transition-all duration-500 group-hover:scale-105 "
                    >
                      {loader.isNew && (
                        <Badge className="text-xs border-amber-50 p-1">
                          NEW
                        </Badge>
                      )}
                      <LoaderShowcaseCardContent
                        loader={loader}
                        propValues={loaderConfigs[key as LoaderKind]}
                      />
                    </Card>
                  </motion.div>
                </DialogTrigger>

                {/* Enhanced Dialog - Fully Responsive */}
                <DialogContent
                  className="max-w-7xl 
                           h-dvh sm:h-[95vh] md:h-[90vh] lg:h-[85vh]
                           w-full sm:w-[98vw] md:w-[95vw] lg:w-[90vw] xl:w-[85vw]
                           max-h-dvh sm:max-h-[95vh] md:max-h-[90vh]
                           overflow-hidden
                           bg-linear-to-br from-gray-900 to-gray-950 
                           border-0 sm:border border-gray-800 
                           rounded-none sm:rounded-xl md:rounded-2xl 
                           shadow-2xl text-white 
                           p-0 sm:p-2 md:p-3 lg:p-4
                           flex flex-col
                           !left-0 !top-0 
                           sm:!left-[50%] sm:!top-[50%] 
                           !translate-x-0 !translate-y-0 
                           sm:!translate-x-[-50%] sm:!translate-y-[-50%]"
                >
                  {/* Header Section - Responsive */}
                  <div className="shrink-0 mb-0 sm:mb-2 md:mb-4 px-2 sm:px-0">
                    <LoaderDialogHeader
                      title={loader.title}
                      interfaceName={loader.interface}
                      totalProps={
                        loader.commonProps.length + loader.uniqueProps.length
                      }
                      isPlaying={isPlaying}
                      onTogglePlay={() => setIsPlaying(!isPlaying)}
                      onReset={resetProps}
                    />
                  </div>

                  {/* Main Content Grid - Responsive Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-1 min-h-0 overflow-hidden px-2 sm:px-0 pb-2 sm:pb-0">
                    {/* Controls Panel - Responsive */}
                    <div
                      className="
                      p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 
                      space-y-2 sm:space-y-3 md:space-y-4 
                      flex flex-col min-h-0 
                      lg:border-r border-gray-800/50 
                      bg-zinc-900/40 
                      rounded-lg sm:rounded-xl lg:rounded-none 
                      overflow-hidden
                    "
                    >
                      <h4 className="font-semibold text-gray-200 text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
                        <span className="hidden sm:inline">
                          Customize Properties
                        </span>
                        <span className="sm:hidden">Properties</span>
                      </h4>
                      <div className="flex-1 overflow-y-auto scrollbar-beauty min-h-0 -mx-1 sm:mx-0 px-1 sm:px-0">
                        <LoaderControls
                          controls={propControls}
                          values={loaderConfigs[activeLoader]}
                          onChange={handlePropChange}
                        />
                      </div>
                    </div>

                    {/* Preview/Code Panel - Responsive */}
                    <div
                      className="
                      p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 
                      space-y-2 sm:space-y-3 md:space-y-4 
                      flex flex-col min-h-0 
                      bg-zinc-900/40 
                      rounded-lg sm:rounded-xl lg:rounded-none 
                      overflow-hidden
                    "
                    >
                      <div className="flex-1 overflow-y-auto scrollbar-beauty min-h-0 -mx-1 sm:mx-0 px-1 sm:px-0">
                        <SwitchTabs
                          preview={
                            <LoaderPreview
                              activeLoaderData={activeLoaderData}
                              currentProps={currentProps}
                            />
                          }
                          code={
                            <CodeSnippet
                              activeLoaderData={activeLoaderData}
                              currentProps={currentProps}
                            />
                          }
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
