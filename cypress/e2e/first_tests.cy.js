// cypress/e2e/
// first_tests.cy.js

describe("První testy", () => {
  it("Přihlášení do Pmtoolu", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();

    // ? Ověření viditelnosti loga po přihlášení a textu vítací zprávy
    // * Asserty = kontroly
    cy.get(".logo img").should("be.visible");
    cy.get("#welcome-page-header").should(
      "have.text", // ? typ kontroly
      "Vítej v testovací aplikaci Tredgate Project" // ? Expected text
    );
    // ! Neúspěšný assert - text
    cy.get("#welcome-page-header").should(
      "have.text", // ? typ kontroly
      "Ahoj!!" // ? Expected text
    );
  });
});
