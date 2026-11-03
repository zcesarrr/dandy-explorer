import { API_URL } from "../constants/api";

export async function apiFetch<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${API_URL}${endpoint}`);
    if (!res.ok) throw new Error("The fetch could not be completed");

    const json = await res.json();
    if (!json.success) throw new Error(json.error);

    return json.data;
}
