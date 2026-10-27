type QuestCard = {
    description: string;
};

export default function QuestCard({ description }: QuestCard) {
    return (
        <div className="bg-yellow-300/20 rounded-lg">
            <p className="font-fredoka text-white text-stroke p-2 text-center">{description}</p>
        </div>
    );
}
