import type { ComponentType } from "react";
import type { IconId } from "./icons";
import type { ToonDetailed } from "@dandy-explorer/shared";

export type ToonTabProps = {
    toon: ToonDetailed;
};

export type ToonTabDef = {
    key: string;
    name: string;
    icon: IconId;
    Component: ComponentType<ToonTabProps>;
};
