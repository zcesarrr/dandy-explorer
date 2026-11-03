import TOONS from "../constants/toons";
import type { Toon } from "../types/toons";

export default function getToon(slug: string): Toon | undefined {
    return TOONS.find(toon => toon.slug === slug);
}