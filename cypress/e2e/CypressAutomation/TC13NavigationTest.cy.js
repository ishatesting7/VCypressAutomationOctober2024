describe('Navigation Commands', ()=>{

    it('Navigation Commands',()=>{

        cy.visit('https://tutorialsninja.com/demo');

        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();

        cy.go('back');

        cy.url().should('contain', 'tutorialsninja')

        cy.go('forward')
        cy.url().should('contain', 'product')


        cy.pause();
        
        cy.go(-1);
        cy.url().should('contain', 'tutorialsninja')


        cy.go(1);
        cy.url().should('contain', 'product')

        cy.reload();

    })
})