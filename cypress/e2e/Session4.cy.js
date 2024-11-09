beforeEach(()=>{
    cy.login('test2', 'test2')
})

it('login one time', ()=>{
    cy.visit('https://demoblaze.com')
})
