describe('Payment Module',()=>{ //TEST SCENARIOc

it('Xpath Demo',  ()=>{ //TEST CASES


    cy.visit("https://tutorialsninja.com/demo/");

    cy.wait(1000)

    cy.get('.list-inline > .dropdown > .dropdown-toggle').click()


    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    //partial..
})



})