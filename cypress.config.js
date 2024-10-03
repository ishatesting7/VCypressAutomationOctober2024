const { defineConfig } = require("cypress");

module.exports = defineConfig({

  watchForFileChanges:false,
  viewportHeight:736,
  viewportWidth:414,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env:{
      username:'Admin',
      password:'admin123' 
    }
  },
});
