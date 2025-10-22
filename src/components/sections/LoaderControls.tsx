import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import type {
  PropControls,
  PropControlConfig,
} from "@/utils/loaderPropsConfig";
import { Checkbox } from "../ui/checkbox";
import type { ReactNode } from "react";

interface LoaderControlsProps {
  controls: PropControls;
  values: Record<string, string | number | boolean | ReactNode | undefined>;
  onChange: (propName: string, value: string | number | boolean) => void;
}

export function LoaderControls({
  controls,
  values,
  onChange,
}: LoaderControlsProps) {
  const renderPropControl = (
    propName: string,
    propConfig: PropControlConfig
  ) => {
    const value = values[propName];

    switch (propConfig.type) {
      case "slider":
        return (
          <div key={propName} className="space-y-2">
            <div className="flex justify-between">
              <Label className="text-gray-300 capitalize">
                {propConfig.label || propName}
              </Label>
              <Badge variant="outline" className="text-xs">
                {value}
                {propConfig.unit || ""}
              </Badge>
            </div>
            <Slider
              min={propConfig.min}
              max={propConfig.max}
              step={propConfig.step}
              value={[value as number]}
              onValueChange={(val) => onChange(propName, val[0])}
            />
          </div>
        );

      case "color":
        return (
          <div key={propName} className="space-y-2">
            <Label className="text-gray-300 capitalize">
              {propConfig.label || propName}
            </Label>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-md border border-gray-700"
                style={{
                  backgroundColor: value as string,
                }}
              />
              <Input
                type="color"
                value={value as string}
                onChange={(e) => onChange(propName, e.target.value)}
                className="w-16 h-10 cursor-pointer"
              />
              <Input
                type="text"
                value={value as string}
                onChange={(e) => onChange(propName, e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        );

      case "text":
        return (
          <div key={propName} className="space-y-2">
            <Label className="text-gray-300 capitalize">
              {propConfig.label || propName}
            </Label>
            <Input
              type="text"
              value={(value as string) || ""}
              onChange={(e) => onChange(propName, e.target.value)}
              placeholder={propConfig.placeholder}
            />
          </div>
        );

      case "select":
        return (
          <div key={propName} className="space-y-2">
            <Label className="text-gray-300 capitalize">
              {propConfig.label || propName}
            </Label>
            <Select
              value={value as string}
              onValueChange={(val) => onChange(propName, val)}
            >
              <SelectTrigger className="border border-indigo-400 bg-indigo-950/60 text-white hover:bg-indigo-900/60 focus:ring-2 focus:ring-indigo-400">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-indigo-950 border border-indigo-700 shadow-lg rounded-xl">
                {propConfig.options?.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-indigo-100 hover:bg-indigo-700 hover:text-white focus:bg-indigo-600 focus:text-white cursor-pointer rounded-md px-2 py-1 transition-colors"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case "switch":
        return (
          <div
            key={propName}
            className="flex items-center justify-between py-2"
          >
            <Label className="text-gray-300 capitalize">
              {propConfig.label || propName}
            </Label>
            <Checkbox
              checked={Boolean(value)}
              onCheckedChange={(checked) => onChange(propName, checked)}
            />
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 scrollbar-hide">
      {Object.entries(controls).map(([propName, propConfig]) =>
        renderPropControl(propName, propConfig)
      )}
    </div>
  );
}
