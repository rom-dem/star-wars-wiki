import { mockPeopleItems } from "@/mocks/itemsMocks";
import getItems from "./getItems";
import { apiCategories } from "../apiClient/apiEndpoints";

describe("Given the getItems function", () => {
  const itemCategory = apiCategories.people;

  describe("When it is called with 'people'", () => {
    test("Then it should ruturn a list of two people", async () => {
      const expectedResponse = mockPeopleItems;

      const response = await getItems(itemCategory);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
