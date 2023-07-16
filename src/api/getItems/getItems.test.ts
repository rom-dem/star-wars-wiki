import { mockPeopleItems } from "@/mocks/itemsMocks";
import getItems from "./getItems";
import { apiEndpoints } from "../apiClient/apiEndpoints";
import { server } from "@/mocks/server";
import { errorHandlers } from "@/mocks/handlers";

describe("Given the getItems function", () => {
  const itemCategory = apiEndpoints.people;

  describe("When it is called with 'people'", () => {
    test("Then it should ruturn a list of two people", async () => {
      const expectedResponse = mockPeopleItems;

      const response = await getItems(itemCategory);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
