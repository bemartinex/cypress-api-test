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

Cypress.Commands.add('getDevice', (device_id) => {
    
    cy.request({
        method:'GET',
        url: `/objects/${device_id}`,
        failOnStatusCode: false
    }).then((response) => {return response})

})

Cypress.Commands.add('postDevice', (bodyPost) => {
    
    cy.request({
        method:'POST',
        url: `/objects`,
        failOnStatusCode: false,
        body: bodyPost
    }).then((response) => {return response})

})

Cypress.Commands.add('deleteDevice', (responsePostId) => {
    
         cy.request({
                method: 'DELETE',
                url:`/objects/${responsePostId}`,
                failOnStatusCode: false
            }).then((response_delete)=>{return response_delete})

})

Cypress.Commands.add('putDevice', (responseBodyId, bodyPut) => {
    
    cy.request({
        method: 'PUT',
        url:`/objects/${responseBodyId}`,
        failOnStatusCode: false,
        body: bodyPut
    }).then((response_put)=>{return response_put})

})