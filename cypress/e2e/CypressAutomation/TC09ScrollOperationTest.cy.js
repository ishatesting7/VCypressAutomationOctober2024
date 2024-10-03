describe('Scroll Demo', ()=>{

    it('Scroll Demo', ()=>{

        cy.visit('https://scroll.in/');

        cy.get(':nth-child(5) > .row-stories > ul > :nth-child(1) > a > figure > img').scrollIntoView({ duration: 2000 })
    
        //cy.get('').scrollTo('')
    })

    it('ScrollTo Method Demo', ()=>{

        cy.visit('https://docs.cypress.io/api/commands/scrollintoview');

        cy.scrollTo('bottom');
    })
})