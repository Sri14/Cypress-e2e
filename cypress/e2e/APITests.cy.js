it('Check an api request', () => {
    cy.visit('https://bbc.co.uk')
    cy.api(`https://api.guerrillamail.com/ajax.php?f=get_email_address`)

})
