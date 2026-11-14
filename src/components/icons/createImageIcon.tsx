import type { IconComponent, IconProps } from "../../types/icons.types";
import ImageIcon from "./ImageIcon";

export default function createImageIcon(src: string, alt: string, size: string | undefined = undefined): IconComponent {
    return function ImageIconComponent(props: IconProps) {
        return <ImageIcon {...props} src={src} alt={alt} size={size} />;
    };
}
