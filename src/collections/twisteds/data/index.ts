import type { Twisted } from "../types/twisteds.types";
import twistedAstro from "./items/twistedAstro";
import twistedDandy from "./items/twistedDandy";

const TWISTEDS: Twisted[] = [
    twistedAstro,
    twistedDandy,
] as const satisfies Twisted[];

export default TWISTEDS;
