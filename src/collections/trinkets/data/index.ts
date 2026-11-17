import type { Trinket } from "../types/trinkets.types";
import alarm from "./items/alarm";
import boneNeedle from "./items/boneNeedle";
import brick from "./items/brick";
import cardboardArmor from "./items/cardboardArmor";
import clownHorn from "./items/clownHorn";
import coal from "./items/coal";
import coinPurse from "./items/coinPurse";
import cooler from "./items/cooler";
import crayonSet from "./items/crayonSet";
import dandyPlush from "./items/dandyPlush";
import diary from "./items/diary";
import eggRadar from "./items/eggRadar";
import featherDuster from "./items/featherDuster";
import festiveLights from "./items/festiveLights";
import ghostSnakes from "./items/ghostSnakes";
import glazedBag from "./items/glazedBag";
import machineManual from "./items/machineManual";
import megaphone from "./items/megaphone";
import memoryLocket from "./items/memoryLocket";
import moonPack from "./items/moonPack";
import paintBucket from "./items/paintBucket";
import partyPopper from "./items/partyPopper";
import peppermintIcing from "./items/peppermintIcing";
import popPack from "./items/popPack";
import pullToy from "./items/pullToy";
import researchMap from "./items/researchMap";
import scrapbook from "./items/scrapbook";
import soulSword from "./items/soulSword";
import spareBulb from "./items/spareBulb";
import speedometer from "./items/speedometer";
import speedyShoes from "./items/speedyShoes";
import starPillow from "./items/starPillow";
import sweetCharm from "./items/sweetCharm";
import thermos from "./items/thermos";
import thinkingCap from "./items/thinkingCap";
import toyKit from "./items/toyKit";
import trainWhistle from "./items/trainWhistle";
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
    eggRadar,
    boneNeedle,
    festiveLights,
    scrapbook,
    peppermintIcing,
    soulSword,
    glazedBag,
    coal,
    moonPack,
    toyKit,
    memoryLocket,
    coinPurse,
    researchMap,
    machineManual,
    speedyShoes,
    speedometer,
    alarm,
    thermos,
    popPack,
    megaphone,
    cooler,
    cardboardArmor,
    crayonSet,
    trainWhistle,
] as const satisfies Trinket[];

export default TRINKETS;
