describe('Orange HRMS', ()=>{


    it('TC01 - Orange HRMS - Validate Home Page', function(){
        cy.visit({
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        })
        cy.get('.orangehrm-login-branding > img').should('be.visible');
    })

    it('TC02 - Orange HRMS - Login TC', function(){
        cy.visit({
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        })
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123',{log:false});
        cy.get('[type="submit"]').click();
    })
})