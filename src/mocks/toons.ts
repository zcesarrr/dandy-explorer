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
        quests: [
            "Experience 15 Blackouts!",
            "Survive 50 Floors!",
            "Travel 10k Meters!",
            "Encounter 75 Twisteds!",
            "Survive 3 Floors with 7 other Players in your round!",
            "Use 80 Items!",
        ],
        requirements: [
            {
                type: "pumpkin",
                label: "1500 Pumpkins",
            },
            {
                type: "toonsOwning",
                label: "Own 5 or more Toons",
            },
        ],
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
        rarity: "normal",
        category: "none",
    },
    {
        id: 3,
        name: "Gigi",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/9/91/Gigi_Render.png",
        stats: buildBaseStats(3, 5, 3, 1, 3, 3),
        abilities: [
            {
                name: "Surprise!",
                type: "active",
                description: "This Toon can grant herself a random item from any Tier (Dandy's Shop items included). Has a Cooldown of 60.",
            },
        ],
        rarity: "normal",
        category: "none",
    },
    {
        id: 4,
        name: "Bobette",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/f/f0/Bobette_Render.png",
        stats: buildBaseStats(2, 4, 3, 5, 2, 2),
        abilities: [
            {
                name: "Precious Packaging",
                type: "active",
                description: "This Toon can duck and cover herself into a gift box for 8 seconds, in which she is invincible yet unable to move.",
            },
            {
                name: "Festive Aura",
                type: "passive",
                description: "The festive aura of this Toon passively gives those around her 50% faster stamina regeneration and a 25% speed boost that lasts for 5 seconds.",
            },
        ],
        rarity: "main",
        category: "holiday",
        requirements: [
            {
               type: "ornament",
               label: "3000 Ornaments"
            },
            {
               type: "ichor",
               label: "2500 Ichor"
            },
            {
               type: "research",
               label: "100% Research on Twisted Bobette"
            },
        ],
    },
    {
        id: 5,
        name: "Rudie",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/6/64/Rudie_Render.png",
        stats: buildBaseStats(3, 3, 3, 3, 3, 3),
        abilities: [
            {
                name: "Antler Charge",
                type: "active",
                description: "This Toon uses his antlers to quickly charge forward in a short burst, helping him escape tricky situations.",
            },
        ],
        rarity: "normal",
        category: "holiday",
    },
    {
        id: 6,
        name: "Bassie",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/0/0c/Bassie_Render.png",
        stats: buildBaseStats(2, 1, 5, 4, 4, 2),
        abilities: [
            {
                name: "Springful Sharing",
                type: "active",
                description: "This Toon can drop items from her inventory, sharing them with other Toons.",
            },
            {
                name: "Easter Basket",
                type: "passive",
                description: "This Toon's basket provides her with an extra inventory slot for carrying 1 extra item.",
            },
        ],
        rarity: "main",
        category: "easter",
        requirements: [
            {
               type: "easter",
               label: "3000 Baskets"
            },
            {
               type: "ichor",
               label: "2500 Ichor"
            },
            {
               type: "research",
               label: "100% Research on Twisted Bassie"
            },
        ],
    },
    {
        id: 7,
        name: "Cocoa",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/5/51/Cocoa_Render.png",
        stats: buildBaseStats(3, 3, 4, 2, 4, 2),
        abilities: [
            {
                name: "Bonbon",
                type: "active",
                description: "This Toon places a Bonbon candy item that can be picked up and used by anyone. When used, the Bonbon boosts extraction speed (+50%) and movement speed (+25%) for 10 seconds. Has a cooldown of 40.",
            },
        ],
        rarity: "normal",
        category: "easter",
    },
 ];

export default toons;
