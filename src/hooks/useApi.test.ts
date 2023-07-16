import { apiCategories } from "@/api/apiClient/apiEndpoints";
import { mockPeopleItems } from "@/mocks/itemsMocks";
import useApi from "./useApi";

const { people } = apiCategories;

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    isLoading: false,
    data: mockPeopleItems,
    error: undefined,
    isError: false,
  }),
}));

describe("Given the useApi hook", () => {
  describe("When the getItems function is called with the endpoint 'people'", () => {
    test("Then it should return a list of items", async () => {
      const expectedResponse = mockPeopleItems;

      const { data } = useApi(people);

      expect(data).toStrictEqual(expectedResponse);
    });
  });
});
