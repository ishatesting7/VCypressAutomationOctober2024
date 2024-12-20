const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');


module.exports = defineConfig({
  

  watchForFileChanges:false,
  //viewportHeight:736,
  //viewportWidth:414,
  failOnStatusCode: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //specPattern:"**/*.feature",
    baseUrl: 'https://gorest.co.in',
    projectId:'utfwwf',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor',cucumber());

      on('task', {
        readCsvFile(filePath) {
          const csvPath = path.resolve(__dirname, filePath);
          const csvFile = fs.readFileSync(csvPath, 'utf-8');
          const parsedData = Papa.parse(csvFile, { header: true });
          return parsedData.data; // returns parsed data as JSON
        },
      });
      on('task', {
        log(message) {
            console.log(message + '\n');
            return null;

        },
      });
      // implement node event listeners here
    },
  env:{
      username:'Admin',
      password:'admin123',
      ACCESS_TOKEN: "78d2d6924f0678446974df2ad1fda57dcec59932c4f575d1afe6ca9974a51402"
    }
  },
});
