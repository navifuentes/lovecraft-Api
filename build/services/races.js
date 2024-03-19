"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getRaces = void 0;
const races_json_1 = __importDefault(require("../db/races.json"));
const races = races_json_1.default;
const getRaces = () => races;
exports.getRaces = getRaces;
const findById = (id) => {
    const race = races.find((r) => r.id === id);
    return race;
};
exports.findById = findById;
