/// <reference types="cypress"/>

describe('Cadastro de dispositivos', () => {

    it('Cadastrar um dispositivo especifico', () => {

        const dadosMetodos = require('../fixtures/dadosMetodos.json')
        
        //Requisição do endpoint
        cy.postDevice(dadosMetodos.bodyPost).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(dadosMetodos.bodyPost.name)

            cy.putDevice(response.body.id, dadosMetodos.bodyPut).then((response_put) =>{
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(dadosMetodos.bodyPut.name)
            })
        })

    })

})