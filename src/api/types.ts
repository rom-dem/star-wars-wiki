export interface ApiCategoriesStructure {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

export interface ApiData {
  previous?: string;
  next: string;
  results: ItemStructure[];
}

export interface ItemStructure {
  name: string;
  url: string;
  title?: string;
}
