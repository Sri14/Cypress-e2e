// beforeEach(()=>{
//     cy.login('test2', 'test2')
// })

it('login one time', {tags: ['@smoke']},()=>{
    cy.visit('https://demoblaze.com')
})
