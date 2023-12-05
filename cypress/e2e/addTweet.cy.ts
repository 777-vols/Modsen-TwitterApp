describe('Add tweet check', () => {
  it('should authorize the user and add new tweet', () => {
    cy.visit('/');
    cy.get('[data-cy="logInLink"]').click();

    cy.fixture('testUser').then((testUserData: { email: string; password: string }) => {
      cy.get('[data-cy="emailInput"]').type(testUserData.email);
      cy.get('[data-cy="passwordInput"]').type(testUserData.password);
      cy.get('[data-cy="logInButton"]').contains('Log In').click();
      cy.fixture('testTweet').then((testTweetData: { text: string }) => {
        cy.get('textarea').invoke('val', testTweetData.text);
        cy.get('[data-cy="tweetInput"]').should('have.value', testTweetData.text);
        cy.wait(2000);
        cy.get('[data-cy="addTweetButton"]').contains('Tweet').click();
        cy.get('[data-cy="tweetText"]').should('have.text', testTweetData.text);
      });
    });
  });

  it('should authorize the user and add new tweet', () => {
    cy.visit('/');
    cy.get('[data-cy="logInLink"]').click();

    cy.fixture('testUser').then((testUserData: { email: string; password: string }) => {
      cy.get('[data-cy="emailInput"]').type(testUserData.email);
      cy.get('[data-cy="passwordInput"]').type(testUserData.password);
      cy.get('[data-cy="logInButton"]').contains('Log In').click();
      cy.get('[data-cy="leftMenuAddTweet"]').contains('Tweet').click();
      cy.fixture('testTweet').then((testTweetData: { text: string }) => {
        cy.get('textarea').last().invoke('val', testTweetData.text);
        cy.get('[data-cy="tweetInput"]').last().should('have.value', testTweetData.text);
        cy.get('[data-cy="addTweetButton"]').contains('Tweet').last().click({ force: true });
        cy.get('[data-cy="tweetText"]').should('have.text', testTweetData.text);
      });
    });
  });
});
