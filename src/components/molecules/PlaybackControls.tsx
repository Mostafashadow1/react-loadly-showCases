import { Button } from "@/components/ui/button"
import { Pause, Play, RotateCcw } from "lucide-react"

interface PlaybackControlsProps {
    isPlaying: boolean
    onTogglePlay: () => void
    onReset: () => void
}

export function PlaybackControls({
    isPlaying,
    onTogglePlay,
    onReset,
}: PlaybackControlsProps) {
    return (
        <div className="flex gap-2">
            <Button
                onClick={onTogglePlay}
                variant="outline"
                size="sm"
                className="gap-2"
            >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
            </Button>

            <Button
                onClick={onReset}
                variant="outline"
                size="sm"
                className="gap-2"
            >
                <RotateCcw className="w-4 h-4" />
                Reset
            </Button>
        </div>
    )
}
