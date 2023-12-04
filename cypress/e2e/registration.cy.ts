describe('Registration user check', () => {
  it('should authorize the user and add new tweet', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="nameInput"]').type('Rick');
    cy.get('[data-cy="phoneInput"]').type('+375294158932');
    cy.get('[data-cy="emailInput"]').type('rick@mail.ru');
    cy.get('[data-cy="passwordInput"]').type('Rick123321');
    cy.get('[data-cy="sigUp"]').contains('Next').click();
    cy.wait(5000);
    cy.get('[data-cy="emailInput"]').type('rick@mail.ru');
    cy.get('[data-cy="passwordInput"]').type('Rick123321');
    cy.get('[data-cy="logInButton"]').contains('Log In').click();
    cy.get('[data-cy="headerTitle"]').should('have.text', 'Home');
  });
});
