import type { ReactNode } from "react";
import type { CollectionItem, ItemImageComponent } from "../types/collection.types";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";

type CollectionButtonProps<T extends CollectionItem> = {
    buttonProps: ShinyButtonProps;
    item: T;
    ItemImage: ItemImageComponent<T>;
    children: ReactNode;
};

export default function CollectionButton<T extends CollectionItem>({
    buttonProps,
    item,
    ItemImage,
    children,
}: CollectionButtonProps<T>) {
    return (
        <ShinyButton 
            className="p-2"
            {...buttonProps}
        >
            <ItemImage
                className="rounded-lg w-full aspect-square"
                item={item}
            />
            {children}
        </ShinyButton>
    );
}
