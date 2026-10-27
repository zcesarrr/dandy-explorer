type QuestCard = {
    description: string;
};

export default function QuestCard({ description }: QuestCard) {
    return (
        <div className="bg-black/40 rounded-lg p-2">
            <p className="font-fredoka text-white text-stroke text-center">{description}</p>
        </div>
    );
}
