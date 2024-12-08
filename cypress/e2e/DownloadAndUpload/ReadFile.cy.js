it('Read file', () => {
    cy.readFile('cypress/downloads/testFile.txt').should('exist').then((content) => {
        expect(content.trim()).to.equal('This is a test file')
    })
})
