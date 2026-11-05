import type { Toon } from "../types/toons";
import yatta from "./toons/yatta";
import looey from "./toons/looey";
import bobette from "./toons/bobette";
import bassie from "./toons/bassie";
import gourdy from "./toons/gourdy";

const TOONS = [
    yatta,
    looey,
    bobette,
    bassie,
    gourdy,
] as const satisfies Toon[];

export default TOONS;
