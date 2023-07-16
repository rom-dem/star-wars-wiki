import { act, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import { ItemsList } from "./ItemsList";
import { mockPeopleItems } from "@/mocks/itemsMocks";

describe("Given the ItemsList component", () => {
  describe("When rendered with two people 'Luke' and 'Leia'", () => {
    test("Then it should show a list of two people ", () => {
      const container = document.createElement("div");
      document.body.appendChild(container);
      const leiasName = mockPeopleItems.results[0].name;
      const lukesName = mockPeopleItems.results[1].name;

      act(() => {
        createRoot(container).render(<ItemsList items={mockPeopleItems} />);
      });
      const expectedFirstTitle = screen.getByRole("heading", {
        name: leiasName,
      });
      const expectedSecondTitle = screen.getByRole("heading", {
        name: lukesName,
      });

      expect(expectedFirstTitle).toBeInTheDocument();
      expect(expectedFirstTitle.textContent).toBe(leiasName);
      expect(expectedSecondTitle.textContent).toBe(lukesName);
    });
  });
});
