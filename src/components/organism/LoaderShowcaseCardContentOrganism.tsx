import { LOADER_CONFIGS } from '@/utils/LoaderConfig';
import { CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PropValues } from '../sections';
import type { LoaderPropsMap } from '@/types/ILoaderConfig';
import { transformJSXToNode } from '@/lib/transformToNode';

type Props = {
    loader: (typeof LOADER_CONFIGS)[keyof typeof LOADER_CONFIGS];
    propValues: PropValues;

}
const LoaderShowcaseCardContent = ({ loader, propValues }: Props) => {
    const processedProps: Record<string, any> = { ...propValues };

    // ✅ Transform string children into real React nodes
    Object.entries(processedProps).forEach(([propName, value]) => {
        if (propName === "children" && typeof value === "string") {
            try {
                processedProps[propName] = transformJSXToNode(value);
            } catch (err) {
                console.warn(`Failed to transform children:`, err);
            }
        }

    });
    return (
        <>
            <CardContent className="p-6 flex flex-col items-center">
                <div className="flex justify-center mb-4 h-24 items-center">

                    <loader.component

                        {...processedProps as LoaderPropsMap[keyof LoaderPropsMap]}

                    />

                </div>
                <h3 className="font-semibold text-white text-center mb-2">
                    {loader.title}
                </h3>
                <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs">
                        {loader.interface}
                    </Badge>
                </div>
            </CardContent>
        </>
    )
}

export default LoaderShowcaseCardContent