export type Character = {
  id?: number;
  name?: string;
  image?: string[];
  clan?: {
    id?: number;
    name?: string;
  }[];
  village?: {
    id?: number;
    name?: string;
  }[];
  kekkeigenkai?: {
    id?: number;
    name?: string;
  }[];
  group?: string[];
  jinchuriki?: string[];
};
