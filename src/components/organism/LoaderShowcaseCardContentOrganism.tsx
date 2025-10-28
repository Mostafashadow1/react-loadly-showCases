import { LOADER_CONFIGS } from '@/utils/LoaderConfig';
import { CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PropValues } from '../sections';
import type { LoaderKind, LoaderPropsMap } from '@/types/ILoaderConfig';

type Props = {
    loader: (typeof LOADER_CONFIGS)[keyof typeof LOADER_CONFIGS];
    propValues: PropValues;

}
const LoaderShowcaseCardContent = ({ loader, propValues }: Props) => {


    return (
        <>
            <CardContent className="p-6 flex flex-col items-center">
                <div className="flex justify-center mb-4 h-24 items-center">

                    <loader.component
                        {...propValues as LoaderPropsMap[keyof LoaderPropsMap]}

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