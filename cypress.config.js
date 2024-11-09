
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;

    },
blockHosts: ['https://pagead2.googlesyndication.com/*']
  },
});
