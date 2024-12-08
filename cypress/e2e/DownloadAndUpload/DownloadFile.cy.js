

it('Download file ', () => {
    cy.deleteDownloadsFolder()
    cy.readFile('cypress/downloads/test.pdf').should('not.exist')
    cy.visit('https://practice-automation.com/file-download/')
    cy.get(`[class*='download-on-click']`).click();
    cy.readFile('cypress/downloads/test.pdf').should('exist')
})
