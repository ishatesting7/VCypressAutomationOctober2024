describe('Radio Button and Checkbox Demo', ()=>{

    it('Radiobutton and Checkbox', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        //Before Performing Any Action
        cy.get('[type="radio"]').should('not.be.checked')
        cy.get('#male').should('not.be.checked');
        cy.get('#female').should('not.be.checked');
        //After Performing Action
        cy.get('#male').check().should('be.checked');
        cy.get('#female').click();
        cy.get('[type="radio"]').should('have.length', '2')

    })


    it('Radiobutton and Checkbox', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('[type="checkbox"]').check().should('be.checked');
     
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');

        cy.contains('Monday').click();

        cy.get('#sunday').click();

    })
})