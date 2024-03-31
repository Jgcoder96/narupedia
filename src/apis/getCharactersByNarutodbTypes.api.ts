export interface Characters {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}

export interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  jutsu?: string[];
  personal?: string[] | PersonalClass;
  uniqueTraits?: string[];
  family?: { [key: string]: string };
  natureType?: string[];
  rank?: string[] | RankClass;
  voiceActors?: VoiceActors;
  tools?: string[];
  兄貴Aniki?: 三代目風影_SandaimeKazekage;
  畜生道Chikushōdō?: 三代目風影_SandaimeKazekage;
  修羅道Shuradō?: 三代目風影_SandaimeKazekage;
  千代Chiyo?: 三代目風影_SandaimeKazekage;
  大黒天善DaikokuTenzen?: 三代目風影_SandaimeKazekage;
  土牢剛霊無DorōGōremu?: 三代目風影_SandaimeKazekage;
  風神Fūjin?: 三代目風影_SandaimeKazekage;
  舟戸青煉FunatoSeiren?: 三代目風影_SandaimeKazekage;
  蝦蟇Gama?: 三代目風影_SandaimeKazekage;
  丸鉄Gantetsu?: 三代目風影_SandaimeKazekage;
  業頭Gōzu?: 三代目風影_SandaimeKazekage;
  牛頭Gozu?: 三代目風影_SandaimeKazekage;
  紅蓮Guren?: 三代目風影_SandaimeKazekage;
  白医Hakui?: 三代目風影_SandaimeKazekage;
  卑留呼Hiruko?: 三代目風影_SandaimeKazekage;
  宝亀Hōki?: 三代目風影_SandaimeKazekage;
  人間道Ningendō?: 三代目風影_SandaimeKazekage;
  篝Kagari?: 三代目風影_SandaimeKazekage;
  影Kage?: 三代目風影_SandaimeKazekage;
  香燐Karin?: 三代目風影_SandaimeKazekage;
  加流羅Karura?: 三代目風影_SandaimeKazekage;
  三代目風影SandaimeKazekage?: 三代目風影_SandaimeKazekage;
  伎璃Kiri?: 三代目風影_SandaimeKazekage;
  小助Kosuke?: 三代目風影_SandaimeKazekage;
  冥頭Meizu?: 三代目風影_SandaimeKazekage;
  地獄道Jigokudō?: 三代目風影_SandaimeKazekage;
  縄樹Nawaki?: 三代目風影_SandaimeKazekage;
  餓鬼道Gakidō?: 三代目風影_SandaimeKazekage;
  雷神Raijin?: 三代目風影_SandaimeKazekage;
  乱Ran?: 三代目風影_SandaimeKazekage;
  龍堂院邪光RyūdōinJakō?: 三代目風影_SandaimeKazekage;
  砂仁Sajin?: 三代目風影_SandaimeKazekage;
  山椒Sanshō?: 三代目風影_SandaimeKazekage;
  撰歌細波SenkaSazanami?: 三代目風影_SandaimeKazekage;
  死韻Shiin?: 三代目風影_SandaimeKazekage;
  十尾Jūbi?: 三代目風影_SandaimeKazekage;
  斗風Tofu?: 三代目風影_SandaimeKazekage;
  土岐Toki?: 三代目風影_SandaimeKazekage;
  椿Tsubaki?: 三代目風影_SandaimeKazekage;
}

export interface Debut {
  novel?: string;
  movie?: Movie;
  appearsIn: AppearsIn;
  manga?: string;
  anime?: string;
  game?: string;
  ova?: string;
}

export type AppearsIn =
  | 'Novel, Movie'
  | 'Anime, Manga, Novel, Game, Movie'
  | 'Anime, Manga'
  | 'Anime, Manga, Game'
  | 'Anime'
  | 'Anime, Manga, Movie'
  | 'Manga'
  | 'Anime, Manga, Novel, Game'
  | 'Anime, Game'
  | 'Anime, Novel, Movie'
  | 'Anime, Novel'
  | 'Game'
  | 'Movie'
  | 'Anime, Manga, Novel, Movie'
  | 'Novel, Game, Movie'
  | 'Anime, Novel, Game'
  | 'Anime, Manga, Game, Movie'
  | 'Anime, Manga, Novel'
  | 'Anime, Novel, Game, Movie'
  | 'Novel'
  | 'Anime, Movie'
  | 'Game, Movie'
  | 'Anime, Game, Movie'
  | 'Manga, Movie';

export type Movie =
  | 'Naruto Shippūden the Movie: Bonds'
  | 'The Last: Naruto the Movie'
  | 'Naruto the Movie: Blood Prison'
  | 'Naruto Shippūden the Movie: The Lost Tower'
  | 'Naruto Shippūden the Movie: The Will of Fire'
  | 'Boruto: Naruto the Movie'
  | 'Naruto Shippūden the Movie'
  | 'Road to Ninja: Naruto the Movie'
  | 'Naruto the Movie: Guardians of the Crescent Moon Kingdom'
  | 'Naruto the Movie: Ninja Clash in the Land of Snow'
  | 'Naruto the Movie: Legend of the Stone of Gelel'
  | 'Road to Ninja: Naruto the Movie  (Pain)'
  | 'The Last: Naruto the Movie  (Mentioned)';

export interface PersonalClass {
  species?: string;
  status?: Status;
  kekkeiGenkai?: string[] | string;
  classification?: string[] | string;
  jinchūriki?: string[];
  titles?: string[];
  affiliation?: string[] | string;
  birthdate?: string;
  sex?: Sex;
  height?: Age;
  weight?: Weight;
  bloodType?: BloodType;
  occupation?: string[] | string;
  team?: string[] | string;
  partner?: string[] | string;
  age?: Age;
  clan?: string[] | string;
  tailedBeast?: string;
  kekkeiTōta?: string;
  kekkeiMōra?: string[] | string;
}

export interface Age {
  'Part II'?: string;
  'Part I'?: string;
  'Academy Graduate'?: string;
  'Chunin Promotion'?: string;
  'Boruto Manga'?: string;
  'Boruto Movie'?: string;
  Gaiden?: string;
  'Blank Period'?: string;
}

export type BloodType = 'O' | 'A' | 'AB' | 'B';

export type Sex =
  | 'Male'
  | 'Female'
  | 'File:Gender Other.svg Other'
  | 'File:Gender Various.svg Various';

export type Status = 'Incapacitated' | 'Deceased' | 'Presumed Deceased';

export interface Weight {
  'Part II'?: string;
  'Part I'?: string;
}

export interface RankClass {
  ninjaRank?: Age;
  ninjaRegistration?: string;
}

export interface VoiceActors {
  japanese?: string[] | string;
  english?: string[] | string;
}

export interface 三代目風影_SandaimeKazekage {}

export class Convert {
  public static toCharacters(json: string): Characters {
    return JSON.parse(json);
  }

  public static charactersToJson(value: Characters): string {
    return JSON.stringify(value);
  }
}
