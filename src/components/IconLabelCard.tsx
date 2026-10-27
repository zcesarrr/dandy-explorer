import { WaterdropIcon } from "@solar-icons/react/bold/waterdrop";

export default function IconLabelCard() {
    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[32px_1fr] items-center gap-1">
            <WaterdropIcon color="white" className="w-8 h-full" />
            <p className="font-fredoka text-white text-stroke">1500 Ichor</p>
        </div>
    );
}
