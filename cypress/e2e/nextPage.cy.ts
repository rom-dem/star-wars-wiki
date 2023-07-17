describe("Given the production url", () => {
  describe("When visited and 'Next Page' button is pressed", () => {
    it("Then it should show 'Anakin Skywalker' card", () => {
      const anakin = /anakin skywalker/i;
      const productionUrl = "https://starwarswikird.vercel.app/";

      cy.visit(productionUrl);
      cy.wait(10000);
      cy.get("button:last").click();
      cy.wait(10000);
      cy.contains(anakin);
    });
  });
});
