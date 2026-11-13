import { Link } from "react-router";

function renderContent(content: string) {
    const contentRegex = /\{\{(.*?)\}\}/g;
    const linkRegex = /\#\#(.*?)\#\#/g;

    const createLink = (part: string, index: number) => {
        const parts = part.split(":");
        return (
            <Link key={index} to={parts[1] ?? ""} className="text-[#fa70ff]">{parts[0]}</Link>
        );
    }

    if (content.match(linkRegex)) {
        return content.split(linkRegex).map((part, index) =>
            index % 2 === 1
                ? createLink(part, index)   
                : part
        );
    }

    return content.split(contentRegex).map((part, index) => 
        index % 2 === 1
            ? <span key={index} className="text-[#f4fd53]">{part}</span>
            : part
    );
}

type QuestCardProps = {
    content: string;
};

export default function QuestCard({ content }: QuestCardProps) {
    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[10px_1fr] gap-3 items-center">
            <div className="w-full aspect-square bg-white rounded-full border border-black" />
            <p className="font-fredoka text-white text-stroke leading-5">{renderContent(content)}</p>
        </div>
    );
}
