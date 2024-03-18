import express from "express";
import * as creaturesServices from "../services/creatures";

const router = express.Router();

router.get("/", (_req, res) => {
  return res.send(creaturesServices.getCreatures());
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
