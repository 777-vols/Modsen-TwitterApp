describe('Log out check', () => {
  it('should log out user', () => {
    cy.visit('/');
    cy.get('[data-cy="logInLink"]').click();

    cy.fixture('testUser').then((testUserData: { email: string; password: string }) => {
      cy.get('[data-cy="emailInput"]').type(testUserData.email);
      cy.get('[data-cy="passwordInput"]').type(testUserData.password);
      cy.get('[data-cy="logInButton"]').contains('Log In').click();
      cy.get('[data-cy="logOutButton"]').contains('Log out').first().click();
      cy.get('[data-cy="logInLink"]').should('exist');
    });
  });
});
