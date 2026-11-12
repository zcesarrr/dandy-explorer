import CollectionButton from "../../../components/CollectionButton";
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
    const isLongName = item.name.length > 10;

    return (
        <CollectionButton
            buttonProps={buttonProps}
            item={item}
            ItemImage={ItemImage}
        >
            <TwistedRarityLabel
                data-long-name={isLongName ? "true" : undefined}
                rarity={item.rarity}
                label={item.name}
                className="font-fredoka text-center leading-none min-h-5 flex items-center justify-center text-[18px] data-[long-name=true]:text-[11px] min-[640px]:landscape:data-[long-name=true]:text-[15px]"
            />
        </CollectionButton>
    );
}
