import { createTestContainer } from "@/utils/testUtils/testUtils";
import { act, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import Pagination from "./Pagination";

describe("Given the Pagination component", () => {
  describe("When rendered", () => {
    test("Then it should show two buttons", () => {
      const container = createTestContainer();
      const previousButtonText = "Previous Page";
      const nextButtonText = "Next Page";

      act(() => {
        createRoot(container).render(
          <Pagination
            paginationPrevious={() => {}}
            paginationNext={() => {}}
            isPreviousDisabled={false}
            isNextDisabled={false}
          />,
        );
      });

      const expectedPreviousButton = screen.getByRole("button", {
        name: previousButtonText,
      });
      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(expectedPreviousButton).toBeInTheDocument();
      expect(expectedNextButton).toBeInTheDocument();
    });
  });
});
