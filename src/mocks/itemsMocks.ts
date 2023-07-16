import { ApiData, ItemStructure } from "@/api/types";

const mockLuke: ItemStructure = {
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

const mockLeiaData: ApiData = {
  next: "123asdf",
  results: [mockLeia],
};

export const mockPeopleItems: ApiData[] = [mockLukeData, mockLeiaData];