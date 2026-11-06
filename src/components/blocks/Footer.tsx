import { Link, useLocation } from "react-router";

export default function Footer() {
    const { search } = useLocation();

    return (
        <footer className="px-2 py-1.5 font-fredoka text-center text-sm text-white/70 text-stroke flex justify-between">
            <p>Dandy Explorer</p>
            <Link to={{ pathname: "/about", search }} className="underline underline-offset-2 hover:text-yellow-300 active:text-yellow-300">About</Link>
        </footer>
    );
}
