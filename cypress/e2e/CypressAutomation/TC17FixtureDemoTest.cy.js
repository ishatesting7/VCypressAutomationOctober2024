describe('Read Data From Fixture', ()=>{

    let userData;
    it('Read Data From Fixture', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm').then((dataDemo)=>{

            cy.get('[name="username"]').type(dataDemo.username);
            cy.get('[name="password"]').type(dataDemo.password);
            cy.get('[type="submit"]').click();

        })

    })

    it.only('Read the data and store in global', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm').then((a)=>{

            userData = a;
            cy.get('[name="username"]').type(userData.username);
            cy.get('[name="password"]').type(userData.password);
            cy.get('[type="submit"]').click();
        })
    })
})