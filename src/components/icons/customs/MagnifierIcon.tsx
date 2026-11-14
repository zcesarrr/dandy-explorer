import type { IconProps } from "../../../types/icons.types";

export default function MagnifierIcon({ className, color }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="transparent"
            className={`${className ?? ""}`}
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="m21 21-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
            />
        </svg>
    );
}
