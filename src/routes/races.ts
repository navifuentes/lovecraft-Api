import express from "express";
import * as racesServices from "../services/races";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(racesServices.getRaces());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = racesServices.findById(+id);
  console.log(result);
  if (result === undefined) {
    return res.status(404).send({ error: { message: "not found" } });
  }
  return res.send(result);
});

export default router;
