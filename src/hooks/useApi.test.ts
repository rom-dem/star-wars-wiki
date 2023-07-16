import apiClient from "@/api/apiClient/apiClient";
import { apiEndpoints } from "@/api/apiClient/apiEndpoints";
import { mockPeopleItems } from "@/mocks/itemsMocks";
import useApi from "./useApi";

jest.mock("../api/apiClient/apiClient");

const { people } = apiEndpoints;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the useApi hook", () => {
  describe("When the getItems function is called with the endpoint 'people'", () => {
    test("Then it should return a list of items", async () => {
      const mockResponse = {
        data: mockPeopleItems,
      };
      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getItemsData } = useApi(people);
      const itemsData = await getItemsData();

      expect(apiClient.get).toHaveBeenCalledWith(people);
      expect(itemsData).toEqual(mockResponse.data);
    });
  });
});
