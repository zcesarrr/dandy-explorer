import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/cosmo.webp";

const cosmo: Toon = {
    slug: "cosmo",
    name: "Cosmo",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 1, 3, 4, 4, 3],
    abilities: [
        {
            name: "Sharing is Caring",
            description: "This Toon can give one of his own Hearts to heal a targeted Toon. Cannot be used when at 1 Heart. Has a Cooldown of 60.",
            type: "active",
            icon: "sharingIsCaring",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 25 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "travel",
            params: { meters: 60000 },
        },
        {
            type: "pickItems",
            params: { count: 35 },
        },
        {
            type: "surviveFloorsWithOther",
            params: { count: 5, playersCount: 3 },
        },
        {
            type: "useItems",
            params: { count: 35 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1000 },
        },
        {
            type: "toonsOwning",
            params: { count: 4 },
        },
    ],
};

export default cosmo;
