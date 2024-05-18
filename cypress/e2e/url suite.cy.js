describe('URL suite', () => {
  it('lands on homepage', () => {
    cy.visit('https://bdqtest.com/')
    cy.url().should('eq','https://bdqtest.com/')
  })
  it('lands on automation-playground', () => {
    cy.visit('https://bdqtest.com/automation-playground')
    cy.url().should('eq','https://bdqtest.com/automation-playground')
  })
})