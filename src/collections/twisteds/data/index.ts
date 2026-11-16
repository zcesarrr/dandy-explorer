import type { Twisted } from "../types/twisteds.types";
import twistedAstro from "./items/twistedAstro";
import twistedBassie from "./items/twistedBassie";
import twistedBrightney from "./items/twistedBrightney";
import twistedBrusha from "./items/twistedBrusha";
import twistedConnie from "./items/twistedConnie";
import twistedCosmo from "./items/twistedCosmo";
import twistedDandy from "./items/twistedDandy";
import twistedFlutter from "./items/twistedFlutter";
import twistedLooey from "./items/twistedLooey";
import twistedShrimpo from "./items/twistedShrimpo";
import twistedTisha from "./items/twistedTisha";
import twistedYatta from "./items/twistedYatta";

const TWISTEDS: Twisted[] = [
    twistedAstro,
    twistedDandy,
    twistedBassie,
    twistedFlutter,
    twistedBrusha,
    twistedTisha,
    twistedConnie,
    twistedLooey,
    twistedYatta,
    twistedBrightney,
    twistedCosmo,
    twistedShrimpo,
] as const satisfies Twisted[];

export default TWISTEDS;
