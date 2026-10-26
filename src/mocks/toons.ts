import type { Toon } from "../types/toons";
import { buildBaseStats } from "../utils/stats";

const toons: (Toon & { id: number })[] = [
    {
        id: 0,
        name: "Eclipse",
        iconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdandys-world-robloxhorror%2Fimages%2F5%2F55%2FEclipse_Render.png%2Frevision%2Flatest%3Fcb%3D20251010190941&f=1&nofb=1&ipt=faa62515cb15756fee2d0ec6cfec3413fd3be744c44037743d6e18fa5b460064&ipo=images",
        stats: buildBaseStats(3, 3, 4, 3, 2, 3),
        abilities: [
            {
                name: "Trick or Treat",
                type: "active",
                description: "This Toon applies a random 20% boost for 15 seconds to all Toons within range. Has a cooldown of 35.",
            },
            {
                name: "Sugar Rush",
                type: "passive",
                description: "Provides a 20% speed boost to all Players for 5 seconds when the Elevator opens and when Panic Mode begins.",
            },
        ],
    },
 ];

export default toons;
