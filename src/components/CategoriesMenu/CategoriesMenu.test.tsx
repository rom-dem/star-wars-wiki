import { act, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import CategoriesMenu from "./CategoriesMenu";
import { apiCategories } from "@/api/apiClient/apiEndpoints";
import { createTestContainer } from "@/utils/testUtils/testUtils";

describe("Given the CatogoriesMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show a button with item category 'People' on it", () => {
      const container = createTestContainer();

      act(() => {
        createRoot(container).render(
          <CategoriesMenu
            categories={apiCategories}
            onClick={() => "people"}
          />,
        );
      });
      const expectedButtonText = screen.getByRole("button", {
        name: apiCategories.people,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
