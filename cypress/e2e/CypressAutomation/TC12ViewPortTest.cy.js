describe('View Port Command', ()=>{

    beforeEach(()=>{

        cy.viewport('iphone-xr');
    })

   

    it('View Port Command - GOIBOBO', ()=>{

        cy.visit('https://www.goibibo.com/')
        cy.wait(5000)
 
})

     it('View Port Command - EASEMYTRIP', ()=>{

        cy.visit('https://demo3x.opencartreports.com/admin/')
        cy.wait(5000)
})

  

})