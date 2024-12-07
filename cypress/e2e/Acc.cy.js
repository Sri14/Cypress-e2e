

it('Check accessibility', () => {
    cy.visit('https://www.gov.uk/ofqual');
    cy.checkAccessibility();
  })

