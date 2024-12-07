

let userData;

beforeEach(()=>{
    cy.fixture('login2.json').then((data)=>{
        userData = data
    })
})


it('open page', ()=>{

    cy.visit('https://demoblaze.com')

})

it('open page 2', ()=>{

    cy.visit('https://demoblaze.com')
    cy.log(userData[0].user3.userName)
})
