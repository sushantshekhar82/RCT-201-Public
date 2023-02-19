describe('Testing Counter', () => {
  it('should visit the localhost successfully', () => {
    cy.visit('http://localhost:3000/')
  })
})

it('should test all UI components',()=>{
  cy.visit('http://localhost:3000/')
  cy.get('h1').should('exist')
  cy.get("[data-testid=reduce]").should('exist')
  cy.get("[data-testid=add]").should('exist')
})
it('should add 1 when click ',()=>{
 
  cy.visit('http://localhost:3000/')
  cy.get('h1').should('have.text','Counter : 0')
  cy.get("[data-testid=add]").click()
  cy.get('h1').should('have.text','Counter : 1')
})

it('should reduce 1 when click ',()=>{
 
  cy.visit('http://localhost:3000/')
  cy.get('h1').should('have.text','Counter : 0')
  cy.get("[data-testid=reduce]").click()
  cy.get('h1').should('have.text','Counter : -1')
})
