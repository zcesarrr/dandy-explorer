import AppTabs from "../blocks/AppTabs";
import ToonSelector, { type ToonSelectorProps } from "../blocks/ToonSelector";

type MobileSelectorScreenProps = Omit<ToonSelectorProps, "className">;

export default function MobileSelectorScreen({ getHrefToonButton, toons }: MobileSelectorScreenProps) {
    return (
        <div className="h-full pt-2 flex flex-col">
            <AppTabs />
            <ToonSelector
                className="h-full"
                getHrefToonButton={getHrefToonButton}
                toons={toons}
                toonButtonSize="106px"
            />
        </div>
    );
}
