/* interface Kekkeigenkai */
export interface Kekkeigenkai {
  kekkeigenkai: KekkeigenkaiElement[];
  currentPage: number;
  pageSize: number;
  totalKekkeiGenkai: number;
}
/*  */

/* interface KekkeigenkaiElement */
export interface KekkeigenkaiElement {
  id: number;
  name: string;
  characters: Character[];
}
/*  */

/* interface Character */
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
/*  */

/* interface Debut */
export interface Debut {
  anime?: string;
  novel?: string;
  appearsIn: string;
  manga?: string;
  game?: string;
  movie?: string;
  ova?: string;
}
/*  */

/* interface Personal */
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
/*  */

/* interface Age */
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
/*  */

/* type BloodType */
export type BloodType = 'B' | 'AB' | 'A' | 'O';
/*  */

/* type Sex */
export type Sex = 'Male' | 'Female' | 'File:Gender Various.svg Various';
/*  */

/* type Status */
export type Status = 'Deceased' | 'Incapacitated';
/*  */

/* interface Weight */
export interface Weight {
  'Part II'?: string;
  'Part I'?: string;
}
/*  */

/* interface Rank */
export interface Rank {
  ninjaRank?: Age;
  ninjaRegistration?: string;
}
/*  */

/* type UniqueTrait */
export type UniqueTrait =
  | 'Can absorb chakra'
  | "Replicating techniques from other's chakra"
  | 'Sand manipulation'
  | 'Manipulates sand'
  | 'Influences its sleeping jinchūriki'
  | 'Natural cursed seal markings';
/*  */

/* interface VoiceActors */
export interface VoiceActors {
  japanese?: string[] | string;
  english?: string[] | string;
}
/*  */

/* interface 三代目風影_SandaimeKazekage */
export interface 三代目風影_SandaimeKazekage {}
/*  */

// Converts JSON strings to/from your types
export class Convert {
  public static toKekkeigenkai(json: string): Kekkeigenkai {
    return JSON.parse(json);
  }

  public static kekkeigenkaiToJson(value: Kekkeigenkai): string {
    return JSON.stringify(value);
  }
}
/*  */
