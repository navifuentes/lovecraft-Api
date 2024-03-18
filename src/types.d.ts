export type Canon =
  | "Lovecraft's Myths Cycle"
  | "Lovecraft's Circle"
  | "Adjacent Works"
  | "Derleth Cthulhu Mythos"
  | "Expanded Cthulhu Mythos";

export type Category =
  | "outer god"
  | "elder god"
  | "great old one"
  | "lesser old one"
  | "great independent race"
  | "lesser independent race"
  | "great servitor race"
  | "lesser servitor race";

export interface Creature {
  author: string;
  canon: Canon;
  category: Category;
  img: string[];
  name: string;
  nicks: string[];
  overview: string;
  wikiUrl: string;
  id: number;
}

export interface Race {
  race: string;
  category: Category;
  id: number;
}
export interface Tier {
  name: string;
  category: Category;
}
