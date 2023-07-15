export interface ApiEndpointsStructure {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

export interface ApiData {
  next: string;
  results: [
    {
      name: string;
      url: string;
    },
  ];
}
