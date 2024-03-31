export interface Villages {
  villages: Village[];
  currentPage: number;
  pageSize: number;
  totalVillages: number;
}

export interface Village {
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
  personal: Personal;
  rank?: string[] | RankClass;
  voiceActors?: VoiceActors;
  tools?: string[];
  natureType?: string[];
  family?: { [key: string]: string };
  篝Kagari?: 冥頭_Meizu;
  uniqueTraits?: string[];
  業頭Gōzu?: 冥頭_Meizu;
  小助Kosuke?: 冥頭_Meizu;
  冥頭Meizu?: 冥頭_Meizu;
  撰歌細波SenkaSazanami?: 冥頭_Meizu;
  蝦蟇Gama?: 冥頭_Meizu;
  白医Hakui?: 冥頭_Meizu;
  卑留呼Hiruko?: 冥頭_Meizu;
  影Kage?: 冥頭_Meizu;
  縄樹Nawaki?: 冥頭_Meizu;
  椿Tsubaki?: 冥頭_Meizu;
  香燐Karin?: 冥頭_Meizu;
  餓鬼道Gakidō?: 冥頭_Meizu;
}

export interface Debut {
  manga?: string;
  anime?: string;
  game?: string;
  ova?: string;
  appearsIn: AppearsIn;
  novel?: string;
  movie?: string;
}

export type AppearsIn =
  | 'Anime, Manga, Game'
  | 'Anime'
  | 'Anime, Game'
  | 'Anime, Novel'
  | 'Anime, Manga'
  | 'Anime, Manga, Novel, Game, Movie'
  | 'Game'
  | 'Novel'
  | 'Anime, Manga, Game, Movie'
  | 'Anime, Manga, Novel, Game'
  | 'Anime, Novel, Game'
  | 'Anime, Manga, Novel'
  | 'Anime, Manga, Novel, Movie'
  | 'Anime, Manga, Movie'
  | 'Manga'
  | 'Anime, Novel, Game, Movie'
  | 'Anime, Novel, Movie'
  | 'Novel, Movie'
  | 'Anime, Movie'
  | 'Anime, Game, Movie'
  | 'Manga, Movie'
  | 'Novel, Game, Movie';

export interface Personal {
  sex?: Sex;
  status?: Status;
  height?: Age;
  affiliation: string[] | string;
  team?: string[] | string;
  titles?: string[];
  birthdate?: string;
  age?: Age;
  weight?: Weight;
  bloodType?: BloodType;
  species?: string;
  classification?: ClassificationElement[] | ClassificationElement;
  occupation?: string[] | string;
  clan?: string[] | string;
  partner?: string[] | string;
  kekkeiGenkai?: string[] | string;
  tailedBeast?: string;
  kekkeiTōta?: string;
  jinchūriki?: string[];
  kekkeiMōra?: string;
}

export interface Age {
  'Part I'?: string;
  'Part II'?: string;
  Gaiden?: string;
  'Academy Graduate'?: string;
  'Chunin Promotion'?: string;
  'Boruto Manga'?: string;
  'Boruto Movie'?: string;
  'Blank Period'?: string;
}

export type BloodType = 'A' | 'O' | 'AB' | 'B';

export type ClassificationElement =
  | 'Summon'
  | 'Sensor Type'
  | 'Missing-nin'
  | 'Sage'
  | 'Medical-nin'
  | 'Jinchūriki'
  | 'Tailed Beast'
  | 'Mercenary Ninja'
  | 'Hunter-nin'
  | 'Samurai'
  | 'Pseudo-Jinchūriki'
  | 'S-rank'
  | 'Daimyō'
  | 'Sannin';

export type Sex =
  | 'Female'
  | 'Male'
  | 'File:Gender Other.svg Other'
  | 'File:Gender Various.svg Various';

export type Status = 'Deceased' | 'Presumed Deceased' | 'Incapacitated';

export interface Weight {
  'Part I'?: string;
  'Part II'?: string;
}

export interface RankClass {
  ninjaRank?: Age;
  ninjaRegistration?: string;
}

export interface VoiceActors {
  japanese?: string[] | string;
  english?: string[] | string;
}

export interface 冥頭_Meizu {}

export class Convert {
  public static toVillages(json: string): Villages {
    return JSON.parse(json);
  }

  public static villagesToJson(value: Villages): string {
    return JSON.stringify(value);
  }
}
