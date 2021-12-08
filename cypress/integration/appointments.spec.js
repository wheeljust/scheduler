/* eslint-disable */

describe("Appointments", () => {

  // Rest the test database, visit the root and check for the page load on each test
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  });

  it("should book an interview", () => {
    // Find and click the add button
    cy.get("[alt=Add]")
      .first()
      .click();

    // Type student name in field
    cy.get("[data-testid=student-name-input")
      .type("Lydia Miller-Jones");

    // Select interviewer
    cy.get("[alt='Sylvia Palmer']")
      .click();

    // Select save button
    cy.contains("Save")
      .click();

    // Check for the new appointment and verify contains the student and interviewer names
    cy.contains(".appointment__card--show", "Lydia Miller-Jones", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    // Clicks the edit button for the existing appointment, force because not visible initially only on hover
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    // Changes the name and interviewer
    cy.get("[alt='Tori Malcolm']")
      .click();

    cy.get("[data-testid=student-name-input")
      .clear()
      .type("Lydia Miller-Jones");

    // Clicks the save button
    cy.contains("Save")
      .click();

    // Sees the edit to the appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    // Clicks the delete button for the existing appointment
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true });

    // Clicks the confirm button
    cy.contains("Confirm")
      .click();

    // Sees that the appointment slot was deleted and is now empty
    cy.contains("DELETING").should("exist");
    cy.contains("DELETING").should("not.exist");
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });

});