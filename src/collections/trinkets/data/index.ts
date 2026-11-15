import type { Trinket } from "../types/trinkets.types";
import brick from "./items/brick";
import clownHorn from "./items/clownHorn";
import dandyPlush from "./items/dandyPlush";
import diary from "./items/diary";
import featherDuster from "./items/featherDuster";
import ghostSnakes from "./items/ghostSnakes";
import paintBucket from "./items/paintBucket";
import partyPopper from "./items/partyPopper";
import pullToy from "./items/pullToy";
import spareBulb from "./items/spareBulb";
import starPillow from "./items/starPillow";
import sweetCharm from "./items/sweetCharm";
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
    diary,
    paintBucket,
    clownHorn,
    brick,
    featherDuster,
    partyPopper,
    spareBulb,
    ghostSnakes,
    sweetCharm,
] as const satisfies Trinket[];

export default TRINKETS;
