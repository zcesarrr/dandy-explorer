import CollectionButton from "../../../components/CollectionButton";
import CollectionButtonName from "../../../components/CollectionButtonName";
import type { ShinyButtonProps } from "../../../components/customs/ShinyButton";
import type { ItemImageComponent } from "../../../types/collection.types";
import type { Trinket } from "../types/trinkets.types";

type TrinketButtonProps = {
    buttonProps: ShinyButtonProps;
    item: Trinket;
    ItemImage: ItemImageComponent<Trinket>;
};

export default function TrinketButton({ buttonProps, item, ItemImage }: TrinketButtonProps) {
    return (
        <CollectionButton
            buttonProps={buttonProps}
            item={item}
            ItemImage={ItemImage}
        >
            <CollectionButtonName name={item.name} className="text-white text-stroke" />
        </CollectionButton>
    );
}