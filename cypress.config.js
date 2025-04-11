const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSwitches: ['enable-logging'], // Prevents unnecessary logging
  },
  env: {
    shell: 'cmd.exe', // Force Cypress to use Command Prompt
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory for reports
    overwrite: false,
    html: true,
    json: true,
  },
});