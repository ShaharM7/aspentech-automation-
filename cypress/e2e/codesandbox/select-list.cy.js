import {slowCypressDown} from 'cypress-slow-down'

Cypress.on('uncaught:exception', () => {
    return false
})

describe('Navigate to ', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('select random fruits', () => {
        slowCypressDown()
        cy.contains('span', 'orange').should('be.visible').parentsUntil('li').next()
            .find('input').uncheck()
        cy.contains('span', 'apple').should('be.visible').parentsUntil('li').next()
            .find('input').check()
        cy.contains('span', 'cherry').should('be.visible').parentsUntil('li').next()
            .find('input').check()
    })

})
