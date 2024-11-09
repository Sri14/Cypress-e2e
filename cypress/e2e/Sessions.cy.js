

beforeEach(()=>{
    cy.fixture('login1').then((data)=>{
        cy.login(data.userName, data.password)
    })

})


it('login one time', ()=>{
    cy.visit('https://demoblaze.com')
})

it('login second time', ()=>{
    cy.visit('https://demoblaze.com')
})

it('login second time', ()=>{
    cy.visit('https://demoblaze.com')
})

it('login second time', ()=>{
    cy.visit('https://demoblaze.com')
})

it('login second time', ()=>{
    cy.visit('https://demoblaze.com')
})

it('login second time', ()=>{
    cy.visit('https://demoblaze.com')
})
