import { Link } from "react-router";

export default function AboutPage() {
    return (
        <div className="font-fredoka text-white text-stroke p-4 flex flex-col justify-center items-center text-center">
            <div className="max-w-lg">
                <p className="text-2xl">Dandy Explorer</p>
                <p>View and explore the details about the Toons of Dandy's World, such as stats, quests and requirements.</p>

                <Link to="/" className="underline underline-2 hover:text-yellow-300 active:text-yellow-300">Go Home</Link>
            </div>
        </div>
    );
}
