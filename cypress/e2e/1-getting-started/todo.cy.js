/// <reference types= "cypress"/>
import { slowCypressDown } from 'cypress-slow-down'
Cypress.on('uncaught:exception', (err) => {
    return false
})

describe('Navigate to ', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('select random fruits', () => {
        slowCypressDown()
        cy.contains('span', 'orange').should('be.visible').parent().parent().parent()
            .find('input')
            .uncheck({force: true})
        cy.contains('span', 'apple').should('be.visible').parent().parent().parent()
            .find('input').check()
        cy.contains('span', 'cherry').should('be.visible').parent().parent().parent()
            .find('input').check()
    })

})
