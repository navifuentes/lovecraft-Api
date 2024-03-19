"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getCreatures = void 0;
const creatures_json_1 = __importDefault(require("../db/creatures.json"));
const creatures = creatures_json_1.default;
const getCreatures = () => creatures;
exports.getCreatures = getCreatures;
const findById = (id) => {
    const creature = creatures.find((c) => c.id === id);
    return creature;
};
exports.findById = findById;
