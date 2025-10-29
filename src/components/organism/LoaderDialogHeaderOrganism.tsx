import { Badge } from "@/components/ui/badge"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PlaybackControls } from "../molecules/PlaybackControlsMolecule"
interface LoaderDialogHeaderProps {
    title: string
    interfaceName: string
    totalProps: number
    isPlaying: boolean
    onTogglePlay: () => void
    onReset: () => void
}

export function LoaderDialogHeader({
    title,
    interfaceName,
    totalProps,
    isPlaying,
    onTogglePlay,
    onReset,
}: LoaderDialogHeaderProps) {
    return (
        <DialogHeader className="p-6 border-b border-gray-800 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
            <div className="flex items-center justify-between">
                <div>
                    <DialogTitle className="text-2xl font-bold mb-2">
                        {title}
                    </DialogTitle>

                    <Badge variant="outline" className="mr-2">{interfaceName}</Badge>
                    <Badge variant="secondary">{totalProps} Props</Badge>
                </div>

                <PlaybackControls
                    isPlaying={isPlaying}
                    onTogglePlay={onTogglePlay}
                    onReset={onReset}
                />
            </div>
        </DialogHeader>
    )
}
