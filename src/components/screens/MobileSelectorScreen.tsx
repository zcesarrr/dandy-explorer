import type { CollectionItem } from "../../types/collection.types";
import type { CollectionSelectorProps } from "../blocks/CollectionSelector";
import CollectionSelector from "../blocks/CollectionSelector";

type MobileSelectorScreenProps<T extends CollectionItem> = Omit<CollectionSelectorProps<T>, "className">;

export default function MobileSelectorScreen<T extends CollectionItem>({
    config,
    items,
    getHrefItemButton,
}: MobileSelectorScreenProps<T>) {
    return (
        <div className="h-full pt-2">
            <CollectionSelector
                className="h-full"
                config={config}
                items={items}
                getHrefItemButton={getHrefItemButton}
                itemButtonSize="106px"
            />
        </div>
    );
}
