import type { Twisted } from "../types/twisteds.types";
import twistedAstro from "./items/twistedAstro";
import twistedBassie from "./items/twistedBassie";
import twistedDandy from "./items/twistedDandy";

const TWISTEDS: Twisted[] = [
    twistedAstro,
    twistedDandy,
    twistedBassie
] as const satisfies Twisted[];

export default TWISTEDS;
