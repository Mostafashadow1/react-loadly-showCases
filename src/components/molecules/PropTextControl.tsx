import type { PropControlsType } from './PropSliderControl'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const PropTextControl = ({ propName, propConfig, value, onChange }: PropControlsType) => {
    return (
        <div key={propName} className="space-y-2">
            <Label className="text-gray-300 capitalize">
                {propConfig.label || propName}
            </Label>
            <Input
                type="text"
                value={(value as string) || ""}
                onChange={(e) => onChange(propName, e.target.value)}
                placeholder={propConfig.placeholder}
            />
        </div>
    )
}

export default PropTextControl