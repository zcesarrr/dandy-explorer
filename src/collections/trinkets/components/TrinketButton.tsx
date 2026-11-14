import CollectionButton from "../../../components/CollectionButton";
import CollectionButtonName from "../../../components/CollectionButtonName";
import type { ShinyButtonProps } from "../../../components/customs/ShinyButton";
import type { ItemImageComponent } from "../../../types/collection.types";
import type { Trinket } from "../types/trinkets.types";
import TrinketImage from "./TrinketImage";

const TrinketImageWithIcon: ItemImageComponent<Trinket> = (props) => (
    <TrinketImage {...props} showCategoryIcon />
);

type TrinketButtonProps = {
    buttonProps: ShinyButtonProps;
    item: Trinket;
};

export default function TrinketButton({ buttonProps, item }: TrinketButtonProps) {
    return (
        <CollectionButton
            buttonProps={buttonProps}
            item={item}
            ItemImage={TrinketImageWithIcon}
        >
            <CollectionButtonName name={item.name} className="text-white text-stroke" />
        </CollectionButton>
    );
}