import type {
  PropControls,
  PropControlConfig,
} from "@/utils/loaderPropsConfig";
import { Fragment, type ReactNode } from "react";
import PropSliderControl from "../molecules/PropSliderControl";
import PropColorControl from "../molecules/PropColorControl";
import PropTextControl from "../molecules/PropTextControl";
import PropSwitchControl from "../molecules/PropSwitchControl";
import { getGroupedControls } from "@/lib/NormalizeGroups";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GROUP_ICON } from "@/types/ILoaderControlsGroup";

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
  // Build only groups that exist and in order
  const grouped = getGroupedControls(controls);
  const renderPropControl = (
    propName: string,
    propConfig: PropControlConfig
  ) => {
    const value = values[propName];

    switch (propConfig.type) {
      case "slider":
        return (
          <PropSliderControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      case "color":
        return (
          <PropColorControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      case "text":
        return (
          <PropTextControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      case "select":
        return (
          <PropTextControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      case "switch":
        return (
          <PropSwitchControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      default:
        return null;
    }
  };
  if (grouped.length === 0) return null;
  return (
    <Card className="h-full overflow-hidden border-0">
      <CardContent className="p-3">
        <Tabs defaultValue={grouped[0][0]}>
          <TabsList className="mb-4 overflow-auto">
            {grouped.map(([groupName]) => {
              const Icon = GROUP_ICON[groupName];
              return (
                <TabsTrigger key={groupName} value={groupName}
                  className="
            data-[state=active]:bg-indigo-700 data-[state=active]:text-white
            text-zinc-400 hover:text-white hover:bg-indigo-700/40
            transition-all px-4 py-1 rounded-sm ease-in-out
          "
                >
                  <Icon className="w-4 h-4" />
                  <span className="capitalize text-sm">{groupName}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {grouped.map(([groupName, entries]) => (
            <TabsContent key={groupName} value={groupName} className="space-y-4">
              {entries.map(([propName, propCfg]) => (
                <Fragment key={propName}>
                  {renderPropControl(propName, propCfg)}
                </Fragment>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
