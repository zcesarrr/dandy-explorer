import { Link, useLocation } from "react-router";
import { APP_NAME } from "../../constants/app";

export default function Footer() {
    const location = useLocation();

    return (
        <footer className="px-2 py-1.5 font-fredoka text-center text-sm text-white/70 text-stroke flex justify-between">
            <p>{APP_NAME}</p>
            <Link 
                to="/about"
                state={{ from: location }}
                className="underline underline-offset-2 hover:text-yellow-300 active:text-yellow-300"
            >
                About
            </Link>
        </footer>
    );
}
