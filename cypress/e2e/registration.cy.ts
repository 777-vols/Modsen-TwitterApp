import { faker } from '@faker-js/faker';

const testUserName = faker.internet.userName();
const testPassword = faker.internet.password({ length: 20 });
const testEmail = faker.internet.email();
const testPhone = faker.phone.number('+375##########');

describe('Registration user check', () => {
  it('should authorize the user and add new tweet', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="nameInput"]').type(testUserName);
    cy.get('[data-cy="phoneInput"]').type(testPhone);
    cy.get('[data-cy="emailInput"]').type(testEmail);
    cy.get('[data-cy="passwordInput"]').type(testPassword);
    cy.wait(3000);
    cy.get('[data-cy="signUp"]').contains('Next').click();
    cy.wait(3000);
    cy.get('[data-cy="emailInput"]').type(testEmail);
    cy.get('[data-cy="passwordInput"]').type(testPassword);
    cy.get('[data-cy="logInButton"]').contains('Log In').click();
    cy.get('[data-cy="headerTitle"]').should('have.text', 'Home');
  });
});
