import { screen } from "@testing-library/dom";
import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import ItemCard from "./ItemCard";
import { mockLuke } from "@/mocks/itemsMocks";

describe("Given an ItemCard component", () => {
  describe("When it is rendered with the characte 'Luke Skywalker'", () => {
    test("Then it should show the title 'Luke Skywalker'", () => {
      const container = document.createElement("div");
      document.body.appendChild(container);

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