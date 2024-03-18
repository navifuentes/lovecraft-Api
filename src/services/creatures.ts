import creaturesData from "../db/creatures.json";
import { Creature } from "../types";

const creatures: Creature[] = creaturesData as Creature[];

export const getCreatures = (): Creature[] => creatures;

export const findById = (id: number): Creature | undefined => {
  const creature = creatures.find((c) => c.id === id);
  return creature;
};
