import { Link } from "react-router";

export default function Footer() {    
    return (
        <footer className="px-2 py-1.5 font-fredoka text-center text-sm text-white/70 text-stroke flex justify-between">
            <p>Dandy Explorer</p>
            <Link to="/about" className="underline underline-offset-2 order-1 hover:text-yellow-300 active:text-yellow-300">About</Link>
        </footer>
    );
}
