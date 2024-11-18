describe('Registration Form', ()=>{

    it('Fill The Form With Different Value', ()=>{

        
        //cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

        cy.task('readCsvFile', 'cypress/fixtures/userDetails.csv').then((data) => {
            // Access and use data from CSV
            cy.log('CSV Data:', data);
            expect(data).to.have.length.greaterThan(0);
            data.forEach((row, index) => {
                cy.log(`Row ${index + 1}: ${JSON.stringify(row)}`);
              });
        });
    })
})


describe('Use CSV Data in Test Cases', () => {
    let csvData; // Variable to hold CSV data
  
    before(() => {
      // Load CSV data and store it in the variable
      cy.task('readCsvFile', 'cypress/fixtures/userDetails.csv').then((data) => {
        csvData = data; // Store data in the variable
        cy.log('CSV Data loaded successfully');
      });
    });
  
    it('should display CSV data in the logs', () => {
      // Log the data to ensure it's stored correctly
      csvData.forEach((row, index) => {
        cy.log(`Row ${index + 1}: ${JSON.stringify(row)}`);
      });
    });
  
    it('should use CSV data in a test case', () => {
      // Example usage: test a form fill or assertions based on CSV data
      csvData.forEach((row) => {
        if (row.firstname && row.lastname && row.email) {
          cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register'); // Replace with the actual page URL
          cy.get('input[name="firstname"]').type(row.firstname);
          cy.get('input[name="lastname"]').type(row.lastname);
          cy.get('input[name="email"]').type(row.email);
          cy.get('input[name="telephone"]').type(row.telephone);
          cy.get('input[name="password"]').type(row.password);
          //cy.get('button[type="submit"]').click();
  
          // Add assertions as needed
          //cy.get('.success-message').should('contain', 'Form submitted successfully');
        }
      });
    });
  });
