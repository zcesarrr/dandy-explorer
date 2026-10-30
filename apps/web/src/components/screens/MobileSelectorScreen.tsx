import ToonSelector, { type ToonSelectorProps } from "../blocks/ToonSelector";

type MobileSelectorScreenProps = Omit<ToonSelectorProps, "className">;

export default function MobileSelectorScreen({ onSelect, toons }: MobileSelectorScreenProps) {
    return (
        <div className="h-dvh pt-2">
            <ToonSelector
                className="h-full"
                onSelect={onSelect}
                selected={undefined}
                toons={toons}
            />
        </div>
    );
}
