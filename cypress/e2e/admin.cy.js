describe('Admin Test case', () => 
  {
    beforeEach(() => 
    {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type("Admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()    
    })
   it('Positive input', () => 
{
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(2) > .oxd-input').type("Muthu")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-autocomplete-text-input > input').type("Muthu")
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-toast').should('be.visible')
})
})
  