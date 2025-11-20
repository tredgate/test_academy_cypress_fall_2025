// cypress/e2e/
// failing.cy.js

describe("Neuspěšné testy", () => {
  // ? Přeskočení padajícího testu: it.skip test nespustí a označí ho jako skipped
  it.skip("Pád testu - nenalezený prvek", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2");
  });
});
