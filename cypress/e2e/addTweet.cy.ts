describe('Add tweet check', () => {
  it('should authorize the user and add new tweet', () => {
    cy.visit('/');
    cy.get('[data-cy="logInLink"]').click();

    cy.fixture('testUser').then((testUserData: { email: string; password: string }) => {
      cy.get('[data-cy="emailInput"]').type(testUserData.email);
      cy.get('[data-cy="passwordInput"]').type(testUserData.password);
      cy.get('[data-cy="logInButton"]').contains('Log In').click();
      cy.fixture('testTweet').then((testTweetData: { text: string }) => {
        cy.get('[data-cy="tweetInput"]').type(testTweetData.text);
        cy.get('[data-cy="addTweetButton"]').contains('Tweet').click();
        cy.get('[data-cy="tweetText"]').should('have.text', testTweetData.text);
      });
    });
  });
});
