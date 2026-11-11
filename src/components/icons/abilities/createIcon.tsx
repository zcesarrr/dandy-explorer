import type { IconComponent, IconProps } from "../../../types/icons.types";
import AbilityIcon from "./AbilityIcon";

export default function createIcon(src: string, alt: string, size: string | undefined = undefined): IconComponent {
    return function AbilityIconComponent(props: IconProps) {
        return <AbilityIcon {...props} src={src} alt={alt} size={size} />;
    };
}
