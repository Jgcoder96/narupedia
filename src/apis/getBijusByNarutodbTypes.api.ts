export interface Bijus {
  tailedBeasts: TailedBeast[];
  currentPage: number;
  pageSize: number;
  totalTailedBeasts: number;
}

export interface TailedBeast {
  id: number;
  name: string;
  images: string[];
  debut: Debut;
  family: Family;
  jutsu: string[];
  natureType?: string[];
  personal: Personal;
  uniqueTraits?: string[];
  voiceActors?: VoiceActors;
  tools?: string[];
}

export interface Debut {
  manga: string;
  anime: string;
  novel: Novel;
  movie: Movie;
  game: string;
  ova?: string;
  appearsIn: AppearsIn;
}

export type AppearsIn = 'Anime, Manga, Novel, Game, Movie';

export type Movie =
  | 'The Last: Naruto the Movie'
  | 'Naruto the Movie: Blood Prison'
  | 'Naruto the Movie: Ninja Clash in the Land of Snow';

export type Novel =
  | 'The Last: Naruto the Movie'
  | 'Naruto: Innocent Heart, Demonic Blood';

export interface Family {
  'incarnation with the god tree'?: string;
  'depowered form'?: string;
  creator?: string;
  sibling?: string;
}

export interface Personal {
  status?: string;
  kekkeiGenkai?: string;
  classification: string[] | string;
  jinchūriki: string[];
  titles?: string[];
  species?: string;
  affiliation?: string[] | string;
}

export interface VoiceActors {
  japanese: string;
  english: string[] | string;
}

export class Convert {
  public static toBijus(json: string): Bijus {
    return JSON.parse(json);
  }

  public static bijusToJson(value: Bijus): string {
    return JSON.stringify(value);
  }
}
