describe('Dropdown Demo', ()=>{

    it('Dropdown Demo with select tag', ()=>{

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

    it('Dropdown without select tag', function(){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('Argentina').type('{enter}');

        cy.get('#select2-billing_country-container').should('have.text','Argentina');

        cy.get('#select2-billing_state-container').click();

        cy.get('.select2-search__field').type('Chubut{enter}');

        cy.get('#select2-billing_state-container').should('have.text', 'Chubut');

    })
    it.only('Dynamic Dropdown', function(){


        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('cypress automation');

        cy.wait(2000);
        //cy.get('div.wM6W7d').should('have.length', '13');

        //cy.contains('cypress automation jobs').click();
        //cy.contains('Language').click();

        //cy.get('.classname').contains('address').click();

        cy.get('div.wM6W7d').each(($el, index, $list)=>{

            if($el.text() == 'cypress automation tool')
            {
                cy.wrap($el).click();
            }
            
        })

    })


})



//for loop ---> for(int i=0; i<10; i++)