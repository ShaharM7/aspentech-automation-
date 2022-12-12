
describe('Navigate to ', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('select random fruits', () => {
    cy.contains('span', 'orange').then((button) => {
      console.log(button.text())
    })
    cy.contains('span', 'apple ')
    cy.contains('span', 'cherry ')
  })

})
