it('Tests to run with tags', {tags: ['@smoke']}, ()=>{
    cy.visit('https://bbc.co.uk')
})
