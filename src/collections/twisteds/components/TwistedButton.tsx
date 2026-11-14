import CollectionButton from "../../../components/CollectionButton";
import CollectionButtonName from "../../../components/CollectionButtonName";
import type { ShinyButtonProps } from "../../../components/customs/ShinyButton";
import type { ItemImageComponent } from "../../../types/collection.types";
import type { Twisted } from "../types/twisteds.types";
import TwistedRarityLabel from "./TwistedRarityLabel";

type TwistedButtonProps = {
    buttonProps: ShinyButtonProps;
    item: Twisted;
    ItemImage: ItemImageComponent<Twisted>;
};

export default function TwistedButton({
    buttonProps,
    item,
    ItemImage,
}: TwistedButtonProps) {
    return (
        <CollectionButton
            buttonProps={buttonProps}
            item={item}
            ItemImage={ItemImage}
        >
            <CollectionButtonName name={item.name}>
                <TwistedRarityLabel
                    rarity={item.rarity}
                    label={item.name}
                />
            </CollectionButtonName>
        </CollectionButton>
    );
}
