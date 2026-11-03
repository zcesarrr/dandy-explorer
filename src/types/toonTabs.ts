import type { ComponentType } from "react";
import type { IconId } from "./icons";
import type { Toon } from "./toons";

export type ToonTabProps = {
    toon: Toon;
};

export type ToonTabDef = {
    key: string;
    name: string;
    icon: IconId;
    Component: ComponentType<ToonTabProps>;
};
