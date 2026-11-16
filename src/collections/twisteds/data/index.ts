import type { Twisted } from "../types/twisteds.types";
import twistedAstro from "./items/twistedAstro";
import twistedBassie from "./items/twistedBassie";
import twistedBrusha from "./items/twistedBrusha";
import twistedDandy from "./items/twistedDandy";
import twistedFlutter from "./items/twistedFlutter";
import twistedTisha from "./items/twistedTisha";

const TWISTEDS: Twisted[] = [
    twistedAstro,
    twistedDandy,
    twistedBassie,
    twistedFlutter,
    twistedBrusha,
    twistedTisha,
] as const satisfies Twisted[];

export default TWISTEDS;
