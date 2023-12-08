describe('toogle theme check', () => {
  it('should authorize the user and change the theme', () => {
    cy.visit('/');
    cy.get('[data-cy="logInLink"]').click();

    cy.fixture('testUser').then((testUserData: { email: string; password: string }) => {
      cy.get('[data-cy="emailInput"]').type(testUserData.email);
      cy.get('[data-cy="passwordInput"]').type(testUserData.password);
      cy.get('[data-cy="logInButton"]').contains('Log In').click();
      cy.get('[data-cy="toggleTheme"]').should('exist');
      cy.get('[data-cy="toggleTheme"]').click();
      cy.get('[data-cy="header"]').should('have.css', 'background-color').and('eq', 'rgb(0, 0, 0)');
      cy.get('[data-cy="headerTitle"]').should('have.css', 'color').and('eq', 'rgb(255, 255, 255)');
      cy.get('[data-cy="toggleTheme"]').click();
      cy.get('[data-cy="header"]')
        .should('have.css', 'background-color')
        .and('eq', 'rgb(255, 255, 255)');
      cy.get('[data-cy="headerTitle"]').should('have.css', 'color').and('eq', 'rgb(0, 0, 0)');
    });
  });
});
