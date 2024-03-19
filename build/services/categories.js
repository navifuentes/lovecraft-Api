"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOuterGods = exports.getLesserOldOnes = exports.getGreatOldOnes = void 0;
const great_old_ones_json_1 = __importDefault(require("../db/great-old-ones.json"));
const lesser_old_ones_json_1 = __importDefault(require("../db/lesser-old-ones.json"));
const outer_gods_json_1 = __importDefault(require("../db/outer-gods.json"));
const greatOldOnesTiers = great_old_ones_json_1.default;
const lesserOldOnesTiers = lesser_old_ones_json_1.default;
const outerGodsTiers = outer_gods_json_1.default;
const getGreatOldOnes = () => greatOldOnesTiers;
exports.getGreatOldOnes = getGreatOldOnes;
const getLesserOldOnes = () => lesserOldOnesTiers;
exports.getLesserOldOnes = getLesserOldOnes;
const getOuterGods = () => outerGodsTiers;
exports.getOuterGods = getOuterGods;
