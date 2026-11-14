import type { IconProps } from "../../types/icons.types";

type ImageIconProps = IconProps & {
    src: string;
    alt: string;
    size?: string | undefined;
};

export default function ImageIcon({ className, src, alt, size}: ImageIconProps) {
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
