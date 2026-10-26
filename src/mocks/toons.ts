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
                name: "Total Eclipse",
                type: "passive",
                description: "This Toon transforms into a werewolf in blackouts, giving off a glow, gaining 2 Stamina Stars, a 20% Movement Speed boost, and briefly highlighting all Twisteds on the floor.",
            },
        ],
        rarity: "normal",
        category: "halloween",
    },
    {
        id: 1,
        name: "Gourdy",
        iconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdandys-world-robloxhorror%2Fimages%2Fc%2Fc1%2FGourdy_Render.png%2Frevision%2Flatest%2Fscale-to-width-down%2F268%3Fcb%3D20251010191037&f=1&nofb=1&ipt=fcc8def53cf17bb8bbb60283db385f34201bfdd189f3a286ccd0aee06df22cca&ipo=images",
        stats: buildBaseStats(2, 5, 4, 1, 1, 5),
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
        rarity: "main",
        category: "halloween",
    },
    {
        id: 2,
        name: "Yatta",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/7/75/Yatta_Render.png",
        stats: buildBaseStats(3, 3, 4, 1, 2, 5),
        abilities: [
            {
                name: "Piñata Party",
                type: "passive",
                description: "This Toon drops 2 random candy items after completing a machine, and 4 random candy items when injured.",
            },
        ],
        rarity: "main",
        category: "none",
    },
 ];

export default toons;
