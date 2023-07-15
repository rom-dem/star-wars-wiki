import apiClient from "@/api/apiClient/apiClient";
import { apiEndpoints } from "@/api/apiClient/apiEndpoints";
import { mockItems } from "@/mocks/itemsMocks";
import useApi from "./useApi";

jest.mock("../api/apiClient/apiClient");

const { people } = apiEndpoints;

describe("Given the useApi hook", () => {
  describe("When called", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should return a list of items in the data property", async () => {
      const mockResponse = {
        data: mockItems,
      };
      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getItems } = useApi(people);
      const itemsData = await getItems();

      expect(apiClient.get).toHaveBeenCalledWith(people);
      expect(itemsData).toEqual(mockResponse.data);
    });
  });
});
