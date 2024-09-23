describe('Dropdown Demo', ()=>{

    it('Dropdown Demo', ()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html');

        cy.get('#zcf_address_country').select('Nepal').should('have.value','Nepal');

        cy.wait(5000)

        cy.get('#zcf_address_country').select(6).should('have.value','Anguilla');
        
        cy.wait(2000)

        cy.get('#zcf_users').select(1).should('have.value',"Yes, I currently sell online");

        cy.get('.content-wrap-details > :nth-child(2)').should('have.text','Witness Zoho Commerce in action').contains('Witness')

        cy.pause();

        cy.get('[name="Email"]').type('Demo Application');
        
    })
})