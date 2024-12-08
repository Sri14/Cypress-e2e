// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-delete-downloads-folder').addCustomCommand();


Cypress.Commands.add('login',(userName, password)=>{
    cy.session([userName, password], ()=>{
        cy.visit('https://demoblaze.com')
        cy.get('#login2').click();
        cy.get('#loginusername').type(userName)
        cy.wait(500)
        cy.get('#loginpassword').type(password)
        cy.get(`[onclick="logIn()"]`).click();
        cy.get(`#logout2`).should('be.visible');
    },{
        cacheAcrossSpecs: true
        }

        )

})
