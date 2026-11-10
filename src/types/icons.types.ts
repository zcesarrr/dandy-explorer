import type { ComponentType } from "react";
import type ICONS from "../constants/icons.constants";

export type IconProps = {
    className?: string;
    color?: string;
};

export type IconComponent = ComponentType<IconProps>;
export type IconId = keyof typeof ICONS;
