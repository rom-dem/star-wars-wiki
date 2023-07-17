import { createRoot } from "react-dom/client";
import { act, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";
import { mockLuke } from "@/mocks/itemsMocks";
import { createTestContainer } from "@/utils/testUtils/testUtils";

describe("Given an ItemCard component", () => {
  describe("When it is rendered with the characte 'Luke Skywalker'", () => {
    test("Then it should show the title 'Luke Skywalker'", () => {
      const container = createTestContainer();

      act(() => {
        createRoot(container).render(<ItemCard item={mockLuke} />);
      });
      const expectedTitle = screen.getByRole("heading", {
        name: mockLuke.name,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
