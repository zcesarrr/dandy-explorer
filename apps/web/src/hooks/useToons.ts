import { useQuery } from "@tanstack/react-query";
import { getToon, getToonAbilities, getToonQuests, getToonRequirements, getToons } from "../api/toons";

export function useToons() {
    return useQuery({
        queryKey: ["toons"],
        queryFn: getToons,
        staleTime: "static",
    });
}

export function useToon(id: number | undefined) {
    return useQuery({
        queryKey: ["toons", id],
        queryFn: () => getToon(id!),
        enabled: id !== undefined,
        staleTime: "static",
    });
}

export function useToonAbilities(toonId: number) {
    return useQuery({
        queryKey: ["toons", toonId, "abilities"],
        queryFn: () => getToonAbilities(toonId),
        staleTime: "static",
    });
}

export function useToonQuests(toonId: number) {
    return useQuery({
        queryKey: ["toons", toonId, "quests"],
        queryFn: () => getToonQuests(toonId),
        staleTime: "static",
    });
}

export function useToonRequirements(toonId: number) {
    return useQuery({
        queryKey: ["toons", toonId, "requirements"],
        queryFn: () => getToonRequirements(toonId),
        staleTime: "static",
    });
}
