/* interface Akatsukis */
export interface Akatsukis {
  akatsuki: Akatsuki[];
  currentPage: number;
  pageSize: number;
  totalMembers: number;
}

/* interface Akatsuki */
export interface Akatsuki {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  family?: Family;
  jutsu?: string[];
  natureType?: string[];
  personal: Personal;
  uniqueTraits?: string[];
  voiceActors?: VoiceActors;
  tools?: string[];
  rank?: Rank;
  香燐Karin?: 香燐Karin;
}

/* interface Debut */
export interface Debut {
  manga?: string;
  anime?: string;
  novel?: string;
  movie?: string;
  game?: string;
  ova?: Ova;
  appearsIn: string;
}

/* type Ova */
export type Ova =
  | 'Naruto Shippūden: UNSG anime cutscenes'
  | 'Hidden Leaf Village Grand Sports Festival!'
  | 'Naruto x UT';

/* interface Family */
export interface Family {
  creator?: string;
  'original form'?: string;
  granddaughter?: string;
  father?: string;
  mother?: string;
  brother?: string;
  niece?: string;
  'adoptive mother'?: string;
  'adoptive sons'?: string;
  'adoptive brother'?: string;
  'mother '?: string;
}

/* interface Personal */
export interface Personal {
  species?: string;
  status?: Status;
  kekkeiGenkai?: string[] | string;
  classification?: string[] | string;
  tailedBeast?: string;
  occupation?: string[] | string;
  affiliation: string[] | string;
  partner?: string[] | string;
  sex?: Sex;
  age?: Age;
  height?: Height;
  birthdate?: string;
  weight?: Weight;
  bloodType?: string;
  team?: string[] | string;
  clan?: string;
  titles?: string[];
}

/* interface Age */
export interface Age {
  'Part II': string;
  'Part I'?: string;
  'Academy Graduate'?: string;
  'Chunin Promotion'?: string;
}

/* interface Height */
export interface Height {
  'Part II'?: string;
  'Part I'?: string;
  Gaiden?: string;
}

/* type Sex */
export type Sex = 'Male' | 'Female';

/* type Status */
export type Status = 'Incapacitated' | 'Deceased';

/* interface Weight */
export interface Weight {
  'Part II'?: string;
  'Part I'?: string;
}

/* interface Rank */
export interface Rank {
  ninjaRegistration?: string;
  ninjaRank?: Weight;
}

/* interface VoiceActors */
export interface VoiceActors {
  japanese: string[] | string;
  english: string[] | string;
}

/* interface 香燐Karin */
export interface 香燐Karin {}

// Converts JSON strings to/from your types
export class Convert {
  public static toAkatsukis(json: string): Akatsukis {
    return JSON.parse(json);
  }

  public static akatsukisToJson(value: Akatsukis): string {
    return JSON.stringify(value);
  }
}
