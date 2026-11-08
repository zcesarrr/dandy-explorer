import { Link, useLocation } from "react-router";

function anchor(url: string) {
    return {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hover:text-yellow-300 active:text-yellow-300 text-white",
    };
}

export default function AboutPage() {
    const location = useLocation();
    const from = location.state?.from;

    return (
        <div className="font-fredoka text-white text-stroke p-4 flex flex-col h-dvh justify-center items-center text-center tracking-wide">
            <title>About | Dandy Explorer</title>

            <div className="max-w-lg">
                <div className="mb-8">
                    <h1 className="text-3xl mb-1.5">Dandy Explorer</h1>
                    <p className="text-lg">Explore the details about the Toons of Dandy's World, such as stats, quests and requirements.</p>
                </div>

                <div className="text-white/80 mb-8">
                    <div className="mb-4">
                        <p>The icons used are from the <a {...anchor("https://solar-icons.dev/")}>Solar Icons</a> library (MIT license).</p>
                        <p>Some other icons are from public license.</p>
                    </div>

                    <p className="mb-16">All information about Toons was collected from the original game and with the help of <a {...anchor("https://dandys-world-robloxhorror.fandom.com/")}>Dandy's World Fandom Wiki</a>.</p>

                    <div className="mb-4">
                        <p>This website was made by CesarZ (Cess).</p>
                        <p>Dandy Explorer is not affiliated with BlushCrunch Studio, this content is not official or endorsed by BlushCrunch Studio in any way.</p>
                    </div>

                    <p>If you have any issues related to Dandy Explorer, please contact me via email: cesarz.contact@gmail.com</p>
                </div>

                <Link 
                    to={from ?? "/"}
                    className="underline underline-offset-2 hover:text-yellow-300 active:text-yellow-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
