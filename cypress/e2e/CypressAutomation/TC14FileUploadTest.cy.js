describe('Test File Upload', ()=>{


    it('Cypress File Upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('example.json')
        cy.get('#file-submit').click();
        
    })

    it('Cypress File Upload - RENAME',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile()

        //filePath:'example.json',fileName:'myfiledemo'
        cy.get('#file-submit').click();
        
    })
    
})