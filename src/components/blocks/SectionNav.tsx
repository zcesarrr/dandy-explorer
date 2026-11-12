import { useLocation } from "react-router";
import { COLLECTIONS } from "../../collections";
import ShinyButton from "../customs/ShinyButton";

export default function SectionNav() {
    const { pathname } = useLocation();

    if (COLLECTIONS.length < 2) return null;

    return (
        <nav
            aria-label="Sections"
            className="shrink-0 px-2 pt-[max(0.5rem,env(safe-area-inset-top))]"
        >
            <ul className="flex justify-center gap-2">
                {COLLECTIONS.map(collection => {
                    const isActive = pathname === collection.basePath || pathname.startsWith(`${collection.basePath}/`);
                    
                    return (
                        <li key={collection.id}>
                            <ShinyButton
                                nav={{ href: collection.basePath }}
                                active={isActive}
                                className="items-center px-4 py-1 font-fredoka text-white text-stroke"
                            >
                                {collection.labels.plural}
                            </ShinyButton>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
