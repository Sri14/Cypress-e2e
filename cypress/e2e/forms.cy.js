it('Practise form', ()=>{

    cy.visit('https://demoqa.com/forms')
    cy.get(`#item-0`).find('.text').contains('Practice Form').click()


})
