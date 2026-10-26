import type { Stat } from "../types/stats";

export function buildBaseStats(
    health: number,
    skillCheck: number,
    movSpeed: number,
    stamina: number,
    stealth: number,
    extSpeed: number
): Stat[] {
    return [
        {
            name: "Health",
            color: "#ce5c5d",
            icon: "heart",
            value: health,
        },
        {
            name: "Skill Check",
            color: "#d09158",
            icon: "star",
            value: skillCheck,
        },
        {
            name: "Movement Speed",
            color: "#cdce5d",
            icon: "star",
            value: movSpeed,
        },
        {
            name: "Stamina",
            color: "#5acd59",
            icon: "star",
            value: stamina,
        },
        {
            name: "Stealth",
            color: "#5b8ecf",
            icon: "star",
            value: stealth,
        },
        {
            name: "Extraction Speed",
            color: "#854ecf",
            icon: "star",
            value: extSpeed,
        },
    ];
}
