import type { ReactNode } from "react";
import { Link } from "react-router";
import { useToonLinkHref } from "../hooks/useToonLinkHref";

const TOKEN_REGEX = /\{\{(.*?)\}\}|##(.*?)##/g;

function renderContent(content: string, buildHref: (to: string) => string) {
    const nodes: ReactNode[] = [];
    let lastIndex = 0;

    for (const match of content.matchAll(TOKEN_REGEX)) {
        const [full, highlist, link] = match;
        const start = match.index;

        if (start > lastIndex) nodes.push(content.slice(lastIndex, start));

        if (highlist !== undefined) {
            nodes.push(
                <span key={start} className="text-[#f4fd53]">{highlist}</span>
            );
        } else {
            const separator = link?.indexOf(":");
            const label = separator === 1 ? link : link?.slice(0, separator);
            const to = separator === -1 ? "" : link?.slice((separator ?? 0) + 1);
            nodes.push(
                <Link key={start} to={buildHref(to ?? "")} className="text-[#70d44b] hover:underline active:underline">{label}</Link>
            );
        }

        lastIndex = start + full.length;
    }

    if (lastIndex < content.length) nodes.push(content.slice(lastIndex));
    return nodes;
}

type QuestCardProps = {
    content: string;
};

export default function QuestCard({ content }: QuestCardProps) {
    const buildHref = useToonLinkHref();

    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[10px_1fr] gap-3 items-center">
            <div className="w-full aspect-square bg-white rounded-full border border-black" />
            <p className="font-fredoka text-white text-stroke leading-5">
                {renderContent(content, buildHref)}
            </p>
        </div>
    );
}
