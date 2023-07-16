import { ApiData, ItemStructure } from "@/api/types";

export const mockLuke: ItemStructure = {
  name: "Luke",
  url: "www.luke.com",
};

const mockLeia: ItemStructure = {
  name: "Leia",
  url: "www.leia.com",
};

const mockLukeData: ApiData = {
  next: "123asdf",
  results: [mockLuke],
};

export const mockLeiaData: ApiData = {
  next: "123asdf",
  results: [mockLeia],
};

export const mockPeopleItems: ApiData = {
  next: "",
  results: [mockLeia, mockLuke],
};
