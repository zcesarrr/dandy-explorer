import type { IconComponent, IconProps } from "../../types/icons.types";
import napTime from "../../assets/abilities/napTime.webp";
import springfulSharing from "../../assets/abilities/springfulSharing.webp"
import craftyGrapple from "../../assets/abilities/craftyGrapple.webp";
import preciousPackaging from "../../assets/abilities/preciousPackaging.webp";
import trickOrTreat from "../../assets/abilities/trickOrTreat.webp";
import bakedSweets from "../../assets/abilities/bakedSweets.webp";
import micCheck from "../../assets/abilities/micCheck.webp";
import blotJr from "../../assets/abilities/blotJr.webp";
import nightLight from "../../assets/abilities/nightLight.webp";
import artisticInspiration from "../../assets/abilities/artisticInspiration.webp";
import hauntingEscape from "../../assets/abilities/hauntingEscape.webp";
import surprise from "../../assets/abilities/surprise.webp";
import bakedWithCare from "../../assets/abilities/bakedWithCare.webp";
import distressedDelicacy from "../../assets/abilities/distressedDelicacy.webp";
import tidyUp from "../../assets/abilities/tidyUp.webp";

type AbilityIconProps = IconProps & {
    src: string;
    alt: string;
    size?: string | undefined;
};

function AbilityIcon({ className, src, alt, size}: AbilityIconProps) {
    return (
        <img
            className={className ?? ""}
            alt={alt}
            src={src}
            loading="lazy"
            style={{
                scale: size,
            }}
        />
    );
}

function createIcon(src: string, alt: string, size: string | undefined = undefined): IconComponent {
    return function AbilityIconComponent(props: IconProps) {
        return <AbilityIcon {...props} src={src} alt={alt} size={size} />;
    };
}

export const NapTimeIcon = createIcon(napTime, "Minimalist moon with a sparkle");
export const SpringfulSharingIcon = createIcon(springfulSharing, "Minimalist basket");
export const CraftyGrappleIcon = createIcon(craftyGrapple, "Minimalist Scraps's Tail");
export const PreciousPackagingIcon = createIcon(preciousPackaging, "Minimalist gift box");
export const TrickOrTreatIcon = createIcon(
    trickOrTreat, 
    "Minimalist pumpkin basket with a smile mouth",
    "110%"
);
export const BakedSweetsIcon = createIcon(bakedSweets, "Minimalist cupcake", "110%");
export const MicCheckIcon = createIcon(micCheck, "Minimalist microphone");
export const BlotJrIcon = createIcon(blotJr, "Minimalist blot-like character");
export const NightLightIcon = createIcon(nightLight, "Minimalist light bulb", "120%");
export const ArtisticInspirationIcon = createIcon(artisticInspiration, "Minimalist brush", "105%");
export const HauntingEscapeIcon = createIcon(hauntingEscape, "Minimalist bomb ghost");
export const SurpriseIcon = createIcon(surprise, "Minimalist roulette", "110%");
export const BakedWithCareIcon = createIcon(bakedWithCare, "Minimalist gingerbread", "105%");
export const DistressedDelicacyIcon = createIcon(distressedDelicacy, "Minimalist book", "115%");
export const TidyUpIcon = createIcon(tidyUp, "Minimalist cleaner", "105%");
