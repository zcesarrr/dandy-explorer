import type { StatCardProps } from "../components/cards/StatCard";

export function buildStats(indexes: number[]): StatCardProps[] {
    return [
        {
            name: "Health",
            color: "#ce5c5d",
            icon: "heart",
            value: indexes[0] ?? 1,
        },
        {
            name: "Skill Check",
            color: "#d09158",
            icon: "star",
            value: indexes[1] ?? 1,
        },
        {
            name: "Movement Speed",
            color: "#cdce5d",
            icon: "star",
            value: indexes[2] ?? 1,
        },
        {
            name: "Stamina",
            color: "#5acd59",
            icon: "star",
            value: indexes[3] ?? 1,
        },
        {
            name: "Stealth",
            color: "#5b8ecf",
            icon: "star",
            value: indexes[4] ?? 1,
        },
        {
            name: "Extraction Speed",
            color: "#854ecf",
            icon: "star",
            value: indexes[5] ?? 1,
        },
    ];
}
