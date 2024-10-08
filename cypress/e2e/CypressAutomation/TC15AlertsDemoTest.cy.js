describe('Alerts Demo', ()=>{

    it('JavaScript Alerts', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get(':nth-child(1) > button').click();

        cy.on('window:alert', (temp)=>{

            expect(temp).to.contain('I am a JS Alert');
        })

        cy.get('#result').should('contain','You successfully clicked an alert')



    })


    it('JavaScript Alerts - Confirm', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get(':nth-child(2) > button').click();

        cy.on('window:confirm', (temp)=>{

            expect(temp).to.contain('I am a JS Confirm');
        })

        cy.get('#result').should('contain','Ok')



    })

    it('JavaScript Alerts - Cancel Button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get(':nth-child(2) > button').click();

        cy.on('window:confirm', (temp)=>{

            expect(temp).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=>false);

        cy.get('#result').should('contain','Cancel')



    })


    it.only('JavaScript Alerts - Cancel Button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((wind)=>{

            cy.stub(wind,'prompt').returns('I am in edit js file')
        })

        cy.get(':nth-child(3) > button').click();

        cy.get('#result').should('have.text','You entered: I am in edit js file')

    })



    


})