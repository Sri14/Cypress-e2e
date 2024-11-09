beforeEach(()=>{
    cy.login('test', 'test')
})

it('login one time', ()=>{
    cy.visit('https://demoblaze.com')
})
