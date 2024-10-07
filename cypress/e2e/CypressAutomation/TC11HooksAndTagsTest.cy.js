describe('Before and After Demo', ()=>{

    before(()=>{
        cy.log('BEFORE')
    })

    beforeEach(()=>{
        cy.log('BEFORE EACH')
    })

    it('Actual Test Cases - 1', ()=>{
        cy.log('Test Case Number 1');
    })
    it('Actual Test Cases - 2', ()=>{
        cy.log('Test Case Number 1');
    })
 
       

        after(()=>{
            cy.log('AFTER')

        })
       
        afterEach(()=>{
            cy.log('AFTER EACH')

        })

       
    
})