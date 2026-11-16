import type { Twisted } from "../types/twisteds.types";
import twistedAstro from "./items/twistedAstro";
import twistedBassie from "./items/twistedBassie";
import twistedBobette from "./items/twistedBobette";
import twistedBrightney from "./items/twistedBrightney";
import twistedBrusha from "./items/twistedBrusha";
import twistedCoal from "./items/twistedCoal";
import twistedCocoa from "./items/twistedCocoa";
import twistedConnie from "./items/twistedConnie";
import twistedCosmo from "./items/twistedCosmo";
import twistedDandy from "./items/twistedDandy";
import twistedEclipse from "./items/twistedEclipse";
import twistedEggson from "./items/twistedEggson";
import twistedFlutter from "./items/twistedFlutter";
import twistedFlyte from "./items/twistedFlyte";
import twistedGinger from "./items/twistedGinger";
import twistedGourdy from "./items/twistedGourdy";
import twistedLooey from "./items/twistedLooey";
import twistedRibecca from "./items/twistedRibecca";
import twistedRudie from "./items/twistedRudie";
import twistedShrimpo from "./items/twistedShrimpo";
import twistedSoulvester from "./items/twistedSoulvester";
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
    twistedBobette,
    twistedGourdy,
    twistedEclipse,
    twistedCoal,
    twistedCocoa,
    twistedSoulvester,
    twistedGinger,
    twistedFlyte,
    twistedRudie,
    twistedRibecca,
    twistedEggson,
] as const satisfies Twisted[];

export default TWISTEDS;
