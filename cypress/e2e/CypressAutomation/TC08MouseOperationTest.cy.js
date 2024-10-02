describe('Mouse Operation', ()=>{

    it('Mouse Operation', ()=>{

       

        cy.visit('https://demo.opencart.com/')
            
        cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible');

        cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover').click();

        cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible');

    
    })

    it('Right Click', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

       //cy.get(':nth-child(2) > .dropdown-toggle').rightclick();
       //cy.get('.context-menu-one').trigger('contextmenu');

       cy.get('.context-menu-one').rightclick();



    })
    it('Double Click', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick');

        cy.frameLoaded('#iframeResult');

        cy.wait(2000)

        //cy.iframe().eq(0).contains('Double-click me').dblclick();

        //cy.get('[ondblclick="myFunction()"]').dblclick();
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick();
    

    })

    it.only('Drag and Drop', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

        cy.get('#box1').should('be.visible');

        cy.get('#box106').should('be.visible');
        cy.get('#box1').drag('#box106',{force:true});
        cy.get('#box2').drag('#box105', {force:true});
    })
})