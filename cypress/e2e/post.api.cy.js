/// <reference types="cypress"/>

describe('Cadastro de dispositivos', () => {

    it('Cadastrar um dispositivo especifico', () => {
        
        const dataAtual = new Date().toISOString().slice(0, 16)
        const dadosMetodos = require('../fixtures/dadosMetodos.json')
        //Requisição do endpoint
        cy.postDevice(dadosMetodos.bodyPost).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.id).not.empty

            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)

            expect(response.body.name).equal('iPhone Breno')
        })

    })
})