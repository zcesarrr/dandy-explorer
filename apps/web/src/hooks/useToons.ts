import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getToon, getToonAbilities, getToons } from "../api/toons";

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
