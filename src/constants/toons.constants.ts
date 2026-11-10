import type { Toon } from "../types/toons.types";
import yatta from "./toons/yatta";
import looey from "./toons/looey";
import bobette from "./toons/bobette";
import bassie from "./toons/bassie";
import gourdy from "./toons/gourdy";
import eclipse from "./toons/eclipse";
import ginger from "./toons/ginger";
import astro from "./toons/astro";
import razzleAndDazzle from "./toons/razzle-and-dazzle";
import shrimpo from "./toons/shrimpo";
import gigi from "./toons/gigi";
import scraps from "./toons/scraps";
import brusha from "./toons/brusha";
import connie from "./toons/connie";
import blot from "./toons/blot";
import sprout from "./toons/sprout";
import finn from "./toons/finn";

const TOONS = [
    yatta,
    looey,
    bobette,
    bassie,
    gourdy,
    eclipse,
    ginger,
    astro,
    razzleAndDazzle,
    shrimpo,
    gigi,
    scraps,
    brusha,
    connie,
    blot,
    sprout,
    finn,
] as const satisfies Toon[];

export default TOONS;
