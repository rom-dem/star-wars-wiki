import { apiCategories } from "@/api/apiClient/apiEndpoints";
import Home from "@/pages";
import { createTestContainer } from "@/utils/testUtils/testUtils";
import { act, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    isLoading: true,
    data: undefined,
    error: undefined,
    isError: false,
  }),
}));

describe("Given the index page", () => {
  describe("When rendering", () => {
    test("Then it should show a loader with 'Loading...' on it", () => {
      const container = createTestContainer();
      const loaderText = /loading.../i;

      act(() => {
        createRoot(container).render(<Home />);
      });
      const expectedLoaderText = screen.getByRole("heading", {
        name: loaderText,
      });

      expect(expectedLoaderText).toBeInTheDocument();
    });
  });
});
