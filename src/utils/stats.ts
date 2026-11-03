import type { StatCardProps } from "../types/stats";

export function buildStats(values: number[]): StatCardProps[] {
    return [
        {
            name: "Health",
            color: "#ce5c5d",
            icon: "heart",
            value: values[0] ?? 1,
        },
        {
            name: "Skill Check",
            color: "#d09158",
            icon: "star",
            value: values[1] ?? 1,
        },
        {
            name: "Movement Speed",
            color: "#cdce5d",
            icon: "star",
            value: values[2] ?? 1,
        },
        {
            name: "Stamina",
            color: "#5acd59",
            icon: "star",
            value: values[3] ?? 1,
        },
        {
            name: "Stealth",
            color: "#5b8ecf",
            icon: "star",
            value: values[4] ?? 1,
        },
        {
            name: "Extraction Speed",
            color: "#854ecf",
            icon: "star",
            value: values[5] ?? 1,
        },
    ];
}
