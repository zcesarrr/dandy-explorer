import { useLocation } from "react-router";
import { COLLECTIONS } from "../../collections";
import ShinyButton from "../customs/ShinyButton";
import ICONS from "../../constants/icons.constants";
import type { ReactNode } from "react";
import { getLastListLocation, getLastLocation } from "../../utils/lastLocation.utils";
import { useIsDesktop } from "../../hooks/useIsDesktop";

function getCollectionIcon(index: number): ReactNode {
    if (!COLLECTIONS[index]) return null
    const Icon = ICONS[COLLECTIONS[index].icon];
    return (
        <Icon />
    );
}

export default function SectionNav() {
    const { pathname } = useLocation();
    const isDesktop = useIsDesktop();

    if (COLLECTIONS.length < 2) return null;

    return (
        <nav
            aria-label="Sections"
            className="shrink-0 px-2 pt-[max(0.5rem,env(safe-area-inset-top))]"
        >
            <ul className="flex justify-center gap-2">
                {COLLECTIONS.map((collection, index)=> {
                    const isActive = pathname === collection.basePath || pathname.startsWith(`${collection.basePath}/`);
                    
                    return (
                        <li key={collection.id}>
                            <ShinyButton
                                nav={{ 
                                    href: (isDesktop 
                                            ? getLastLocation(collection.basePath) 
                                            : getLastListLocation(collection.basePath)
                                        ) 
                                        ?? collection.basePath 
                                }}
                                active={isActive}
                                className="flex flex-row items-center px-4 py-1 font-fredoka text-white text-stroke max-sm:text-sm"
                            >
                                {getCollectionIcon(index)}
                                {collection.labels.plural}
                            </ShinyButton>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
