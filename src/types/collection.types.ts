import type { ComponentType } from "react";
import type { IconId } from "./icons.types";

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

export type CollectionConfig<T extends CollectionItem> = {
    id: string;
    basePath: string;
    labels: {
        plural: string;
        searchPlaceholder: string;
        emptyMessage: string;
    };
    items: readonly T[];
    sort: {
        defaultKey: string;
        groups: SortGroup<T>[];
    };
    ItemImage: ComponentType<{ item: T; className?: string }>;
    Info: ComponentType<{ item: T }>;
    tabs: readonly TabDef<T>[];
    mobileInfoTab?: { name: string; icon: IconId };
};
