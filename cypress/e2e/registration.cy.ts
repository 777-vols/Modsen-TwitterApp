import { faker } from '@faker-js/faker';

const testUserName = faker.internet.userName();
const testPassword = faker.internet.password({ length: 20 });
const testEmail = faker.internet.email();
const testPhone = faker.phone.number('+375##########');

describe('SighnUp form check', () => {
  it('Should check password input validation', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="passwordInput"]').type('user');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('user12345');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('User123');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('UsErasdczcx');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('213123123123');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('User123@mail.ru');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('User.312');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('User1234');
    cy.get('[data-cy="passwordInputError"]').should('not.exist');
    cy.get('[data-cy="passwordInput"]').clear();

    cy.get('[data-cy="passwordInput"]').type('UserUser1234');
    cy.get('[data-cy="passwordInputError"]').should('not.exist');
    cy.get('[data-cy="passwordInput"]').clear();
  });

  it('Should check phone input validation', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="emailInput"]').type('@adadasd');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="emailInput"]').clear();

    cy.get('[data-cy="emailInput"]').type('user@user@.mail.ru');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="emailInput"]').clear();

    cy.get('[data-cy="emailInput"]').type('user@');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="emailInput"]').clear();

    cy.get('[data-cy="emailInput"]').type('user@google.');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="emailInput"]').clear();

    cy.get('[data-cy="emailInput"]').type('u@google.c');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="emailInput"]').clear();

    cy.get('[data-cy="emailInput"]').type('user@mail.ru');
    cy.get('[data-cy="emailInputError"]').should('not.exist');
    cy.get('[data-cy="emailInput"]').clear();

    cy.get('[data-cy="emailInput"]').type('user@google.com');
    cy.get('[data-cy="emailInputError"]').should('not.exist');
    cy.get('[data-cy="emailInput"]').clear();
  });

  it('Should check phone input validation', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="phoneInput"]').type('+37529');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('375291048658');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('+375291375291375291375291');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('(123) 456-7890');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('123.456.7890');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('+1-123-456-78901234');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('+1(123)-456-7890');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('+375291048658');
    cy.get('[data-cy="phoneInputError"]').should('not.exist');
    cy.get('[data-cy="phoneInput"]').clear();

    cy.get('[data-cy="phoneInput"]').type('+123456789112');
    cy.get('[data-cy="phoneInputError"]').should('not.exist');
    cy.get('[data-cy="phoneInput"]').clear();
  });

  it('Should check fields validation', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="nameInput"]').type('user');

    cy.get('[data-cy="phoneInput"]').type('+37529');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="phoneInput"]').type('4896354');
    cy.get('[data-cy="phoneInputError"]').should('not.exist');

    cy.get('[data-cy="emailInput"]').type('user@mail');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="emailInput"]').type('.com');
    cy.get('[data-cy="emailInputError"]').should('not.exist');

    cy.get('[data-cy="passwordInput"]').type('User');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInput"]').type('123123');
    cy.get('[data-cy="passwordInputError"]').should('not.exist');
  });

  it('Should check registration failed and errors persisted', () => {
    cy.visit('/');
    cy.get('[data-cy="emailRegistration"]').click();

    cy.get('[data-cy="nameInput"]').type('user');

    cy.get('[data-cy="phoneInput"]').type('12343123');
    cy.get('[data-cy="phoneInputError"]').should('be.visible');

    cy.get('[data-cy="emailInput"]').type('user@mail');
    cy.get('[data-cy="emailInputError"]').should('be.visible');

    cy.get('[data-cy="passwordInput"]').type('user13321');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');

    cy.get('[data-cy="signUp"]').contains('Next').click();

    cy.get('[data-cy="phoneInputError"]').should('be.visible');
    cy.get('[data-cy="emailInputError"]').should('be.visible');
    cy.get('[data-cy="passwordInputError"]').should('be.visible');
  });

  it('Should register new user', () => {
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
