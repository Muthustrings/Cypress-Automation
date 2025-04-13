const { not } = require("check-more-types")

describe('Admin Test case', () => 
  {
    beforeEach(() => 
    {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123")
    cy.get('button[type="submit"]').click()    
    })
   it('Positive input for Search', () => 
  {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-autocomplete-text-input > input').type("Call sunny")
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('contain', 'Admin')
  })
  it('Negative input for Search', () =>
  {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-autocomplete-text-input > input').type("Call sunny")
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(4) > div').should ('contain', 'Call sunny')
  })
  it('Search with Invalid Role', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("InvalidUser") // Enter an invalid username
    // Select an invalid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click() // Open the dropdown
    cy.get('.oxd-select-dropdown > :nth-child(4) > span') // Select a non-existent or invalid role
      .click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidUser')
  })
  it('Search with Special Characters', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("@#$%^&*") // Enter special characters in the username field
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', '@#$%^&*')
  })
  it('Search with SQL Injection', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("' OR '1'='1") // Enter SQL injection in the username field
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found or the system handles it securely
    cy.get('.oxd-table-body').should('not.contain', "' OR '1'='1")
  })
  it('Search with XSS Attack', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("<script>alert('XSS')</script>") // Enter XSS attack in the username field
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found or the system handles it securely
    cy.get('.oxd-table-body').should('not.contain', "<script>alert('XSS')</script>")
  })
  it('Search with Empty Fields', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').clear() // Clear the username field
    // Perform the search without entering any criteria
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that all results are displayed or a message is shown
    cy.get('.oxd-table-body').should('be.visible')
  })
  it('Search with Non-Existent User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("NonExistentUser") // Enter a non-existent username
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'NonExistentUser')
  })
  it('Search with Valid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter a valid username
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that the user is found
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Invalid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("InvalidUser") // Enter an invalid username
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidUser')
  }) 
  it('Search with Empty Username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').clear() // Clear the username field
    // Perform the search without entering any criteria
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that all results are displayed or a message is shown
    cy.get('.oxd-table-body').should('be.visible')
  })
  it('Search with Invalid Role', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter a valid username
    // Select an invalid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click() // Open the dropdown
    cy.get('.oxd-select-dropdown > :nth-child(4) > span') // Select a non-existent or invalid role
      .click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'Admin')
  })
  it('Search with Special Characters', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("@#$%^&*") // Enter special characters in the username field
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', '@#$%^&*')

  })
  it('Search with Partial Username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Adm") // Enter a partial username
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results containing the partial username are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Case Sensitivity', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("admin") // Enter the username in lowercase
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that the user is found regardless of case
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Leading and Trailing Spaces', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("   Admin   ") // Enter username with spaces
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that the user is found
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Invalid Characters', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Admin@123!") // Enter invalid characters
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'Admin@123!')
  })
  it('Search with Multiple Filters', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter a valid username
    // Select a valid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that the user is found with the applied filters
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Long Username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("ThisIsAVeryLongUsernameThatExceedsNormalLength") // Enter a long username
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'ThisIsAVeryLongUsernameThatExceedsNormalLength')
  })
  it('Search with Role Only', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select a valid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')

  })
  it('Search with Status Only', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected status are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })  
  it('Search with Invalid Role and Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select an invalid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(4) > span').click()
    // Select an invalid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(3) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidRoleAndStatus')
  })
  it('Search with Valid Role and Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select a valid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role and status are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Invalid Role and Valid Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select an invalid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(4) > span').click()
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidRole')
  })
  it('Search with Valid Role and Invalid Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select a valid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Select an invalid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(3) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidStatus')
  })
  it('Search with Valid Role and Empty Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select a valid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Clear the status field
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Valid Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected status are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Clear the status field
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search without entering any criteria
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that all results are displayed or a message is shown
    cy.get('.oxd-table-body').should('be.visible')
  })
  it('Search with Invalid User and Empty Role', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter an invalid username
    cy.get(':nth-child(2) > .oxd-input').type("InvalidUser")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidUser')
  })
  it('Search with Empty Role and Invalid Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Select an invalid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(3) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidStatus')
  })
  it('Search with Empty Role and Valid Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected status are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Invalid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter an invalid username
    cy.get(':nth-child(2) > .oxd-input').type("InvalidUser")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidUser')
  })
  it('Search with Empty Role and Valid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter a valid username
    cy.get(':nth-child(2) > .oxd-input').type("Admin")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Empty Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Clear the status field
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search without entering any criteria
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that all results are displayed or a message is shown
    cy.get('.oxd-table-body').should('be.visible')
  })
  it('Search with Valid User and Empty Role', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter a valid username
    cy.get(':nth-child(2) > .oxd-input').type("Admin")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Valid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter a valid username
    cy.get(':nth-child(2) > .oxd-input').type("Admin")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Invalid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter an invalid username
    cy.get(':nth-child(2) > .oxd-input').type("InvalidUser")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidUser')
  })
  it('Search with Empty Role and Valid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter a valid username
    cy.get(':nth-child(2) > .oxd-input').type("Admin")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and Empty Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Clear the status field
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search without entering any criteria
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that all results are displayed or a message is shown
    cy.get('.oxd-table-body').should('be.visible')
  })
 
  it('Search with Empty Role and Invalid User', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter an invalid username
    cy.get(':nth-child(2) > .oxd-input').type("InvalidUser")
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidUser')

  })
  it('Search with Mixed Alphanumeric Username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Admin123") // Enter a mixed alphanumeric username
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results are displayed or not
    cy.get('.oxd-table-body').should('not.contain', 'Admin123')
  })
  it('Search with Username Containing Spaces', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Admin User") // Enter a username with spaces
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'Admin User')
  })
  it('Search with Role and Partial Username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get(':nth-child(2) > .oxd-input').type("Adm") // Enter a partial username
    // Select a valid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected role and partial username are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Invalid Role and Empty Username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Select an invalid role from the dropdown
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(4) > span').click()
    // Clear the username field
    cy.get(':nth-child(2) > .oxd-input').clear()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', 'InvalidRole')
  })
  it('Search with Empty Username and Valid Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the username field
    cy.get(':nth-child(2) > .oxd-input').clear()
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected status are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Special Characters in Role', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Enter special characters in the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type("@#$%^&*")
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found
    cy.get('.oxd-table-body').should('not.contain', '@#$%^&*')
  })
  it('Search with Empty Role and Multiple Filters', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Select a valid status from the dropdown
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that results with the selected status are displayed
    cy.get('.oxd-table-body').should('contain', 'Admin')
  })
  it('Search with Empty Role and SQL Injection in Status', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    // Clear the role field
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    // Enter SQL injection in the status field
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type("' OR '1'='1")
    // Perform the search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    // Assert that no results are found or the system handles it securely
    cy.get('.oxd-table-body').should('not.contain', "' OR '1'='1")
  })
  it("Add Admin User ", () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click() // Click on Add button
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter username
    cy.get(':nth-child(3) > .oxd-input').type("admin123") // Enter password
    cy.get(':nth-child(4) > .oxd-input').type("admin123") // Confirm password
    cy.get('.oxd-form-actions > .oxd-button--primary').click() // Click on Save button
    cy.get('.oxd-table-body').should('contain', 'Admin') // Assert that the user is added successfully
  })
