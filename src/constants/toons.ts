import type { Toon } from "../types/toons";
import yatta from "./toons/yatta";
import looey from "./toons/looey";
import bobette from "./toons/bobette";
import bassie from "./toons/bassie";
import gourdy from "./toons/gourdy";
import eclipse from "./toons/eclipse";
import ginger from "./toons/ginger";
import astro from "./toons/astro";
import razzleAndDazzle from "./toons/razzle-and-dazzle";

const TOONS = [
    yatta,
    looey,
    bobette,
    bassie,
    gourdy,
    eclipse,
    ginger,
    astro,
    razzleAndDazzle
] as const satisfies Toon[];

export default TOONS;
