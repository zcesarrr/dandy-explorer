function renderContent(content: string) {
    return content.split(/\{\{(.*?)\}\}/g).map((part, index) => 
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
