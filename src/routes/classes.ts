import express from "express";
import * as classesServices from "../services/categories";

const router = express.Router();

router.get("/outer-gods", (_req, res) => {
  res.send(classesServices.getOuterGods());
});
router.get("/great-old-ones", (_req, res) => {
  res.send(classesServices.getGreatOldOnes());
});
router.get("/lesser-old-ones", (_req, res) => {
  res.send(classesServices.getLesserOldOnes());
});

export default router;
