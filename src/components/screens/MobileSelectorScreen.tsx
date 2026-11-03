import ToonSelector, { type ToonSelectorProps } from "../blocks/ToonSelector";

type MobileSelectorScreenProps = Omit<ToonSelectorProps, "className" | "selected">;

export default function MobileSelectorScreen({ onSelect, toons }: MobileSelectorScreenProps) {
    return (
        <div className="h-full pt-2">
            <ToonSelector
                className="h-full"
                onSelect={onSelect}
                toons={toons}
                toonButtonSize="106px"
            />
        </div>
    );
}
