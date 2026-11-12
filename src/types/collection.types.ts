import type { ComponentType } from "react";
import type { IconId } from "./icons.types";
import type { ShinyButtonProps } from "../components/customs/ShinyButton";

export type CollectionItem = {
    slug: string;
    name: string;
};

export type TabProps<T> = {
    item: T;
};

export type TabDef<T> = {
    key: string;
    name: string;
    icon: IconId;
    Component: ComponentType<TabProps<T>>;
};

export type SortOption<T> = {
    key: string;
    label: string;
    compare: (a: T, b: T) => number;
};

export type SortGroup<T> = {
    title?: string;
    options: SortOption<T>[];
};

export type CollectionSort<T> = {
    defaultKey: string;
    groups: SortGroup<T>[];
};

export type ItemImageComponent<T extends CollectionItem> = 
    ComponentType<{ item: T; className?: string }>;

export type CollectionConfig<T extends CollectionItem> = {
    id: string;
    basePath: string;
    labels: {
        singular: string;
        plural: string;
        searchPlaceholder: string;
        emptyMessage: string;
    };
    items: readonly T[];
    sort: CollectionSort<T>;
    ItemImage: ItemImageComponent<T>;
    ItemButton: ComponentType<{ 
        buttonProps: ShinyButtonProps, item: T, ItemImage: ItemImageComponent<T> 
    }>;
    Info: ComponentType<{ item: T, className?: string }>;
    tabs: readonly TabDef<T>[];
    mobileInfoTab?: { name: string; icon: IconId };
    desktopInfoSize?: number;
};
