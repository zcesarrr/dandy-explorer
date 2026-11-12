import type { Trinket } from "../types/trinkets.types";
import starPillow from "./items/starPillow";

const TRINKETS: Trinket[] = [
    starPillow,
] as const satisfies Trinket[];

export default TRINKETS;
