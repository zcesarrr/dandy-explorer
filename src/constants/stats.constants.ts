import type { IconId } from "../types/icons.types";

export const STATS_DATA = {
    health: { label: "Health", color: "#ce5c5d", icon: "heart" },
    skillCheck: { label: "Skill Check", color: "#d09158", icon: "star" },
    moveSpeed: { label: "Movement Speed", color: "#cdce5d", icon: "star" },
    stamina: { label: "Stamina", color: "#5acd59", icon: "star" },
    stealth: { label: "Stealth", color: "#5b8ecf", icon: "star" },
    extSpeed: { label: "Extraction Speed", color: "#854ecf", icon: "star" },
} satisfies Record<string, { label: string, color: string, icon: IconId }>;
