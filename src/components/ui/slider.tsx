import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-indigo-500 cursor-pointer">
      <SliderPrimitive.Range className="absolute h-full bg-indigo-800  cursor-pointer" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="
    block h-4 w-4 rounded-full bg-indigo-500
    cursor-pointer
    shadow 
    transition-all duration-300 ease-in-out
    focus-visible:outline-none 
    focus-visible:ring-2 focus-visible:ring-indigo-400
    data-[state=active]:bg-indigo-600
    data-[state=inactive]:bg-indigo-500
    hover:scale-110
    active:scale-90
  "/>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
