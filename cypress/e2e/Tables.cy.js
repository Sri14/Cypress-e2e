it('Delete tables data', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('h1').contains('Web Tables').should('be.visible')

    function deleteRow(name){
        cy.get('.rt-td').contains(name).parent().find(`[title="Delete"]`).click();
    }

    deleteRow('39');


})

it('Find table data and assert some other value', {tags: ['@smoke', '@table']},()=>{
    cy.visit('https://demoqa.com/webtables')
 //   cy.get('.rt-td').contains('Alden').parent().should('contain', '12000')
})
