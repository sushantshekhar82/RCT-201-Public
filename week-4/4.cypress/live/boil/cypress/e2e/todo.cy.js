describe('Testing Todo', () => {
  it('should visit the localhost successfully', () => {
    cy.visit('http://localhost:3000/')
  })
})

it('should test all UI components',()=>{
  cy.visit('http://localhost:3000/')
  cy.get('h3').should('exist')
  cy.get("[data-testid=todo-input]").should('exist')
  cy.get("[data-testid=todo-button]").should('exist')
})

it('should be abl to add todo',()=>{
  cy.visit('http://localhost:3000/')
   cy.intercept('GET','http://localhost:4004/todos',{fixtures:'fakeServer'}).as('getreq')

  cy.intercept('POST','http://localhost:4004/todos',{id:3,value:"Intercept testing",isCompleted:true}).as('postReq')
  cy.get("[data-testid=todo-input]").type('testing todo')
  cy.get("[data-testid=todo-button]").click()
  cy.wait('@postReq')
 cy.get( "[data-testid=todo-wrapper]").children().should('have.length',9)
 


})