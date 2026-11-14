import type { Trinket } from "../types/trinkets.types";
import dandyPlush from "./items/dandyPlush";
import starPillow from "./items/starPillow";
import whisperingFlower from "./items/whisperingFlower";

const TRINKETS: Trinket[] = [
    starPillow,
    dandyPlush,
    whisperingFlower,
] as const satisfies Trinket[];

export default TRINKETS;