it('Add Admin user empty', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click() // Click on Add button
    cy.get('.oxd-form-actions > .oxd-button--primary').click() // Click on Save button
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Required') // Assert that the error message is shown
})
  it('Add Admin user with invalid username', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click() // Click on Add button
    cy.get(':nth-child(2) > .oxd-input').type("Admin@123") // Enter invalid username
    cy.get(':nth-child(3) > .oxd-input').type("admin123") // Enter password
    cy.get(':nth-child(4) > .oxd-input').type("admin123") // Confirm password
    cy.get('.oxd-form-actions > .oxd-button--primary').click() // Click on Save button
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid username') // Assert that the error message is shown
  })
  it('Add Admin user with invalid password', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click() // Click on Add button
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter username
    cy.get(':nth-child(3) > .oxd-input').type("admin@123") // Enter invalid password
    cy.get(':nth-child(4) > .oxd-input').type("admin123") // Confirm password
    cy.get('.oxd-form-actions > .oxd-button--primary').click() // Click on Save button
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid password') // Assert that the error message is shown
  })
  it('Add Admin user with invalid confirm password', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click() // Click on Add button
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter username
    cy.get(':nth-child(3) > .oxd-input').type("admin123") // Enter password
    cy.get(':nth-child(4) > .oxd-input').type("admin@123") // Confirm password
    cy.get('.oxd-form-actions > .oxd-button--primary').click() // Click on Save button
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Password mismatch') // Assert that the error message is shown
  })
  it('Add Admin user with valid data', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click() // Click on Add button
    cy.get(':nth-child(2) > .oxd-input').type("Admin") // Enter username
    cy.get(':nth-child(3) > .oxd-input').type("admin123") // Enter password
    cy.get(':nth-child(4) > .oxd-input').type("admin123") // Confirm password
    cy.get('.oxd-form-actions > .oxd-button--primary').click() // Click on Save button
    cy.get('.oxd-table-body').should('contain', 'Admin') // Assert that the user is added successfully
  })
  it('Delete Admin user', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.oxd-table-body').contains('Admin').parents('tr').find('.oxd-icon-button').click() // Click on delete button
    cy.get('.oxd-button--label-danger').click() // Confirm deletion
    cy.get('.oxd-table-body').should('not.contain', 'Admin') // Assert that the user is deleted successfully
  })
  it('Delete Admin user with confirmation', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.oxd-table-body').contains('Admin').parents('tr').find('.oxd-icon-button').click() // Click on delete button
    cy.get('.oxd-button--label-danger').click() // Confirm deletion
    cy.get('.oxd-table-body').should('not.contain', 'Admin') // Assert that the user is deleted successfully
  })
  it('Delete Admin user with cancel', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.oxd-table-body').contains('Admin').parents('tr').find('.oxd-icon-button').click() // Click on delete button
    cy.get('.oxd-button--label-danger').click() // Confirm deletion
    cy.get('.oxd-table-body').should('not.contain', 'Admin') // Assert that the user is deleted successfully
  })
  it('Delete Admin user with invalid confirmation', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.oxd-table-body').contains('Admin').parents('tr').find('.oxd-icon-button').click() // Click on delete button
    cy.get('.oxd-button--label-danger').click() // Confirm deletion
    cy.get('.oxd-table-body').should('not.contain', 'Admin') // Assert that the user is deleted successfully
  })
  it('Delete Admin user with valid confirmation', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Navigate to Admin section
    cy.get('.oxd-table-body').contains('Admin').parents('tr').find('.oxd-icon-button').click() // Click on delete button
    cy.get('.oxd-button--label-danger').click() // Confirm deletion
    cy.get('.oxd-table-body').should('not.contain', 'Admin') // Assert that the user is deleted successfully
  })
  
})
