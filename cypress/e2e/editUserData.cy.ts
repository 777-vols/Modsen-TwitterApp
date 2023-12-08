describe('Edit user data check', () => {
  it('should edit user data', () => {
    cy.visit('/');
    cy.get('[data-cy="logInLink"]').click();

    cy.fixture('testUser').then((testUserData: { email: string; password: string }) => {
      cy.get('[data-cy="emailInput"]').type(testUserData.email);
      cy.get('[data-cy="passwordInput"]').type(testUserData.password);
      cy.get('[data-cy="logInButton"]').contains('Log In').click();
    });
    cy.contains('Profile').click();
    cy.get('[data-cy="editProfile"]').click();
    cy.get('[data-cy="editName"]').invoke('val', 'Alex12354');
    cy.get('[data-cy="saveProfileChanges"]').click();
    cy.wait(3000);
    cy.get('[data-cy="headerUserName"]').contains('Alex12354');
  });
});
