import { Link } from "react-router";

export default function AboutPage() {
    return (
        <div className="font-fredoka text-white text-stroke p-4 flex flex-col h-dvh justify-center items-center text-center tracking-wide">
            <div className="max-w-lg">
                <div className="mb-8">
                    <p className="text-3xl mb-1.5">Dandy Explorer</p>
                    <p className="text-lg">Explore the details about the Toons of Dandy's World, such as stats, quests and requirements.</p>
                </div>

                <div className="text-white/80 mb-8">
                    <div className="mb-8">
                        <p>The icons used are from the Solar Icons library (MIT license).</p>
                        <p>Some other icons are from public license.</p>
                    </div>

                    <p className="mb-8">All information about Toons was collected from the original game and with the help of Dandy's World Fandom Wiki.</p>

                    <div>
                        <p className="mb-1">This website was made by CesarZ (Cess).</p>
                        <p>If you have any issues related to Dandy Explorer, please contact me via email: cesarz.contact@gmail.com</p>
                    </div>
                </div>

                <Link to="/" className="underline underline-offset-2 hover:text-yellow-300 active:text-yellow-300">Go Home</Link>
            </div>
        </div>
    );
}
