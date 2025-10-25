import { useMemo, type ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { truncateText } from "@/utils/truncateText";
import type { LoaderKind, LoaderPropsMap } from "@/types/ILoaderConfig";
import { transformJSXToNode } from "@/lib/transformToNode";

interface LoaderPreviewProps {
  activeLoaderData: any;
  currentProps: Partial<LoaderPropsMap[LoaderKind]>;
}

export function LoaderPreview({
  activeLoaderData,
  currentProps,
}: LoaderPreviewProps) {
  const ActiveLoaderComponent = activeLoaderData.component;

  // Filter props to only include those relevant to the current loader
  const relevantProps = useMemo(() => {
    const props: Record<string, unknown> = {};

    // Add common props
    activeLoaderData.commonProps.forEach(
      (prop: keyof LoaderPropsMap[LoaderKind]) => {
        if (currentProps[prop] !== undefined) {
          props[prop] = currentProps[prop];
        }
      }
    );

    // Add unique props
    activeLoaderData.uniqueProps.forEach(
      (prop: keyof LoaderPropsMap[LoaderKind]) => {
        if (currentProps[prop] !== undefined) {
          props[prop] = currentProps[prop];
        }
      }
    );

    delete props['fullscreen'];

    // Handle special cases for specific loaders
    if (activeLoaderData.title === "Skeleton Loader") {
      const skeletonProps = currentProps as Partial<LoaderPropsMap["skeleton"]>;
      props.shimmer =
        skeletonProps.shimmer !== undefined ? skeletonProps.shimmer : true;
      props.lines = skeletonProps.lines || 1;
      props.variant = skeletonProps.variant || "avatar";
    }

    if (activeLoaderData.title === "Typing Loader") {
      const textProps = currentProps as Partial<LoaderPropsMap["typing"]>;
      props.loop = textProps.loop !== undefined ? textProps.loop : true;
    }
    if (activeLoaderData.title === "Element Loader") {
      const elementProps = currentProps as Partial<LoaderPropsMap["element"]>;
      if (typeof elementProps.children === "string") {
        try {
          props.children = transformJSXToNode(elementProps.children);

        } catch (err) {
          props.children = elementProps.children;
        }
      } else {
        props.children = elementProps.children;
      }
    }
    console.log(props, "relevant props");
    return props;
  }, [activeLoaderData, currentProps]);

  const propsDisplay = useMemo(() => {
    const props: Record<string, unknown> = {};

    // Add common props
    activeLoaderData.commonProps.forEach(
      (prop: keyof LoaderPropsMap[LoaderKind]) => {
        if (currentProps[prop] !== undefined) {
          props[prop] = currentProps[prop];
        }
      }
    );

    // Add unique props
    activeLoaderData.uniqueProps.forEach(
      (prop: keyof LoaderPropsMap[LoaderKind]) => {
        if (currentProps[prop] !== undefined) {
          props[prop] = currentProps[prop];
        }
      }
    );

    // delete props['fullscreen'];

    // Handle special cases for specific loaders
    if (activeLoaderData.title === "Skeleton Loader") {
      const skeletonProps = currentProps as Partial<LoaderPropsMap["skeleton"]>;
      props.shimmer =
        skeletonProps.shimmer !== undefined ? skeletonProps.shimmer : true;
      props.lines = skeletonProps.lines || 1;
      props.variant = skeletonProps.variant || "avatar";
    }

    // if (activeLoaderData.title === "Typing Loader") {
    //   const textProps = currentProps as Partial<LoaderPropsMap["typing"]>;
    //   props.loop = textProps.loop !== undefined ? textProps.loop : true;
    // }
    // if (activeLoaderData.title === "Element Loader") {
    //   const elementProps = currentProps as Partial<LoaderPropsMap["element"]>;
    //   if (typeof elementProps.children === "string") {
    //     props.children = transformJSXToNode(elementProps.children);
    //   } else {
    //     props.children = elementProps.children;
    //   }
    // }
    console.log(props, "relevant props");
    return props;
  }, [activeLoaderData, currentProps]);


  return (
    <div className="flex flex-col items-center justify-center bg-gray-900/50 border-r border-gray-800 p-6 h-full">
      <div className="mb-6 relative h-full w-full flex items-center justify-center">

        <ActiveLoaderComponent
          {...(relevantProps as LoaderPropsMap[LoaderKind])}
        />
      </div>

      {/* Props Preview */}
      <div className="text-center space-y-2 w-full scrollbar-none">
        <h4 className="font-semibold text-gray-300">Current Props:</h4>
        <ScrollArea className="h-40 w-full  scrollbar-none">
          <div className="text-sm text-gray-200 space-y-1">
            {Object.entries(propsDisplay).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start gap-2 ">
                <span>{key}:</span>

                {/* ✅ If children is JSX, render it */}
                {key === "children" && typeof value !== "string" ? (
                  <div className="text-indigo-300">{value as ReactNode}</div>
                ) : (
                  <span className="text-indigo-300">
                    {truncateText(String(value), 20)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
