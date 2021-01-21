context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.youtube.com');
    });

    it('Make a Search in the YouTube', () => {
        cy.get('input[name="search_query"]').type('What is cypress?');
        cy.get('#search-icon-legacy').click();
    });
});
