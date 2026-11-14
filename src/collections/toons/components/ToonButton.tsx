import CollectionButton from "../../../components/CollectionButton";
import CollectionButtonName from "../../../components/CollectionButtonName";
import type { ShinyButtonProps } from "../../../components/customs/ShinyButton";
import type { ItemImageComponent } from "../../../types/collection.types";
import type { Toon } from "../types/toons.types";

type ToonButtonProps = {
    buttonProps: ShinyButtonProps;
    item: Toon;
    ItemImage: ItemImageComponent<Toon>;
};

export default function ToonButton({ buttonProps, item, ItemImage }: ToonButtonProps) {
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