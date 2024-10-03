let expectname = 'Monkey Luffy';
describe('Custom Commands', ()=>{


    it('Custom Commands', ()=>{

        cy.loginApplication(Cypress.env('username'),Cypress.env('password'));

        cy.get('.oxd-userdropdown-name').then((name)=>{

            let namedemo = name.text();
            cy.log(namedemo);
            expect(expectname).to.be.eq(namedemo);

        })

        cy.url().should('contain','dashboard')

        //cy.get('ul.oxd-main-menu')

        cy.verifyMenuItemDemo('Performance','add');

        cy.get('[class="oxd-main-menu-item"]').should('have.length','11');

        
        
    })
})

//Master
//SuperAdmin

//Dev ----- QA ---- Stage


//QA Team
//    ----- QA ---- Stage