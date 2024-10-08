describe('Handle Tabs', ()=>{

    it('Handle Tab', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');
        //cy.get('.example > a').click();

        cy.get('.example > a').invoke('removeAttr','target').click();

        cy.wait(1000);

        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new');

        cy.go('back');

        cy.url().should('eq','https://the-internet.herokuapp.com/windows');

    })
})