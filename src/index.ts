import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";

import creaturesRouter from "./routes/creatures";
import racesRouter from "./routes/races";
import categoriesRouter from "./routes/classes";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static("src"));

const PORT = 3000;

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api/images", express.static(path.join(__dirname, "images")));
app.use("/api/creatures", creaturesRouter);
app.use("/api/races", racesRouter);
app.use("/api/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
