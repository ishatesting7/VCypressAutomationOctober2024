describe('Assertion Demo', function(){

    let dataval;
    it('Assertion Demo - Implicit Assertion', ()=>{
        
        // cy.fixture('pageObject', (data)=>{
        //     dataval = data;
        //     console.log(dataval.reg);
        //     console.log(dataval.regular);
        //     cy.log(dataval.reg)
        //     cy.log(dataval.regular)

        // })

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('.orangehrm-login-branding > img').should('be.visible');

        cy.url().should('contain','orange');

        cy.url().should('equal','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.title().should('eql', 'OrangeHRM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

        cy.get('.oxd-button').click();

        cy.get('.oxd-brand-banner > img').should('be.visible').should('exist');

        cy.get('.orangehrm-login-branding > img').should('not.exist');    

        cy.get('.oxd-brand-banner > img').should('exist');

        cy.get('.oxd-brand-banner > img').should('have.attr','src')

        cy.get('.oxd-brand-banner > img').should('have.attr','alt')

        cy.get('.oxd-brand-banner > img').should('have.length',1);

        cy.get('[class="oxd-main-menu-item-wrapper"]:nth-child(8)').find('[href="/web/index.php/dashboard/index"]').find('[height="22"]').should('be.visible');
        // cy.contains('[div+`${reg}`])
        

    })

    it.only('Reading Data From Fixture', ()=>{

        let userdata;

        //cy.visit('');

        cy.fixture('pageObject').then((newdata)=>{

            cy.log(newdata.reg);
            cy.log(newdata.regular);
        })
    })

    it('Explicit Assertion', ()=>{

        // Verify that the checkbox is not present
        // Validate that the radio button is disable
        

    })





})