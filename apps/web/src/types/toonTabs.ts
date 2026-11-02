import type { ComponentType } from "react";
import type { IconId } from "./icons";

export type ToonTabProps = {
    toonId: number;
};

export type ToonTabDef = {
    key: string;
    name: string;
    icon: IconId;
    Component: ComponentType<ToonTabProps>;
};
