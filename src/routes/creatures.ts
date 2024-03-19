import express from "express";
import * as creaturesServices from "../services/creatures";
import { Creature } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(creaturesServices.getCreatures());
});

router.get("/index", (_req, res) => {
  const result = creaturesServices.getCreatures();
  const reward = result.map((c: Creature, index: number) => ({
    ...c,
    id: index + 1,
  }));
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

export default router;
