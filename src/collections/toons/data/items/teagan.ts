import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/teagan.webp";

const teagan: Toon = {
    slug: "teagan",
    name: "Glisten",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 3, 4, 2, 3],
    abilities: [
        {
            name: "Tea Time",
            description: "This Toon can spend 75 Tapes to heal themself by 1 Heart. Has a Cooldown of 100.",
            type: "active",
            icon: "teaTime",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 25 },
        },
        {
            type: "encounterTwisteds",
            params: { count: 25 },
        },
        {
            type: "travel",
            params: { meters: 75000 },
        },
        {
            type: "dandysShop",
            params: { count: 15 },
        },
        {
            type: "pickItems",
            params: { count: 60 },
        },
        {
            type: "useItems",
            params: { count: 60 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1250 },
        },
        {
            type: "buyDandysShop",
            params: { count: 25 },
        },
    ],
};

export default teagan;
