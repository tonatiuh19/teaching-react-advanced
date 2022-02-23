/* global describe, it, cy */

describe("First test", function () {
  it("if it works", function () {
    cy.visit("/");
  });

  it("navigate to a category", function () {
    cy.visit("/pet/2");
    cy.get("article");
  });

  it("if return home", function () {
    cy.visit("/pet/2");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });

  it("Users can found the form in Login if user go to favs", function () {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});
