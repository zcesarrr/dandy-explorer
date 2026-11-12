import type { Twisted } from "../types/twisteds.types";
import twistedAstro from "./items/twistedAstro";

const TWISTEDS: Twisted[] = [
    twistedAstro,
] as const satisfies Twisted[];

export default TWISTEDS;
