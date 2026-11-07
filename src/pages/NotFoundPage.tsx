import ShinyButton from "../components/customs/ShinyButton";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col h-dvh justify-center items-center font-fredoka text-white tracking-wide leading-none text-center">
            <meta name="robots" content="noindex" />

            <h1 className="text-[128px]">404</h1>
            <p className="text-2xl">THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST!!!</p>
            <img
                src="/shrimpo.webp"
                alt="Shrimpo Render"
                className="w-64 my-8"
            />
            <ShinyButton className="p-4" href="/">
                GET OUT OF HERE!!!!
            </ShinyButton>
        </div>
    );
}
