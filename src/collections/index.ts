import { toonsConfig } from "./toons/config";
import { trinketsConfig } from "./trinkets/config";
import { twistedsConfig } from "./twisteds/config";

export const COLLECTIONS = [
    toonsConfig,
    twistedsConfig,
    trinketsConfig,
] as const;
