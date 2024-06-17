/// <reference types="cypress"/>

describe('Deletar um dispositivo', () => {

    it('Deletar um dispositivo especifico', () => {

        const dadosMetodos = require('../fixtures/dadosMetodos.json')
        //Body da requisição POST
        
        cy.postDevice(dadosMetodos.bodyPost).then((response)=>{
            expect(response.status).equal(200)
        //Requisição do endpoint
            cy.deleteDevice(response.body.id).then((response_delete) =>{
                expect(response_delete.status).equal(200)
                expect(response_delete.body.message).equal(`Object with id = ${response.body.id} has been deleted.`)
            })
        })

    })
    it('Deletar um dispositivo não existente', () => {

        const id_inexistente = '5555'

        cy.deleteDevice(id_inexistente).then((response_delete) =>{
            expect(response_delete.status).equal(404)
            expect(response_delete.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)
        })
    })
})