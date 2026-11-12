import CollectionButton from "../../../components/CollectionButton";
import type { ShinyButtonProps } from "../../../components/customs/ShinyButton";
import type { ItemImageComponent } from "../../../types/collection.types";
import type { Trinket } from "../types/trinkets.types";

type TrinketButtonProps = {
    buttonProps: ShinyButtonProps;
    item: Trinket;
    ItemImage: ItemImageComponent<Trinket>;
};

export default function TrinketButton({ buttonProps, item, ItemImage }: TrinketButtonProps) {
    const isLongName = item.name.length > 10;

    return (
        <CollectionButton
            buttonProps={buttonProps}
            item={item}
            ItemImage={ItemImage}
        >
            <p
                data-long-name={isLongName ? "true" : undefined}
                className="font-fredoka text-white text-stroke text-center leading-none min-h-5 flex items-center justify-center text-[18px] data-[long-name=true]:text-[11px] min-[640px]:landscape:data-[long-name=true]:text-[15px]"
            >
                {item.name}
            </p>
        </CollectionButton>
    );
}