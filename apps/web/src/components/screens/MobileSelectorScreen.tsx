import ToonSelector, { type ToonSelectorProps } from "../blocks/ToonSelector";

type MobileSelectorScreenProps = Omit<ToonSelectorProps, "className">;

export default function MobileSelectorScreen({ onSelect, selected, toons }: MobileSelectorScreenProps) {
    return (
        <div className="h-dvh p-4">
            <ToonSelector
                className="h-full"
                onSelect={onSelect}
                selected={selected}
                toons={toons}
            />
        </div>
    );
}
