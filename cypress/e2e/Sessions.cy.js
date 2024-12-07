
let userData;
let userData1
beforeEach(()=>{
    cy.fixture('login1').then((data)=>{
        cy.login(data.userName, data.password)
        userData = data
        cy.fixture('login2').then((data1)=>{
            userData1 = data1
        })
    })

})

it('login one time', ()=>{
    cy.visit('https://demoblaze.com')
    cy.log(userData.password);
    cy.log(userData1[0].user3.userName)
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
