import type { Trinket } from "../types/trinkets.types";
import dandyPlush from "./items/dandyPlush";
import starPillow from "./items/starPillow";

const TRINKETS: Trinket[] = [
    starPillow,
    dandyPlush,
] as const satisfies Trinket[];

export default TRINKETS;
