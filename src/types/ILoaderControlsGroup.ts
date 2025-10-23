import { Sliders, Droplet, Type, Play, Layout, Cuboid, Image as ImageIcon, BarChart2 } from "lucide-react";

export type GroupKey =
    | "General"
    | "Style"
    | "Typography"
    | "Animation"
    | "Layout"
    | "Variant"
    | "Image"
    | "Progress";

export const GROUP_ORDER: GroupKey[] = [
    "General",
    "Style",
    "Animation",
    "Typography",
    "Layout",
    "Variant",
    "Image",
    "Progress",
];
export const GROUP_ICON: Record<GroupKey, any> = {
    General: Sliders,
    Style: Droplet,
    Typography: Type,
    Animation: Play,
    Layout: Layout,
    Variant: Cuboid,
    Image: ImageIcon,
    Progress: BarChart2,
};