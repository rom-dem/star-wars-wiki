import { ApiData } from "@/api/types";

export const mockLuke: ApiData = {
  next: "123asdf",
  results: [
    {
      name: "Luke",
      url: "www.luke.com",
    },
  ],
};

export const mockLeia: ApiData = {
  next: "123asdf",
  results: [
    {
      name: "Leia",
      url: "www.leia.com",
    },
  ],
};

export const mockItems: ApiData[] = [mockLuke, mockLeia];
