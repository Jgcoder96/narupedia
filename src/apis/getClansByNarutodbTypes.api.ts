export interface Clans {
  clans: Clan[];
  currentPage: number;
  pageSize: number;
  totalClans: number;
}

export interface Clan {
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
  rank?: Rank;
  voiceActors?: VoiceActors;
  family?: { [key: string]: string };
  tools?: string[];
  natureType?: string[];
  uniqueTraits?: string[];
  舟戸青煉FunatoSeiren?: 加流羅_Karura;
  畜生道Chikushōdō?: 加流羅_Karura;
  加流羅Karura?: 加流羅_Karura;
  縄樹Nawaki?: 加流羅_Karura;
  死韻Shiin?: 加流羅_Karura;
  香燐Karin?: 加流羅_Karura;
}

export interface Debut {
  anime?: string;
  appearsIn: string;
  manga?: string;
  movie?: string;
  novel?: string;
  game?: string;
  ova?: string;
}

export interface Personal {
  sex?: Sex;
  affiliation?: string[] | string;
  clan: string;
  age?: Age;
  status?: Status;
  team?: string[] | string;
  birthdate?: string;
  height?: Height;
  weight?: Weight;
  bloodType?: BloodType;
  occupation?: string[] | string;
  partner?: string[] | string;
  titles?: string[];
  kekkeiGenkai?: string[] | string;
  classification?: string[] | string;
  species?: Species;
  kekkeiTōta?: string;
  tailedBeast?: string;
  kekkeiMōra?: string[] | string;
}

export interface Age {
  'Part II'?: string;
  'Part I'?: string;
  'Academy Graduate'?: string;
  'Chunin Promotion'?: string;
  'Boruto Movie'?: string;
  Gaiden?: string;
  'Blank Period'?: string;
}

export type BloodType = 'A' | 'AB' | 'O' | 'B';

export interface Height {
  'Part I'?: string;
  'Part II'?: string;
  'Blank Period'?: string;
  Gaiden?: string;
  'Boruto Movie'?: string;
  'Boruto Manga'?: string;
}

export type Sex = 'Female' | 'Male';

export type Species =
  | 'Ninken'
  | 'Celestial Being-Human hybrid'
  | 'Celestial Being';

export type Status = 'Deceased' | 'Presumed Deceased' | 'Incapacitated';

export interface Weight {
  'Part I'?: string;
  'Part II'?: string;
}

export interface Rank {
  ninjaRank?: Height;
  ninjaRegistration?: string;
}

export interface VoiceActors {
  japanese?: string[] | string;
  english?: string[] | string;
}

export interface 加流羅_Karura {}

export class Convert {
  public static toClans(json: string): Clans {
    return JSON.parse(json);
  }

  public static clansToJson(value: Clans): string {
    return JSON.stringify(value);
  }
}
