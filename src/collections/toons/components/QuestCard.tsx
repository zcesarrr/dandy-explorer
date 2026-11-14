import { useHighlistLinkHref } from "../hooks/useToonLinkHref";
import { renderContent } from "../utils/render.utils";

type QuestCardProps = {
    content: string;
};

export default function QuestCard({ content }: QuestCardProps) {
    const buildHref = useHighlistLinkHref();

    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[10px_1fr] gap-3 items-center">
            <div className="w-full aspect-square bg-white rounded-full border border-black" />
            <p className="font-fredoka text-white text-stroke leading-5">
                {renderContent(content, buildHref)}
            </p>
        </div>
    );
}
