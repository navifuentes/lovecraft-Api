import greatOldOnesData from "../db/great-old-ones.json";
import lesserOldOnesData from "../db/lesser-old-ones.json";
import outerGodsData from "../db/outer-gods.json";

import { Tier } from "../types";

const greatOldOnesTiers: Tier[] = greatOldOnesData as Tier[];
const lesserOldOnesTiers: Tier[] = lesserOldOnesData as Tier[];
const outerGodsTiers: Tier[] = outerGodsData as Tier[];

export const getGreatOldOnes = (): Tier[] => greatOldOnesTiers;
export const getLesserOldOnes = (): Tier[] => lesserOldOnesTiers;
export const getOuterGods = (): Tier[] => outerGodsTiers;
