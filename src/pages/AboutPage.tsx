import { Link, useLocation } from "react-router";
import { APP_NAME } from "../constants/app.constants";
import type { ReactNode } from "react";
import GradientLabel from "../components/GradientLabel";

const anchorStyles = "text-yellow-300 hover:text-yellow-500 active:text-yellow-500 text-white underline";

function anchor(url: string) {
    return {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: anchorStyles,
    };
}

function Section({ title, children }: { title: string; children: ReactNode; }) {
    return (
        <section className="bg-black/40 rounded-lg p-4 text-left">
            <h2 className="text-yellow-300 text-sm tracking-wider mb-1.5">{title}</h2>
            <div className="text-white/85 text-shadow-none leading-relaxed">{children}</div>
        </section>
    );
}

export default function AboutPage() {
    const location = useLocation();
    const from = location.state?.from;

    const title = `About | ${APP_NAME}`;

    return (
        <div className="font-fredoka text-white text-stroke p-4 flex flex-col min-h-dvh justify-center items-center text-center tracking-wide">
            <title>{title}</title>
            
            <div className="w-full max-w-lg flex flex-col gap-3">
                <header className="text-stroke mb-8">
                    <GradientLabel 
                        className="text-3xl mb-1.5"
                        gradientColor="linear-gradient(0deg, #aaa 20%, #fff 50%, #fff 100%)"
                        label={APP_NAME}
                    />
                    <p className="text-lg">Explore the details about the characters of Dandy's World, such as stats, quests, requirements and trinkets.</p>
                </header>

                <Section title="Sources">
                    <p>All information was collected from the original game, with help from the <a {...anchor("https://dandys-world-robloxhorror.fandom.com/")}>Dandy's World Fandom Wiki</a> for assets and images.</p>
                </Section>

                <Section title="Credits">
                    <ul className="list-disc pl-4">
                        <li>The icons used are from the <a {...anchor("https://solar-icons.dev/")}>Solar Icons</a> library (MIT license).</li>
                        <li>Some other icons are in the public domain (CC0 license).</li>
                        <li>This website was made by Cess.</li>
                    </ul>
                </Section>

                <Section title="Contact">
                    <p>
                        If you have any issues related to {APP_NAME}, please contact me via email:
                        <a className={anchorStyles} href="mailto:zcesarrr.tw@gmail.com?subject=Dandy's Explorer subject"> cesarz.contact@gmail.com</a>
                    </p>
                </Section>

                <p className="text-sm">{APP_NAME} is not affiliated with BlushCrunch Studio, this content is not official or endorsed by BlushCrunch Studio in any way.</p>

                <Link 
                    to={from ?? "/"}
                    className="mt-8 underline underline-offset-2 hover:text-yellow-300 active:text-yellow-300 text-lg"
                >
                    Back
                </Link>
            </div>
        </div>
    );
}
