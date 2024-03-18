import racesData from "../db/races.json";
import { Race } from "../types";

const races: Race[] = racesData as Race[];

export const getRaces = (): Race[] => races;

export const findById = (id: number): Race | undefined => {
  const race = races.find((r) => r.id === id);
  return race;
};
