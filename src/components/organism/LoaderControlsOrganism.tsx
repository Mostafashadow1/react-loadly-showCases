import type {
  PropControls,
  PropControlConfig,
} from "@/utils/loaderPropsConfig";
import { Fragment, type ReactNode } from "react";
import PropSliderControl from "../molecules/PropSliderControlMolecule";
import PropColorControl from "../molecules/PropColorControlMolecule";
import PropTextControl from "../molecules/PropTextControlMolecule";
import PropSwitchControl from "../molecules/PropSwitchControlMolecule";
import { getGroupsForTabs } from "@/lib/NormalizeGroups";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GROUP_ICON } from "@/types/ILoaderControlsGroup";
import PropNodeControl from "../molecules/PropNodeControlMolecule";
import PropSelectControl from "../molecules/PropSelectControlMolecule";

interface LoaderControlsProps {
  controls: PropControls;
  values: Record<string, string | number | boolean | ReactNode | undefined>;
  onChange: (propName: string, value: string | number | boolean | ReactNode) => void;
}

export function LoaderControls({
  controls,
  values,
  onChange,
}: LoaderControlsProps) {
  // Build only groups that exist and in order

  const grouped = getGroupsForTabs(controls);

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
          <PropSelectControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      case "switch":
        return (
          <PropSwitchControl propName={propName} propConfig={propConfig} value={value} onChange={onChange} />
        );
      case "node":
        return (
          <PropNodeControl
            propName={propName}
            propConfig={propConfig}
            value={value as ReactNode}
            onChange={onChange} />
        )
      default:
        return null;
    }
  };
  if (grouped.length === 0) return null;
  return (
    <Card className="h-full   border-0">
      <CardContent className="p-3">
        <Tabs defaultValue={grouped[0][0]} >
          <div className=" mb-2 shrink-0 sticky top-0 z-10  bg-zinc-900">
            <TabsList className="rounded-md flex-wrap bg-gray-800 border-gray-200/45 border">
              {grouped.map(([groupName]) => {
                const Icon = GROUP_ICON[groupName as keyof typeof GROUP_ICON];
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
          </div>
          {grouped.map(([groupName, entries]) => (
            <TabsContent key={groupName} value={groupName} className="space-y-4 ">
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
