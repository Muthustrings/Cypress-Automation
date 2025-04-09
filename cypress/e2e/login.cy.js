describe('Login Test Cases', () => {
  it('Possitive Login Testcase', () => 
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
  })
    it('Empty Username',()=>
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Required')
    })
    it('Empty Password',()=>
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Required')

    })
    it('empty Username and Password',()=>
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Required')
    })
    it('Invalid Username',()=>
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Invalid Password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Invalid Username and Password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Only Uppercase on username',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ADMIN')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Only Uppercase on password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ADMIN123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Only Uppercase on username and password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ADMIN')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ADMIN123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Only Lowercase on username',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Only Lowercase on password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it("user name field acceopt only number",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456789')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it("user name field acceopt only special char",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('!@#$%^&*()')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it("user name field acceopt only space",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it("password field acceopt only number",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456789')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it("password field accept only alphabet",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcdefghij')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only special char",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('!@#$%^&*()')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space and number",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456789 ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space and alphabet",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcdefghij ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space and special char",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('!@#$%^&*() ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space and special char and number",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456789 !@#$%^&*() ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space and special char and alphabet",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcdefghij !@#$%^&*() ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("password field accept only space and special char and alphabet and number",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcdefghij 123456789 !@#$%^&*() ')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials') 
    })
    it("Username field exceeds maximum length", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('A'.repeat(256)); // 256 characters
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password field exceeds maximum length", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('A'.repeat(256)); // 256 characters
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Both fields contain only spaces", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('     ');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('     ');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains SQL injection", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("' OR '1'='1");
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains HTML tags", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('<script>alert("XSS")</script>');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password contains HTML tags", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('<script>alert("XSS")</script>');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password contains emoji", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123😊');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains emoji", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin😊');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains newline character", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin\n123');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password contains newline character", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123\n456');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains tab character", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin\t123');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password contains tab character", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123\t456');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains backslash", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin\\123');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password contains backslash", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123\\456');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Username contains single quote", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin'123");
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    } )
    it("Password contains single quote", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123'456");
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })  
    it("Username contains double quote", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin"123');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })
    it("Password contains double quote", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123"456');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    } )
    it("Username contains percent sign", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin%123');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
    })

  })