import type { Trinket } from "../types/trinkets.types";
import dandyPlush from "./items/dandyPlush";
import pullToy from "./items/pullToy";
import starPillow from "./items/starPillow";
import thinkingCap from "./items/thinkingCap";
import whisperingFlower from "./items/whisperingFlower";
import wrench from "./items/wrench";

const TRINKETS: Trinket[] = [
    starPillow,
    dandyPlush,
    whisperingFlower,
    wrench,
    pullToy,
    thinkingCap,
] as const satisfies Trinket[];

export default TRINKETS;
