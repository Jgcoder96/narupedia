export interface Kekkeigenkai {
  kekkeigenkai: KekkeigenkaiElement[];
  currentPage: number;
  pageSize: number;
  totalKekkeiGenkai: number;
}

export interface KekkeigenkaiElement {
  id: number;
  name: string;
  characters: Character[];
}

export interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  jutsu?: string[];
  natureType?: string[];
  personal: Personal;
  voiceActors?: VoiceActors;
  tools?: string[];
  family?: { [key: string]: string };
  rank?: Rank;
  uniqueTraits?: UniqueTrait[];
  紅蓮Guren?: 三代目風影_SandaimeKazekage;
  卑留呼Hiruko?: 三代目風影_SandaimeKazekage;
  三代目風影SandaimeKazekage?: 三代目風影_SandaimeKazekage;
  十尾Jūbi?: 三代目風影_SandaimeKazekage;
}

export interface Debut {
  anime?: string;
  novel?: string;
  appearsIn: string;
  manga?: string;
  game?: string;
  movie?: string;
  ova?: string;
}

export interface Personal {
  sex?: Sex;
  kekkeiGenkai: string[] | string;
  affiliation?: string[] | string;
  birthdate?: string;
  status?: Status;
  height?: Age;
  weight?: Weight;
  bloodType?: BloodType;
  classification?: string[] | string;
  tailedBeast?: string;
  jinchūriki?: string[];
  age?: Age;
  occupation?: string[] | string;
  team?: string[] | string;
  clan?: string[] | string;
  titles?: string[];
  partner?: string[] | string;
  species?: string;
  kekkeiMōra?: string;
  kekkeiTōta?: string;
}

export interface Age {
  'Part II'?: string;
  'Academy Graduate'?: string;
  'Part I'?: string;
  'Chunin Promotion'?: string;
  'Blank Period'?: string;
  'Boruto Movie'?: string;
  'Boruto Manga'?: string;
  Gaiden?: string;
}

export type BloodType = 'B' | 'AB' | 'A' | 'O';

export type Sex = 'Male' | 'Female' | 'File:Gender Various.svg Various';

export type Status = 'Deceased' | 'Incapacitated';

export interface Weight {
  'Part II'?: string;
  'Part I'?: string;
}

export interface Rank {
  ninjaRank?: Age;
  ninjaRegistration?: string;
}

export type UniqueTrait =
  | 'Can absorb chakra'
  | "Replicating techniques from other's chakra"
  | 'Sand manipulation'
  | 'Manipulates sand'
  | 'Influences its sleeping jinchūriki'
  | 'Natural cursed seal markings';

export interface VoiceActors {
  japanese?: string[] | string;
  english?: string[] | string;
}

export interface 三代目風影_SandaimeKazekage {}

export class Convert {
  public static toKekkeigenkai(json: string): Kekkeigenkai {
    return JSON.parse(json);
  }

  public static kekkeigenkaiToJson(value: Kekkeigenkai): string {
    return JSON.stringify(value);
  }
}
