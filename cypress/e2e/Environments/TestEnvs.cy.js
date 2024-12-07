describe('TestEnvs', () => {
    it('visit url from config file', () => {
        cy.visit(Cypress.env('sky_url'))

    })
})
