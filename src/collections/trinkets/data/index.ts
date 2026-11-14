import type { Trinket } from "../types/trinkets.types";
import dandyPlush from "./items/dandyPlush";
import starPillow from "./items/starPillow";
import whisperingFlower from "./items/whisperingFlower";
import wrench from "./items/wrench";

const TRINKETS: Trinket[] = [
    starPillow,
    dandyPlush,
    whisperingFlower,
    wrench,
] as const satisfies Trinket[];

export default TRINKETS;
