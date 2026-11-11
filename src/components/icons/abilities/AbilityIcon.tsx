import type { IconProps } from "../../../types/icons.types";

type AbilityIconProps = IconProps & {
    src: string;
    alt: string;
    size?: string | undefined;
};

export default function AbilityIcon({ className, src, alt, size}: AbilityIconProps) {
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
