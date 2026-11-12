import type { CollectionConfig, CollectionItem } from "../types/collection.types";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";

type CollectionButtonProps<T extends CollectionItem> = {
    buttonProps: ShinyButtonProps;
    item: T;
    ItemImage: CollectionConfig<T>["ItemImage"];
};

export default function CollectionButton<T extends CollectionItem>({
    buttonProps,
    item,
    ItemImage,
}: CollectionButtonProps<T>) {
    const isLongName = item.name.length > 10;

    return (
        <ShinyButton 
            className="p-2"
            {...buttonProps}
        >
            <ItemImage
                className="rounded-lg w-full aspect-square"
                item={item}
            />
            <p
                data-long-name={isLongName ? "true" : undefined}
                className="font-fredoka text-white text-stroke text-center leading-none min-h-5 flex items-center justify-center text-[18px] data-[long-name=true]:text-[11px] min-[640px]:landscape:data-[long-name=true]:text-[15px]"
            >
                {item.name}
            </p>
        </ShinyButton>
    );
}
