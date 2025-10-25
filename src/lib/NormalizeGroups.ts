import { GROUP_ORDER, type GroupKey } from "@/types/ILoaderControlsGroup";
import type { PropControlConfig } from "@/utils/loaderPropsConfig";

export function normalizeGroup(g?: string): GroupKey {
    if (!g) return "General";
    const name = g.toLowerCase();
    if (["style", "appearance", "visual", "glow", "highlight", "shimmer"].includes(name)) return "Style";
    if (["typography", "text", "font"].includes(name)) return "Typography";
    if (["animation", "behavior", "wave", "motion", "shimmer"].includes(name)) return "Animation";
    if (["layout", "size", "dimensions", "position", "grid"].includes(name)) return "Layout";
    if (["variant", "morph", "skeleton"].includes(name)) return "Variant";
    if (["image", "logo", "src"].includes(name)) return "Image";
    if (["progress"].includes(name)) return "Progress";
    if (["count", "dots", "rows", "cols"].includes(name)) return "General";
    // fallback
    return "General";
}

export function getGroupedControls(controls: Record<string, PropControlConfig>) {
    const grouped: Record<GroupKey, [string, PropControlConfig][]> = {
        General: [],
        Style: [],
        Typography: [],
        Animation: [],
        Layout: [],
        Variant: [],
        Image: [],
        Progress: [],
    };

    Object.entries(controls).forEach(([name, cfg]) => {
        const g = normalizeGroup(cfg.group);
        grouped[g].push([name, cfg]);
    });

    // Remove empty groups
    const filtered = Object.entries(grouped).reduce((acc, [k, v]) => {
        if (v.length > 0) acc[k as GroupKey] = v;
        return acc;
    }, {} as Record<GroupKey, [string, PropControlConfig][]>);

    // Return in desired order (only present groups)
    const ordered: [GroupKey, [string, PropControlConfig][]][] = GROUP_ORDER.filter(g => filtered[g]).map(g => [g, filtered[g]]);
    console.log('getGroupedControls ordered:', ordered);
    return ordered; // returns array of [groupName, entries[]] in order
}