describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
  it('types', () => {
    cy.visit('http://localhost:5173/')
    //TEXTFIELD TYPE THINGS
    cy.get('input').type("things to do today")
    cy.get('button').click()
    cy.get('li').contains("things to do today")
    //HITTING BUTTON
  })
})
