class LambdaHomePage{

    // Page Elements and Page Action
    enterUrl()
    {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    }

    validateMenuOptions()
    {
        cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=common/home"]').should('be.visible');
        cy.get('.nav-item.dropdown.dropdown-hoverable').should('have.length',3);
        cy.get('.nav-item.dropdown.dropdown-hoverable').eq(0).should('be.visible');
        cy.get('.nav-item.dropdown.dropdown-hoverable').eq(1).should('be.visible');
        cy.get('.nav-item.dropdown.dropdown-hoverable').eq(2).should('be.visible');

    }

    ValidateIcons()
    {
        cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=product/compare"]').should('be.visible')
        cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist"]').should('be.visible')
        cy.xpath("(//a[@role='button'])[4]").should('be.visible');
    }
}
const lambdahomepage = new LambdaHomePage();
export default lambdahomepage;