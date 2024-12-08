it('Upload a file', ()=>{
    cy.visit('https://practice-automation.com/file-upload/')
    cy.get('input[type="file"]').selectFile('cypress/fixtures/pdf.png')
    cy.get('#upload-btn').click()
    cy.get('#layout').should('contain.text','Thank you for your message. It has been sent.')
})
