"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const creatures_1 = __importDefault(require("./routes/creatures"));
const races_1 = __importDefault(require("./routes/races"));
const classes_1 = __importDefault(require("./routes/classes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static("src"));
const PORT = 3000;
app.use("/api/images", express_1.default.static(path_1.default.join(__dirname, "images")));
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, "index.html"));
});
app.use("/api/creatures", creatures_1.default);
app.use("/api/races", races_1.default);
app.use("/api/categories", classes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
