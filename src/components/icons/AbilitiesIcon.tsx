import type { IconComponent, IconProps } from "../../types/icons.types";
import napTime from "../../assets/abilities/napTime.webp";
import springfulSharing from "../../assets/abilities/springfulSharing.webp"
import craftyGrapple from "../../assets/abilities/craftyGrapple.webp";
import preciousPackaging from "../../assets/abilities/preciousPackaging.webp";

type AbilityIconProps = IconProps & {
    src: string;
    alt: string;
};

function AbilityIcon({ className, src, alt}: AbilityIconProps) {
    return (
        <img
            className={className ?? ""}
            alt={alt}
            src={src}
            loading="lazy"
        />
    );
}

function createIcon(src: string, alt: string): IconComponent {
    return function AbilityIconComponent(props: IconProps) {
        return <AbilityIcon {...props} src={src} alt={alt} />;
    };
}

export const NapTimeIcon = createIcon(napTime, "Minimalist moon with a sparkle");
export const SpringfulSharingIcon = createIcon(springfulSharing, "Minimalist basket");
export const CraftyGrappleIcon = createIcon(craftyGrapple, "Minimalist Scraps's Tail");
export const PreciousPackagingIcon = createIcon(preciousPackaging, "Minimalist gift box");
