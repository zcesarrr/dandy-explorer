import ToonSelector, { type ToonSelectorProps } from "../blocks/ToonSelector";

type MobileSelectorScreenProps = Omit<ToonSelectorProps, "className">;

export default function MobileSelectorScreen({ getHrefToonButton, toons }: MobileSelectorScreenProps) {
    return (
        <div className="h-full pt-2">
            <ToonSelector
                className="h-full"
                getHrefToonButton={getHrefToonButton}
                toons={toons}
                toonButtonSize="106px"
            />
        </div>
    );
}
