import express from "express";

import creaturesRouter from "./routes/creatures";
import racesRouter from "./routes/races";
import categoriesRouter from "./routes/classes";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_, res) => {
  console.log("somone pinged here!");
  res.send("pong");
});

app.use("/api/creatures", creaturesRouter);
app.use("/api/races", racesRouter);
app.use("/api/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
