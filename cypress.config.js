const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //CONFIGURAÇÕES 
  "defaultCommandTimeout": 90000,
  "chromeWebSecurity": false,
  "screenshotOnRunFailure": true,
  "video": false,
  "viewportWidth": 1440,
  "viewportHeight": 900,
  "failOnStatusCode": false,


  e2e: {
    "baseUrl": "https://serverest.dev/",

    //VARIAVEIS DE AMBIENTE
    "env": {
      "email": "fulano@qa.com",
      "senha": "teste",
      "token": "",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
