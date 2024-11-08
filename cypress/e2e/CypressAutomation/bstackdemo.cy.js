describe('Test', ()=>{

    it('Demo Test', ()=>{

        cy.log('Hello')
        cy.visit('https://bstackdemo.com')
        cy.get('#signin').click();
        cy.get('#username').click();
        cy.get('#react-select-2-option-0-0').click();
        cy.get('#password').click();
        cy.get('#react-select-3-option-0-0').click();
        })
})