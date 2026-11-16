import { Link, useLocation } from "react-router";
import { APP_NAME, APP_VERSION } from "../../constants/app.constants";

export default function Footer() {
    const location = useLocation();

    return (
        <footer className="px-2 py-1.5 font-fredoka text-center text-sm text-white/70 text-stroke flex justify-between">
            <p>{APP_NAME} v{APP_VERSION}</p>
            <p className="max-lg:hidden">
                {APP_NAME} is not affiliated with BlushCrunch Studio, this content is not official or endorsed by BlushCrunch Studio in any way.
            </p>
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
