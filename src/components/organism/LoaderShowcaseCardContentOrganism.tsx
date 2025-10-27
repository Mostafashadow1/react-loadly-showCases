import { LOADER_CONFIGS } from '@/utils/LoaderConfig';
import { CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PropValues } from '../sections';
import type { LoaderKind } from '@/types/ILoaderConfig';
import { getSpecificProps } from '@/utils/getSpecificProps';
import { DEFAULT_PROPS } from '@/utils/loaderPropsConfig';

const inactiveDefaults = DEFAULT_PROPS
type Props = {
    loader: (typeof LOADER_CONFIGS)[keyof typeof LOADER_CONFIGS];
    propValues: PropValues;
    activeLoader?: LoaderKind;

}
const LoaderShowcaseCardContent = ({ loader, propValues, activeLoader }: Props) => {

    const activeLoaderKey = Object.entries(LOADER_CONFIGS).find(
        ([, value]) => value.title === loader.title
    )?.[0] as LoaderKind | undefined;

    console.log("Resolved active kind:", activeLoaderKey);

    const isActive = activeLoaderKey === activeLoader;

    const specificProps = getSpecificProps(loader.interface, propValues);
    return (
        <>
            <CardContent className="p-6 flex flex-col items-center">
                <div className="flex justify-center mb-4 h-24 items-center">
                    {isActive ? (
                        <loader.component
                            {...propValues}           // common props
                            {...specificProps} // unique props
                        />
                    ) : (
                        <loader.component

                            {...(getSpecificProps(loader.interface, inactiveDefaults as any))} // inactive defaults
                        />
                    )}
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