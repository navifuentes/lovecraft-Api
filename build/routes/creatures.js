"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const creaturesServices = __importStar(require("../services/creatures"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.json(creaturesServices.getCreatures());
});
router.get("/index", (_req, res) => {
    const result = creaturesServices.getCreatures();
    const reward = result.map((c, index) => (Object.assign(Object.assign({}, c), { id: index + 1 })));
    res.json(reward);
});
router.get("/undefined", (_req, res) => {
    const result = creaturesServices.getCreatures();
    const reward = result.filter((c) => c.overview === "undefined");
    res.json(reward);
});
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const result = creaturesServices.findById(+id);
    console.log(result);
    if (result === undefined) {
        return res.status(404).send({ error: { message: "not found" } });
    }
    return res.send(result);
});
exports.default = router;
