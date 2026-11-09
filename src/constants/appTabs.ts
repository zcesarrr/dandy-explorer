import type { IconId } from "../types/icons";

export const APP_TABS = [
    { key: "toons", name: "Toons", icon: "heart", href: "/"  },
    { key: "twisteds", name: "Twisteds", icon: "heartBroken" },
    { key: "trinkets", name: "Trinkets", icon: "person" },
] satisfies { key: string; name: string; icon: IconId; href?: string; }[];
