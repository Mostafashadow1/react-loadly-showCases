import type { LOADER_CONFIGS } from '@/utils/LoaderConfig';
import { CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PropValues } from '../sections';
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
                        src={
                            loader.interface == "ILogoLoaderProps"
                                ? (propValues?.src as string)
                                : ""
                        }
                        animationType="spin"
                        glowIntensity={0.5}
                        size={40}
                        color={propValues.color as string}
                        speed={1}
                        loop={
                            loader.interface == "ITextLoaderProps"
                                ? (propValues.loop as boolean)
                                : undefined
                        }
                        progress={
                            loader.interface == "IProgressRingLoaderProps"
                                ? (propValues.progress as number)
                                : undefined
                        }
                        thickness={
                            loader.interface == "IProgressRingLoaderProps"
                                ? (propValues.thickness as number)
                                : undefined
                        }

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