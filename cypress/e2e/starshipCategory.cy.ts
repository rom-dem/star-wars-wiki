describe("When visited and 'Starships' button is pressed", () => {
  it("Then it should show 'Star Destroyer' card", () => {
    const starDestroyer = /star destroyer/i;
    const productionUrl = "https://starwarswikird.vercel.app/";

    cy.visit(productionUrl);
    cy.wait(10000);
    cy.contains("starships").click();
    cy.wait(10000);
    cy.contains(starDestroyer);
  });
});
