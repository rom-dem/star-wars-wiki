import { ApiEndpointsStructure } from "../types";

export const apiEndpoints: ApiEndpointsStructure = {
  people: "/people",
  planets: "/planets",
  films: "/films",
  species: "/species",
  vehicles: "/vehicles",
  starships: "/starships",
};

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
